/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },

      colors: {
        dark: "#4c5773",
        light: "#ecf0f3",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        // darkMode: "#262626",
        // darkModeBg: "#333333",
        // darkModeText: "#666666",
        // darkModeHover: "#ffee10",
        purple: "#c429e3",
        yellow: "#e3cc20",
        lightPrimary: "#ffffff",
      },

      animation: {
        "spin-slow": "spin 8s linear infinite",
      },

      boxShadow: {
        custom: "1rem 1rem 1rem #d3dae7, -1rem -1rem 1rem #fff",
        custom1: "1rem 1rem 1rem #d3dae7, -0.5rem -1rem 1rem #fff",
        custom2: "1rem 1rem 1rem #d3dae7, -0.3rem -1rem 1rem #fff",
        custom3:
          "1rem 1rem 1rem rgb(76, 87, 115, 0.7), -0.5rem -0.6rem 1rem rgb(255, 255, 255, 0.1)",
        customDark: "0 0 5px #ffee10",
        customDarkBefore: "0 0 15px #ffee10",
      },

      dropShadow: {
        'xl': '0 0 5px #ffee10',
        '2xl': '0 0 15px #ffee10'
      },

      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(#4c5773 2px, #ecf0f3 10px, #ecf0f3 100px)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
