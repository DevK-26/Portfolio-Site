import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme.js'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid place-items-center w-9 h-9 rounded-full border border-border text-muted
                 hover:text-fg hover:border-faint transition-colors duration-200"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
