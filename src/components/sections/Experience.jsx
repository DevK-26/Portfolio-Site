import FadeIn from '../ui/FadeIn.jsx'
import SectionLabel from '../SectionLabel.jsx'
import { EXPERIENCE } from '../../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="pt-20">
      <FadeIn>
        <SectionLabel>Experience &amp; Education</SectionLabel>
      </FadeIn>
      <div className="divide-y divide-border/70">
        {EXPERIENCE.map((exp, i) => (
          <FadeIn key={exp.id} delay={i * 0.04} className="py-5 first:pt-0">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[15px] font-medium text-fg">{exp.role}</h3>
              <span className="shrink-0 font-mono text-xs text-faint">{exp.period}</span>
            </div>
            <a
              href={exp.url} target="_blank" rel="noopener noreferrer"
              className="text-sm text-accent hover:underline"
            >
              {exp.company}
            </a>
            <p className="mt-2 text-sm leading-relaxed text-muted">{exp.bullets[0]}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
