/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:"#FFFFFF",
        light:"#83858B",
        Primary:"#CFF9DF",
        secondary:"#B33086"
      },
      fontFamily:{
        'sansss': ['Nunito Sans'],
      }


    },
  },
  plugins: [],
}

