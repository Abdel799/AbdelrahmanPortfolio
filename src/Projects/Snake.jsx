import styles from "./Projects.module.css";
import { useState } from "react";

function Snake () {

    const [open, setOpen] = useState(false);

    return (
        <>

            <section className={styles.project}>
                {/* Header / Click Area */}
                <button
                    className={styles.projectHeader}
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                >

                    <h2>Snake Game</h2>
                    <span className={`${styles.arrow} ${open ? styles.open : ""}`}>
                    ▾
                    </span>
                </button>

                {/* Dropdown Content */}
                <div
                    className={`${styles.projectContent} ${
                    open ? styles.show : ""
                    }`}
                >
                    <img
                        src="Snake.png"
                        alt="Snake Game preview"
                        className={styles.proImage}
                    />

                        <p>
                            <span className={styles.bold}>Description:</span> This is a simple single player Snake
                            game where the users control the snake using the arrows on their keyboard to eat as many
                            apples as possible!
                        </p>

                        <p>
                            <span className={styles.bold}>Frameworks / Tools:</span>  Java, JavaFX.
                        </p>

                        <p>
                            <span className={styles.bold}>Inspiration:</span>  I love playing snake, it's one of the
                            games I could spend hours just playing. At the time of creating this project, I had just 
                            learned Java, and wanted to challenge myself to see if I could create a game. Snake was 
                            the first game that came to mind because it seemed challenging enough to expand my knowledge
                            in algorithms. And from there, I just started building.
                        </p>

                        <p>
                            <span className={styles.bold}>Challenges:</span>  To be honest, the biggest challenge I faced
                            with this project was starting. This was one of my first real projects, and I had a lot of 
                            trouble figuring out where to start. I overcame this by taking it a step at a time. Instead 
                            of thinking about the large-scale final result, I took big problems and dividied them into small
                            simple ones, and from there I was able to be productive.
                        </p>
                       
                        <p>
                            <span className={styles.bold}>Lessons Learned:</span>  The lesson I learned with this project is
                            to not be afraid to challenge myself. When I was starting this project I wasn't sure if I'll be 
                            able to finish it, but through patience I was able to build a working snake game!
                        </p>
                </div>
            </section>

        </>
    )
}

export default Snake