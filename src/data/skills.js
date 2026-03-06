export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🖥',
    skills: [
      { name: 'HTML/CSS',   devicon: 'html5',       colored: true  },
      { name: 'JavaScript', devicon: 'javascript',  colored: true  },
      { name: 'React',      devicon: 'react',       colored: true  },
      { name: 'Tailwind',   devicon: 'tailwindcss', colored: true  },
      { name: 'TypeScript', devicon: 'typescript',  colored: true  },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Python',  devicon: 'python',  colored: true  },
      { name: 'Node.js', devicon: 'nodejs',  colored: true  },
      { name: 'Express', devicon: 'express', colored: false },
      { name: 'FastAPI', devicon: 'fastapi', colored: true  },
      { name: 'MongoDB', devicon: 'mongodb', colored: true  },
    ],
  },
  {
    id: 'data',
    label: 'Data / ML',
    icon: '📊',
    skills: [
      { name: 'Pandas',       devicon: 'pandas',     colored: true  },
      { name: 'NumPy',        devicon: 'numpy',      colored: true  },
      { name: 'Scikit-learn', devicon: 'scikitlearn',colored: true  },
      { name: 'Matplotlib',   devicon: 'matplotlib', colored: true  },
      { name: 'SQL',          devicon: 'postgresql', colored: true  },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: '🛠',
    skills: [
      { name: 'Git',     devicon: 'git',        colored: true  },
      { name: 'GitHub',  devicon: 'github',     colored: false },
      { name: 'VS Code', devicon: 'vscode',     colored: true  },
      { name: 'Vite',    devicon: 'vitejs',     colored: true  },
      { name: 'Vercel',  devicon: 'vercel',     colored: false },
    ],
  },
]
