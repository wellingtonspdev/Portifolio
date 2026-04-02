/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#0f172a',
        },
        primary: {
          DEFAULT: '#0f172a',
          dark: '#F9FAFB',
        },
        secondary: {
          DEFAULT: '#6b7280',
          dark: '#9CA3AF',
        },
        accent: {
          start: '#8b5cf6',
          end: '#6366f1',
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          hover: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(120deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-hover': '0 10px 40px rgba(0, 0, 0, 0.2)',
        'neon': '0 0 20px rgba(139, 92, 246, 0.3)',
      },
      animation: {
        'float': 'float 10s infinite ease-in-out alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(20px, 40px) scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
}
