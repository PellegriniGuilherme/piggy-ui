import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../package/**/*.mdx",
    "../package/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  staticDirs: ["./public"],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
};
export default config;