const path = require("path");

module.exports = ({ config }) => {
  const aliases = config.resolve.alias || (config.resolve.alias = {});
  aliases.react = aliases["react-dom"] = "preact/compat";

  config.module.rules.forEach(rule => {
    if (rule.test.toString() === '/\\.css$/') {
    // @see: https://github.com/storybookjs/storybook/blob/next/lib/core/src/server/preview/base-webpack.config.js#L62
     rule.use[2].options = {
        config: {
          path: path.resolve(__dirname, './postcss.config.js'),
        }
     }
    }
  })

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  });

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
