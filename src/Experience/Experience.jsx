import styles from "./Experience.module.css"

function Experience () {
    return (
        <>
            <h1 className={styles.title}>Experience</h1>


            <div className={styles.wrapper}>

           
            <div className={styles.experience}>
                
                <div className={styles.item}>

                    <div className={styles.card}>
                        <span className={styles.date}>May 2025 - Present</span>

                        <h2>QA Automation Engineer</h2>
                        <h3>Government of Ontario</h3>
                        <p>Serve as the sole QA Automation Engineer on the Program Approval & Registration 
                            Information System (PARIS) project, maintaining 40+ automated scripts and 200+ 
                            scenarios using UFT (VBScript) to support continuous delivery within an Agile SDLC
                        </p>

                    </div>

                </div>

                <div className={styles.item}>

                    <div className={styles.card}>
                        <span className={styles.date}>May 2024 - August 2024</span>

                        <h2>Application Developer Intern</h2>
                        <h3>Alta Real Estate</h3>
                        <p>Designed and developed the UX interface for Alta's internal company intranet, 
                            streamlining thousands organizational files and resources into an intuitive, 
                            centralized platform used by 200+ employees.</p>
                    </div>

                </div>

                <div className={styles.item}>

                    <div className={styles.card}>
                        <span className={styles.date}>January 2023 - May 2024</span>

                        <h2>IT Assistant</h2>
                        <h3>SH Dina Health & Wellness Inc.</h3>
                        <p>Supported and enhanced the company website for 40+ clients, delivering CSS/UI updates 
                            and resolving web-related issues to ensure accessible and reliable user experiences.
                        </p>
                    </div>

                </div>
        
            </div>

            </div>
        </>
    )
}

export default Experience