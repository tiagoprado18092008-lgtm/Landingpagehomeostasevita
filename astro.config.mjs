// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO(cliente): substituir pelo dominio final antes do deploy.
// Afeta: canonical, og:url, sitemap.xml e robots.txt.
const SITE = process.env.PUBLIC_SITE_URL ?? 'https://homeostasevita.pt';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: undefined,
      // A confirmação de pedido é o fim de um percurso, não conteúdo:
      // fica fora do sitemap, a par do `noindex` que a própria página leva.
      filter: (page) => !page.includes('/pedido-recebido'),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
  image: { responsiveStyles: true },
});
