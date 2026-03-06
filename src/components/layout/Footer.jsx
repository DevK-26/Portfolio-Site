import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const SOCIALS = [
  { icon: Github,    href: 'https://github.com/DevK-26',                     label: 'GitHub'    },
  { icon: Linkedin,  href: 'https://linkedin.com/in/khushi-yadav-066946296', label: 'LinkedIn'  },
  { icon: Twitter,   href: 'https://twitter.com/KhushiYadav008',             label: 'Twitter'   },
  { icon: Instagram, href: 'https://instagram.com/khushi_.24__',             label: 'Instagram' },
]

const NAV    = ['#about', '#work', '#experience', '#contact']
const LABELS = ['About', 'Work', 'Experience', 'Contact']

export default function Footer() {
  return (
    <footer style={{ background: '#050A0D', borderTop: '1px solid #0ECCA8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://avatars.githubusercontent.com/u/189853051?v=4"
              alt="Khushi Yadav"
              className="w-9 h-9 rounded-full object-cover border border-accent"
            />
            <div>
              <div className="font-body text-sm text-primary">Khushi Yadav &copy; 2026</div>
              <div className="font-mono text-xs text-muted">Platform Lead &middot; code.scriet</div>
            </div>
          </div>
          <div className="flex gap-4">
            {NAV.map((h, i) => (
              <a key={h} href={h} className="font-mono text-xs text-muted hover:text-accent transition-colors">
                {LABELS[i]}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                 className="text-muted hover:text-accent transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border text-center font-mono text-xs text-muted/50">
          Built with React &middot; Vite &middot; Framer Motion &nbsp;&middot;&nbsp;
          <a href="mailto:khushiy9697@gmail.com" className="hover:text-accent transition-colors">khushiy9697@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
