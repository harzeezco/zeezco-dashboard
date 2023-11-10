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
        'gray-200': '#2e374a',
        'yellow-800': '#f7cb7375',
        'dark-800': '#afd6ee75',
        'pink-800': '#f7737375',
      },
      textColor: {
        textSoft: '#b7bac1',
      },
    },
  },
  plugins: [],
};
