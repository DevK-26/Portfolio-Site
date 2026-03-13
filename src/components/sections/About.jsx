import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel.jsx'

const PHOTO = 'https://avatars.githubusercontent.com/u/189853051?v=4'

const FACT_CARDS = [
  { emoji: '\uD83D\uDCCD', label: 'India'                        },
  { emoji: '\uD83C\uDF93', label: 'B.Tech CS (CCSU) + BS IIT Madras' },
  { emoji: '\uD83D\uDCBC', label: 'Platform Lead \u00B7 code.scriet'  },
  { emoji: '\u26A1', label: 'Full-Stack + AI/ML'            },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-wide">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>01 — About Me</SectionLabel>
          </motion.div>

          <div className="grid lg:grid-cols-[55fr_45fr] gap-14 items-start">
            {/* LEFT */}
            <div className="flex flex-col gap-6">
              {/* Photo + name strip */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="flex items-center gap-5 bg-elevated border border-border rounded-xl px-6 py-5"
              >
                <img
                  src={PHOTO}
                  alt="Khushi Yadav"
                  className="w-20 h-20 rounded-full object-cover border-2 border-accent flex-shrink-0"
                />
                <div>
                  <div className="font-display font-bold text-xl text-primary">Khushi Yadav</div>
                  <div className="font-mono text-xs text-accent mt-1">Platform Lead · code.scriet</div>
                  <div className="font-body text-xs text-muted mt-1.5 max-w-xs">
                    Building intelligent systems at the intersection of full-stack engineering and data science.
                  </div>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55 }}
                className="font-display font-bold italic leading-tight text-primary"
                style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
              >
                The person behind the code.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="text-muted text-sm leading-relaxed"
              >
                <p>
                  I&rsquo;m <span className="text-primary font-medium">Khushi Yadav</span> — pursuing
                  dual degrees in <span className="text-accent">Computer Science</span> (CCSU Meerut) and{' '}
                  <span className="text-accent">Data Science</span> (IIT Madras). I build
                  data-informed web applications that are not just functional, but intelligent.
                </p>
              </motion.div>

              {/* Blockquote — Vision */}
              <motion.blockquote
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="border-l-2 border-accent pl-5 text-primary font-body italic text-base leading-relaxed"
              >
                &ldquo;Where AI, Data Science, and Web Development converge to engineer meaningful,
                scalable solutions.&rdquo;
              </motion.blockquote>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-5">
              {/* 2x2 fact grid */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="grid grid-cols-2 gap-3"
              >
                {FACT_CARDS.map((card) => (
                  <div
                    key={card.label}
                    className="bg-elevated border border-border rounded-lg p-4 text-sm font-body text-muted
                               hover:border-accent hover:text-primary transition-all duration-200 cursor-default"
                  >
                    <span className="block text-xl mb-2">{card.emoji}</span>
                    {card.label}
                  </div>
                ))}
              </motion.div>

              {/* Currently widget */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="bg-elevated border border-border rounded-lg p-5"
              >
                <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4">Currently</div>
                <div className="flex flex-col gap-3 text-sm font-body text-muted">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5">{'\uD83D\uDD28'}</span>
                    <span><span className="text-primary">Building:</span> data-informed web applications</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5">{'\uD83D\uDCDA'}</span>
                    <span><span className="text-primary">Learning:</span> LLMs, system design &amp; applied ML</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5">{'\uD83C\uDFAF'}</span>
                    <span><span className="text-primary">Exploring:</span> internships &amp; open-source contributions</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5">{'\u2709\uFE0F'}</span>
                    <a href="mailto:khushiy9697@gmail.com" className="text-accent hover:underline">khushiy9697@gmail.com</a>
                  </div>
                </div>
              </motion.div>

              {/* Key Achievements - compact */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-elevated border border-border rounded-lg p-5"
              >
                <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Highlights</div>
                <div className="flex flex-col gap-2">
                  {[
                    'Dual-degree: CS&E at CCSU + Data Science at IIT Madras',
                    'Full-stack apps with auth, APIs & database connectivity',
                    'ML & AI foundation through IIT Madras coursework',
                  ].map((a, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-muted font-body leading-relaxed">
                      <span className="text-accent mt-0.5 flex-shrink-0 text-xs">{'\u25B8'}</span>
                      {a}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
