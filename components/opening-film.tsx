'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react'
import styles from './opening-film.module.css'
import { localizedPath, type Locale } from '@/lib/i18n'

const filmSource = '/media/autosystems-office-opening.mp4'
const filmPoster = '/media/autosystems-office-poster.jpg'

export default function OpeningFilm({ locale = 'ja' }: { locale?: Locale }) {
  const english = locale === 'en'
  const chinese = locale === 'zh'
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
        <h1 id="hero-title" className={styles.title}>{chinese ? <>拓展可能，<br />迈向未来<span>。</span></> : english ? <>Possibility,<br />beyond<span>.</span></> : <>可能性を、<br />その先へ<span>。</span></>}</h1>
        <p className={styles.subtitle}>{chinese ? '以科技，推动未来。' : english ? 'Technology that moves the future forward.' : 'テクノロジーで、動き出す未来。'}</p>
        <p className={styles.description}>{chinese ? <>让创意成为系统，让复杂业务变得简单。<br />以软件与物联网，助您迈出下一步。</> : english ? <>From ideas to systems. From complexity to clarity.<br />Software and IoT to power your next step.</> : <>アイデアを、仕組みに。複雑な業務を、シンプルに。<br />ソフトウェアとIoTで、あなたの次の一歩をつくります。</>}</p>
        <div className={styles.actions}>
          <Link href={localizedPath('/contact', locale)} className="pill-button lime-button">{chinese ? '联系我们' : english ? 'Contact us' : 'お問い合わせ'} <span><ArrowUpRight size={20} aria-hidden="true" /></span></Link>
          <Link href={localizedPath('/services', locale)} className={styles.serviceLink}>{chinese ? '业务与服务' : english ? 'Our services' : '事業・サービス'} <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </div>
      <div className={`site-container ${styles.bottom}`}>
        <a href="#philosophy" className={styles.explore}><span><ArrowDown size={15} aria-hidden="true" /></span> {chinese ? '向下探索' : 'SCROLL TO EXPLORE'}</a>
        <span className={styles.filmCaption}>HUMAN IDEAS. CONNECTED POSSIBILITIES.</span>
        {!videoFailed ? <button type="button" className={styles.playback} onClick={togglePlayback} aria-label={chinese ? (playing ? '暂停开场视频' : '播放开场视频') : english ? (playing ? 'Pause opening film' : 'Play opening film') : (playing ? 'オープニング動画を一時停止' : 'オープニング動画を再生')} aria-pressed={playing}>{playing ? <Pause size={13} fill="currentColor" aria-hidden="true" /> : <Play size={13} fill="currentColor" aria-hidden="true" />}<span>{chinese ? (playing ? '暂停视频' : '播放视频') : (playing ? 'PAUSE FILM' : 'PLAY FILM')}</span></button> : <span className={styles.filmCaption}>AUTOSYSTEMS, INC.</span>}
      </div>
    </section>
  )
}
