import FadeIn from '../ui/FadeIn.jsx'
import SectionLabel from '../SectionLabel.jsx'

export default function About() {
  return (
    <section id="about" className="pt-20">
      <FadeIn>
        <SectionLabel>About</SectionLabel>
        <div className="space-y-4 text-[15px] leading-relaxed text-muted">
          <p>
            I build data-informed web applications that are not just functional, but intelligent —
            working at the intersection of full-stack engineering and data science.
          </p>
          <p>
            As Platform Lead at <span className="text-fg">code.scriet</span>, I own full-stack delivery
            from architecture to production: auth, REST APIs, real-time features, and databases. Alongside,
            my Data Science programme at IIT Madras grounds me in ML, statistics, and system design.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
