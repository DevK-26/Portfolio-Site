import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollNavbar } from '../../hooks/useScrollNavbar.js'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Work',       href: '#work'        },
  { label: 'Experience', href: '#experience'  },
  { label: 'Contact',    href: '#contact'     },
]

export default function Navbar() {
  const scrolled = useScrollNavbar(60)
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="Home">
            <div className="w-9 h-9 rounded-full border-2 border-accent flex items-center justify-center
                            text-accent font-display font-bold text-sm group-hover:bg-accent-dim transition-colors">
              KY
            </div>
            <span className="hidden sm:block font-body text-sm text-muted group-hover:text-primary transition-colors">
              Khushi Yadav
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="nav-link px-4 py-2 block rounded">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact"
               className="font-mono text-xs font-medium text-accent border border-accent rounded px-4 py-2
                          hover:bg-accent-dim transition-all duration-200">
              Get in Touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-muted hover:text-primary transition-colors p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-surface flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display font-bold text-xl text-accent">KY</span>
              <button onClick={() => setOpen(false)} className="text-muted hover:text-primary p-2" aria-label="Close">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setOpen(false)}
                  className="font-display font-bold text-4xl text-primary hover:text-accent
                             transition-colors py-2 border-b border-border"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto">
              <a href="#contact" onClick={() => setOpen(false)}
                 className="block w-full text-center font-mono text-sm text-accent border border-accent rounded py-3 hover:bg-accent-dim transition-colors">
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
