import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel.jsx'
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowRight, Copy, Check, Send } from 'lucide-react'

const EMAIL = 'khushiy9697@gmail.com'
const SOCIALS = [
  { icon: Github,    label: 'GitHub',    href: 'https://github.com/DevK-26'                       },
  { icon: Linkedin,  label: 'LinkedIn',  href: 'https://linkedin.com/in/khushi-yadav-066946296'  },
  { icon: Twitter,   label: 'Twitter',   href: 'https://twitter.com/KhushiYadav008'              },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/khushi_.24__'              },
]

function InputField({ label, name, type = 'text', multiline = false, value, onChange }) {
  const [focused, setFocused] = useState(false)
  const base = `w-full bg-transparent text-primary font-body text-sm placeholder-muted/50
                border-b pb-3 pt-2 outline-none transition-colors duration-200 resize-none`
  const borderClass = focused ? 'border-accent' : 'border-border-bright'

  return multiline ? (
    <textarea
      rows={5}
      placeholder={label}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={`${base} ${borderClass}`}
      required
    />
  ) : (
    <input
      type={type}
      placeholder={label}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={`${base} ${borderClass}`}
      required
    />
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const copy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY',
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          from_name: 'Portfolio Contact Form',
        }),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
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
                      Copied to clipboard
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Response time */}
              <p className="font-mono text-xs text-muted mb-8">
                Usually responds within 24 hours
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
            <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-7">
                <InputField label="Full Name" name="name" value={form.name} onChange={handleChange} />
                <InputField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} />
              </div>
              <InputField label="Subject" name="subject" value={form.subject} onChange={handleChange} />
              <InputField label="Your Message" name="message" multiline value={form.message} onChange={handleChange} />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 font-mono text-sm font-medium
                           text-bg bg-accent rounded py-3.5
                           hover:bg-accent/90 hover:shadow-teal transition-all duration-200
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>Sending...</>
                ) : status === 'success' ? (
                  <>Message Sent <Check size={15} /></>
                ) : status === 'error' ? (
                  <>Failed — try again</>
                ) : (
                  <>Send Message <ArrowRight size={15} /></>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="font-mono text-xs text-accent-green text-center"
                  >
                    Thanks! I'll get back to you soon.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
