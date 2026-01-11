import styles from "./Projects.module.css"
import { useState } from "react";

function LofiNest () {

    const [open, setOpen] = useState(false);

    return (
        <>
                <section className={styles.projectFirst}>
                    {/* Header / Click Area */}
                    <button
                        className={styles.projectHeader}
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                    >
            
                        <h2>Lofi Nest</h2>
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
                        <a 
                            href="https://lofinest.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer">


                            <img
                                src="/LofiNest.png"
                                alt="Lofi Nest preview"
                                className={styles.proImage}
                            />

                        </a>
                        
                        <p>
                            <span className={styles.bold}>Description:</span> Lofi Nest is an all-in-one study platform that houses
                            lofi music, study notes, a calendar, and an AI chat bot. 
                        </p>

                        <p>
                            <span className={styles.bold}>Frameworks / Tools:</span>  React JS, Groq API, Youtube IFrame.
                        </p>

                        <p>
                            <span className={styles.bold}>Inspiration:</span>  I was inspired to start this project because I enjoy 
                            listening to music while studying - particularly lofi music because
                            of it's calm aesthetic. I wanted a platform where you can be productive
                            and have all the tools you need in one site. 
                        </p>

                        <p>
                            <span className={styles.bold}>Challenges:</span>  One of the challenges I faced while making this project was 
                            finding time to balance it outside my internship. I mainly worked on this
                            project during the weekends because I had work during the week. It took me 
                            roughly two months to get the project completed. 
                        </p>
                       
                        <p>
                            <span className={styles.bold}>Lessons Learned:</span>  This project really solidified my understanding of API usage,
                            and React components. This was my first time using React in a project, and it 
                            really helped me advance my Front-End skills. 
                        </p>
                    </div>
                </section>
        </>
    )

}

export default LofiNest