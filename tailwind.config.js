/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Work Sans", "sans-serif"],
      secondary: ["Segoe UI", "sans-serif"],
    },
    screens: {
      xs: "280px",
      sm: "428px",
      md: "768px",
      lg: "1024px",
      xl: "1920px",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        secondWhite: "#F5F6F8",
        black: "#000000",
        secondBlack: "#202020",
        thirdBlack: "#232E3E",
        gray: "#818181",
        lightGreen: "#CEF2DA",
        darkGreen: "#0C611A",
        orange: "#F8991F",
      },
      height: {
        60: "3.75rem",
      },
      minWidth: {
        374: "23.375rem", //374px
        152: "9.5rem", //152px
      },
      borderRadius: {
        4: "0.25rem",
        6: "0.375rem",
      },
      fontSize: {
        // '2xs': '0.625rem', //10px
        // xs: '0.75rem', //12px
        sm: "0.875rem", //14px
        base: "1rem", //16px
        smd: "1.125rem", //18px
        28: "1.75rem", //25px
        // md: '1.25rem', //20px
        // lg: '1.5rem', //24px
        // xl: '2rem', //32px
        // '2xl': '2.25rem', //36px
        // '3xl': '3rem', //48px
        // '4xl': '3.75rem', //60px
        // '5xl': '4.5rem', //72px
        // '6xl': '5rem', //80px
      },
      spacing: {
        // '1.5': '0.375rem',
        // '2.5': '0.625rem',
        // '7': '1.875rem',
        // '14': '3.5rem',
        // '15': '3.75rem',
        // '29': '7.5rem',
        // '60': '15rem',
        11: "0.688rem",
        15: "0.938rem",
        25: "1.563rem",
        28: "1.75rem",
        164: "10.25rem",
        160: "10rem",
      },
      boxShadow: {
        "6md": "0px 0px 6px #00000029",
      },
      lineHeight: {
        none: "1rem",
        // tight: '1.2',
        16: "1rem", //19px
        19: "1.188rem", //19px
        // snug: '1.3',
        21: "1.313rem", //21px
        normal: "1.5rem", //24px
        loose: "2.063rem", //33px
        // relaxed: '1.57',
        // loose: '1.66',
      },
    },
  },
  plugins: [],
};
