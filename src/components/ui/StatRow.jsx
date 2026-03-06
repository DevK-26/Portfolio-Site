const STATS = [
  { num: '4+',  label: 'Projects Built'    },
  { num: '2',   label: 'Degrees Pursuing'  },
  { num: '10+', label: 'Technologies'      },
]

export default function StatRow() {
  return (
    <div className="flex flex-wrap gap-0 border-t border-border pt-8 mt-8">
      {STATS.map((s, i) => (
        <div
          key={s.num}
          className={`pr-8 ${i > 0 ? 'pl-8 border-l border-border' : ''}`}
        >
          <div className="font-display font-bold text-3xl text-accent leading-none">{s.num}</div>
          <div className="font-mono text-xs text-muted mt-1 tracking-wide">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
