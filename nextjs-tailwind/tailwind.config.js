const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '475px',
        '3xl': '1920px',
      },
      fontSize: {
        '2xs': ['0.625rem', '0.875rem'],
      },
      minHeight: {
        'inner-screen': 'calc(var(--vh, 1vh) * 100)',
      },
    },
  },
  plugins: [],
};
