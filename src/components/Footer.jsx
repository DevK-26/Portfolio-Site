import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react'
import FadeIn from './ui/FadeIn.jsx'
import SectionLabel from './SectionLabel.jsx'

const EMAIL = 'khushiy9697@gmail.com'
const SOCIALS = [
  { icon: Github,    label: 'GitHub',    href: 'https://github.com/DevK-26' },
  { icon: Linkedin,  label: 'LinkedIn',  href: 'https://linkedin.com/in/khushi-yadav-066946296' },
  { icon: Twitter,   label: 'Twitter',   href: 'https://twitter.com/KhushiYadav008' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/khushi_.24__' },
  { icon: Mail,      label: 'Email',     href: `mailto:${EMAIL}` },
]

export default function Footer() {
  return (
    <footer id="contact" className="pt-20 pb-16">
      <FadeIn>
        <SectionLabel>Contact</SectionLabel>
        <p className="text-[15px] leading-relaxed text-muted max-w-md">
          Open to internships, collaboration, or a good conversation. The fastest way to reach me is email.
        </p>
        <a href={`mailto:${EMAIL}`} className="link mt-4 inline-block text-fg">{EMAIL}</a>

        <div className="mt-10 pt-6 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-faint">© 2026 Khushi Yadav</span>
          <div className="flex items-center gap-1">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label} href={href} aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="grid place-items-center w-9 h-9 rounded-full text-muted hover:text-accent transition-colors duration-200"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xs text-faint">Built with React, Vite &amp; Tailwind CSS.</p>
      </FadeIn>
    </footer>
  )
}
