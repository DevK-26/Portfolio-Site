import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function PageLoader({ onComplete }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const id = setInterval(() => {
      // ease toward 100 with a little randomness for a hand-tuned feel
      current += Math.max(1, Math.round((100 - current) * 0.06) + Math.random() * 3)
      if (current >= 100) {
        current = 100
        clearInterval(id)
        // hold a beat at 100, then hand off to the wipe
        setTimeout(() => onComplete?.(), 450)
      }
      setCount(Math.min(100, Math.floor(current)))
    }, 32)
    return () => clearInterval(id)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center overflow-hidden"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="font-mono text-[11px] tracking-[0.35em] uppercase text-muted mb-6"
      >
        Khushi Yadav
      </motion.span>

      <div className="font-display font-bold text-primary leading-none tabular-nums"
           style={{ fontSize: 'clamp(4rem, 16vw, 11rem)' }}>
        {String(count).padStart(3, '0')}
      </div>

      {/* progress hairline */}
      <div className="mt-8 h-px w-56 max-w-[60vw] bg-border overflow-hidden">
        <div className="h-full bg-accent" style={{ width: `${count}%` }} />
      </div>
    </motion.div>
  )
}
