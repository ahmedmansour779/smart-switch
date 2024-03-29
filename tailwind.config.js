/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#3BA3DB',
        'seconder': '#fff'
      },
      textColor: {
        'primary': '#3BA3DB',
        'seconder': '#fff'
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        seconder: ["Inter", 'sans-serif']
      },
    },
  },
  plugins: [],
}

