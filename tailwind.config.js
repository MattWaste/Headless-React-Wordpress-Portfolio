module.exports = {
  content: ["./**/*.php", "./src/**/*.js","./index.html",
  "./src/**/*.{js,ts,jsx,tsx,css}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme:{
    screens:{
      'sm':{'max':'767px'},
    },
    extend: {
      fontFamily:{ 
      'sans': ['staramedium','Inter','sans-serif'],
      'Inter': ['Inter','sans-serif','staramedium',],
      'staramedium':[ 'staramedium','Inter','sans-serif'],
      'staraBold':[ 'starabold','Inter','sans-serif'],
      'staraItalic':[ 'staraitalic','Inter','sans-serif'],
      'starasemiBold':[ 'starasemibold','Inter','sans-serif'],
      'theanodidot':[ 'theanodidot','Inter','sans-serif'],
      'librecalson':[ 'librecalson','Inter','sans-serif'],
      'poppinsmedium':[ 'poppinsmedium','Inter','sans-serif'],
      spacing:{
        'vh': '98vh'
      }
    },
  },
  plugins: [require("@tailwindcss/typography"),
           require("tw-elements-react/dist/plugin.cjs")],
           darkMode: "class"     
}};
