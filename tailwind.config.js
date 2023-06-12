/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
      tooltipArrows: theme => ({
          'danger-arrow': {
              borderColor: theme('colors.red.400'),
              borderWidth: 1,
              backgroundColor: theme('colors.red.200'),
              size: 10,
              offset: 10
          },
          'foo-arrow': {
              borderColor: '#f87171',
              borderWidth: 5,
              backgroundColor: '#67e8f9',
              size: 50,
              offset: 30
          },
          'bar-arrow': {
              borderColor: '#f87171',
              borderWidth: 5,
              backgroundColor: '#67e8f9',
              size: 50,
              offset: 30
          },
      }),
  },
  plugins: [
    require('tailwindcss-tooltip-arrow-after')()
  ],
}