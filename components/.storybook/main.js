const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],
  // typescript: {
  //   reactDocgenTypescriptOptions: {
  //     compilerOptions: {
  //       experimentalDecorators: true,
  //     },
  //   },
  // },
  // babel: async (options) => {
  //   options.plugins = [
  //     ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
  //     ['@babel/plugin-proposal-class-properties'],
  //   ];

  //   return options;
  // },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need

    config.resolve.modules.push(
      // "../../core/app/javascript",
      // "../../core/node_modules",
      // "../../engines/capgains/app/javascript",
      // "../../engines/capgains/node_modules"
    );

    // Return the altered config
    return config;
  },
};
