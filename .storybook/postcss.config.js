const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    require("tailwindcss"),
    postcssPresetEnv({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    }),
    require("postcss-flexbugs-fixes"),
  ],
};
