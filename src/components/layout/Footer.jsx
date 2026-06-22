import { ArrowUpRight } from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'
import HoverLink from '../ui/HoverLink.jsx'

const EMAIL = 'khushiy9697@gmail.com'
const SOCIALS = [
  { href: 'https://github.com/DevK-26',                     label: 'GitHub'    },
  { href: 'https://linkedin.com/in/khushi-yadav-066946296', label: 'LinkedIn'  },
  { href: 'https://twitter.com/KhushiYadav008',             label: 'Twitter'   },
  { href: 'https://instagram.com/khushi_.24__',             label: 'Instagram' },
]
const NAV = [['#services', 'What I Do'], ['#work', 'Work'], ['#experience', 'Career'], ['#contact', 'Contact']]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-wide px-5 sm:px-8 lg:px-14 pt-24 pb-10">
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted mb-6">Have an idea?</p>
        <Reveal as="h2" type="chars"
          className="font-display font-medium text-colossal text-primary uppercase block mb-12">
          Let&rsquo;s talk
        </Reveal>

        <a href={`mailto:${EMAIL}`}
           className="group inline-flex items-center gap-4 font-display font-medium text-2xl sm:text-5xl text-primary">
          <HoverLink text={EMAIL} />
          <span className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-border-bright flex items-center justify-center
                           group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300">
            <ArrowUpRight size={22} />
          </span>
        </a>

        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display font-semibold text-sm text-primary">Khushi Yadav &copy; 2026</div>
            <div className="font-mono text-xs text-muted mt-0.5">Platform Lead · code.scriet</div>
          </div>
          <div className="flex gap-7">
            {NAV.map(([h, l]) => (
              <a key={h} href={h} className="font-mono text-xs text-muted hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
          <div className="flex gap-6">
            {SOCIALS.map(({ href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                 className="font-mono text-xs text-muted hover:text-primary transition-colors">{label}</a>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center md:text-left font-mono text-[11px] text-muted/50">
          Built with React · Vite · Three.js · GSAP · Lenis
        </div>
      </div>
    </footer>
  )
}
