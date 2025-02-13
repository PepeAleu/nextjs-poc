import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'serif': ['Georgia', 'serif'],
      'mono': ["'Roboto'", 'Menlo', 'monospace'],
    },
    extend: {
      color: {
        'primary': '#ed1d24',
        'secondary': '#000',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
