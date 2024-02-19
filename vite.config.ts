import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import VitePluginSvgSpritemap from "@spiriit/vite-plugin-svg-spritemap";
import path from "path";
import url from "url";
import alias from "@rollup/plugin-alias";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const resolve = {
  alias: {
    "@stem/": path.join(__dirname, "src/library/"),
  },
};

export default defineConfig(({ mode }) => {
  if (mode === "library") {
    return {
      resolve,
      plugins: [solidPlugin(), VitePluginSvgSpritemap("./icons/*.svg")],
      build: {
        target: "esnext",
        outDir: "dist",
        lib: {
          name: "stem-ui",
          fileName: "stem-ui",
          entry: path.resolve(__dirname, "./src/library/index.ts"),
        },
        rollupOptions: {
          external: ["solid-js"],
          plugins: [
            // alias({
            //   entries: [
            //     {
            //       find: "@stem/*",
            //       replacement: path.resolve(
            //         __dirname,
            //         "src/library/*",
            //       ),
            //     },
            //     {
            //       find: "@stem/build",
            //       replacement: path.resolve(__dirname, "src/library/build"),
            //     },
            //   ],
            // }),
          ],
        },
      },
    };
  }

  if (mode === "site") {
    return {
      resolve,
      plugins: [solidPlugin(), VitePluginSvgSpritemap("./icons/*.svg")],
      server: {
        port: 3000,
      },
      build: {
        outDir: "dist-app",
        target: "esnext",
      },
    };
  }

  return {};
});
