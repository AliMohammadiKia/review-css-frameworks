/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // fontFamily: {
    //   sans: ["Yuji Mai", "serif"],
    // },
    extend: {
      colors: {
        primary: "orangered",
        secondary: "red",
      },
      // fontFamily: {
      //   yuji: ["Yuji Mai", "serif"],
      // },
    },
  },
  plugins: [],
};
