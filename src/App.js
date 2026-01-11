import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import './App.css';
import HomePage from './HomePage/HomePage.jsx'
import Projects from './Projects/Projects.jsx'
import Experience from './Experience/Experience.jsx'
import Contact from './Contact/Contact.jsx'

function App() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="brand">abl</Link>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

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
