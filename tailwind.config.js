const plugin = require("tailwindcss/plugin");

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: 80, fontWeight: 700 },
        h2: { fontSize: 24, fontWeight: 700 },
        h3: { fontSize: 18, fontWeight: 700 },
      });
    }),
  ],
};
export default config;
