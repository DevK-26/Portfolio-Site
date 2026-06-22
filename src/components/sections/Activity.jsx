import { useState } from 'react'
import FadeIn from '../ui/FadeIn.jsx'
import SectionLabel from '../SectionLabel.jsx'

// Contribution graph rendered by ghchart (tinted to the brand accent).
const CHART = 'https://ghchart.rshah.org/14d3af/DevK-26'

export default function Activity() {
  const [ok, setOk] = useState(true)
  if (!ok) return null
  return (
    <section id="activity" className="pt-20">
      <FadeIn>
        <SectionLabel>GitHub Activity</SectionLabel>
        <div className="overflow-x-auto -mx-1 px-1">
          <img
            src={CHART}
            alt="Khushi Yadav's GitHub contribution graph"
            loading="lazy"
            onError={() => setOk(false)}
            className="min-w-[640px] w-full opacity-90"
          />
        </div>
        <a
          href="https://github.com/DevK-26" target="_blank" rel="noopener noreferrer"
          className="inline-block mt-4 text-sm text-muted hover:text-accent transition-colors"
        >
          @DevK-26 on GitHub →
        </a>
      </FadeIn>
    </section>
  )
}
