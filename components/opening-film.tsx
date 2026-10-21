'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react'
import styles from './opening-film.module.css'

const filmSource = '/media/autosystems-office-opening.mp4'
const filmPoster = '/media/autosystems-office-poster.jpg'

export default function OpeningFilm() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [motionAllowed, setMotionAllowed] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => {
      setMotionAllowed(!preference.matches)
      if (preference.matches) videoRef.current?.pause()
    }
    updatePreference()
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section || videoFailed) return
    let visible = true
    const syncPlayback = () => {
      if (motionAllowed && !userPaused && visible && document.visibilityState === 'visible') {
        void video.play().catch(() => setPlaying(false))
      } else {
        video.pause()
      }
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      syncPlayback()
    }, { threshold: 0.08 })
    observer.observe(section)
    video.addEventListener('canplay', syncPlayback)
    document.addEventListener('visibilitychange', syncPlayback)
    syncPlayback()
    return () => {
      observer.disconnect()
      video.removeEventListener('canplay', syncPlayback)
      document.removeEventListener('visibilitychange', syncPlayback)
      video.pause()
    }
  }, [motionAllowed, userPaused, videoFailed])

  function togglePlayback() {
    if (playing) {
      setUserPaused(true)
      videoRef.current?.pause()
    } else {
      setUserPaused(false)
      setMotionAllowed(true)
      void videoRef.current?.play().catch(() => setPlaying(false))
    }
  }

  return (
    <section ref={sectionRef} className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media} aria-hidden="true">
        <video
          ref={videoRef}
          className={styles.video}
          src={motionAllowed && !videoFailed ? filmSource : undefined}
          poster={filmPoster}
          muted
          loop
          playsInline
          preload={motionAllowed ? 'auto' : 'none'}
          disablePictureInPicture
          tabIndex={-1}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => { setVideoFailed(true); setPlaying(false) }}
        />
      </div>
      <div className={styles.shade} aria-hidden="true" />
      <div className={`site-container ${styles.content}`}>
        <p className={styles.kicker}><span /> ENGINEERING WHAT’S NEXT</p>
        <h1 id="hero-title" className={styles.title}>可能性を、<br />その先へ<span>。</span></h1>
        <p className={styles.subtitle}>テクノロジーで、動き出す未来。</p>
        <p className={styles.description}>アイデアを、仕組みに。複雑な業務を、シンプルに。<br />ソフトウェアとIoTで、あなたの次の一歩をつくります。</p>
        <div className={styles.actions}>
          <Link href="/contact" className="pill-button lime-button">お問い合わせ <span><ArrowUpRight size={20} aria-hidden="true" /></span></Link>
          <Link href="/services" className={styles.serviceLink}>事業・サービス <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </div>
      <div className={`site-container ${styles.bottom}`}>
        <a href="#philosophy" className={styles.explore}><span><ArrowDown size={15} aria-hidden="true" /></span> SCROLL TO EXPLORE</a>
        <span className={styles.filmCaption}>HUMAN IDEAS. CONNECTED POSSIBILITIES.</span>
        {!videoFailed ? <button type="button" className={styles.playback} onClick={togglePlayback} aria-label={playing ? 'オープニング動画を一時停止' : 'オープニング動画を再生'} aria-pressed={playing}>{playing ? <Pause size={13} fill="currentColor" aria-hidden="true" /> : <Play size={13} fill="currentColor" aria-hidden="true" />}<span>{playing ? 'PAUSE FILM' : 'PLAY FILM'}</span></button> : <span className={styles.filmCaption}>AUTOSYSTEMS, INC.</span>}
      </div>
    </section>
  )
}
