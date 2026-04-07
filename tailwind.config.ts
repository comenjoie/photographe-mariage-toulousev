import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        anthracite: '#1C1C1E',
        gold: '#B8966C',
        mist: '#E8E4DC',
        white: '#FEFEFE',
        'gold-light': '#D4B896',
        'gold-dark': '#9A7A54',
        'anthracite-soft': '#2C2C2E',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['18px', { lineHeight: '1.7' }],
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.375rem, 2.5vw, 2rem)', { lineHeight: '1.2' }],
      },
      spacing: {
        section: '120px',
        'section-sm': '80px',
        'section-xs': '60px',
      },
      maxWidth: {
        prose: '70ch',
        content: '1200px',
        wide: '1440px',
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '4px',
        lg: '8px',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'luxury-in': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        'luxury-out': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
        '1200': '1200ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGold: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.3)', opacity: '1' },
        },
        grainShift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-1%, -1%)' },
          '20%': { transform: 'translate(1%, 1%)' },
          '30%': { transform: 'translate(-2%, 1%)' },
          '40%': { transform: 'translate(2%, -1%)' },
          '50%': { transform: 'translate(-1%, 2%)' },
          '60%': { transform: 'translate(1%, -2%)' },
          '70%': { transform: 'translate(2%, 2%)' },
          '80%': { transform: 'translate(-2%, -2%)' },
          '90%': { transform: 'translate(1%, 1%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        pulseGold: 'pulseGold 2s ease-in-out infinite',
        grain: 'grainShift 0.5s steps(1) infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #B8966C 0%, #D4B896 50%, #B8966C 100%)',
        'gradient-dark': 'linear-gradient(to bottom, transparent, rgba(28, 28, 30, 0.9))',
        'gradient-cream': 'linear-gradient(to bottom, #F5F0E8, #E8E4DC)',
      },
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}

export default config
