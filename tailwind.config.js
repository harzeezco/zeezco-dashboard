/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        bg: '#151c2c',
        bgSoft: '#182237',
        'gray-200': '#2e374a'
      },
      textColor: {
        textSoft: '#b7bac1',
      },
    },
  },
  plugins: [],
}
