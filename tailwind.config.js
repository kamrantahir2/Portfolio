import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["raleway", "sans-serif"],
        permanentMarker: ["Permanent Marker", "sans-serif"],
        gothicExpanded: ["Special Gothic Expanded One", "sans-serif"],
      },
      keyframes: {
        "logo-cloud": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 4rem))" },
        },
      },
      animation: {
        "logo-cloud": "logo-cloud 30s linear infinite", // Adjust duration and timing as needed for your design.
      },
    },
  },
  plugins: [daisyui],
};
