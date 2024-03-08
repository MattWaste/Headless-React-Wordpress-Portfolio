module.exports = {
  content: ["./**/*.php", "./src/**/*.js","./index.html",
  "./src/**/*.{js,ts,jsx,tsx,css}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
    fontFamily:{ 
      'stara':[ 'staramedium','Inter','sans-serif'],
      // 'staraBold':[ 'starabold','Inter','sans-serif'],
      // 'staraItalic':[ 'staraitalic','Inter','sans-serif'],
      // 'starasemiBold':[ 'starasemibold','Inter','sans-serif'],

    },
  },
  plugins: [require("@tailwindcss/typography"),
           require("tw-elements-react/dist/plugin.cjs")],
           darkMode: "class"     
}};
