import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../ui/Reveal.jsx'
import { Mail, ArrowRight, Copy, Check } from 'lucide-react'

const EMAIL = 'khushiy9697@gmail.com'

function InputField({ label, name, type = 'text', multiline = false, value, onChange }) {
  const [focused, setFocused] = useState(false)
  const base = `w-full bg-transparent text-primary font-body text-sm placeholder-muted/60
                border-b pb-3 pt-2 outline-none transition-colors duration-200 resize-none`
  const borderClass = focused ? 'border-primary' : 'border-border'
  return multiline ? (
    <textarea rows={5} placeholder={label} name={name} value={value} onChange={onChange}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} className={`${base} ${borderClass}`} required />
  ) : (
    <input type={type} placeholder={label} name={name} value={value} onChange={onChange}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} className={`${base} ${borderClass}`} required />
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const copy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2500)
    })
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
          name: form.name, email: form.email, subject: form.subject, message: form.message,
          from_name: 'Portfolio Contact Form',
        }),
      })
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', subject: '', message: '' }); setTimeout(() => setStatus('idle'), 4000) }
      else { setStatus('error'); setTimeout(() => setStatus('idle'), 4000) }
    } catch { setStatus('error'); setTimeout(() => setStatus('idle'), 4000) }
  }

  return (
    <section id="contact" className="section-padding bg-bg">
      <div className="container-wide">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="font-mono text-[11px] text-muted tracking-[0.2em] uppercase">06</span>
          <Reveal as="h2" type="chars" className="font-display font-medium text-mega text-primary uppercase">
            Contact
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal as="p" type="words"
              className="font-display font-medium text-big text-primary leading-[1.15] mb-8 max-w-xl block"
              stagger={0.03}>
              Let&rsquo;s build something real.
            </Reveal>
            <p className="font-body text-muted leading-relaxed mb-8 max-w-md">
              Open to internships, collaboration, or a good conversation — reach out anytime. Usually responds within 24 hours.
            </p>

            <button onClick={copy}
              className="inline-flex items-center gap-3 font-mono text-sm text-primary
                         bg-elevated border border-border rounded-full px-5 py-3
                         hover:border-border-bright transition-all duration-200 group">
              <Mail size={15} className="text-accent" />
              {EMAIL}
              {copied ? <Check size={14} className="text-accent-green" /> : <Copy size={14} className="text-muted group-hover:text-primary transition-colors" />}
            </button>
          </div>

          <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-7">
              <InputField label="Full Name" name="name" value={form.name} onChange={handleChange} />
              <InputField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} />
            </div>
            <InputField label="Subject" name="subject" value={form.subject} onChange={handleChange} />
            <InputField label="Your Message" name="message" multiline value={form.message} onChange={handleChange} />
            <button type="submit" disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 font-mono text-sm text-bg bg-primary rounded-full py-4
                         hover:bg-accent transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
              {status === 'sending' ? <>Sending…</>
                : status === 'success' ? <>Message sent <Check size={15} /></>
                : status === 'error' ? <>Failed — try again</>
                : <>Send message <ArrowRight size={15} /></>}
            </button>
            <AnimatePresence>
              {status === 'success' && (
                <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="font-mono text-xs text-accent-green text-center">
                  Thanks! I&rsquo;ll get back to you soon.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  )
}
