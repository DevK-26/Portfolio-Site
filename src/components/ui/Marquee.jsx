const ITEMS = [
  'REACT', 'NEXT.JS', 'PYTHON', 'FASTAPI', 'POSTGRESQL', 'TYPESCRIPT',
  'DOCKER', 'TENSORFLOW', 'NODE.JS', 'MONGODB', 'TAILWIND', 'SCIKIT-LEARN',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden border-y border-border py-5 bg-surface">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display font-semibold text-2xl sm:text-4xl tracking-tight px-7 flex items-center gap-7 text-primary"
          >
            {item}
            <span className="text-accent text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
