import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";
import preact from "@astrojs/preact";
import glslify from "vite-plugin-glslify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact({ compat: true })],
  // output: "server",
  output: "hybrid",
  adapter: netlify(),
  vite: {
    plugins: [
      glslify(),
    ],
  }
});