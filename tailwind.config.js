/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7',
          400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857',
          800: '#065f46', 900: '#064e3b',
        },
        ink: {
          900: '#070b14', 850: '#0a1018', 800: '#0f1623', 700: '#161f30',
          600: '#1f2937', 500: '#2a3447',
        },
        accent: {
          DEFAULT: '#34d399', glow: '#10b981',
        },
        gridClean: '#34d399',
        gridPeak: '#f59e0b',
        gridHigh: '#ef4444',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at 30% 20%, rgba(16,185,129,0.15), transparent 60%)',
        'hero-aurora': 'radial-gradient(1200px 600px at 70% -10%, rgba(16,185,129,0.25), transparent 55%), radial-gradient(900px 500px at 10% 10%, rgba(52,211,153,0.12), transparent 60%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0,0,0,0.37)',
        glow: '0 0 24px rgba(16,185,129,0.45)',
        'glow-sm': '0 0 12px rgba(16,185,129,0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gauge-fill': 'gauge-fill 1.2s ease-out forwards',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        shimmer: { '0%': { backgroundPosition: '-1000px 0' }, '100%': { backgroundPosition: '1000px 0' } },
        'gauge-fill': { from: { strokeDashoffset: '283' }, to: { strokeDashoffset: '70' } },
      },
    },
  },
  plugins: [],
}
