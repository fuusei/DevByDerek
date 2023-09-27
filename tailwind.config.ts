import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#d7e0c8",
            primary: {
              50: "#f6faf3",
              100: "#e9f5e3",
              200: "#d3eac8",
              300: "#afd89d",
              400: "#82bd69",
              500: "#61a146",
              600: "#4c8435",
              700: "#3d692c",
              800: "#345427",
              900: "#13250e",
              DEFAULT: "#405935",
            },
            focus: "#34264f", // purple navbar links hover
            content1: "#ced1d3", // socials tooltip color
            content2: "#abb5b5", // theme switcher hover color
            content3: "#abb5b5",
            content4: "#8d9696", //skeleton sliding color
          },
        },
        dark: {
          colors: {
            background: "#020f04",
            primary: {
              50: "#f6faf3",
              100: "#e9f5e3",
              200: "#d3eac8",
              300: "#afd89d",
              400: "#82bd69",
              500: "#61a146",
              600: "#4c8435",
              700: "#3d692c",
              800: "#345427",
              900: "#13250e",
              DEFAULT: "#afd89d",
            },
            focus: "#cec8ea", // purple navbar links hover
            content1: "#3a3c3f", // socials tooltip color
            content2: "#ffb720", // theme switcher hover color
            content3: "#abb5b5",
            content4: "#abb5b5", //skeleton sliding color
          },
        },
      },
    }),
  ],
};
export default config;
