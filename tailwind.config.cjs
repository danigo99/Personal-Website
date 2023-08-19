/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", 'Inter', 'sans-serif']
      },
      spacing: {
        '128': '32rem'
      },
      borderRadius: {
        'container': '2rem'
      },
      colors: {
        background: "#f7f2f2",
        darkGrey: "#1a1a1a"
      }
    }
  },
  plugins: [],
}
