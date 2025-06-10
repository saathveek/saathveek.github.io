/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5cbad0",      // Light blue
        secondary: "#dfdbdf",    // White       Change maybe?
        accent: "#1f213b",       // Purple
        background: "#0f1623",   // Navy
        background_muted: "#38455c",  // Navy muted
        text: "#dfdbdf"          // White
      },
    },
  },
  plugins: [],
}

