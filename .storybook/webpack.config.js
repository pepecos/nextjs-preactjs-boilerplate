const path = require("path");
const util = require("util");

module.exports = ({ config }) => {
  const postcssPath = path.join(__dirname, "postcss.config.js");

  const aliases = config.resolve.alias || (config.resolve.alias = {});
  aliases.react = aliases["react-dom"] = "preact/compat";

  // We remove the CSS configuration as it's taking the wrong postcss file
  config.module.rules[2] = {
    test: /\.css$/,
    sideEffects: true,
    use: [
      { loader: require.resolve("style-loader") },
      { loader: require.resolve("css-loader"), options: { importLoaders: 1 } },
      {
        loader: "postcss-loader",
        options: {
          config: {
            path: postcssPath,
          },
          ident: "postcss",
          sourceMap: true,
        },
      },
    ],
  };

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
      {
        loader: require.resolve("babel-loader"),
      },
    ],
  });

  config.resolve.extensions.push(".ts", ".tsx");

  // console.log(util.inspect(config, false, null, true));

  return config;
};
