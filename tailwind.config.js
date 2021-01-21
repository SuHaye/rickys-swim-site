const colors = require('tailwindcss/colors');
module.exports = {
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        gray: colors.trueGray
      },
    }
  },
  darkMode: false, // or 'media' or 'class'
  variants: {
  },
  plugins: [],
  purge: {
    mode: "layers",
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  }
};