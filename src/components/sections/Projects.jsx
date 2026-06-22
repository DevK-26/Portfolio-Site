import { ArrowUpRight } from 'lucide-react'
import FadeIn from '../ui/FadeIn.jsx'
import SectionLabel from '../SectionLabel.jsx'
import { PROJECTS } from '../../data/projects.js'

export default function Projects() {
  return (
    <section id="work" className="pt-20">
      <FadeIn>
        <SectionLabel>Selected Work</SectionLabel>
      </FadeIn>
      <div className="divide-y divide-border/70">
        {PROJECTS.map((p, i) => {
          const href = p.live || p.github
          return (
            <FadeIn key={p.id} delay={i * 0.04}>
              <a
                href={href} target="_blank" rel="noopener noreferrer"
                className="group block py-5 first:pt-0"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[15px] font-medium text-fg group-hover:text-accent transition-colors duration-200">
                    {p.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-faint transition-all duration-200
                               group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.description}</p>
                <p className="mt-2 font-mono text-xs text-faint">{p.stack.join(' · ')}</p>
              </a>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
