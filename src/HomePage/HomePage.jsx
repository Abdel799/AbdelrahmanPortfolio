import { useEffect, useRef, useState } from "react"
import { TypeAnimation } from "react-type-animation"
import styles from "./HomePage.module.css"
import { Link } from "react-router-dom"

function HomePage() {

  const [startTyping, setStartTyping] = useState(false)
  const introRef = useRef(null)

  const monologueRef = useRef(null)
  const [showMonologue, setShowMonologue] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMonologue(true)
          observer.disconnect() // run ONCE
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    if (monologueRef.current) {
      observer.observe(monologueRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStartTyping(true)
        observer.disconnect()
      }
    },
    {
      threshold: 0.25,
      rootMargin: "0px 0px -80px 0px"
    }
  )

  if (introRef.current) {
    observer.observe(introRef.current)
  }

  return () => observer.disconnect()
}, [])

  return (
    <>
      <div className={styles.wrapper}>
        <img src="/home.png" alt="home" className={styles.image} />
      </div>

      <div ref={introRef} className={styles.intro}>
        <h1>
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