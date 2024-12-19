/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Correct for your file structure
  ],
  theme: {
    extend: {

      screens: {
        'xs': '480px',    // Extra small devices
        'sm': '640px',    // Small devices (default)
        'md': '768px',    // Medium devices (default)
        'lg': '965px',   // Large devices (default)
        'xl': '1256px',   // Extra large devices (default)
        '2xl': '1536px',  // 2X large devices (default)
        'custom': '900px', // Custom breakpoint
      },

    },
  },
  plugins: [],
}
