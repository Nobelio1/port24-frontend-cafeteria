import type { Config } from "tailwindcss";
//#470000

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "#4c2c22",
        textFooter: "#470000",
        overlay: "#00000080"
      },
    },
  },
  plugins: [],
};
export default config;
