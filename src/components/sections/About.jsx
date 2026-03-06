import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel.jsx'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
})

const PHOTO = 'https://avatars.githubusercontent.com/u/189853051?v=4'

const FACT_CARDS = [
  { emoji: '📍', label: 'India'                        },
  { emoji: '🎓', label: 'B.Tech CS (CCSU) + BS IIT Madras' },
  { emoji: '💼', label: 'Platform Lead · code.scriet'  },
  { emoji: '⚡', label: 'Full-Stack + AI/ML'            },
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

          {/* Photo + name strip */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="flex items-center gap-5 mb-10 bg-elevated border border-border rounded-xl px-6 py-5 max-w-xl"
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

          <div className="grid lg:grid-cols-[55fr_45fr] gap-14 items-start">
            {/* LEFT */}
            <div className="flex flex-col gap-6">
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
                className="flex flex-col gap-4 text-muted text-sm leading-relaxed"
              >
                <p>
                  I&rsquo;m <span className="text-primary font-medium">Khushi Yadav</span>, a dual-degree candidate
                  concurrently pursuing a B.Tech in Computer Science &amp; Engineering (CCSU Meerut) and a BS in
                  Data Science &amp; Applications (IIT Madras), with a robust technical foundation spanning
                  Artificial Intelligence, Machine Learning, and Full-Stack Web Development.
                </p>
                <p>
                  It started with a curiosity about how websites work — which gradually expanded into the world of
                  data and how it drives decisions. That led to pursuing Computer Science and Data Science at
                  IIT Madras for understanding the data behind it.
                </p>
                <p>
                  Today, the focus is on combining both — building{' '}
                  <span className="text-accent">data-informed web applications</span>
                  {' '}that are not just functional, but intelligent. Developing web applications with structured
                  backend architecture, applying ML concepts to understand intelligent systems, and translating
                  complex technical ideas into structured, practical implementation.
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
                &ldquo;To cultivate a disciplined, execution-driven technical foundation where AI, Data Science,
                and Web Development converge to engineer meaningful and scalable solutions — because sustainable
                technological impact is built through consistency, depth, and deliberate execution.&rdquo;
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
                    <span className="mt-0.5">🔨</span>
                    <span><span className="text-primary">Building:</span> data-informed web applications</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5">📚</span>
                    <span><span className="text-primary">Learning:</span> LLMs, system design &amp; applied ML</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5">🎯</span>
                    <span><span className="text-primary">Exploring:</span> internships &amp; open-source contributions</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5">✉️</span>
                    <a href="mailto:khushiy9697@gmail.com" className="text-accent hover:underline">khushiy9697@gmail.com</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Achievements */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 bg-elevated border border-border rounded-xl p-6"
          >
            <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4">Key Achievements</div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Dual-degree path: CS&E at CCSU Meerut + Data Science at IIT Madras — simultaneously',
                'Built and deployed web applications with backend integration, authentication, and database connectivity',
                'Developing ML & AI foundation through rigorous academic coursework at IIT Madras',
                'Building structured project systems that evolve from initial concept to full implementation',
              ].map((a, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-muted font-body leading-relaxed">
                  <span className="text-accent mt-1 flex-shrink-0 text-xs">▸</span>
                  {a}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
