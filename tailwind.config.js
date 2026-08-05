/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'seco-blue': '#3B60E4',
        'seco-blue-dark': '#2F4FC9',
        'seco-blue-light': '#EEF2FE',
        'seco-green': '#1E8E5A',
        'seco-green-dark': '#176E46',
        'seco-green-light': '#E1F4EE',
        'seco-slate': '#3D4654',
        'seco-muted': '#6B7280',
      }
    }
  },
  plugins: [],
};
