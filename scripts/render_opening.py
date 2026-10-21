"""Render AutoSystems' original cinematic opening film on an OpenGL GPU.

All geometry, light, materials and animation are authored here. No stock footage
or external media is used. Requires numpy, Pillow, moderngl, imageio-ffmpeg.
Run: python scripts/render_opening.py --preview
Run: python scripts/render_opening.py --width 1920 --height 1080 --fps 24 --seconds 10
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import subprocess
import time

import imageio_ffmpeg
import moderngl
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
MEDIA = ROOT / "public" / "media"

VERTEX = """#version 330
in vec2 in_pos;
out vec2 uv;
void main(){ uv=in_pos*.5+.5; gl_Position=vec4(in_pos,0.,1.); }
"""

SCENE = r"""#version 330
uniform vec2 resolution;
uniform float moment;
uniform float duration;
in vec2 uv;
out vec4 fragColor;
const float PI=3.14159265359;
const vec3 LIME=vec3(.57,.91,.17);
mat2 rot(float a){ float c=cos(a),s=sin(a);return mat2(c,-s,s,c); }
float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
float box(vec3 p,vec3 b){vec3 q=abs(p)-b;return length(max(q,0.))+min(max(q.x,max(q.y,q.z)),0.);}
float roundbox(vec3 p,vec3 b,float r){return box(p,b)-r;}
float torus(vec3 p,vec2 s){return length(vec2(length(p.xz)-s.x,p.y))-s.y;}
float gyroid(vec3 p){return dot(sin(p),cos(p.zxy));}
vec2 closer(vec2 a,vec2 b){return a.x<b.x?a:b;}

vec2 map(vec3 p){
    vec2 result=vec2(p.y,0.);
    vec3 q=p-vec3(0.,3.10,0.);
    q.xz=rot(.18*sin(moment*2.*PI/duration)+.14)*q.xz;
    q.xy=rot(-.18)*q.xy;
    // A solid double-curved silver minimal surface: a designed metal lattice,
    // not a transparent wireframe. The cavities reveal a luminous second core.
    float gy=(abs(gyroid(q*4.65))-.31)/7.1;
    float shell=max(length(q)-2.25,gy);
    result=closer(result,vec2(shell,1.));
    vec3 energy=q;
    energy.yz=rot(.62+.15*sin(moment*2.*PI/duration))*energy.yz;
    float inner=torus(energy,vec2(1.96,.034));
    vec3 crossing=q;
    crossing.xy=rot(1.24)*crossing.xy;
    inner=min(inner,torus(crossing,vec2(1.93,.025)));
    result=closer(result,vec2(inner,2.));
    result=closer(result,vec2(length(q)-1.71,3.));
    // Elliptical, machined peripheral race around the computational core.
    vec3 r=p-vec3(0.,3.10,0.);
    r.yz=rot(.38)*r.yz;
    r.xy=rot(.12)*r.xy;
    result=closer(result,vec2(torus(r,vec2(2.55,.075)),1.));
    result=closer(result,vec2(torus(r-vec3(0.,-.09,0.),vec2(2.55,.028)),2.));
    // Low central die with black ceramic faces and a silver chamfer.
    result=closer(result,vec2(roundbox(p-vec3(0.,.35,0.),vec3(2.58,.25,2.58),.08),3.));
    vec3 base=p-vec3(0.,.61,0.);
    float rim=max(box(base,vec3(2.59,.012,2.59)),-box(base,vec3(2.56,.05,2.56)));
    result=closer(result,vec2(rim,2.));
    // A field of quiet micro-architecture gives the flight dimensional depth.
    vec2 cell=floor((p.xz+.7)/1.4);
    vec2 local=mod(p.xz+.7,1.4)-.7;
    float h=.04+pow(hash(cell+13.),4.)*.61;
    float disabled=step(abs(cell.x),2.)*step(abs(cell.y),2.);
    vec3 bp=vec3(local.x,p.y-h*.5,local.y);
    float block=roundbox(bp,vec3(.23+hash(cell+8.)*.16,h*.5,.31),.025)+disabled*20.;
    result=closer(result,vec2(block,4.));
    return result;
}
vec3 normal(vec3 p){
    vec2 e=vec2(.0015,0.);
    return normalize(vec3(map(p+e.xyy).x-map(p-e.xyy).x,map(p+e.yxy).x-map(p-e.yxy).x,map(p+e.yyx).x-map(p-e.yyx).x));
}
float shadow(vec3 p,vec3 d){
    float res=1.,t=.025;
    for(int i=0;i<28;i++){
        float h=map(p+d*t).x;
        res=min(res,12.*h/t);
        t+=clamp(h,.035,.48);
        if(t>10.||res<.025) break;
    }
    return clamp(res,.025,1.);
}
float ao(vec3 p,vec3 n){
    float occ=0.,weight=1.;
    for(int i=1;i<=5;i++){
        float h=float(i)*.072;
        occ+=(h-map(p+n*h).x)*weight;
        weight*=.62;
    }
    return clamp(1.-2.0*occ,0.,1.);
}
vec3 environment(vec3 d){
    vec3 col=vec3(.009,.012,.016)*( .4+.6*max(d.y,0.));
    // Large photographic strip softboxes reflected in the silver sculpture.
    col+=vec3(4.2,4.35,4.4)*pow(max(dot(d,normalize(vec3(-3.+1.8*sin(moment*2.*PI/duration),5.,2.))),0.),42.);
    col+=vec3(1.25,1.4,1.6)*pow(max(dot(d,normalize(vec3(5.,2.,-3.))),0.),62.);
    col+=vec3(1.,1.36,.53)*pow(max(dot(d,normalize(vec3(-1.,1.,-5.))),0.),96.);
    col+=vec3(.3)*pow(max(dot(d,normalize(vec3(2.,6.,1.))),0.),10.);
    return col;
}
float line(float x,float w){return 1.-smoothstep(w,w+.008,abs(x));}
vec3 groundTraces(vec3 p){
    vec2 cell=floor((p.xz+.7)/1.4);
    vec2 g=mod(p.xz+.7,1.4)-.7;
    float l=max(line(g.x+.52,.006),line(g.y+.52,.006));
    float dots=(1.-smoothstep(.022,.045,length(g-vec2(-.52,-.52))));
    // Packets run at a measured pace through selected physical channels.
    float energy=pow(.5+.5*sin((p.x+p.z)*1.3-moment*4.*PI/duration),18.);
    float select=step(.48,hash(cell));
    vec3 col=vec3(.025,.032,.027)*l+LIME*(energy*l*select*2.6+dots*.19);
    float diagonal=line(p.x-p.z*.5-2.5,.012)*step(2.8,length(p.xz));
    col+=LIME*diagonal*(.08+.7*pow(.5+.5*sin(p.z*1.6+moment*6.*PI/duration),24.));
    return col;
}
vec4 render(vec2 coordinate){
    float phase=moment*2.*PI/duration;
    // A controlled, closed camera move: dolly orbit + subtle rising parallax.
    vec3 eye=vec3(6.5+1.1*cos(phase),4.85+.38*sin(phase),9.7+.78*sin(phase));
    vec3 aim=vec3(-3.8,2.45,0.);
    vec3 ww=normalize(aim-eye);
    vec3 uu=normalize(cross(ww,vec3(0.,1.,0.)));
    vec3 vv=cross(uu,ww);
    vec2 xy=(coordinate*2.-resolution)/resolution.y;
    vec3 rd=normalize(xy.x*uu+xy.y*vv+2.08*ww);
    float distance=0.;
    vec2 hit=vec2(0.);
    bool found=false;
    float glow=0.;
    for(int i=0;i<190;i++){
        vec3 pos=eye+rd*distance;
        hit=map(pos);
        if(hit.x<.0018*max(1.,distance*.055)){found=true;break;}
        distance+=max(hit.x*.8,.001);
        if(distance>70.) break;
    }
    vec3 color=vec3(.0009,.0014,.002);
    color+=vec3(.001,.002,.003)*max(rd.y,0.);
    if(found){
        vec3 p=eye+rd*distance;
        vec3 n=normal(p);
        vec3 view=-rd;
        vec3 key=normalize(vec3(-3.+1.8*sin(phase),6.,5.));
        vec3 fill=normalize(vec3(5.,3.,-3.));
        float ndl=max(dot(n,key),0.);
        float sh=shadow(p+n*.012,key);
        float occ=ao(p,n);
        vec3 refl=reflect(rd,n);
        float fres=pow(1.-max(dot(n,view),0.),5.);
        float spec=pow(max(dot(n,normalize(key+view)),0.),90.);
        float second=pow(max(dot(n,normalize(fill+view)),0.),110.);
        if(hit.y<.5){
            color=vec3(.010,.014,.018)*(.06+ndl*sh*.35)*occ;
            color+=environment(refl)*.02*(.15+.85*fres)*occ;
            color+=groundTraces(p);
        }else if(hit.y<1.5){
            vec3 silver=vec3(.48,.53,.55);
            color=silver*(.035+ndl*sh*.32)*occ;
            color+=environment(refl)*(.48+.5*fres)*occ;
            color+=vec3(1.9,2.05,2.1)*spec*sh;
            color+=vec3(.42,.55,.25)*second;
            // Fine brushed machining; almost subliminal at normal viewing size.
            color*=.97+.03*sin(p.y*740.+p.x*240.);
        }else if(hit.y<2.5){
            float sweep=.78+.22*sin(p.y*2.1+phase*2.);
            color=LIME*(2.7+2.8*sweep);
        }else if(hit.y<3.5){
            color=vec3(.032,.039,.044)*(.26+ndl*sh*.8)*occ;
            color+=environment(refl)*(.12+.5*fres)*occ;
            color+=spec*.4;
        }else{
            color=vec3(.020,.026,.030)*(.1+ndl*sh*.5)*occ;
            color+=environment(refl)*(.06+.24*fres)*occ;
            color+=vec3(.2)*spec*sh;
            vec2 cell=floor((p.xz+.7)/1.4);
            if(n.y>.8){
                vec2 g=mod(p.xz+.7,1.4)-.7;
                float panel=max(line(abs(g.x)-.23,.004),line(abs(g.y)-.23,.004));
                color+=LIME*panel*.09*step(.68,hash(cell+6.));
            }
        }
        float fog=1.-exp(-distance*.032);
        color=mix(color,vec3(.0017,.0028,.004),fog);
    }
    // Lens atmosphere, strongest immediately behind the sculptural core.
    vec3 lightPoint=vec3(0.,3.1,-1.8);
    vec3 toL=lightPoint-eye;
    float axis=pow(max(dot(rd,normalize(toL)),0.),220.);
    color+=vec3(.15,.21,.085)*axis*.11;
    return vec4(color,found?distance:80.);
}
void main(){
    fragColor=render(gl_FragCoord.xy);
}
"""

BLOOM = r"""#version 330
uniform sampler2D source;
uniform vec2 direction;
uniform bool threshold;
in vec2 uv;
out vec4 fragColor;
void main(){
    vec3 c=vec3(0.);
    float weights[7]=float[](0.19648255,0.17466632,0.12113821,0.06557497,0.02786760,0.00925011,0.00239970);
    for(int i=-6;i<=6;i++){
        vec3 s=texture(source,uv+float(i)*direction).rgb;
        if(threshold)s=max(s-vec3(.56),vec3(0.));
        c+=s*weights[abs(i)];
    }
    fragColor=vec4(c,1.);
}
"""

FINISH = r"""#version 330
uniform sampler2D source;
uniform sampler2D glow;
uniform vec2 resolution;
in vec2 uv;
out vec4 fragColor;
vec3 aces(vec3 v){return clamp((v*(2.51*v+.03))/(v*(2.43*v+.59)+.14),0.,1.);}
float hash(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
void main(){
    vec4 center=texture(source,uv);
    float radius=clamp(abs(center.a-12.3)*.65,0.,8.5);
    vec3 c=center.rgb*.2;
    for(int i=0;i<16;i++){
        float a=float(i)*2.39996323;
        vec2 shift=vec2(cos(a),sin(a))*sqrt(float(i+1)/16.)*radius/resolution;
        c+=texture(source,uv+shift).rgb*.05;
    }
    c+=texture(glow,uv).rgb*.4;
    vec2 q=uv-.5;
    c*=1.-.38*dot(q,q);
    c=aces(c*1.25);
    c=pow(c,vec3(1./2.2));
    c+=(hash(gl_FragCoord.xy)-.5)*.003;
    fragColor=vec4(c,1.);
}
"""


def main():
    parser=argparse.ArgumentParser()
    parser.add_argument('--width',type=int,default=1920)
    parser.add_argument('--height',type=int,default=1080)
    parser.add_argument('--fps',type=int,default=24)
    parser.add_argument('--seconds',type=float,default=10.)
    parser.add_argument('--preview',action='store_true')
    args=parser.parse_args()
    MEDIA.mkdir(parents=True,exist_ok=True)
    ctx=moderngl.create_standalone_context(require=330)
    print('Renderer:',ctx.info['GL_RENDERER'],flush=True)
    vertices=np.array([-1,-1,1,-1,-1,1,1,1],dtype='f4')
    vbo=ctx.buffer(vertices.tobytes())
    def program(shader):
        prog=ctx.program(vertex_shader=VERTEX,fragment_shader=shader)
        return prog,ctx.vertex_array(prog,[(vbo,'2f','in_pos')])
    scene,scene_vao=program(SCENE)
    blur,blur_vao=program(BLOOM)
    finish,finish_vao=program(FINISH)
    size=(args.width,args.height)
    full=ctx.texture(size,4,dtype='f2')
    full.filter=(moderngl.LINEAR,moderngl.LINEAR)
    scene_fb=ctx.framebuffer(color_attachments=[full])
    small=(args.width//3,args.height//3)
    blurs=[ctx.texture(small,4,dtype='f2') for _ in range(2)]
    for texture in blurs:texture.filter=(moderngl.LINEAR,moderngl.LINEAR)
    bloom_fb=[ctx.framebuffer(color_attachments=[texture]) for texture in blurs]
    output=ctx.simple_framebuffer(size,components=3)
    scene['resolution'].value=size
    scene['duration'].value=args.seconds
    blur['source'].value=0
    finish['source'].value=0
    finish['glow'].value=1
    if 'resolution' in finish:finish['resolution'].value=size
    def frame(t):
        scene_fb.use()
        ctx.viewport=(0,0,*size)
        scene['moment'].value=t
        scene_vao.render(moderngl.TRIANGLE_STRIP)
        for i in range(8):
            bloom_fb[i%2].use()
            ctx.viewport=(0,0,*small)
            (full if i==0 else blurs[(i-1)%2]).use(0)
            blur['direction'].value=(1.4/small[0],0.) if i%2==0 else (0.,1.4/small[1])
            blur['threshold'].value=i==0
            blur_vao.render(moderngl.TRIANGLE_STRIP)
        output.use()
        ctx.viewport=(0,0,*size)
        full.use(0)
        blurs[1].use(1)
        finish_vao.render(moderngl.TRIANGLE_STRIP)
        raw=output.read(components=3,alignment=1)
        return np.frombuffer(raw,dtype=np.uint8).reshape(args.height,args.width,3)[::-1].copy()
    if args.preview:
        start=time.monotonic()
        image=Image.fromarray(frame(2.5))
        path=MEDIA/'autosystems-opening-sample.jpg'
        image.save(path,quality=94)
        print('Preview:',path,'seconds:',round(time.monotonic()-start,2),flush=True)
        return
    ffmpeg=imageio_ffmpeg.get_ffmpeg_exe()
    path=MEDIA/'autosystems-opening.mp4'
    process=subprocess.Popen([ffmpeg,'-y','-f','rawvideo','-vcodec','rawvideo','-s',f'{args.width}x{args.height}',
        '-pix_fmt','rgb24','-r',str(args.fps),'-i','-','-an','-c:v','libx264','-preset','slow',
        '-crf','22','-pix_fmt','yuv420p','-movflags','+faststart',str(path)],stdin=subprocess.PIPE,stderr=subprocess.PIPE)
    count=round(args.fps*args.seconds)
    start=time.monotonic()
    for i in range(count):
        img=frame(i/args.fps)
        process.stdin.write(img.tobytes())
        if i==round(args.fps*2.5):Image.fromarray(img).save(MEDIA/'autosystems-opening-poster.jpg',quality=93)
        if i%24==0:print(f'{i}/{count} frames, {time.monotonic()-start:.1f}s',flush=True)
    process.stdin.close()
    log=process.stderr.read().decode(errors='replace')
    code=process.wait()
    print(log[-1800:],flush=True)
    if code:raise RuntimeError(f'FFmpeg exited {code}')
    print(json.dumps({'path':str(path),'bytes':path.stat().st_size,'width':args.width,'height':args.height,'fps':args.fps,'duration':args.seconds,'render_seconds':round(time.monotonic()-start,1)},indent=2),flush=True)

if __name__=='__main__':main()
