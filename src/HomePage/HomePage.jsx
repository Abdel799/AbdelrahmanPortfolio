import { useEffect, useRef, useState } from "react"
import { TypeAnimation } from "react-type-animation"
import styles from "./HomePage.module.css"
import { Link } from "react-router-dom"

function HomePage() {

  const [startTyping, setStartTyping] = useState(false)
  const introRef = useRef(null)

  const monologueRef = useRef(null)
  const [showMonologue, setShowMonologue] = useState(false)

  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
  const handleScroll = () => {
    setHasScrolled(true)
    window.removeEventListener("scroll", handleScroll)
  }

  window.addEventListener("scroll", handleScroll, {
    passive: true
  })

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, [])

  useEffect(() => {
  if (!hasScrolled) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowMonologue(true)
        observer.disconnect()
      }
    },
    {
      threshold: 0.1
    }
  )

  if (monologueRef.current) {
    observer.observe(monologueRef.current)
  }

  return () => observer.disconnect()
}, [hasScrolled])

  useEffect(() => {
  if (!hasScrolled) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStartTyping(true)
        observer.disconnect()
      }
    },
    {
      threshold: 0.5
    }
  )

  if (introRef.current) {
    observer.observe(introRef.current)
  }

  return () => observer.disconnect()
}, [hasScrolled])

  return (
    <>
      
      <div className={styles.wrapper}>

        <div className={styles.homeImage}>

          <img
            src="/the-pic.webp"
            alt="Toronto skyline"
            className={styles.image}
            fetchPriority="high"
          />

          <h1 className={styles.welcome}>
            WELCOME
          </h1>

        </div>

      </div>
          
      <div className={styles.intro}>
        <h1 ref={introRef}>
          Hey, I'm{" "}
          <span className={styles.name}>
            {startTyping && (
              <TypeAnimation
                sequence={[
                  "abl",
                  1000,
                  "Abdelrahman"
                ]}
                speed={50}
                repeat={0}
              />
            )}
          </span>
        </h1>

        <img src="/me.jpeg" alt="Abdelrahman" className={styles.me} />
      </div>

      <div ref={monologueRef} className={`${styles.monologue} ${showMonologue ? styles.fadeIn : ""}`}>

        <div className={styles.introGrid}>
          {/* Left column (empty space / line) */}
          <div className={styles.introLeft}>
            <div className={styles.introLine} />
          </div>

          {/* Right column (content) */}
          <div className={styles.introContent}>
            <h3 className={styles.introTitle}>Intro</h3>
            <p>
              Hello! My name is Abdelrahman, I'm a fourth year Computer Science Co-op
              student at Toronto Metropolitan University. This portfolio consists
              of my projects and experiences throughout the years. Click below to get
              started!
            </p>
          </div>
        </div>

        <div className={styles.projectBtnContainer}>
          <Link className={styles.projectBtn} to="/projects">Projects</Link>
        </div>

      </div>
    </>
  )
}

export default HomePage 