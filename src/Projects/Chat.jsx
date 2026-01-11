import styles from "./Projects.module.css"
import { useState } from "react";

function Chat () {

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

                    <h2>Chat Application - Coming Soon</h2>
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
                        src="sms.png"
                        alt="Chat App preview"
                        className={styles.proImage}
                    />

                    <p>
                        <span className={styles.bold}>Description:</span> This platform is a chat application where
                        people can socialize via instant messaging! This project is a work in progress, but once
                        it's finalized I can't wait to share it!
                    </p>
                    
                    <p>
                        <span className={styles.bold}>Frameworks / Tools:</span>  React JS
                    </p>
                    
                    <p>
                        <span className={styles.bold}>Inspiration:</span> I've always enjoyed social media, and the 
                        stories behind them. Name any social media: Facebook, Instagram, Snapchat, etc. each of these
                        apps have a huge impact on how we communicate with our family & friends. That's why I wanted
                        to dive in and try making one of my own!
                    </p>
                    
                    <p>
                        <span className={styles.bold}>Challenges:</span> so far the challenges I'm facing is identifying
                        the scope of my project. I am ambitious but I don't want to get lost in all my ideas and ignore
                        the core focus of the project.   
                                                
                    </p>
                                           
                </div>
            </section>

        </>
    )
}

export default Chat