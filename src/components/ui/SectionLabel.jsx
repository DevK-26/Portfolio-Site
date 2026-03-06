export default function SectionLabel({ children }) {
  return (
    <div className="font-mono text-xs text-accent tracking-[0.18em] uppercase mb-6 flex items-center gap-3">
      <span className="w-6 h-px bg-accent inline-block" />
      {children}
      <span className="w-6 h-px bg-accent inline-block" />
    </div>
  )
}
