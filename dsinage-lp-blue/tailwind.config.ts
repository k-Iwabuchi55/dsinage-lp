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
        'brand-blue': '#0066cc',
        'brand-light-blue': '#00aaff',
        'brand-cyan': '#00d4ff',
        'brand-dark': '#1a1a1a',
        'brand-gray': '#2A2A2A',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-blue': 'linear-gradient(135deg, #0066cc 0%, #00aaff 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #00aaff 0%, #00d4ff 50%, #0099cc 100%)',
        'gradient-ocean': 'linear-gradient(180deg, rgba(0,102,204,0.1) 0%, rgba(0,170,255,0.05) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'rotate-3d': 'rotate3d 20s linear infinite',
        'rotate-3d-slow': 'rotate3d 30s linear infinite',
        'fadeIn': 'fadeInUp 0.5s ease-out',
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
        rotate3d: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config