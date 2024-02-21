import plugin from "tailwindcss/plugin";
import tailwindBaseFontSize from "tailwindcss-base-font-size";

function px(px) {
  return `${px / 16}rem`;
}

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Victor Mono", "mono"],
    },
    fontSize: {
      sm: "1.2rem",
      base: "1.4rem",
      lg: "1.6rem",
    },
    colors: {
      current: "currentColor",
      grey: {
        100: "#FFFFFF",
        200: "#F4F4F6",
        300: "#E9E9ED",
        400: "#DEDEE3",
        500: "#D3D3DA",
        600: "#C1C1C9",
        700: "#AFAFB7",
        800: "#9C9CA6",
        900: "#8A8A94",
      },
      raisin: {
        25: "#787883",
        50: "#666671",
        75: "#535360",
        100: "#41414E",
        200: "#383844",
        300: "#303039",
        400: "#27272F",
        500: "#1E1E24",
        600: "#19191E",
        700: "#141418",
        800: "#0E0E11",
        900: "#09090B",
      },
      primary: {
        25: "#E5EDE6",
        50: "#CCDBCE",
        75: "#B2C9B5",
        100: "#99B89C",
        200: "#7FA683",
        300: "#65946B",
        400: "#4C8252",
        500: "#327039",
        600: "#2C6333",
        700: "#26542B",
        800: "#204624",
        900: "#19381D",
        1000: "#133020",
      },
      secondary: {
        25: "#FDF8EC",
        50: "#FBF0D5",
        75: "#F9E7BD",
        100: "#F7DFA6",
        200: "#F6D78F",
        300: "#F4CF78",
        400: "#F2C660",
        500: "#F0BE49",
        600: "#E3B13B",
        700: "#D7A42C",
        800: "#CA961E",
        900: "#BD890F",
      },
      warning: {
        25: "#FCF1EE",
        50: "#F8DCD4",
        75: "#F3C6B9",
        100: "#EFB19F",
        200: "#EA9C85",
        300: "#E6876B",
        400: "#E17150",
        500: "#DD5C36",
        600: "#C9522F",
        700: "#B54827",
        800: "#A03D20",
        900: "#8C3318",
      },
      neutral: {
        100: "#FEFBF7",
        200: "#FCF8F0",
        300: "#FBF4E8",
        400: "#F9F1E1",
        500: "#F8EDD9",
        600: "#EDDECA",
        700: "#E3CFBC",
        800: "#D8C0AD",
        900: "#CDB19E",
      },
    },
    borderRadius: {
      sm: "6rem",
      md: ".8rem",
      lg: "1.2rem",
      xl: "1.6rem",
      "2xl": "2.4rem",
      "3xl": "3.2rem",
      "4xl": "4rem",
      full: "99999px",
    },
    extend: {
      width: {
        18: `${(18 * 4) / 10}rem`,
        112: `${(112 * 4) / 10}rem`,
        128: `${(128 * 4) / 10}rem`,
      },
      borderWidth: {
        12: "1.2rem",
      },
      borderRadius: {
        "4xl": "3.2rem",
      },
    },
  },
  plugins: [
    tailwindBaseFontSize({ baseFontSize: 10 }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".app-border": {
          border: `solid .1rem var(--app-border)`,
        },
        ".form-size-sm": {
          height: "3.2rem",
        },
        ".form-size-md": {
          height: "4rem",
        },
        ".form-size-lg": {
          height: "4.8rem",
        },
        ".text-title": {},
        ".text-lead": {},
        // gradients
        ".gradient-1": {
          backgroundColor: "#F4D03F",
          backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
        },
      });
    }),
  ],
};
