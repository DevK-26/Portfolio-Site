#!/usr/bin/env python3
"""Full Vite + React portfolio rebuild — Deep Ocean / Midnight Teal."""
import os, pathlib

ROOT = pathlib.Path(__file__).parent
def w(rel, content):
    p = ROOT / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content)
    print(f"  ✓ {rel}")

# ─────────────────────────────────────────────────────────────────────────────
# package.json
# ─────────────────────────────────────────────────────────────────────────────
w("package.json", r"""{
  "name": "khushi-portfolio",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "vite": "^5.3.1"
  }
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# vite.config.js
# ─────────────────────────────────────────────────────────────────────────────
w("vite.config.js", r"""import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
""")

# ─────────────────────────────────────────────────────────────────────────────
# tailwind.config.js
# ─────────────────────────────────────────────────────────────────────────────
w("tailwind.config.js", r"""/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:            '#080D10',
        surface:       '#0D1519',
        elevated:      '#121D22',
        primary:       '#E2EEF2',
        muted:         '#6B8A95',
        accent:        '#0ECCA8',
        'accent-dim':  '#0A2E28',
        'accent-green':'#4CAF7D',
        border:        '#122028',
        'border-bright':'#1A3A45',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['Nunito Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        teal: '0 0 24px rgba(14,204,168,0.20)',
        'teal-lg': '0 0 48px rgba(14,204,168,0.25)',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        blink:   'blink 1s step-end infinite',
        pulse2:  'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%,100%': { opacity: 1 },
          '50%':     { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# postcss.config.js
# ─────────────────────────────────────────────────────────────────────────────
w("postcss.config.js", r"""export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# index.html
# ─────────────────────────────────────────────────────────────────────────────
w("index.html", r"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Khushi Yadav — Full-Stack Developer & Data Science Engineer</title>
  <meta name="description" content="Portfolio of Khushi Yadav — Full-Stack Developer and Data Science Engineer. Building systems that scale." />
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Nunito+Sans:ital,opsz,wght@0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;1,6..12,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <!-- Devicons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/styles/index.css
# ─────────────────────────────────────────────────────────────────────────────
w("src/styles/index.css", r"""@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    @apply bg-bg text-primary font-body antialiased;
    background-color: #080D10;
  }
  ::selection { background: rgba(14,204,168,0.35); color: #E2EEF2; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #080D10; }
  ::-webkit-scrollbar-thumb { background: #1A3A45; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #0ECCA8; }
}

@layer components {
  .section-padding { @apply py-24 px-4 sm:px-8 lg:px-12; }
  .container-wide  { @apply max-w-7xl mx-auto; }
  .teal-underline {
    position: relative;
    display: inline-block;
  }
  .teal-underline::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    width: 100%; height: 2px;
    background: #0ECCA8;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  .teal-underline:hover::after { transform: scaleX(1); }

  .grain-overlay {
    position: fixed; inset: 0; pointer-events: none; z-index: 99;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.035;
  }

  .nav-link {
    @apply font-mono text-sm text-muted transition-colors duration-200 relative;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    width: 100%; height: 1.5px;
    background: #0ECCA8;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }
  .nav-link:hover { @apply text-accent; }
  .nav-link:hover::after { transform: scaleX(1); }
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/main.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/main.jsx", r"""import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/App.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/App.jsx", r"""import React from 'react'
import Navbar    from './components/layout/Navbar.jsx'
import Footer    from './components/layout/Footer.jsx'
import Hero       from './components/sections/Hero.jsx'
import About      from './components/sections/About.jsx'
import Skills     from './components/sections/Skills.jsx'
import Projects   from './components/sections/Projects.jsx'
import Experience from './components/sections/Experience.jsx'
import Contact    from './components/sections/Contact.jsx'

export default function App() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/data/projects.js
# ─────────────────────────────────────────────────────────────────────────────
w("src/data/projects.js", r"""export const PROJECTS = [
  {
    id: 'datapulse',
    featured: true,
    title: 'DataPulse Dashboard',
    description:
      'Real-time analytics platform with live data streaming, configurable KPI widgets, role-based access control, and exportable PDF reports. Built for engineering and product teams who need instant operational insight.',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'Chart.js', 'Docker', 'Redis'],
    github: 'https://github.com/DevK-26',
    live: 'https://github.com/DevK-26',
  },
  {
    id: 'shopflow',
    featured: false,
    title: 'ShopFlow E-Commerce',
    description:
      'End-to-end shopping platform — JWT auth, cart state, Stripe payments, and a full admin dashboard for inventory and order management.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
    github: 'https://github.com/DevK-26',
    live: 'https://github.com/DevK-26',
  },
  {
    id: 'sentimentscope',
    featured: false,
    title: 'SentimentScope',
    description:
      'NLP sentiment classification pipeline trained on 50k product reviews. Scikit-learn + FastAPI backend exposed as a clean REST API.',
    stack: ['Python', 'Scikit-learn', 'FastAPI', 'Pandas'],
    github: 'https://github.com/DevK-26',
    live: 'https://github.com/DevK-26',
  },
  {
    id: 'chatterbox',
    featured: false,
    title: 'ChatterBox',
    description:
      'Real-time group messaging with persistent rooms, live presence indicators, read receipts, and Redis-backed pub/sub message queues.',
    stack: ['React', 'Socket.io', 'Express', 'Redis', 'PostgreSQL'],
    github: 'https://github.com/DevK-26',
    live: 'https://github.com/DevK-26',
  },
]
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/data/skills.js
# ─────────────────────────────────────────────────────────────────────────────
w("src/data/skills.js", r"""export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🖥',
    skills: [
      { name: 'React',       devicon: 'react',       colored: true  },
      { name: 'Next.js',     devicon: 'nextjs',      colored: false },
      { name: 'TypeScript',  devicon: 'typescript',  colored: true  },
      { name: 'Tailwind',    devicon: 'tailwindcss', colored: true  },
      { name: 'HTML/CSS',    devicon: 'html5',       colored: true  },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Python',    devicon: 'python',     colored: true  },
      { name: 'FastAPI',   devicon: 'fastapi',    colored: true  },
      { name: 'Node.js',   devicon: 'nodejs',     colored: true  },
      { name: 'Express',   devicon: 'express',    colored: false },
      { name: 'GraphQL',   devicon: 'graphql',    colored: true  },
    ],
  },
  {
    id: 'data',
    label: 'Data / ML',
    icon: '📊',
    skills: [
      { name: 'Pandas',       devicon: 'pandas',      colored: true  },
      { name: 'NumPy',        devicon: 'numpy',       colored: true  },
      { name: 'Scikit-learn', devicon: 'scikitlearn', colored: true  },
      { name: 'TensorFlow',   devicon: 'tensorflow',  colored: true  },
      { name: 'PostgreSQL',   devicon: 'postgresql',  colored: true  },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Infra',
    icon: '🛠',
    skills: [
      { name: 'Git',    devicon: 'git',    colored: true  },
      { name: 'Docker', devicon: 'docker', colored: true  },
      { name: 'AWS',    devicon: 'amazonwebservices', colored: true },
      { name: 'Vercel', devicon: 'vercel', colored: false },
      { name: 'MongoDB',devicon: 'mongodb',colored: true  },
    ],
  },
]
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/data/experience.js
# ─────────────────────────────────────────────────────────────────────────────
w("src/data/experience.js", r"""export const EXPERIENCE = [
  {
    id: 'codescriet',
    type: 'work',
    role: 'Platform Lead',
    company: 'code.scriet',
    url: 'https://codescriet.dev',
    period: '2024 — Present',
    bullets: [
      'Leading technical platform development — owning full-stack delivery from architecture to production.',
      'Shipping full-stack web applications with auth, backend APIs, real-time features, and database integration.',
      'Mentoring junior developers and connecting data science theory with practical software engineering.',
    ],
    stack: ['React', 'Next.js', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'independent',
    type: 'work',
    role: 'Full-Stack Developer',
    company: 'Independent Projects',
    url: 'https://github.com/DevK-26',
    period: '2023 — Present',
    bullets: [
      'Built production applications from scratch — JWT auth, REST APIs, payment integration, admin dashboards.',
      'Designed maintainable architecture with clean repository patterns and CI/CD via GitHub Actions.',
      'Open-sourced multiple projects, documenting architecture and development decisions throughout.',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Vercel'],
  },
  {
    id: 'iitm',
    type: 'education',
    role: 'BS — Data Science & Applications',
    company: 'IIT Madras',
    url: 'https://study.iitm.ac.in',
    period: '2023 — Present',
    bullets: [
      'Rigorous curriculum spanning ML, deep learning, NLP, probabilistic models, and system design.',
      'Applied research prototyping — translating academic theory into working, tested implementations.',
    ],
    stack: ['Python', 'TensorFlow', 'Scikit-learn', 'SQL', 'Statistics'],
  },
  {
    id: 'btech',
    type: 'education',
    role: 'B.Tech — Computer Science & Engineering',
    company: 'CCSU Meerut',
    url: '#',
    period: '2022 — Present',
    bullets: [
      'Core CS fundamentals: algorithms, data structures, OS, networking, and database systems.',
      'Pursuing dual-degree path simultaneously with IIT Madras BS programme.',
    ],
    stack: ['C++', 'Java', 'DBMS', 'OS', 'Computer Networks'],
  },
]
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/hooks/useScrollNavbar.js
# ─────────────────────────────────────────────────────────────────────────────
w("src/hooks/useScrollNavbar.js", r"""import { useState, useEffect } from 'react'

export function useScrollNavbar(threshold = 60) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [threshold])
  return scrolled
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/hooks/useActiveSection.js
# ─────────────────────────────────────────────────────────────────────────────
w("src/hooks/useActiveSection.js", r"""import { useState, useEffect } from 'react'

export function useActiveSection(ids = []) {
  const [active, setActive] = useState(ids[0] ?? '')
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids.join(',')])
  return active
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/components/ui/SectionLabel.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/components/ui/SectionLabel.jsx", r"""export default function SectionLabel({ children }) {
  return (
    <div className="font-mono text-xs text-accent tracking-[0.18em] uppercase mb-6 flex items-center gap-3">
      <span className="w-6 h-px bg-accent inline-block" />
      {children}
      <span className="w-6 h-px bg-accent inline-block" />
    </div>
  )
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/components/ui/CodeWidget.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/components/ui/CodeWidget.jsx", r"""import { useEffect, useState } from 'react'

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
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/components/ui/StatRow.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/components/ui/StatRow.jsx", r"""const STATS = [
  { num: '12+',  label: 'Projects'      },
  { num: '8+',   label: 'Technologies'  },
  { num: '3+',   label: 'Years'         },
  { num: '100%', label: 'Remote Ready'  },
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
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/components/ui/Marquee.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/components/ui/Marquee.jsx", r"""const ITEMS = [
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
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/components/ui/SkillCard.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/components/ui/SkillCard.jsx", r"""export default function SkillCard({ category }) {
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
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/components/ui/ProjectCard.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/components/ui/ProjectCard.jsx", r"""import { ExternalLink, Github, Folder } from 'lucide-react'

export function FeaturedProjectCard({ project }) {
  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden grid lg:grid-cols-[1fr_380px] gap-0 hover:border-accent-dim hover:shadow-teal transition-all duration-300 group">
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
          <a href={project.live} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 font-mono text-xs text-accent hover:underline transition-colors">
            <ExternalLink size={14} /> Demo ↗
          </a>
        </div>
      </div>
      {/* Browser Mockup */}
      <div className="hidden lg:flex bg-elevated border-l border-border items-center justify-center p-6">
        <div className="w-full max-w-[320px] rounded-lg overflow-hidden border border-border shadow-lg">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-bg border-b border-border">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent-green/60" />
            <div className="ml-2 flex-1 bg-surface border border-border rounded text-xs font-mono text-muted px-2 py-0.5 truncate">
              datapulse.app/dashboard
            </div>
          </div>
          <div className="aspect-video bg-gradient-to-br from-accent-dim via-surface to-elevated flex items-center justify-center">
            <div className="text-center">
              <div className="font-mono text-accent text-xs mb-2 opacity-80">{'{'} live: true {'}'}</div>
              <div className="w-20 h-1 bg-accent rounded mx-auto mb-1 opacity-60"/>
              <div className="w-32 h-1 bg-border-bright rounded mx-auto mb-1"/>
              <div className="w-24 h-1 bg-border-bright rounded mx-auto"/>
              <div className="mt-4 grid grid-cols-3 gap-1.5 px-4">
                {[1,2,3].map(i => (
                  <div key={i} className="h-8 bg-accent-dim rounded border border-border-bright flex items-center justify-center">
                    <div className="w-3 h-1 bg-accent rounded opacity-60" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SmallProjectCard({ project }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 flex flex-col
                    hover:border-accent hover:shadow-teal hover:-translate-y-1
                    transition-all duration-300 group cursor-default">
      <div className="flex justify-between items-start mb-4">
        <Folder size={28} className="text-accent group-hover:scale-110 transition-transform" />
        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
             className="text-muted hover:text-accent transition-colors" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer"
             className="text-muted hover:text-accent transition-colors" aria-label="Live">
            <ExternalLink size={16} />
          </a>
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
  )
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/components/layout/Navbar.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/components/layout/Navbar.jsx", r"""import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollNavbar } from '../../hooks/useScrollNavbar.js'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Work',       href: '#work'        },
  { label: 'Experience', href: '#experience'  },
  { label: 'Contact',    href: '#contact'     },
]

export default function Navbar() {
  const scrolled = useScrollNavbar(60)
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="Home">
            <div className="w-9 h-9 rounded-full border-2 border-accent flex items-center justify-center
                            text-accent font-display font-bold text-sm group-hover:bg-accent-dim transition-colors">
              KY
            </div>
            <span className="hidden sm:block font-body text-sm text-muted group-hover:text-primary transition-colors">
              khushi.dev
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="nav-link px-4 py-2 block rounded">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA group */}
          <div className="hidden md:flex items-center gap-3">
            {/* Available pill */}
            <span className="flex items-center gap-1.5 font-mono text-xs text-accent-green border border-accent-green/30 rounded-full px-3 py-1 bg-accent-green/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse2" />
              Available for Work
            </span>
            {/* Hire Me button */}
            <a href="#contact"
               className="font-mono text-xs font-medium text-bg bg-accent rounded px-4 py-2
                          hover:bg-accent/90 hover:shadow-teal transition-all duration-200">
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-muted hover:text-primary transition-colors p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-surface flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display font-bold text-xl text-accent">KY</span>
              <button onClick={() => setOpen(false)} className="text-muted hover:text-primary p-2" aria-label="Close">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setOpen(false)}
                  className="font-display font-bold text-4xl text-primary hover:text-accent
                             transition-colors py-2 border-b border-border"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto">
              <a href="#contact" onClick={() => setOpen(false)}
                 className="block w-full text-center font-mono text-sm text-bg bg-accent rounded py-3 hover:bg-accent/90 transition-colors">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/components/layout/Footer.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/components/layout/Footer.jsx", r"""import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const SOCIALS = [
  { icon: Github,    href: 'https://github.com/DevK-26',                         label: 'GitHub'    },
  { icon: Linkedin,  href: 'https://linkedin.com/in/khushi-yadav-066946296',     label: 'LinkedIn'  },
  { icon: Twitter,   href: 'https://twitter.com/KhushiYadav008',                 label: 'Twitter'   },
  { icon: Instagram, href: 'https://instagram.com/khushi_.24__',                 label: 'Instagram' },
]

const NAV = ['#about','#work','#experience','#contact']
const NAV_LABELS = ['About','Work','Experience','Contact']

export default function Footer() {
  return (
    <footer style={{ background: '#050A0D', borderTop: '1px solid #0ECCA8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-accent flex items-center justify-center text-accent font-display font-bold text-xs">
              KY
            </div>
            <div>
              <div className="font-body text-sm text-primary">Khushi Yadav &copy; 2025</div>
              <div className="font-mono text-xs text-muted">Designed & Built by Khushi Yadav</div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex gap-4">
            {NAV.map((h, i) => (
              <a key={h} href={h}
                 className="font-mono text-xs text-muted hover:text-accent transition-colors">
                {NAV_LABELS[i]}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                 className="text-muted hover:text-accent transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center font-mono text-xs text-muted/50">
          Built with React · Vite · Framer Motion ✦
        </div>
      </div>
    </footer>
  )
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/components/sections/Hero.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/components/sections/Hero.jsx", r"""import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import CodeWidget from '../ui/CodeWidget.jsx'
import StatRow from '../ui/StatRow.jsx'
import Marquee from '../ui/Marquee.jsx'

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-bg"
        style={{ paddingTop: 64 }}
      >
        {/* Teal radial glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 20% 50%, rgba(14,204,168,0.07) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full py-16">
          <div className="grid lg:grid-cols-[1fr_460px] gap-16 items-center">
            {/* LEFT */}
            <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col">
              {/* Label */}
              <motion.p variants={fadeUp} className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-6">
                Full-Stack Developer &amp; Data Science Engineer
              </motion.p>

              {/* Heading */}
              <motion.h1
                variants={fadeUp}
                className="font-display font-bold leading-[0.95] mb-6"
                style={{ fontSize: 'clamp(3rem,9vw,5.75rem)' }}
              >
                Building Systems
                <br />
                That{' '}
                <span className="text-accent">Scale.</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p variants={fadeUp} className="font-body text-muted text-lg leading-relaxed mb-10 max-w-xl">
                Full-stack engineering meets data science. Available for roles that challenge both.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 font-mono text-sm font-medium
                             text-bg bg-accent rounded px-6 py-3
                             hover:bg-accent/90 hover:shadow-teal transition-all duration-200"
                >
                  View My Work <ArrowRight size={16} />
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 font-mono text-sm font-medium
                             text-accent border border-accent rounded px-6 py-3
                             hover:bg-accent-dim transition-all duration-200"
                >
                  Download Resume <ExternalLink size={14} />
                </a>
                <a
                  href="https://github.com/DevK-26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-muted
                             hover:text-accent transition-colors px-4 py-3"
                >
                  GitHub ↗
                </a>
              </motion.div>

              {/* Stats (desktop) */}
              <motion.div variants={fadeUp}>
                <StatRow />
              </motion.div>
            </motion.div>

            {/* RIGHT — Code widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex justify-center"
            >
              <CodeWidget />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <Marquee />
    </>
  )
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/components/sections/About.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/components/sections/About.jsx", r"""import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel.jsx'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
})

const FACT_CARDS = [
  { emoji: '📍', label: 'Based in India'             },
  { emoji: '🎓', label: 'B.Tech CS + BS IIT Madras'  },
  { emoji: '💼', label: 'Open to Remote & Onsite'    },
  { emoji: '⚡', label: 'Full-Stack + Data Science'   },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp(0)}>
            <SectionLabel>01 — About Me</SectionLabel>
          </motion.div>

          <div className="grid lg:grid-cols-[55fr_45fr] gap-14 items-start">
            {/* LEFT */}
            <div className="flex flex-col gap-6">
              <motion.h2
                variants={fadeUp(0.05)}
                className="font-display font-bold italic leading-tight text-primary"
                style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
              >
                The person behind the code.
              </motion.h2>

              <motion.div variants={fadeUp(0.1)} className="flex flex-col gap-4 text-muted text-sm leading-relaxed">
                <p>
                  I&rsquo;m <span className="text-primary font-medium">Khushi Yadav</span>, a full-stack developer
                  and data science engineer. I build end-to-end digital products — from responsive UIs to ML pipelines
                  — with a focus on clean architecture and thoughtful user experience.
                </p>
                <p>
                  My work sits at the intersection of software engineering and data.
                  I&rsquo;m equally comfortable designing REST APIs, optimizing database queries,
                  and training classification models — bridging the gap between product and intelligence.
                </p>
                <p>
                  Currently pursuing a dual-degree path:{' '}
                  <span className="text-accent">B.Tech CS&E at CCSU Meerut</span> &amp;{' '}
                  <span className="text-accent">BS Data Science at IIT Madras</span> — simultaneously
                  building production systems and academic ML foundations.
                </p>
              </motion.div>

              {/* Blockquote */}
              <motion.blockquote
                variants={fadeUp(0.15)}
                className="border-l-2 border-accent pl-5 text-primary font-body italic text-base leading-relaxed"
              >
                "I don&rsquo;t just write code — I architect solutions."
              </motion.blockquote>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-5">
              {/* 2x2 fact grid */}
              <motion.div variants={fadeUp(0.1)} className="grid grid-cols-2 gap-3">
                {FACT_CARDS.map((card) => (
                  <div
                    key={card.label}
                    className="bg-elevated border border-border rounded-lg p-4 text-sm font-body text-muted
                               hover:border-accent hover:text-primary transition-all duration-200 cursor-default"
                  >
                    <span className="block text-xl mb-2">{card.emoji}</span>
                    {card.label}
                  </div>
                ))}
              </motion.div>

              {/* Currently widget */}
              <motion.div
                variants={fadeUp(0.18)}
                className="bg-elevated border border-border rounded-lg p-5"
              >
                <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4">Currently</div>
                <div className="flex flex-col gap-3 text-sm font-body text-muted">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5">🔨</span>
                    <span><span className="text-primary">Building:</span> personal projects &amp; open source</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5">📚</span>
                    <span><span className="text-primary">Learning:</span> LLMs + system design</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5">🎯</span>
                    <span><span className="text-primary">Seeking:</span> SDE / MLE full-time roles</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/components/sections/Skills.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/components/sections/Skills.jsx", r"""import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel.jsx'
import SkillCard from '../ui/SkillCard.jsx'
import { SKILL_CATEGORIES } from '../../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>02 — Tech Stack</SectionLabel>
          <h2
            className="font-display font-bold text-primary mb-10"
            style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}
          >
            Tools I build with.
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {SKILL_CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <SkillCard category={cat} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/components/sections/Projects.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/components/sections/Projects.jsx", r"""import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel.jsx'
import { FeaturedProjectCard, SmallProjectCard } from '../ui/ProjectCard.jsx'
import { PROJECTS } from '../../data/projects.js'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured)
  const rest = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="work" className="section-padding bg-surface">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <SectionLabel>03 — Selected Work</SectionLabel>
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <h2
              className="font-display font-bold italic text-primary"
              style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}
            >
              Things I&rsquo;ve built.
            </h2>
            <a
              href="https://github.com/DevK-26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              All repos on GitHub <ExternalLink size={12} />
            </a>
          </div>

          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <FeaturedProjectCard project={featured} />
          </motion.div>

          {/* 3-col grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <SmallProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/components/sections/Experience.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/components/sections/Experience.jsx", r"""import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel.jsx'
import { EXPERIENCE } from '../../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-bg">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <SectionLabel>04 — Experience</SectionLabel>
          <h2
            className="font-display font-bold text-primary mb-14"
            style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}
          >
            Where I&rsquo;ve worked.
          </h2>

          <div className="relative">
            {/* Vertical teal line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-accent/30 hidden md:block" />

            <div className="flex flex-col gap-6">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="md:pl-12 relative"
                >
                  {/* Circle node */}
                  <div className="absolute left-0 top-5 w-7 h-7 rounded-full border-2 border-accent bg-bg
                                  items-center justify-center hidden md:flex">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>

                  <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent hover:shadow-teal transition-all duration-300 group">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-display font-semibold text-lg text-primary group-hover:text-accent transition-colors">
                            {exp.role}
                          </h3>
                          {exp.type === 'education' && (
                            <span className="font-mono text-xs text-muted border border-border rounded px-2 py-0.5">Education</span>
                          )}
                        </div>
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-accent hover:underline"
                        >
                          {exp.company} ↗
                        </a>
                      </div>
                      <span className="font-mono text-xs text-muted whitespace-nowrap">{exp.period}</span>
                    </div>

                    <ul className="flex flex-col gap-2 mb-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted font-body leading-relaxed">
                          <span className="text-accent mt-1 flex-shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.stack.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2.5 py-1 bg-elevated border border-border rounded text-muted hover:text-accent hover:border-accent transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
""")

# ─────────────────────────────────────────────────────────────────────────────
# src/components/sections/Contact.jsx
# ─────────────────────────────────────────────────────────────────────────────
w("src/components/sections/Contact.jsx", r"""import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel.jsx'
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowRight, Copy, Check } from 'lucide-react'

const EMAIL = 'khushiy9697@gmail.com'
const SOCIALS = [
  { icon: Github,    label: 'GitHub',    href: 'https://github.com/DevK-26'                       },
  { icon: Linkedin,  label: 'LinkedIn',  href: 'https://linkedin.com/in/khushi-yadav-066946296'  },
  { icon: Twitter,   label: 'Twitter',   href: 'https://twitter.com/KhushiYadav008'              },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/khushi_.24__'              },
]

function InputField({ label, type = 'text', multiline = false }) {
  const [focused, setFocused] = useState(false)
  const base = `w-full bg-transparent text-primary font-body text-sm placeholder-muted/50
                border-b pb-3 pt-2 outline-none transition-colors duration-200 resize-none`
  const borderClass = focused ? 'border-accent' : 'border-border-bright'

  return (
    <div>
      {multiline ? (
        <textarea rows={5} placeholder={label} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
                  className={`${base} ${borderClass}`} required />
      ) : (
        <input type={type} placeholder={label} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
               className={`${base} ${borderClass}`} required />
      )}
    </div>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <SectionLabel>05 — Contact</SectionLabel>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT */}
            <div>
              <h2
                className="font-display font-bold text-primary mb-5 leading-tight"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)' }}
              >
                Let&rsquo;s build something{' '}
                <span className="text-accent">real.</span>
              </h2>
              <p className="font-body text-muted text-sm leading-relaxed mb-8 max-w-md">
                Open to full-time roles, freelance collaborations, and interesting projects.
                If you have something in mind — let&rsquo;s talk.
              </p>

              {/* Click-to-copy email */}
              <div className="relative mb-8">
                <button
                  onClick={copy}
                  className="flex items-center gap-3 font-mono text-sm text-accent
                             bg-elevated border border-border rounded-lg px-5 py-3
                             hover:border-accent hover:shadow-teal transition-all duration-200 group"
                >
                  <Mail size={15} />
                  {EMAIL}
                  {copied ? <Check size={14} className="text-accent-green" /> : <Copy size={14} className="text-muted group-hover:text-accent transition-colors" />}
                </button>
                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="absolute -top-9 left-0 bg-elevated border border-accent rounded px-3 py-1
                                 font-mono text-xs text-accent-green whitespace-nowrap"
                    >
                      ✓ Copied to clipboard
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Response time */}
              <p className="font-mono text-xs text-muted mb-8">
                ⚡ Usually responds within 24 hours
              </p>

              {/* Socials */}
              <div className="flex flex-wrap gap-3 mb-8">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 font-mono text-xs text-muted
                                border border-border rounded px-3 py-2
                                hover:border-accent hover:text-accent hover:bg-accent-dim
                                transition-all duration-200"
                  >
                    <Icon size={13} /> {label}
                  </a>
                ))}
              </div>

              {/* Status card */}
              <div className="bg-elevated border border-border rounded-lg px-5 py-4 flex items-center gap-3 max-w-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-green animate-pulse2 flex-shrink-0" />
                <div>
                  <div className="font-body text-sm text-primary">Available</div>
                  <div className="font-mono text-xs text-muted">Open to full-time &amp; freelance</div>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <form className="flex flex-col gap-7" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-7">
                <InputField label="Full Name" />
                <InputField label="Email Address" type="email" />
              </div>
              <InputField label="Subject" />
              <InputField label="Your Message" multiline />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 font-mono text-sm font-medium
                           text-bg bg-accent rounded py-3.5
                           hover:bg-accent/90 hover:shadow-teal transition-all duration-200"
              >
                Send Message <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
""")

print("\n✅ All files written successfully!")
print("   Next: cd vite-portfolio && npm install && npm run dev")
