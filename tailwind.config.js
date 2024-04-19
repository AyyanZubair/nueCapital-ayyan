/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Didact Gothic']
      },
      colors: {
        themeBlack: "#000000",
        themeBlack2: "#22262A",
        themeGray: "#5E6437",
        themeGreenL1: "#8CD85D33",
        themeDarkGreen: "#033329",
        themeYellow: "#FFC42D",
        themeGreenl2: "#8CD85D4D",
        themelightgreen:"#98E16933"
      },
      
    //   backgroundImage: {
    //     // 'contactpattern': "url('./assests//images/Ellipse1.svg')",
    // }
    }
  },
  plugins: []
}
