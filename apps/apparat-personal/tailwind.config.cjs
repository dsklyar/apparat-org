module.exports = {
  content: ["./src/**/*.{html,js}"],
  presets: [require("tailwind-config/tailwind.config.js")],
  theme: {
    extend: {
      colors: {
        default: "#FF0000",
      },
    },
  },
};
