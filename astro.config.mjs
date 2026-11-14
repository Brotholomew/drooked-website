import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://origins.droocked.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // The production origin comes from `site`, so sitemap URLs never depend
      // on the machine or preview host that ran the build.
      filter: (page) => {
        const { pathname } = new URL(page);
        return pathname !== '/404/' && pathname !== '/404.html';
      },
    }),
  ],
});
