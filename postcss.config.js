// @see https://nextjs.org/docs/advanced-features/customizing-postcss-config
// @see https://tailwindcss.com/docs/controlling-file-size/
// Next.js has a different way of handling postcss configuration file

module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-preset-env",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
};
