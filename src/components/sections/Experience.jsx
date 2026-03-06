import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel.jsx'
import { EXPERIENCE } from '../../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-bg">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <SectionLabel>04 — Experience</SectionLabel>
          <h2
            className="font-display font-bold text-primary mb-14"
            style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}
          >
            Where I&rsquo;ve worked.
          </h2>

          <div className="relative">
            {/* Vertical teal line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-accent/30 hidden md:block" />

            <div className="flex flex-col gap-6">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="md:pl-12 relative"
                >
                  {/* Circle node */}
                  <div className="absolute left-0 top-5 w-7 h-7 rounded-full border-2 border-accent bg-bg
                                  items-center justify-center hidden md:flex">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>

                  <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent hover:shadow-teal transition-all duration-300 group">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-display font-semibold text-lg text-primary group-hover:text-accent transition-colors">
                            {exp.role}
                          </h3>
                          {exp.type === 'education' && (
                            <span className="font-mono text-xs text-muted border border-border rounded px-2 py-0.5">Education</span>
                          )}
                        </div>
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-accent hover:underline"
                        >
                          {exp.company} ↗
                        </a>
                      </div>
                      <span className="font-mono text-xs text-muted whitespace-nowrap">{exp.period}</span>
                    </div>

                    <ul className="flex flex-col gap-2 mb-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted font-body leading-relaxed">
                          <span className="text-accent mt-1 flex-shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.stack.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2.5 py-1 bg-elevated border border-border rounded text-muted hover:text-accent hover:border-accent transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
