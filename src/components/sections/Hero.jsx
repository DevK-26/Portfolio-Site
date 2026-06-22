import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, ArrowDownRight } from 'lucide-react'
import Marquee from '../ui/Marquee.jsx'
import ErrorBoundary from '../ui/ErrorBoundary.jsx'

// Three.js is heavy — split it into its own chunk so text paints first.
const Scene = lazy(() => import('../three/Scene.jsx'))

const ROLES = ['Full-Stack Developer', 'Data Science Engineer', 'AI Enthusiast', 'Open-Source Builder']
const SOCIALS = [
  { icon: Github,    href: 'https://github.com/DevK-26' },
  { icon: Linkedin,  href: 'https://linkedin.com/in/khushi-yadav-066946296' },
  { icon: Twitter,   href: 'https://twitter.com/KhushiYadav008' },
  { icon: Instagram, href: 'https://instagram.com/khushi_.24__' },
]

function TypingRole() {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const cur = ROLES[i]
    let t
    if (!del && text === cur) t = setTimeout(() => setDel(true), 1800)
    else if (del && text === '') { setDel(false); setI((p) => (p + 1) % ROLES.length) }
    else t = setTimeout(() => setText(del ? cur.slice(0, text.length - 1) : cur.slice(0, text.length + 1)), del ? 40 : 75)
    return () => clearTimeout(t)
  }, [text, del, i])
  return <span className="text-accent">{text}<span className="animate-blink">_</span></span>
}

// word-mask line reveal for the name
const lineWrap = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }
const line = { hidden: { y: '110%' }, show: { y: '0%', transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }

export default function Hero() {
  const ref = useRef(null)
  // Pause the 3D render loop when the hero is off-screen (battery/perf), and
  // never run it continuously for reduced-motion users.
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setAnimate(false); return }
    const io = new IntersectionObserver(
      ([entry]) => setAnimate(entry.isIntersecting),
      { threshold: 0.05 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <section
        ref={ref}
        id="hero"
        className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-bg"
      >
        {/* 3D centerpiece — sits behind the type, biased to the right */}
        <div aria-hidden="true"
             className="absolute inset-0 lg:left-[35%] pointer-events-none opacity-60 lg:opacity-95">
          <ErrorBoundary>
            <Suspense fallback={null}><Scene active={animate} /></Suspense>
          </ErrorBoundary>
        </div>
        {/* readability veil — darker behind the type, especially on mobile */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
             style={{ background: 'radial-gradient(ellipse 85% 80% at 20% 45%, rgba(10,10,10,0.94) 12%, rgba(10,10,10,0.55) 48%, transparent 82%)' }} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none lg:hidden"
             style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.4), transparent 30%, transparent 60%, rgba(10,10,10,0.6))' }} />

        <div className="relative container-wide w-full px-5 sm:px-8 lg:px-14 pt-24">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}
            className="font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-muted mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-muted/50 inline-block" /> Hello, I&rsquo;m
          </motion.p>

          <motion.h1
            variants={lineWrap} initial="hidden" animate="show"
            className="font-display font-medium text-colossal text-primary uppercase"
          >
            <span className="block overflow-hidden pb-[0.14em] -mb-[0.08em]">
              <motion.span variants={line} className="inline-block">Khushi</motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.14em] -mb-[0.08em]">
              <motion.span variants={line} className="inline-block">Yadav</motion.span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
          >
            <p className="font-mono text-sm sm:text-base text-muted max-w-md">
              <TypingRole />
              <span className="block mt-3 text-muted/80 leading-relaxed">
                Turning ideas into full-stack products, backed by data. Dual degrees in CS &amp; Data Science.
              </span>
            </p>

            <div className="flex items-center gap-4">
              {SOCIALS.map(({ icon: Icon, href }, k) => (
                <a key={k} href={href} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full border border-border-bright flex items-center justify-center
                              text-muted hover:text-bg hover:bg-primary hover:border-primary transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.a
          href="#work"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-7 right-6 sm:right-10 font-mono text-[10px] tracking-[0.25em] uppercase text-muted
                     flex items-center gap-2 hover:text-primary transition-colors"
        >
          Scroll <ArrowDownRight size={14} />
        </motion.a>
      </section>

      <Marquee />
    </>
  )
}
