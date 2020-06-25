// TODO: is this line required?
const tailwindcss = require("tailwindcss");

module.exports = ({ config }) => {
  const aliases = config.resolve.alias || (config.resolve.alias = {});
  aliases.react = aliases["react-dom"] = "preact/compat";

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
    ],
  });

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
