const STATS = [
  { num: '4+',  label: 'Projects Shipped'   },
  { num: '20+', label: 'Technologies Used'  },
  { num: '2',   label: 'Degrees in Progress'},
  { num: '60+', label: 'GitHub Contributions'},
]

export default function StatRow() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border pt-8 mt-8">
      {STATS.map((s, i) => (
        <div
          key={s.num}
          className={`${i > 0 ? 'sm:border-l sm:border-border sm:pl-6' : ''}`}
        >
          <div className="font-display font-bold text-3xl text-accent leading-none">{s.num}</div>
          <div className="font-mono text-xs text-muted mt-1 tracking-wide">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
