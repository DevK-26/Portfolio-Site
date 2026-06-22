import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollNavbar } from '../../hooks/useScrollNavbar.js'
import Magnetic from '../ui/Magnetic.jsx'
import HoverLink from '../ui/HoverLink.jsx'

const NAV_LINKS = [
  { label: 'What I Do', href: '#services'   },
  { label: 'Work',      href: '#work'       },
  { label: 'Career',    href: '#experience' },
  { label: 'Contact',   href: '#contact'    },
]

export default function Navbar() {
  const scrolled = useScrollNavbar(60)
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-bg/70 backdrop-blur-md border-b border-border' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="container-wide px-5 sm:px-8 lg:px-14 h-16 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2 group" aria-label="Home">
            <span className="font-display font-semibold text-lg text-primary tracking-tight">Khushi Yadav</span>
            <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-accent -translate-y-[2px]" />
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="font-mono text-xs uppercase tracking-wide text-muted">
                  <HoverLink text={l.label} />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Magnetic strength={0.4} className="magnetic">
              <a href="#contact"
                 className="inline-flex font-mono text-[11px] uppercase tracking-wider text-bg bg-primary rounded-full px-5 py-2.5
                            hover:bg-accent transition-colors duration-300">
                Get in touch
              </a>
            </Magnetic>
          </div>

          <button className="md:hidden text-primary p-2" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={22} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-bg flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-display font-semibold text-lg text-primary">Khushi Yadav</span>
              <button onClick={() => setOpen(false)} className="text-primary p-2" aria-label="Close"><X size={24} /></button>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((l, i) => (
                <motion.a key={l.label} href={l.href}
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.08 }}
                  onClick={() => setOpen(false)}
                  className="font-display font-medium text-5xl text-primary uppercase hover:text-accent transition-colors py-3 border-b border-border">
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <a href="#contact" onClick={() => setOpen(false)}
               className="mt-auto block w-full text-center font-mono text-xs uppercase tracking-wider text-bg bg-primary rounded-full py-4">
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
