import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import db from '@astrojs/db';
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://utprosat.github.io',
  integrations: [react(), partytown(), db(), markdoc(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
