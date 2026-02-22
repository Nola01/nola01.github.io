import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  site: "https://nola01.github.io",
  base: "/",
  integrations: [
    mdx(), 
    sitemap({
      filter: (page) => page !== "https://nola01.github.io/" && page !== "https://nola01.github.io",
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es',
          en: 'en',
        },
      },
    }), 
    solidJs(), 
    tailwind({ applyBaseStyles: false })
  ],
})