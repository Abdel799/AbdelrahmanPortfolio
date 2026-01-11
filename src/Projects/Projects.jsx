import styles from "./Projects.module.css"
import LofiNest from './LofiNest.jsx'
import Chat from './Chat.jsx'
import Dashboard from './Dashboard.jsx'
import Snake from './Snake.jsx'

function Projects () {

    return (
        <>
            <h1 className={styles.title}>Projects</h1>
            <LofiNest></LofiNest>
            <Chat></Chat>
            <Dashboard></Dashboard>
            <Snake></Snake>
            
        </>
    )
}

export default Projects