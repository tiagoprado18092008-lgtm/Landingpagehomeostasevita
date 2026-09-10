/**
 * Núcleo de internacionalização.
 *
 * O site nasceu em português e essa continua a ser a língua de origem: as
 * strings PT são a fonte de verdade e o inglês é a tradução. Cada página
 * existe duas vezes — `/` em português, `/en/` em inglês — para que ambas
 * as versões sejam indexáveis; o botão do header troca entre as duas.
 */

export const LOCALES = ['pt', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'pt';

/** Atributo `lang` do <html> e `og:locale`, por idioma. */
export const htmlLang: Record<Locale, string> = { pt: 'pt-PT', en: 'en' };
export const ogLocale: Record<Locale, string> = { pt: 'pt_PT', en: 'en_GB' };

/**
 * Idioma a partir do caminho do pedido. Tudo o que não começa por `/en`
 * é português — o prefixo é a única marca de idioma no URL.
 */
export function localeFromPath(pathname: string): Locale {
  return /^\/en(\/|$)/.test(pathname) ? 'en' : 'pt';
}

/**
 * Caminho equivalente no outro idioma. É o que alimenta o botão de troca
 * e os `hreflang`: mantém a página, muda só o prefixo.
 *
 * As páginas legais têm nomes próprios em cada idioma (`/politica-de-cookies`
 * ↔ `/en/cookie-policy`), por isso a correspondência é explícita e não uma
 * simples troca de prefixo.
 */
const pathPairs: Array<[pt: string, en: string]> = [
  ['/', '/en/'],
  ['/politica-de-privacidade', '/en/privacy-policy'],
  ['/politica-de-cookies', '/en/cookie-policy'],
  ['/pedido-recebido', '/en/request-received'],
];

/** Normaliza para comparar: sem barra final (exceto a raiz). */
const norm = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

export function alternatePath(pathname: string, target: Locale): string {
  const atual = norm(pathname);
  for (const [pt, en] of pathPairs) {
    if (norm(pt) === atual || norm(en) === atual) {
      return target === 'pt' ? pt : en;
    }
  }
  // Página sem par declarado: a raiz do idioma é o destino seguro.
  return target === 'pt' ? '/' : '/en/';
}

/**
 * Prefixa um caminho interno com o idioma corrente. Usar em todos os links
 * entre páginas, para que a navegação nunca atire o visitante de volta ao
 * português a meio da visita.
 */
export function localizePath(path: string, locale: Locale): string {
  if (locale === 'pt') return path;
  return alternatePath(path, 'en');
}
