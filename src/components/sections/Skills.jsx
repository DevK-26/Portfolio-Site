import FadeIn from '../ui/FadeIn.jsx'
import SectionLabel from '../SectionLabel.jsx'
import { SKILL_CATEGORIES } from '../../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="pt-20">
      <FadeIn>
        <SectionLabel>Tech Stack</SectionLabel>
      </FadeIn>
      <div className="space-y-5">
        {SKILL_CATEGORIES.map((cat, i) => (
          <FadeIn key={cat.id} delay={i * 0.04}
            className="grid grid-cols-[110px_1fr] gap-4 items-baseline">
            <div className="font-mono text-xs uppercase tracking-wide text-faint">{cat.label}</div>
            <div className="text-[15px] text-muted">
              {cat.skills.map((s) => s.name).join(', ')}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
