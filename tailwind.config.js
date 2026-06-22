/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Monochrome base — near-black canvas, warm cream ink
        bg:            '#0A0A0A',
        surface:       '#0E0E0E',
        elevated:      '#141414',
        primary:       '#ECECE7',
        muted:         '#8A8A82',
        // Teal kept as the single restrained accent
        accent:        '#0ECCA8',
        'accent-dim':  '#0C2722',
        'accent-green':'#4CAF7D',
        border:        '#1E1E1C',
        'border-bright':'#2C2C29',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body:    ['Satoshi', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Fluid display sizes for the oversized kinetic headings
        'colossal': ['clamp(3.5rem, 15vw, 14rem)', { lineHeight: '0.92', letterSpacing: '-0.02em' }],
        'mega':  ['clamp(3rem, 11vw, 9rem)',    { lineHeight: '0.95', letterSpacing: '-0.015em' }],
        'huge':  ['clamp(2.5rem, 7vw, 5.5rem)', { lineHeight: '1.0',  letterSpacing: '-0.01em' }],
        'big':   ['clamp(2rem, 5vw, 3.75rem)',  { lineHeight: '1.08', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        teal: '0 0 24px rgba(14,204,168,0.16)',
        'teal-lg': '0 0 48px rgba(14,204,168,0.20)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-rev': 'marquee-rev 40s linear infinite',
        blink:   'blink 1s step-end infinite',
        pulse2:  'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'gradient-spin': 'gradient-spin 3s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
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
