import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal.jsx'

const PHOTO = 'https://avatars.githubusercontent.com/u/189853051?v=4'

const STATS = [
  { num: '5+', label: 'Projects Shipped' },
  { num: '20+', label: 'Technologies' },
  { num: '2', label: 'Degrees in Progress' },
  { num: '60+', label: 'GitHub Contributions' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-bg">
      <div className="container-wide">
        <div className="flex items-baseline gap-4 mb-14">
          <span className="font-mono text-[11px] text-muted tracking-[0.2em] uppercase">02</span>
          <Reveal as="h2" type="chars" className="font-display font-medium text-mega text-primary uppercase">
            About
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-14 items-start">
          <Reveal
            as="p" type="words"
            className="font-display font-medium text-big text-primary leading-[1.15] max-w-4xl"
            stagger={0.02} duration={0.8}
          >
            I&rsquo;m a developer pursuing dual degrees in Computer Science (CCSU Meerut) and Data Science (IIT Madras). I build data-informed web applications that are not just functional, but intelligent — shipping real software while still in college.
          </Reveal>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4 bg-elevated border border-border rounded-2xl px-5 py-4">
              <img src={PHOTO} alt="Khushi Yadav" className="w-14 h-14 rounded-full object-cover grayscale" />
              <div>
                <div className="font-display font-semibold text-primary">Khushi Yadav</div>
                <div className="font-mono text-xs text-accent mt-0.5">Platform Lead · code.scriet</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {STATS.map((s) => (
                <div key={s.label} className="bg-bg p-5">
                  <div className="font-display font-medium text-4xl text-primary tabular-nums">{s.num}</div>
                  <div className="font-mono text-[10px] text-muted uppercase tracking-wide mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
