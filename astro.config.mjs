// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
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
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter',
      display: 'swap',
      // Metric-matched fallback is derived from the actual file → no reflow.
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      optimizedFallbacks: true,
      options: {
        variants: [
          {
            weight: '100 900',
            style: 'normal',
            src: ['./src/assets/fonts/inter-latin-wght-normal.woff2'],
          },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
