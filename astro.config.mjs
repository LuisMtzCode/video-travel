import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

let site = undefined;
let base = "/";

const isProduction = import.meta.env.PROD;

if (isProduction) {
  // Production environment logic
  site = "https://LuisMtzCode.github.io";
  base = "/video-travel/";
}

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [tailwind()],
});
