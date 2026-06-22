import { motion } from 'framer-motion'

/** Subtle fade-and-rise on scroll into view. Intentionally restrained. */
export default function FadeIn({ children, as = 'div', delay = 0, className = '' }) {
  const M = motion[as] || motion.div
  return (
    <M
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </M>
  )
}
