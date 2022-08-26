module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'cel': '540px',
        'pc': '1024px',
        'tab': '720px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
}