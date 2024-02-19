import plugin from "tailwindcss/plugin";
import {} from "tailwindcss/defaultTheme";

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
      sm: px(6),
      md: px(8),
      lg: px(12),
      xl: px(16),
      "2xl": px(24),
      "3xl": px(32),
      "4xl": px(40),
      full: px(9999),
    },
    extend: {
      width: {
        18: px(18 * 4),
        112: px(112 * 4),
        128: px(128 * 4),
      },
      borderWidth: {
        12: px(12),
      },
      borderRadius: {
        "4xl": px(32),
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".form-size-sm": {
          height: px(32),
        },
        ".form-size-md": {
          height: px(40),
        },
        ".form-size-lg": {
          height: px(48),
        },
        ".text-label": {
          fontSize: px(14),
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
