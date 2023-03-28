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
      slg: "1400px",
      xl: "1920px",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        secondWhite: "#F5F6F8",
        thirdWhite: "#7D7D7D",
        fourthWhite: "#F7F7F7",
        black: "#000000",
        secondBlack: "#202020",
        thirdBlack: "#232E3E",
        gray: "#818181",
        lightGray: "#A2A2A2",
        secondGray: "#E3E3E3",
        thirdGray: "#C7C7C7",
        fourthGray: "#F5F5F5",
        fifthGray: "#F1F1F1",
        sixthGray: "#B4B4B4",
        darkGray: "#DBDBDB",
        lightGreen: "#CEF2DA",
        darkGreen: "#0C611A",
        orange: "#F8991F",
        red: "#FF3A3A",
        lightPurple: "#DEE8FF",
        deepPurple: "#CAD7F5",
      },
      height: {
        60: "3.75rem",
      },
      minWidth: {
        374: "23.375rem", //374px
        152: "9.5rem", //152px
      },
      borderRadius: {
        2: "0.125rem",
        4: "0.25rem",
        6: "0.375rem",
      },
      fontSize: {
        "2xs": "0.625rem", //10px
        xs: "0.75rem", //12px
        sm: "0.875rem", //14px
        base: "1rem", //16px
        smd: "1.125rem", //18px
        22: "1.375rem", //22px
        28: "1.75rem", //25px
        26: "1.625rem", //25px
      },
      spacing: {
        1: "0.063rem",
        2: "0.125rem",
        4: "0.25rem",
        5: "0.313rem",
        6: "0.375rem",
        7: "0.438rem",
        8: "0.5rem",
        9: "0.563rem",
        10: "0.625rem",
        10.5: "0.656rem",
        11: "0.688rem",
        12: "0.75rem",
        13: "0.813rem",
        14: "0.875rem",
        15: "0.938rem",
        16: "1rem",
        17: "1.063rem",
        18: "1.125rem",
        20: "1.25rem",
        23: "1.438rem",
        24: "1.5rem",
        25: "1.563rem",
        26: "1.625rem",
        27: "1.688rem",
        28: "1.75rem",
        30: "1.875rem",
        32: "2rem",
        34: "2.125rem",
        35: "2.188rem",
        40: "2.5rem",
        41: "2.563rem",
        48: "3rem",
        54: "3.375rem",
        57: "3.563rem",
        66: "4.125rem",
        70: "4.375rem",
        80: "5rem",
        86: "5.375rem",
        90: "5.625rem",
        97: "6.063rem",
        100: "6.25rem",
        107: "6.688rem",
        122: "7.625rem",
        130: "8.125rem",
        144: "9rem",
        164: "10.25rem",
        160: "10rem",
        185: "11.563rem",
        245: "15.313rem",
        272: "17rem",
        290: "18.125rem",
        500: "31.25rem",
        1313: "82.063rem",
      },
      boxShadow: {
        "6md": "0px 0px 6px #00000029",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      lineHeight: {
        none: "1rem",
        14: "0.875rem", //19px
        16: "1rem", //19px
        19: "1.188rem", //19px
        21: "1.313rem", //21px
        24: "1.5rem", //21px
        30: "1.875rem", //21px
        normal: "1.5rem", //24px
        loose: "2.063rem", //33px
      },
    },
  },
  plugins: [],
};
