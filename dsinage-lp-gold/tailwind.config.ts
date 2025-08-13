import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['var(--font-noto-serif-jp)', 'Noto Serif JP', 'serif'],
        'display': ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      colors: {
        'brand-gold': '#D9AE0A',
        'brand-amber': '#FF8C00',
        'brand-copper': '#B87333',
        'brand-black': '#0A0A0A',
        'brand-gray': '#2A2A2A',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #D9AE0A 0%, #FFD700 50%, #B8860B 100%)',
        'gradient-amber': 'linear-gradient(135deg, #FF8C00 0%, #FFA500 50%, #CC7000 100%)',
        'gradient-whisky': 'linear-gradient(180deg, rgba(217,174,10,0.1) 0%, rgba(184,115,51,0.05) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config