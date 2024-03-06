import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import ssr from "vike/plugin";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    modulePreload: false,
    cssCodeSplit: false,
    minify: false
  },
  plugins: [
    preact(),
    ssr({ prerender: true }),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./components/Button",
      },
    }),
  ],
});
