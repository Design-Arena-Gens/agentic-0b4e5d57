'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const words = [
    'thoughts', 'musings', 'ideas', 'reflections',
    'ponderings', 'observations', 'meditations', 'contemplations'
  ]

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        {/* Floating particles */}
        <div className={styles.particles}>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={styles.particle}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient orb that follows mouse */}
        <div
          className={styles.orb}
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        />

        {/* Animated background text */}
        <div className={styles.backgroundText}>
          {words.map((word, i) => (
            <span
              key={i}
              className={styles.floatingWord}
              style={{
                left: `${(i * 13) % 100}%`,
                top: `${(i * 17) % 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Main content */}
        <div className={styles.content} style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              <span className={styles.titleWord}>R</span>
              <span className={styles.titleWord}>a</span>
              <span className={styles.titleWord}>m</span>
              <span className={styles.titleWord}>b</span>
              <span className={styles.titleWord}>l</span>
              <span className={styles.titleWord}>i</span>
              <span className={styles.titleWord}>n</span>
              <span className={styles.titleWord}>g</span>
              <span className={styles.titleWord}>s</span>
            </h1>
            <div className={styles.underline} />
          </div>

          <p className={styles.subtitle}>
            <span className={styles.subtitleLine}>Where thoughts wander</span>
            <span className={styles.subtitleLine}>and ideas scatter</span>
            <span className={styles.subtitleLine}>like autumn leaves</span>
          </p>

          <div className={styles.ctaWrapper}>
            <button className={styles.cta}>
              <span>Explore the chaos</span>
              <div className={styles.ctaGlow} />
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollDot} />
          <div className={styles.scrollLine} />
        </div>
      </div>

      {/* Additional content to enable scrolling */}
      <section className={styles.contentSection}>
        <h2>Latest Ramblings</h2>
        <p>Your thoughts would appear here...</p>
      </section>
    </main>
  )
}
