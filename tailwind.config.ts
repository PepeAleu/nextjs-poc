import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        "sans": ["ui-sans-serif", "system-ui", "sans-serif", "\"Apple Color Emoji\"", "\"Segoe UI Emoji\"", "\"Segoe UI Symbol\"", "\"Noto Color Emoji\""],
        "serif": ["ui-serif", "Georgia", "Cambria", "\"Times New Roman\"", "Times", "serif"],
        "mono": ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "\"Liberation Mono\"", "\"Courier New\"", "monospace"],
        "icon": ["var(--font-inter)", "\"Apple Color Emoji\"", "\"Segoe UI Emoji\"", "\"Segoe UI Symbol\"", "\"Noto Color Emoji\""]
      },
      colors: {
        space_cadet: {
          DEFAULT: "#25283d",
          100: "#07080c",
          200: "#0f1018",
          300: "#161824",
          400: "#1d2030",
          500: "#25283d",
          600: "#44496f",
          700: "#656ca1",
          800: "#999dc0",
          900: "#cccee0",
        },
        plum: {
          DEFAULT: "#8f3985",
          100: "#1c0b1a",
          200: "#391735",
          300: "#55224f",
          400: "#722d6a",
          500: "#8f3985",
          600: "#b84dac",
          700: "#ca7ac0",
          800: "#dca6d5",
          900: "#edd3ea",
        },
        non_photo_blue: {
          DEFAULT: "#98dfea",
          100: "#0d3a40",
          200: "#1a7381",
          300: "#28adc1",
          400: "#59cbdd",
          500: "#98dfea",
          600: "#aee6ee",
          700: "#c2ecf3",
          800: "#d6f2f7",
          900: "#ebf9fb",
        },
        light_sea_green: {
          DEFAULT: "#07beb8",
          100: "#012625",
          200: "#034d4a",
          300: "#04736f",
          400: "#069a95",
          500: "#07beb8",
          600: "#0ff6ef",
          700: "#4bf8f3",
          800: "#87fbf7",
          900: "#c3fdfb",
        },
        champagne_pink: {
          DEFAULT: "#efd9ce",
          100: "#432516",
          200: "#864a2b",
          300: "#c37047",
          400: "#d9a48a",
          500: "#efd9ce",
          600: "#f2e0d7",
          700: "#f5e8e1",
          800: "#f9efeb",
          900: "#fcf7f5",
        },
      },
    },
  },
  plugins: [],
};
export default config;
