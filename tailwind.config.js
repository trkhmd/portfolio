/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0A192F',
        'background-body':'#0A192F',
        "primary": "#FF9636",
        "secondary": "#e9c46a",
        "white-text": "#FFFFFF",
        
    },
    fontFamily: {
      mono: ["sf-mono", "sans-serif"],
      monobold: ["sf-mono-bold", "sans-serif"],
      heavy: ["sf-mono-heavy", "sans-serif"],
    },
    listStyleImage: {
      arrow : "url('/src/assets/arrow.png')",
    }
  },
  variants: {
    extend: {
      translate: ['hover'],
      textColor: ['hover'],
      
    },
  },
  plugins: [],
}
}
