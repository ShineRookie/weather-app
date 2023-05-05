/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 20px 30px 0px rgba(80, 137, 145, 0.10);",
        input: "0px 6px 6px 0px rgba(130, 108, 127, 0.25);",
      },
    },
  },
  plugins: [],
};
