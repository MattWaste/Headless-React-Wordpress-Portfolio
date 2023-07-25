module.exports = {
  content: ["./**/*.php", "./src/**/*.js","./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily:{ 
      display:[ 'Inter','sans-serif'],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")]
}
