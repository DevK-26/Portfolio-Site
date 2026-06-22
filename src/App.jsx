import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Services from './components/sections/Services.jsx'
import About from './components/sections/About.jsx'
import Work from './components/sections/Work.jsx'
import TechStack from './components/sections/TechStack.jsx'
import Career from './components/sections/Career.jsx'
import Contact from './components/sections/Contact.jsx'
import PageLoader from './components/ui/PageLoader.jsx'
import ScrollToTop from './components/ui/ScrollToTop.jsx'
import CustomCursor from './components/ui/CustomCursor.jsx'
import { useLenis } from './hooks/useLenis.js'

export default function App() {
  const [loading, setLoading] = useState(true)
  useLenis()

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
            <Services />
            <About />
            <Work />
            <TechStack />
            <Career />
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
