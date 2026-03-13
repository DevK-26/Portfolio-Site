import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import CodeWidget from '../ui/CodeWidget.jsx'
import StatRow from '../ui/StatRow.jsx'
import Marquee from '../ui/Marquee.jsx'

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const ROLES = ['Full-Stack Developer', 'Data Science Engineer', 'AI Enthusiast', 'Open Source Builder']

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && text === '') {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          )
        },
        deleting ? 40 : 80
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex])

  return (
    <span className="text-accent">
      {text}
      <span className="animate-blink">|</span>
    </span>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const spotlightRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const spotlight = spotlightRef.current
    if (!section || !spotlight) return

    const handleMove = (e) => {
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(14,204,168,0.06), transparent 60%)`
    }

    section.addEventListener('mousemove', handleMove)
    return () => section.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <>
      <section
        ref={sectionRef}
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-bg"
        style={{ paddingTop: 64 }}
      >
        {/* Static teal radial glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 20% 50%, rgba(14,204,168,0.07) 0%, transparent 70%)',
          }}
        />

        {/* Mouse-follow spotlight */}
        <div
          ref={spotlightRef}
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full py-16">
          <div className="grid lg:grid-cols-[1fr_460px] gap-16 items-center">
            {/* LEFT */}
            <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col">
              {/* Typing role */}
              <motion.p variants={fadeUp} className="font-mono text-xs tracking-[0.2em] uppercase mb-6 h-5">
                <TypingRole />
              </motion.p>

              {/* Heading */}
              <motion.h1
                variants={fadeUp}
                className="font-display font-bold leading-[0.95] mb-6"
                style={{ fontSize: 'clamp(3rem,9vw,5.75rem)' }}
              >
                Code, Data
                <br />
                &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-green">Impact.</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p variants={fadeUp} className="font-body text-muted text-base leading-relaxed mb-10 max-w-xl">
                I turn ideas into full-stack products and back them with data.
                Pursuing dual degrees in CS &amp; Data Science — shipping real software while still in college.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 font-mono text-sm font-medium
                             text-bg bg-accent rounded px-6 py-3
                             hover:bg-accent/90 hover:shadow-teal transition-all duration-200"
                >
                  View My Work <ArrowRight size={16} />
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 font-mono text-sm font-medium
                             text-accent border border-accent rounded px-6 py-3
                             hover:bg-accent-dim transition-all duration-200"
                >
                  Download Resume <ExternalLink size={14} />
                </a>
                <a
                  href="https://github.com/DevK-26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-muted
                             hover:text-accent transition-colors px-4 py-3"
                >
                  GitHub ↗
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeUp}>
                <StatRow />
              </motion.div>
            </motion.div>

            {/* RIGHT — Photo + Code widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-col items-center gap-5"
            >
              {/* Photo card */}
              <div className="relative w-full max-w-[460px]">
                <div className="flex items-center gap-4 bg-elevated border border-border rounded-xl px-5 py-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src="https://avatars.githubusercontent.com/u/189853051?v=4"
                      alt="Khushi Yadav"
                      className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-accent-green border-2 border-elevated" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-primary text-base">Khushi Yadav</div>
                    <div className="font-mono text-xs text-accent mt-0.5">Platform Lead · code.scriet</div>
                    <div className="font-mono text-xs text-muted mt-1">CCSU Meerut · IIT Madras</div>
                  </div>
                </div>
              </div>
              <CodeWidget />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <Marquee />
    </>
  )
}
