import Reveal from '../ui/Reveal.jsx'
import { SKILL_CATEGORIES } from '../../data/skills.js'

const ALL = SKILL_CATEGORIES.flatMap((c) => c.skills)
const half = Math.ceil(ALL.length / 2)
const ROW_A = ALL.slice(0, half)
const ROW_B = ALL.slice(half)

function Row({ items, reverse }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden py-2">
      <div className={`flex w-max gap-4 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {doubled.map((s, i) => (
          <div key={i}
               className="flex items-center gap-2.5 shrink-0 bg-elevated border border-border rounded-full px-5 py-3
                          text-muted font-mono text-sm hover:border-accent hover:text-primary transition-colors">
            <i className={`devicon-${s.devicon}-plain${s.colored ? ' colored' : ''} text-lg`} aria-hidden="true" />
            {s.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="stack" className="section-padding bg-bg overflow-hidden">
      <div className="container-wide">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-[11px] text-muted tracking-[0.2em] uppercase">04</span>
          <Reveal as="h2" type="chars" className="font-display font-medium text-mega text-primary uppercase">
            Tech Stack
          </Reveal>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Row items={ROW_A} />
        <Row items={ROW_B} reverse />
      </div>
    </section>
  )
}
