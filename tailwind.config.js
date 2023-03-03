const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

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
        'inner-screen': '100svh',
      },
    },
  },
  plugins: [
    // writing-mode対応(縦書き等)
    plugin(({ addUtilities }) => {
      addUtilities({
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      });
    }),
  ],
};
