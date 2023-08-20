import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vanillaExtract from 'astro-vanilla-extract';


export default defineConfig({
  site: 'https://danigo99.github.io',
  integrations: [vanillaExtract(), mdx(), sitemap()]
});