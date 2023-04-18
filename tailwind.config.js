/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: ['emerald'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    center: true,
    prefix: "",
    darkTheme: "dark",
  }
}

