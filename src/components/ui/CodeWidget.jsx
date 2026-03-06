import { useEffect, useState } from 'react'

const LINES = [
  { text: '# Khushi Yadav — Portfolio',             color: '#6B8A95' },
  { text: 'stack = ["React", "FastAPI", "PostgreSQL"]', color: '#E2EEF2' },
  { text: 'education = ["IIT Madras BS", "CCSU B.Tech"]', color: '#E2EEF2' },
  { text: 'status   = "available_for_work"',         color: '#0ECCA8' },
  { text: 'passion  = "building things that scale"', color: '#E2EEF2' },
  { text: '',                                        color: '#E2EEF2' },
  { text: 'print(f"Let\'s build → {passion}")',      color: '#4CAF7D' },
]

export default function CodeWidget() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= LINES.length) return
    const t = setTimeout(() => setVisible((v) => v + 1), 380)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <div className="bg-elevated border border-border rounded-lg overflow-hidden shadow-teal-lg w-full max-w-[460px]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
        <span className="w-3 h-3 rounded-full bg-accent-green opacity-80" />
        <span className="ml-3 font-mono text-xs text-muted">khushi.py</span>
      </div>
      {/* Code */}
      <div className="px-5 py-4 space-y-1 font-mono text-sm leading-relaxed min-h-[200px]">
        {LINES.slice(0, visible).map((line, i) => (
          <div key={i} style={{ color: line.color }}>
            <span className="text-border-bright select-none mr-3 text-xs">{String(i + 1).padStart(2, '0')}</span>
            {line.text}
          </div>
        ))}
        {visible < LINES.length && (
          <div className="flex items-center gap-1 text-muted">
            <span className="text-border-bright select-none mr-3 text-xs">{String(visible + 1).padStart(2, '0')}</span>
            <span className="inline-block w-2 h-4 bg-accent animate-blink" />
          </div>
        )}
        {visible >= LINES.length && (
          <div className="mt-2 pt-2 border-t border-border text-accent-green font-mono text-xs">
            {'>'} Let's build → building things that scale
          </div>
        )}
      </div>
    </div>
  )
}
