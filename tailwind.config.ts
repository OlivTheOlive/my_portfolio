import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,mjs}",
    "./src/components/**/*/*.{js,ts,jsx,tsx,mdx,mjs}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,mjs}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rotateLoop: "rotateLoop 5s infinite",
      },
      keyframes: {
        rotateLoop: {
          "0%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(-10deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
