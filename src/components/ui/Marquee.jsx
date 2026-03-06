const ITEMS = [
  'REACT','NEXT.JS','PYTHON','FASTAPI','POSTGRESQL','TYPESCRIPT',
  'DOCKER','TENSORFLOW','NODE.JS','MONGODB','TAILWIND','SCIKIT-LEARN',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden bg-accent-dim border-y border-border py-3">
      <div className="animate-marquee flex gap-0 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-xs text-accent tracking-[0.15em] px-5 flex items-center gap-5">
            {item}
            <span className="text-accent opacity-60">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
