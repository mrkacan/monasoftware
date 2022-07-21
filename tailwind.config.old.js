module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xsm: ["12px", { lineHeight: "160%", fontWeight: "400" }],
        sm: ["14px", { lineHeight: "160%", fontWeight: "400" }],
        base: ["16px", { lineHeight: "140%", fontWeight: "400" }],
        lg: ["22px", { lineHeight: "140%", fontWeight: "400" }],
        xl: ["29px", { lineHeight: "140%", fontWeight: "600" }],
        "2xl": ["44px", { lineHeight: "140%", fontWeight: "600" }],
        meduim: ["20px", { lineHeight: "140%", fontWeight: "600" }],
      },
      boxShadow: {
        lg: "0px 2px 20px rgba(0, 0, 0, 0.2)",
        base: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        Sora: ["Sora", "sans-serif"],
      },
      colors: {
        darkblue: "#001731",
        lightblue: "#4EB5DB",
        baseblue: "#2273BA",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
