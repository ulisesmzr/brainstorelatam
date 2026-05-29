import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#FFD400',
          hot: '#FFE600',
          dark: '#E6BE00',
          light: '#FFF5B8',
        },
        gold: '#C9A227',
        ink: '#0A0A0A',
        charcoal: '#1A1A1A',
        paper: '#FAFAF6',
      },
      fontFamily: {
        display: ['var(--font-manrope)', 'Manrope', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        mega: ['clamp(2.5rem, 11vw, 11rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        huge: ['clamp(2rem, 6.5vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.025em' }],
        big: ['clamp(1.75rem, 4.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'hero-int': ['clamp(2.25rem, 4.8vw, 4.25rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        section: ['clamp(1.75rem, 3.6vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
}

export default config
