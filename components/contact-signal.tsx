'use client'

import { useRef, type PointerEvent } from 'react'
import { ArrowUpRight, Layers3, Sparkles } from 'lucide-react'
import styles from './contact-signal.module.css'

export default function ContactSignal() {
  const surfaceRef = useRef<HTMLDivElement>(null)

  function move(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    surfaceRef.current?.style.setProperty('--tilt-x', `${(0.5 - y) * 7}deg`)
    surfaceRef.current?.style.setProperty('--tilt-y', `${(x - 0.5) * 9}deg`)
    surfaceRef.current?.style.setProperty('--light-x', `${x * 100}%`)
    surfaceRef.current?.style.setProperty('--light-y', `${y * 100}%`)
  }

  function reset() {
    surfaceRef.current?.style.setProperty('--tilt-x', '0deg')
    surfaceRef.current?.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <div className={styles.scene} onPointerMove={move} onPointerLeave={reset} aria-hidden="true">
      <div ref={surfaceRef} className={styles.surface}>
        <span className={styles.caption}>IDEAS BECOME POSSIBILITIES</span>
        <svg className={styles.connections} viewBox="0 0 400 180" fill="none"><path d="M82 85H155C170 85 160 125 180 125H291" /><path className={styles.signal} d="M82 85H155C170 85 160 125 180 125H291" /><path d="M199 62V85C199 100 228 91 228 112V125" /></svg>
        <div className={styles.idea}><Sparkles size={16} strokeWidth={1.5} /><span>ひとつのアイデア</span></div>
        <div className={styles.layer}><Layers3 size={14} strokeWidth={1.5} /><span>つながる仕組み</span></div>
        <span className={styles.destination}><ArrowUpRight size={24} strokeWidth={1.3} /></span>
        <span className={styles.bottomLabel}>IMAGINE. BUILD. EVOLVE.</span>
      </div>
    </div>
  )
}
