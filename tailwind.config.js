/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        downy: {
          DEFAULT: '#74D3BB',
          50: '#FFFFFF',
          100: '#F0FAF8',
          200: '#D1F0E8',
          300: '#B2E7D9',
          400: '#93DDCA',
          500: '#74D3BB',
          600: '#49C6A6',
          700: '#34A387',
          800: '#267964',
          900: '#194E40',
          950: '#12392F',
        },
      },
    },
  },
  plugins: [],
};
