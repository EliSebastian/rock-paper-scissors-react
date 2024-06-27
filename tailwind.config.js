// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { radialGradientPlugin } = require("./tailwind/radialGradientPlugin.ts");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [radialGradientPlugin],
};
