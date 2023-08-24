module.exports = {
  content: ["./**/*.php", "./src/**/*.js","./index.html",
  "./src/**/*.{js,ts,jsx,tsx,css}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    fontFamily:{ 
      display:[ 'Inter','sans-serif'],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),
           require("tw-elements-react/dist/plugin.cjs")],
           darkMode: "class"     
};
