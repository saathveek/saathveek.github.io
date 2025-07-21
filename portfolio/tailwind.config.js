/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        // satisfy: ['Satisfy', 'cursive'],
        greatvibes: ['"Great Vibes"', 'cursive'],
        // ...other fonts if any
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
        '3xs': '0.5rem', // 8px

      },
      colors: {
        primary: "#5cbad0",      // Light blue
        secondary: "#eddf93",    // Cream
        accent: "#1f213b",       // Purple
        background: "#0f1623",   // Navy
        background_muted: "#38455c",  // Navy muted
        text: "#dfdbdf",          // White
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  plugins: [],
}

