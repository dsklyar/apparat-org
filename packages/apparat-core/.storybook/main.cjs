const path = require("node:path");
const react = require("@vitejs/plugin-react");
const svgr = require("vite-plugin-svgr");
const { mergeConfig } = require("vite");
// const { default: tsconfigPaths } = require("vite-tsconfig-paths");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    // If its an array it is react-plugin that
    // I need to replace with twin.macro config
    const dumbArrayIndex = config.plugins.findIndex((plugin) =>
      Array.isArray(plugin)
    );
    config.plugins[dumbArrayIndex] = react({
      babel: {
        plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
      },
    });

    // Merge custom configuration into the default config
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: "@assets",
            replacement: path.resolve(__dirname, "../src/assets"),
          },
          {
            find: "@styles",
            replacement: path.resolve(__dirname, "../src/styles"),
          },
          {
            find: "@components",
            replacement: path.resolve(__dirname, "../src/components"),
          },
        ],
      },
      plugins: [
        svgr({ exportAsDefault: true }),
        // Cant seem to work will need to see in the future
        // tsconfigPaths(),
      ],
    });
  },
};
