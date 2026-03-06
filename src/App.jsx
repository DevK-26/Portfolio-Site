import React from 'react'
import Navbar    from './components/layout/Navbar.jsx'
import Footer    from './components/layout/Footer.jsx'
import Hero       from './components/sections/Hero.jsx'
import About      from './components/sections/About.jsx'
import Skills     from './components/sections/Skills.jsx'
import Projects   from './components/sections/Projects.jsx'
import Experience from './components/sections/Experience.jsx'
import Contact    from './components/sections/Contact.jsx'

export default function App() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
