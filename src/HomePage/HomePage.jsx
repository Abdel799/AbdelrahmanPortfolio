import { useEffect, useRef, useState } from "react"
import { TypeAnimation } from "react-type-animation"
import styles from "./HomePage.module.css"
import { useLocation } from "react-router-dom"

function HomePage () {

    const introRef = useRef(null)
    const [startTyping, setStartTyping] = useState(false)

    const monologueRef = useRef(null)
    const [showMonologue, setShowMonologue] = useState(false)

    const location = useLocation()

    useEffect(() => {
      setShowMonologue(false)
    }, [location.pathname])

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setShowMonologue(true)
              observer.disconnect() // run ONCE
            }
          },
          { threshold: 0.3 }
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
          observer.disconnect() // 🔑 ensures it runs ONCE
        }
      },
      { threshold: 0.6 }
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
            {startTyping ? (
              <TypeAnimation
                sequence={[
                  "abl",
                  1500,
                  "Abdelrahman"
                ]}
                speed={50}
                repeat={0}
              />
            ) : (
              "abl"
            )}
          </span>
        </h1>

        <img src="/me.jpeg" className={styles.me} />
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
                    I'm a third year Computer Science student at Toronto Metropolitan
                    University. I love going to TMU because it's in the heart of 
                    Toronto! As a computer science student I specialize in Software 
                    Development & Quality Assurnace, but always open to new experiences!
                    
                </p>
            </div>
        </div>

        </div>
    </>
    )
}

export default HomePage 