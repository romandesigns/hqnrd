import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      colors: {
        brand_neutral: "#1a1a1a",
        brand_accent: "#0b5fa3",
        primary: {
          50: "#f2fbff",
          100: "#bddef0",
          200: "#8dc2e0",
          300: "#62a7d1",
          400: "#3c8cc2",
          500: "#1a73b2",
          600: "#136bad",
          700: "#0b5fa3",
          800: "#045194",
          900: "#004280",
        },
        secondary: {
          50: "#f2fffe",
          100: "#bdf0eb",
          200: "#8de0d9",
          300: "#62d1ca",
          400: "#3cc2bb",
          500: "#1ab2ad",
          600: "#13adab",
          700: "#0ba3a3",
          800: "#049194",
          900: "#007b80",
        },
        tertiary: {
          50: "#fff6f2",
          100: "#f0ccbd",
          200: "#e0a68d",
          300: "#d18562",
          400: "#c2693c",
          500: "#b24f1a",
          600: "#ad4c13",
          700: "#a3460b",
          800: "#943e04",
          900: "#803500",
        },
        neutral: {
          50: "#edf8ff",
          100: "#c2cbd1",
          200: "#989ea3",
          300: "#6f7478",
          400: "#45474a",
          500: "#191a1b",
          600: "#14181c",
          700: "#0d141c",
          800: "#07101c",
          900: "#000c1c",
        },
      },
    },
  },
  plugins: [],
};
export default config;
