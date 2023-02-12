import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

const LIB_NAME = "apparat-core";
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.tsx"),
      name: LIB_NAME,
      formats: ["es", "umd"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components", "usehooks-ts"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020",
    },
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    react({
      babel: {
        plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
      },
    }),
    svgr({
      exportAsDefault: true,
    }),
    tsconfigPaths(),
  ],
});
