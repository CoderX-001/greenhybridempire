/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#33b160",
        secondary: "#55f68f",
        "dark-green": "#336645",
        "primary-gray": "#f1f1f1",
        "secondary-gray": "#979ea4",
      },
    },
  },
  plugins: [],
};

