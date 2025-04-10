import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const piggyTheme = create({
  base: "light",

  brandTitle: "PiggyUI",
  brandUrl: "https://github.com/PellegriniGuilherme",
  brandImage: "/piggy-ui.svg",

  fontBase: "'Outfit', sans-serif",
  fontCode: "'Fira Code', monospace",

  colorPrimary: "#FF1A66",
  colorSecondary: "#FF80AC",

  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appBorderColor: "#ebebeb",
  appPreviewBg: "#f9f9f9",

  textColor: "#262626",
  textInverseColor: "#ffffff",

  barBg: "#fff",
  barTextColor: "#262626",
  barSelectedColor: "#FF4D88",
  barHoverColor: "#FF80AC",

  inputBg: "#ffffff",
  inputBorder: "#e5e5e5",
  inputTextColor: "#262626",
  inputBorderRadius: 10,

  brandTarget: "_blank",
});


addons.setConfig({
  brandTitle: "PiggyUI",
  brandUrl: "https://github.com/PellegriniGuilherme",
  theme: piggyTheme,
});
