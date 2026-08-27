/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#000000',
          800: '#111111',
          700: '#1c1c1c',
        },
        accent: {
          orange: '#fb4617',
          muted: '#878787',
          border: '#333333',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // PP Neue Montreal fallback
        mono: ['Fragment Mono', 'Space Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'marquee': 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
