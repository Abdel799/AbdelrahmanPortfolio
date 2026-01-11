import styles from "./Projects.module.css";
import { useState } from "react";

function Dashboard () {

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

                    <h2>
                        Cost of Living Dashboard <br />
                        Third Place Winner at Microsoft
                    </h2>
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
                        src="Dashboard2.png"
                        alt="Dashboard preview"
                        className={styles.proImage}
                    />

                        <p>
                            <span className={styles.bold}>Description:</span> This platform is a dashboard that houses
                            expenses ranging from household utilities, groceries, and rent throughout Canada. Our 
                            dashboard uses Power BI & Fabric to represent these data in various graphs that users can
                            seek insight from.  
                        </p>

                        <p>
                            <span className={styles.bold}>Frameworks / Tools:</span>  SQL, PySpark, Power BI & Fabric.
                        </p>

                        <p>
                            <span className={styles.bold}>Inspiration:</span>  With the rising cost of living and inflation 
                            across Canada, we wanted to build a solution that brings transparency to affordability. Our goal 
                            was to help Canadians better understand how housing, groceries, and employment conditions differ 
                            across the country — and how those factors shape everyday affordability.
                        </p>

                        <p>
                            <span className={styles.bold}>Challenges:</span>  A couple of challenges we faced along the way
                            included: Cleaning and validating thousands of dataset entries, ensuring reliable affordability 
                            metrics with evolving CPI data, balancing hackathon development with our day-to-day commitments
                            Designing visualizations that are both meaningful and intuitive.
                        </p>
                       
                        <p>
                            <span className={styles.bold}>Lessons Learned:</span>  Effective collaboration and trust can solve 
                            even the messiest data problems, data storytelling is just as important as accurate analysis, no dataset 
                            is too big when the team is motivated.
                        </p>
                </div>
            </section>

        </>
    )
}

export default Dashboard