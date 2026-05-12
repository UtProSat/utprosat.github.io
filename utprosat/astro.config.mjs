// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import partytown from '@astrojs/partytown';

import db from '@astrojs/db';

import markdoc from '@astrojs/markdoc';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown(), db(), markdoc(), mdx(), sitemap()],
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()]
  }
});