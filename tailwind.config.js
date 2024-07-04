/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        abstract:
          "url('https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=1060&t=st=1711134101~exp=1711134701~hmac=9590931691bf20c8c33c2a6615c858bb06826d702e8596fc4ca60e33f56a6c47')",
      },
      colors: {
        brand: "#8851F7",
        black: "#050709",
      },
      boxShadow: {
        "2xl": "0 10px 50px -5px rgba(136, 81, 247, 0.1)",
        "3xl": "0 20px 60px -5px rgba(136, 81, 247, 0.3)",
        "4xl": "0 0px 20px -3px rgba(136, 81, 247, 0.3)",
      },
    },
  },
  plugins: [],
};
