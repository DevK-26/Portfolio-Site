import { ExternalLink, Github, Folder } from 'lucide-react'

export function FeaturedProjectCard({ project }) {
  return (
    <div className="relative rounded-xl p-[1px] overflow-hidden group">
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent via-accent-green to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-spin" />
      <div className="relative bg-surface rounded-xl overflow-hidden grid lg:grid-cols-[1fr_380px] gap-0 transition-all duration-300">
        {/* Info */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Featured Project</span>
          <h3 className="font-display font-bold text-2xl lg:text-3xl text-primary mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
          <p className="text-muted text-sm leading-relaxed mb-6 max-w-md">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((t) => (
              <span key={t} className="font-mono text-xs px-3 py-1 bg-elevated border border-border rounded text-muted hover:text-accent hover:border-accent transition-colors">{t}</span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors">
              <Github size={14} /> Code
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 font-mono text-xs text-accent hover:underline transition-colors">
                <ExternalLink size={14} /> Demo ↗
              </a>
            )}
          </div>
        </div>
        {/* Browser Mockup with real screenshot */}
        <div className="hidden lg:flex bg-elevated border-l border-border items-center justify-center p-6">
          <div className="w-full max-w-[340px] rounded-lg overflow-hidden border border-border shadow-lg group-hover:shadow-teal transition-shadow duration-300">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-bg border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent-green/60" />
              <div className="ml-2 flex-1 bg-surface border border-border rounded text-xs font-mono text-muted px-2 py-0.5 truncate">
                {project.live ? project.live.replace('https://', '') : 'github.com/DevK-26'}
              </div>
            </div>
            {project.image ? (
              <div className="aspect-video bg-surface overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="aspect-video bg-gradient-to-br from-accent-dim via-surface to-elevated flex items-center justify-center">
                <div className="font-mono text-accent text-xs opacity-80">{'{'} preview {'}'}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function SmallProjectCard({ project }) {
  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden flex flex-col
                    hover:border-accent hover:shadow-teal hover:-translate-y-1
                    transition-all duration-300 group cursor-default">
      {/* Project thumbnail */}
      {project.image && (
        <div className="aspect-video bg-elevated overflow-hidden border-b border-border">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <Folder size={24} className="text-accent group-hover:scale-110 transition-transform" />
          <div className="flex gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="text-muted hover:text-accent transition-colors" aria-label="GitHub">
              <Github size={16} />
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                 className="text-muted hover:text-accent transition-colors" aria-label="Live">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
        <h3 className="font-display font-semibold text-lg text-primary mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.stack.map((t) => (
            <span key={t} className="font-mono text-xs text-muted">{t}</span>
          )).reduce((acc, el, i) => [
            ...acc,
            el,
            i < project.stack.length - 1
              ? <span key={`sep-${i}`} className="text-border-bright text-xs">·</span>
              : null
          ], []).filter(Boolean)}
        </div>
      </div>
    </div>
  )
}
