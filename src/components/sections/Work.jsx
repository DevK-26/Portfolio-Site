import { useRef, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Github } from 'lucide-react'
import { PROJECTS } from '../../data/projects.js'

gsap.registerPlugin(ScrollTrigger)

export default function Work() {
  const section = useRef(null)
  const track = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    // Horizontal pinned scroll on desktop only
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const getDistance = () => track.current.scrollWidth - window.innerWidth
      const tween = gsap.to(track.current, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: () => '+=' + getDistance(),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
      return () => tween.kill()
    })
    return () => mm.revert()
  }, [])

  return (
    <section ref={section} id="work" className="relative bg-bg lg:h-[100svh] lg:overflow-hidden">
      <div ref={track} className="work-track flex flex-col lg:flex-row lg:h-[100svh] lg:items-center lg:flex-nowrap">
        {/* Intro panel */}
        <div className="shrink-0 px-5 sm:px-8 lg:pl-14 lg:pr-28 pt-28 lg:pt-0 lg:w-[46vw]">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-[11px] text-muted tracking-[0.2em] uppercase">03</span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="font-display font-medium text-mega text-primary uppercase"
            >
              Selected<br />Work
            </motion.h2>
          </div>
          <p className="font-body text-muted max-w-sm leading-relaxed">
            A few things I&rsquo;ve designed and shipped.
            <span className="hidden lg:inline"> Scroll to move through them →</span>
          </p>
        </div>

        {/* Cards */}
        {PROJECTS.map((p, i) => {
          const href = p.live || p.github
          return (
            <article key={p.id} className="work-card shrink-0 px-5 sm:px-8 lg:px-0 pb-14 lg:pb-0">
              <a href={href} target="_blank" rel="noopener noreferrer" className="block work-card-media">
                {p.image
                  ? <img src={p.image} alt={p.title} loading="lazy" onLoad={() => ScrollTrigger.refresh()} />
                  : <div className="w-full h-full grid place-items-center font-mono text-muted text-sm">{'{ preview }'}</div>}
                <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-bg/70 backdrop-blur border border-border-bright
                                 flex items-center justify-center text-primary">
                  {p.live ? <ArrowUpRight size={16} /> : <Github size={15} />}
                </span>
              </a>
              <div className="flex items-start justify-between gap-4 mt-5">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm text-accent pt-1">0{i + 1}</span>
                  <div>
                    <h3 className="font-display font-medium text-2xl text-primary">{p.title}</h3>
                    <p className="font-mono text-xs text-muted mt-1">{p.stack.join(' · ')}</p>
                  </div>
                </div>
              </div>
            </article>
          )
        })}

        {/* tail spacer so the last card isn't flush to the edge */}
        <div className="hidden lg:block shrink-0 w-[8vw]" aria-hidden="true" />
      </div>
    </section>
  )
}
