/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ]
  ,
  theme: {
    extend: {
      colors:{
      "bgblue":"#002a5a",
      "grey":"#4c6889",
      "inpblue":"#274b73",
      "btngrey":"#7f94ab",
      "txt":"#25939e",
      "hover":"#34d399"
      
        
      }
    },
  },
  plugins: [],
}

