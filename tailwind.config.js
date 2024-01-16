/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      xl:'1100px',
      '2xl':'1330px',
    },
    extend: {},
    container:{
      center:true,
     
    }
  },
  plugins: [],
}