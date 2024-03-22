import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'img-fundoTopo': "url(../Image/FundoTopo.jpg)"
      },
      colors: {
        'primary': '#FF0000',
    },
      fontFamily:{
        raleway: ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
