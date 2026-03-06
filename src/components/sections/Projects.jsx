import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel.jsx'
import { FeaturedProjectCard, SmallProjectCard } from '../ui/ProjectCard.jsx'
import { PROJECTS } from '../../data/projects.js'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured)
  const rest = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="work" className="section-padding bg-surface">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <SectionLabel>03 — Selected Work</SectionLabel>
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <h2
              className="font-display font-bold italic text-primary"
              style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}
            >
              Things I&rsquo;ve built.
            </h2>
            <a
              href="https://github.com/DevK-26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              All repos on GitHub <ExternalLink size={12} />
            </a>
          </div>

          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <FeaturedProjectCard project={featured} />
          </motion.div>

          {/* 3-col grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <SmallProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
