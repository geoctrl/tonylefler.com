import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import VitePluginSvgSpritemap from "@spiriit/vite-plugin-svg-spritemap";

export default defineConfig({
  plugins: [solidPlugin(), VitePluginSvgSpritemap("./icons/*.svg")],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
