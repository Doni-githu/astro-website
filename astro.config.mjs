import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import react from "@astrojs/react";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), preact()],
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  })
});