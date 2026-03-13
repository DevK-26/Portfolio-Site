import { useEffect, useRef, useState } from 'react'

const STATS = [
  { num: 5,   suffix: '+', label: 'Projects Shipped'   },
  { num: 20,  suffix: '+', label: 'Technologies Used'  },
  { num: 2,   suffix: '',  label: 'Degrees in Progress'},
  { num: 60,  suffix: '+', label: 'GitHub Contributions'},
]

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 1200
          const steps = 40
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function StatRow() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border pt-8 mt-8">
      {STATS.map((s, i) => (
        <div
          key={s.label}
          className={`${i > 0 ? 'sm:border-l sm:border-border sm:pl-6' : ''}`}
        >
          <div className="font-display font-bold text-3xl text-accent leading-none">
            <AnimatedNumber value={s.num} suffix={s.suffix} />
          </div>
          <div className="font-mono text-xs text-muted mt-1 tracking-wide">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
