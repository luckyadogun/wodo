module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#228B22'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
