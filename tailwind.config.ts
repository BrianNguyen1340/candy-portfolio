import type { Config } from 'tailwindcss'
import tailwindAnimated from 'tailwindcss-animated'
import tailwindMotion from 'tailwindcss-motion'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xxs: '320px',
      xs: '480px',
      sm: '640px',
      md: '800px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
      'dancing-script': ['Dancing Script', 'cursive'],
      poppins: ['Poppins', 'sans-serif'],
      fascinate: ['Fascinate', 'cursive'],
      caveat: ['Caveat', 'cursive'],
    },
    extend: {
      boxShadow: {
        'custom-dark': 'inset 0 0 0 5px #fb6f92',
        'custom-light': 'inset 0 0 0 5px #29a587',
        globe: 'inset 0 0 0 0.125em #fff',
        circle: 'inset 0.1em 0 0 0.08em #fff',
      },
      animation: {
        'slide-down': 'slide-down 0.5s ease-in-out forwards',
        profile: 'profile 8s ease-in-out infinite 1s',
        globe: 'globe 5.4s cubic-bezier(0.35, 0, 0.65, 1) infinite',
        circle: 'circle 2.7s linear infinite',
        'digital-ball': 'digital-ball 10s ease-in-out infinite',
      },
      keyframes: {
        'slide-down': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        profile: {
          '0%': {
            'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            'border-radius': '30% 60% 70% 40% / 50% 60% 30% 60%;',
          },
          '100%': {
            'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%;',
          },
        },
        globe: {
          '0%': {
            transform: 'translate(-50%, -50%) rotate(15deg)',
          },
          '50%': {
            transform: 'translate(-50%, -50%) rotate(-15deg)',
          },
          '100%': {
            transform: 'translate(-50%, -50%) rotate(15deg)',
          },
        },
        circle: {
          '0%': {
            'border-radius': '50%',
            'box-shadow': 'inset 0.1em 0px 0px 0.08em #fff',
            width: '100%',
          },
          '49%': {
            'border-radius': '50%',
            'box-shadow': 'inset 0.1em 0px 0px 0.08em #fff',
            background: 'transparent',
          },
          '50%': {
            'border-radius': '0%',
            width: '0.175em',
            background: '#fff',
          },
          '51%': {
            'border-radius': '50%',
            'box-shadow': 'inset -0.1em 0px 0px 0.08em #fff',
            background: 'transparent',
          },
          '100%:': {
            'border-radius': '50%',
            'box-shadow': 'inset -0.1em 0px 0px 0.08em #fff',
            width: '100%',
          },
        },
        'digital-ball': {
          '0%': {
            'background-color': '#ff6b6b',
          },
          '25%': {
            'background-color': '#4ecdc4',
          },
          '50%': {
            'background-color': '#45b7d1',
          },
          '75%': {
            'background-color': '#96c93d',
          },
          '100%': {
            'background-color': '#ff6b6b',
          },
        },
      },
    },
  },
  plugins: [tailwindAnimated, tailwindMotion],
}
export default config
