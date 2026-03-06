import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel.jsx'
import SkillCard from '../ui/SkillCard.jsx'
import { SKILL_CATEGORIES } from '../../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>02 — Tech Stack</SectionLabel>
          <h2
            className="font-display font-bold text-primary mb-10"
            style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}
          >
            Tools I build with.
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {SKILL_CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <SkillCard category={cat} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
