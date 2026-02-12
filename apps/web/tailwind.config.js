/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['"Geist Sans"', 'ui-sans-serif', 'system-ui'],            mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};