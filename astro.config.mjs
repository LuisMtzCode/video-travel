import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://LuisMtzCode.github.io",
  base: "/video-travel",
  integrations: [tailwind()],
});
