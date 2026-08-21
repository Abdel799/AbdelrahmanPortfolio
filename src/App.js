import { useEffect, useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"

import './App.css';
import HomePage from './HomePage/HomePage.jsx'
import Projects from './Projects/Projects.jsx'
import Experience from './Experience/Experience.jsx'
import Contact from './Contact/Contact.jsx'

function App() {

  const [open, setOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const dashboard = useRef(null)
  
  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setShowButton(!entry.isIntersecting)
    },
    { threshold: 0.1 }
  )

  if (dashboard.current) {
    observer.observe(dashboard.current)
  }

  return () => observer.disconnect()
}, [])

  return (
    <>
      <BrowserRouter>
      <nav className="navbar" ref={dashboard}>
        <Link to="/" className="brand" onClick={() => setOpen(false)}>abl</Link>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><NavLink to="/projects" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
          <li><NavLink to="/experience" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Experience</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
        </ul>
      </nav>

      <button
        className={`top-btn ${showButton ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
