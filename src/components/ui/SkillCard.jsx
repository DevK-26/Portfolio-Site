export default function SkillCard({ category }) {
  return (
    <div className="bg-surface border border-border rounded-lg p-6 transition-all duration-300 hover:border-accent hover:shadow-teal group border-l-2 border-l-accent">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">{category.icon}</span>
        <h3 className="font-display font-semibold text-primary">{category.label}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-1.5 bg-elevated border border-border rounded px-3 py-1.5
                       text-muted text-xs font-mono
                       hover:bg-accent-dim hover:border-accent hover:text-accent
                       transition-all duration-200 cursor-default"
          >
            <i
              className={`devicon-${skill.devicon}-plain${skill.colored ? ' colored' : ''} text-base`}
              aria-hidden="true"
            />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  )
}
