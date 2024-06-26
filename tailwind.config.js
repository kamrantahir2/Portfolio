import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["raleway", "sans-serif"],
        permanentMarker: ["Permanent Marker", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
