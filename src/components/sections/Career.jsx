import { useRef, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '../ui/Reveal.jsx'
import { EXPERIENCE } from '../../data/experience.js'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Career() {
  const rail = useRef(null)
  const list = useRef(null)

  useLayoutEffect(() => {
    if (!rail.current || !list.current) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { gsap.set(rail.current, { scaleY: 1 }); return }
    const tween = gsap.fromTo(
      rail.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: list.current,
          start: 'top 75%',
          end: 'bottom 80%',
          scrub: true,
        },
      }
    )
    return () => { tween.scrollTrigger?.kill(); tween.kill() }
  }, [])

  return (
    <section id="experience" className="section-padding bg-bg">
      <div className="container-wide">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-[11px] text-muted tracking-[0.2em] uppercase">05</span>
          <Reveal as="h2" type="chars" className="font-display font-medium text-mega text-primary uppercase">
            Career
          </Reveal>
        </div>

        <div ref={list} className="relative pl-8 md:pl-12">
          <div className="career-rail" />
          <div className="career-rail-fill" ref={rail} />

          <div className="flex flex-col gap-6">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <span className="career-dot" style={{ top: '1.9rem' }} />
                <div className="bg-elevated border border-border rounded-2xl p-6 sm:p-7 card-hover group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-medium text-xl text-primary">{exp.role}</h3>
                        {exp.type === 'education' && (
                          <span className="font-mono text-[10px] uppercase tracking-wider text-muted border border-border rounded-full px-2 py-0.5">Education</span>
                        )}
                      </div>
                      <a href={exp.url} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline mt-1">
                        {exp.company} <ArrowUpRight size={12} />
                      </a>
                    </div>
                    <span className="font-mono text-xs text-muted whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="flex flex-col gap-2 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-muted font-body leading-relaxed">
                        <span className="text-accent mt-1 flex-shrink-0 text-xs">▸</span>{b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((t) => (
                      <span key={t}
                            className="font-mono text-[11px] px-2.5 py-1 bg-surface border border-border rounded-full text-muted
                                       group-hover:border-border-bright transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
