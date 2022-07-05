module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,vue}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
