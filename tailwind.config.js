/** @type {import('tailwindcss').Config} */
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
        'gradient-spin': 'gradient-spin 3s linear infinite',
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
        'gradient-spin': {
          '0%':   { transform: 'rotate(0deg) scale(1.5)' },
          '100%': { transform: 'rotate(360deg) scale(1.5)' },
        },
      },
    },
  },
  plugins: [],
}
