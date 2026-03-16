/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pornyami-orange': '#FF8C00',
        'pornyami-dark': '#020420',
        'pornyami-black': '#000000',
        'code-bg': '#0b0e14',
        'border-subtle': 'rgba(255, 255, 255, 0.1)',
        'border-orange': 'rgba(255, 140, 0, 0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glow-orange': '0 0 20px rgba(255, 140, 0, 0.3)',
        'glow-orange-lg': '0 0 40px rgba(255, 140, 0, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(255, 140, 0, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 140, 0, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 140, 0, 0.4)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'radial-orange': 'radial-gradient(circle at 50% 0%, rgba(255, 140, 0, 0.1), transparent 50%)',
        'gradient-orange': 'linear-gradient(135deg, #FF8C00 0%, #FF6B00 100%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
