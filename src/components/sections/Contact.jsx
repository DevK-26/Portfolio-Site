import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel.jsx'
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowRight, Copy, Check } from 'lucide-react'

const EMAIL = 'khushiy9697@gmail.com'
const SOCIALS = [
  { icon: Github,    label: 'GitHub',    href: 'https://github.com/DevK-26'                       },
  { icon: Linkedin,  label: 'LinkedIn',  href: 'https://linkedin.com/in/khushi-yadav-066946296'  },
  { icon: Twitter,   label: 'Twitter',   href: 'https://twitter.com/KhushiYadav008'              },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/khushi_.24__'              },
]

function InputField({ label, type = 'text', multiline = false }) {
  const [focused, setFocused] = useState(false)
  const base = `w-full bg-transparent text-primary font-body text-sm placeholder-muted/50
                border-b pb-3 pt-2 outline-none transition-colors duration-200 resize-none`
  const borderClass = focused ? 'border-accent' : 'border-border-bright'

  return (
    <div>
      {multiline ? (
        <textarea rows={5} placeholder={label} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
                  className={`${base} ${borderClass}`} required />
      ) : (
        <input type={type} placeholder={label} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
               className={`${base} ${borderClass}`} required />
      )}
    </div>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <SectionLabel>05 — Contact</SectionLabel>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT */}
            <div>
              <h2
                className="font-display font-bold text-primary mb-5 leading-tight"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)' }}
              >
                Let&rsquo;s build something{' '}
                <span className="text-accent">real.</span>
              </h2>
              <p className="font-body text-muted text-sm leading-relaxed mb-8 max-w-md">
                Currently a student exploring, building, and learning in public.
                Open to internship opportunities, collaboration on projects, or just a good conversation — reach out anytime.
              </p>

              {/* Click-to-copy email */}
              <div className="relative mb-8">
                <button
                  onClick={copy}
                  className="flex items-center gap-3 font-mono text-sm text-accent
                             bg-elevated border border-border rounded-lg px-5 py-3
                             hover:border-accent hover:shadow-teal transition-all duration-200 group"
                >
                  <Mail size={15} />
                  {EMAIL}
                  {copied ? <Check size={14} className="text-accent-green" /> : <Copy size={14} className="text-muted group-hover:text-accent transition-colors" />}
                </button>
                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="absolute -top-9 left-0 bg-elevated border border-accent rounded px-3 py-1
                                 font-mono text-xs text-accent-green whitespace-nowrap"
                    >
                      ✓ Copied to clipboard
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Response time */}
              <p className="font-mono text-xs text-muted mb-8">
                ⚡ Usually responds within 24 hours
              </p>

              {/* Socials */}
              <div className="flex flex-wrap gap-3 mb-8">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 font-mono text-xs text-muted
                                border border-border rounded px-3 py-2
                                hover:border-accent hover:text-accent hover:bg-accent-dim
                                transition-all duration-200"
                  >
                    <Icon size={13} /> {label}
                  </a>
                ))}
              </div>


            </div>

            {/* RIGHT — Form */}
            <form className="flex flex-col gap-7" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-7">
                <InputField label="Full Name" />
                <InputField label="Email Address" type="email" />
              </div>
              <InputField label="Subject" />
              <InputField label="Your Message" multiline />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 font-mono text-sm font-medium
                           text-bg bg-accent rounded py-3.5
                           hover:bg-accent/90 hover:shadow-teal transition-all duration-200"
              >
                Send Message <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
