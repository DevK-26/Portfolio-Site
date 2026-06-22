import ThemeToggle from './ThemeToggle.jsx'

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-bg/80 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto max-w-reading px-5 sm:px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-medium tracking-tight text-fg">Khushi Yadav</a>
        <nav className="flex items-center gap-6">
          <ul className="hidden sm:flex items-center gap-6">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted hover:text-fg transition-colors duration-200">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
