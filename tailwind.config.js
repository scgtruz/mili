/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#f0faf7',
          100: '#d7f2ea',
          200: '#b0e5d6',
          300: '#84d1bf',
          400: '#48b69e',
          500: '#369883',
          600: '#2c7a6a',
          700: '#266356',
          800: '#234e46',
          900: '#1f403b',
        },
        coral: {
          50: '#fff1f0',
          100: '#ffe4e1',
          200: '#ffc9c2',
          300: '#ffa198',
          400: '#ff6b5b',
          500: '#ff4530',
          600: '#ed3420',
          700: '#c52616',
          800: '#9e2217',
          900: '#812118',
        },
        sunshine: {
          50: '#fff9eb',
          100: '#ffefc7',
          200: '#ffdd89',
          300: '#ffc44c',
          400: '#ffae24',
          500: '#ff9908',
          600: '#cc7002',
          700: '#a14f06',
          800: '#843d0b',
          900: '#6d330c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        architect: ['"Architects Daughter"', 'cursive'],
      },
    },
  },
  plugins: [],
};