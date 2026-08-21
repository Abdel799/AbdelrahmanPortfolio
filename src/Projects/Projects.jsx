import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import styles from "./Projects.module.css"
import Card from "./card.jsx"

function Projects() {

  const projects = useRef(null)
  const [showProjects, setShowProjects] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setShowProjects(false)
  }, [location.pathname])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowProjects(true)
          observer.disconnect() // run ONCE
        }
      },
      { threshold: 0.05 }
    )

    if (projects.current) {
      observer.observe(projects.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <h1 className={styles.title}>Projects</h1>

      <div className={`${styles.projectsGrid} ${showProjects ? styles.fadeIn : ""}`} ref={projects}>
        <Card
          title="Chat Flow"
          image="/chat2.png"
          tech="ReactJS, NodeJS, ExpressJS, MongoDB, Socket.IO"
          description="A full-stack messaging app with real-time chat, authentication, persistent rooms, and online user tracking."
          demo="https://chat-flow-opal.vercel.app/"
          github="https://github.com/Abdel799/ChatFlow"
        />

        <Card
          title="Lofi Nest"
          image="/LofiNest.png"
          tech="ReactJS, JavaScript, Groq API, YouTube API"
          description="A study platform with music-streaming, AI assistance, note-taking, calendar, and pomodoro timer."
          demo="https://lofinest.netlify.app/"
          github="https://github.com/Abdel799/LofiNest.github.io"
        />

        <Card
          title="Uber Comand-Line Simulator"
          image="/uber-Logo2.jpg"
          tech="Java"
          description="A command-line uber simulation built in Java. The application models users, drivers, ride requests, etc. in a city grid."
          github="https://github.com/Abdel799/Java-Uber-Simulator"
        />

        <Card
          title={<>Cost of Living <br />Dashboard</>}
          image="/canada.jpg"
          tech="SQL, PySpark, Power BI & Fabric"
          description="A dashboard that houses expenses ranging from household utilities, groceries, and rent throughout Canada."
          demo="https://devpost.com/software/cost-of-living-dashboard"
          github="https://github.com/Abdel799/Cost-of-Living-Insights-Hub_OPS-Hackathon/tree/main"
        />

        <Card
          title="Snake Game"
          image="/Snake_OG-logo.jpg"
          tech="Java, JavaFX"
          description="A java GUI simulation of the popular snake game built using JavaFX."
          github="https://github.com/Abdel799/snakeGame.github.io"
        />

        <Card
          title="Minesweeper"
          image="/mine2.png"
          tech="Python"
          description="A python command-line simulation of the online minesweeper game."
          github="https://github.com/Abdel799/mineSweeper.github.io"
        />
      </div>

    </>
  )
}

export default Projects