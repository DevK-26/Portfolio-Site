import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar     from './components/layout/Navbar.jsx'
import Footer     from './components/layout/Footer.jsx'
import Hero       from './components/sections/Hero.jsx'
import About      from './components/sections/About.jsx'
import Skills     from './components/sections/Skills.jsx'
import Projects   from './components/sections/Projects.jsx'
import Experience from './components/sections/Experience.jsx'
import Contact    from './components/sections/Contact.jsx'
import PageLoader from './components/ui/PageLoader.jsx'
import ScrollToTop from './components/ui/ScrollToTop.jsx'
import CustomCursor from './components/ui/CustomCursor.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
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
          <ScrollToTop />
          <CustomCursor />
        </>
      )}
    </>
  )
}
