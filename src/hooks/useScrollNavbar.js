import { useState, useEffect } from 'react'

export function useScrollNavbar(threshold = 60) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [threshold])
  return scrolled
}
