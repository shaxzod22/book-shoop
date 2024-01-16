/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'325px',
      md:'478px',
      lg:'600px',
      xl:'900px',
      '2xl':'1100px',
      '3xl':'1330px',
    },
    extend: {},
    container:{
      center:true,
     
    }
  },
  plugins: [],
}