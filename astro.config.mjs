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
      // O site existe em duas línguas: `/` em português (o idioma de origem)
      // e `/en/` em inglês. O sitemap declara os pares, e cada página leva
      // ainda os `hreflang` no <head>.
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-PT', en: 'en' },
      },
      // A confirmação de pedido é o fim de um percurso, não conteúdo: fica
      // fora do sitemap nas duas línguas, a par do `noindex` que as próprias
      // páginas levam.
      filter: (page) =>
        !page.includes('/pedido-recebido') && !page.includes('/request-received'),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
  image: { responsiveStyles: true },
});
