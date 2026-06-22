import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react'
import FadeIn from '../ui/FadeIn.jsx'

const PHOTO = 'https://avatars.githubusercontent.com/u/189853051?v=4'

const SOCIALS = [
  { icon: Github,    label: 'GitHub',    href: 'https://github.com/DevK-26' },
  { icon: Linkedin,  label: 'LinkedIn',  href: 'https://linkedin.com/in/khushi-yadav-066946296' },
  { icon: Twitter,   label: 'Twitter',   href: 'https://twitter.com/KhushiYadav008' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/khushi_.24__' },
  { icon: Mail,      label: 'Email',     href: 'mailto:khushiy9697@gmail.com' },
]

export default function Intro() {
  return (
    <section id="top" className="pt-16 sm:pt-20">
      <FadeIn>
        <img
          src={PHOTO}
          alt="Khushi Yadav"
          width="80" height="80" loading="eager"
          className="w-20 h-20 rounded-2xl object-cover border border-border mb-7"
        />
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg">
          Khushi Yadav
        </h1>
        <p className="mt-2 text-lg text-muted">
          Full-Stack Developer &amp; Data Science Engineer
        </p>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          I turn ideas into full-stack products and back them with data. Pursuing dual degrees in
          Computer Science (CCSU Meerut) and Data Science (IIT Madras) — shipping real software while still in college.
        </p>

        <div className="mt-6 flex items-center gap-2">
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <a
              key={label} href={href} aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="grid place-items-center w-9 h-9 rounded-full text-muted
                         hover:text-accent hover:bg-surface transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
