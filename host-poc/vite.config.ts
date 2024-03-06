import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import ssr from "vike/plugin";
import federation from "@originjs/vite-plugin-federation";
import url from "@rollup/plugin-url";
import nodeResolve from "@rollup/plugin-node-resolve";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    modulePreload: false,
  },
  plugins: [
    preact(),
    ssr({ prerender: true }),
    federation({
      name: "app",
      remotes: {
        remoteApp: {
          external: `fetch('http://localhost:3001/assets/remoteEntry.js').then(response=>response.json()).then(data=>data.url)`,
          externalType: "promise",
        },
      },
    }),
  ],
});
