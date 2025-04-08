/** @type {import('tailwindcss').Config} */
export default {
    content: ["./*.html"], // Add paths to your HTML or components
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")], // Ensure DaisyUI is included
  }