import Header from './components/Header.jsx'
import Intro from './components/sections/Intro.jsx'
import About from './components/sections/About.jsx'
import Experience from './components/sections/Experience.jsx'
import Projects from './components/sections/Projects.jsx'
import Skills from './components/sections/Skills.jsx'
import Activity from './components/sections/Activity.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-reading px-5 sm:px-6">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Activity />
        <Footer />
      </main>
    </>
  )
}
