import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal.jsx'
import { SERVICES } from '../../data/services.js'

export default function Services() {
  return (
    <section id="services" className="section-padding bg-bg">
      <div className="container-wide">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-[11px] text-muted tracking-[0.2em] uppercase">01</span>
          <Reveal as="h2" type="chars" className="font-display font-medium text-mega text-primary uppercase">
            What I Do
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="service-card group"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
                <span className="font-display text-5xl text-border-bright group-hover:text-accent transition-colors duration-300">
                  ✦
                </span>
              </div>
              <h3 className="font-display font-medium text-3xl text-primary uppercase mb-4">{s.title}</h3>
              <p className="font-body text-sm text-muted leading-relaxed mb-7">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tools.map((t) => (
                  <span key={t}
                        className="font-mono text-[11px] text-muted border border-border rounded-full px-2.5 py-1
                                   group-hover:border-border-bright transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
