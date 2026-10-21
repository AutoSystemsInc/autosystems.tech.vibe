"use client"

import { useEffect, useRef } from "react"
import styles from "./system-sculpture.module.css"

type Vec3 = { x: number; y: number; z: number }
type Vertex = { point: Vec3; normal: Vec3 }
type ProjectedVertex = { x: number; y: number; z: number; normal: Vec3 }
type Face = { indices: number[]; segment: number }

const SEGMENTS = 144
const SIDES = 20
const TAU = Math.PI * 2

function normalize(v: Vec3): Vec3 {
  const length = Math.hypot(v.x, v.y, v.z) || 1
  return { x: v.x / length, y: v.y / length, z: v.z / length }
}

function cross(a: Vec3, b: Vec3): Vec3 {
  return { x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x }
}

function knot(t: number): Vec3 {
  const radius = 1.92 + 0.7 * Math.cos(3 * t)
  return { x: radius * Math.cos(2 * t), y: radius * Math.sin(2 * t), z: 0.94 * Math.sin(3 * t) }
}

function createGeometry() {
  const vertices: Vertex[] = []
  const faces: Face[] = []

  for (let i = 0; i < SEGMENTS; i++) {
    const t = (i / SEGMENTS) * TAU
    const center = knot(t)
    const next = knot(t + 0.001)
    const previous = knot(t - 0.001)
    const tangent = normalize({ x: next.x - previous.x, y: next.y - previous.y, z: next.z - previous.z })
    const outward = normalize({ x: Math.cos(2 * t), y: Math.sin(2 * t), z: 0 })
    const binormal = normalize(cross(tangent, outward))
    const normal = normalize(cross(binormal, tangent))

    for (let j = 0; j < SIDES; j++) {
      const angle = (j / SIDES) * TAU
      const direction = {
        x: normal.x * Math.cos(angle) + binormal.x * Math.sin(angle),
        y: normal.y * Math.cos(angle) + binormal.y * Math.sin(angle),
        z: normal.z * Math.cos(angle) + binormal.z * Math.sin(angle),
      }
      const tubeRadius = 0.39
      vertices.push({
        point: { x: center.x + direction.x * tubeRadius, y: center.y + direction.y * tubeRadius, z: center.z + direction.z * tubeRadius },
        normal: direction,
      })
      faces.push({
        indices: [i * SIDES + j, ((i + 1) % SEGMENTS) * SIDES + j, ((i + 1) % SEGMENTS) * SIDES + ((j + 1) % SIDES), i * SIDES + ((j + 1) % SIDES)],
        segment: i,
      })
    }
  }

  return { vertices, faces }
}

const geometry = createGeometry()

function rotate(v: Vec3, yaw: number, pitch: number): Vec3 {
  const x = v.x * Math.cos(yaw) + v.z * Math.sin(yaw)
  const z = -v.x * Math.sin(yaw) + v.z * Math.cos(yaw)
  const y = v.y * Math.cos(pitch) - z * Math.sin(pitch)
  const rotatedZ = v.y * Math.sin(pitch) + z * Math.cos(pitch)
  const roll = -0.23
  return { x: x * Math.cos(roll) - y * Math.sin(roll), y: x * Math.sin(roll) + y * Math.cos(roll), z: rotatedZ }
}

function project(width: number, time: number): ProjectedVertex[] {
  const yaw = -0.28 + Math.sin(time * 0.16) * 0.26
  const pitch = 0.82 + Math.sin(time * 0.11) * 0.075
  const scale = width * 0.131

  return geometry.vertices.map(({ point, normal }) => {
    const rotated = rotate(point, yaw, pitch)
    const perspective = 9 / (9 - rotated.z)
    return {
      x: width * 0.5 + rotated.x * scale * perspective,
      y: width * 0.5 - rotated.y * scale * perspective,
      z: rotated.z,
      normal: rotate(normal, yaw, pitch),
    }
  })
}

function visibleFaces(vertices: ProjectedVertex[]) {
  return geometry.faces
    .map((face) => {
      const corners = face.indices.map((index) => vertices[index])
      const normal = normalize(corners.reduce((sum, point) => ({ x: sum.x + point.normal.x, y: sum.y + point.normal.y, z: sum.z + point.normal.z }), { x: 0, y: 0, z: 0 }))
      const depth = corners.reduce((sum, point) => sum + point.z, 0) / 4
      return { ...face, corners, normal, depth }
    })
    .filter((face) => face.normal.z > -0.13)
    .sort((a, b) => a.depth - b.depth)
}

function faceColor(normal: Vec3, segment: number) {
  const diffuse = Math.max(0, normal.x * -0.45 + normal.y * 0.62 + normal.z * 0.64)
  const reflection = Math.pow(Math.max(0, normal.x * -0.22 + normal.y * 0.28 + normal.z * 0.93), 14)
  const brightness = 0.3 + diffuse * 0.49 + reflection * 0.23
  const lime = segment >= 27 && segment <= 57
  if (lime) {
    return `rgb(${Math.round(210 * brightness)}, ${Math.round(250 * brightness)}, ${Math.round(105 * brightness)})`
  }
  const silver = Math.round(40 + brightness * 188)
  return `rgb(${silver - 6}, ${silver}, ${silver - 2})`
}

// This is also the server-rendered artwork, so the hero never waits for JavaScript.
const initialFaces = visibleFaces(project(600, 0))

export default function SystemSculpture({ className = "" }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d", { alpha: true })
    if (!root || !canvas || !context) return

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    let reducedMotion = motionQuery.matches
    let visible = true
    let width = 0
    let animationFrame = 0
    let lastFrame = 0
    let elapsed = 0
    let disposed = false

    const draw = () => {
      if (!width || disposed) return
      context.clearRect(0, 0, width, width)
      const vertices = project(width, reducedMotion ? 0 : elapsed)
      const faces = visibleFaces(vertices)

      for (const face of faces) {
        context.beginPath()
        context.moveTo(face.corners[0].x, face.corners[0].y)
        for (let index = 1; index < face.corners.length; index++) {
          context.lineTo(face.corners[index].x, face.corners[index].y)
        }
        context.closePath()
        context.fillStyle = faceColor(face.normal, face.segment)
        context.fill()
        const lime = face.segment >= 27 && face.segment <= 57
        context.strokeStyle = lime ? "rgba(220, 255, 157, 0.53)" : "rgba(222, 233, 225, 0.39)"
        context.lineWidth = Math.max(0.32, width * 0.0008)
        context.stroke()
      }

      root.dataset.ready = "true"
    }

    const tick = (timestamp: number) => {
      animationFrame = 0
      if (disposed || reducedMotion || !visible || document.hidden) return
      if (timestamp - lastFrame > 1000 / 30) {
        elapsed += Math.min((timestamp - lastFrame) / 1000, 0.05)
        lastFrame = timestamp
        draw()
      }
      animationFrame = window.requestAnimationFrame(tick)
    }

    const updateAnimation = () => {
      window.cancelAnimationFrame(animationFrame)
      animationFrame = 0
      lastFrame = performance.now()
      if (!reducedMotion && visible && !document.hidden && !disposed) {
        animationFrame = window.requestAnimationFrame(tick)
      }
    }

    const resize = () => {
      width = root.getBoundingClientRect().width
      const ratio = Math.min(window.devicePixelRatio || 1, 1.75)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(width * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      draw()
    }

    const onMotionChange = () => {
      reducedMotion = motionQuery.matches
      draw()
      updateAnimation()
    }

    const resizeObserver = new ResizeObserver(resize)
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      updateAnimation()
    }, { rootMargin: "80px" })

    resizeObserver.observe(root)
    intersectionObserver.observe(root)
    motionQuery.addEventListener("change", onMotionChange)
    document.addEventListener("visibilitychange", updateAnimation)
    window.addEventListener("resize", resize)
    resize()
    updateAnimation()

    return () => {
      disposed = true
      window.cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      motionQuery.removeEventListener("change", onMotionChange)
      document.removeEventListener("visibilitychange", updateAnimation)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div ref={rootRef} className={`${styles.sculpture} ${className}`} aria-hidden="true">
      <svg className={styles.fallback} viewBox="0 0 600 600" focusable="false">
        {initialFaces.map((face, index) => (
          <path
            key={index}
            d={`M${face.corners.map((point) => `${point.x.toFixed(2)},${point.y.toFixed(2)}`).join("L")}Z`}
            fill={faceColor(face.normal, face.segment)}
            stroke={face.segment >= 27 && face.segment <= 57 ? "#dcff9d" : "#dee9e1"}
            strokeOpacity="0.38"
            strokeWidth="0.48"
            strokeLinejoin="round"
          />
        ))}
      </svg>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  )
}
