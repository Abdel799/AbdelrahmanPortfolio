import styles from "./Projects.module.css"

function Card ({ title, image, tech, description, demo, github }) {

    return (
        <>

            <div className={styles.cardContainer}>
                <h1>{title}</h1>
                <img className={styles.cardImage} src={image} alt={typeof title === "string" ? title : "Project"}/>
                <h3>Tech Stack: {tech}</h3>
                <p>{description}</p>

                <div className={styles.cardLinks}>
                    {demo && (
                        <a href={demo} target="_blank" rel="noreferrer">
                            Demo
                        </a>
                    )}

                    {github && (
                        <a href={github} target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    )}
                </div>

            </div>

        </>
    )

}

export default Card