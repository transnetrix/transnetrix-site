import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://transnetrix.com.pk',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
