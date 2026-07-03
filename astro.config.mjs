// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

const EXCLUDED_ROUTES = ['/impressum/', '/datenschutz/', '/preview/'];

// https://astro.build/config
export default defineConfig({
  site: 'https://designready.ai',
  integrations: [
    icon(),
    sitemap({
      filter: (page) =>
        !EXCLUDED_ROUTES.some((route) =>
          new URL(page).pathname.startsWith(route),
        ),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
