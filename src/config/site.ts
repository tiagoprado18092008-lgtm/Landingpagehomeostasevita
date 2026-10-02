/**
 * Fonte de verdade dos dados de negócio.
 * Tudo o que estiver marcado TODO está por confirmar com a cliente —
 * aparece como placeholder visível no site, nunca inventado.
 */

export const site = {
  name: 'Homeostase Vita',
  legalName: 'Homeostase Vita — Medicina Tradicional Chinesa',
  tagline: 'Medicina Tradicional Chinesa',
  city: 'Maia',

  address: {
    street: 'Rua Engenheiro Frederico Ulrich 2027',
    postalCode: '4470-605',
    locality: 'Maia',
    region: 'Porto',
    country: 'PT',
    /** Coordenadas aproximadas da Rua Eng.º Frederico Ulrich, Maia. */
    geo: { lat: 41.2279, lng: -8.6199 },
  },

  phone: {
    display: '963 040 975',
    tel: '+351963040975',
    whatsapp: 'https://wa.me/351963040975',
  },

  email: 'homeostase.vita@gmail.com',

  social: {
    instagram: 'https://www.instagram.com/homeostase_vita/',
    instagramHandle: '@homeostase_vita',
    facebook: 'https://www.facebook.com/p/Homeostase-Vita-61580842537009/',
  },

  credentials: {
    acss: 'C-0062490',
  },

  /*
   * O horário de funcionamento não é publicado — nem em texto, nem nos dados
   * estruturados. As marcações fazem-se por contacto directo, e um horário
   * afixado que não se cumprisse valia menos do que nenhum.
   */

  /**
   * Biografia fornecida e validada pelo espaço.
   */
  practitioner: {
    firstName: 'Teresa',
    lastName: 'Morais' as string | null,
    bio:
      'Profissional da Medicina Tradicional Chinesa, com formação em Acupuntura e ' +
      'cédula profissional emitida pela Administração Central do Sistema de Saúde, ' +
      'I.P. (ACSS). Possui formação especializada em Acupuntura Neurocraniana e ' +
      'Neuroauricular, complementada por formação na área da Nutrição Ortomolecular, ' +
      'que amplia a sua perspetiva sobre a relação entre alimentação, funcionamento ' +
      'do organismo e equilíbrio global.' as string | null,
  },

  /**
   * Formulário de marcação — envia para o Formspree em JSON.
   *
   * Também pode ser definido via PUBLIC_FORM_ENDPOINT no .env — útil para
   * usar um endpoint diferente em preview/produção sem tocar no código.
   * Essa variável, quando definida, tem prioridade sobre o valor abaixo.
   */
  form: {
    endpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || 'https://formspree.io/f/xgaeqrlj',
    provider: import.meta.env.PUBLIC_FORM_PROVIDER || 'formspree',
  },

  /**
   * Medição — nada disto carrega antes de o visitante aceitar no banner.
   * As variáveis PUBLIC_* do Vercel, se definidas, têm prioridade.
   */
  analytics: {
    /** GA4 — propriedade "Homeostase Vita", fluxo homeostasevita.pt */
    ga4: import.meta.env.PUBLIC_GA4_ID || 'G-ZVB2XD7C55',
    metaPixel: import.meta.env.PUBLIC_META_PIXEL_ID ?? '',
    /** Microsoft Clarity — gravações e heatmaps, com máscara Strict. */
    clarity: import.meta.env.PUBLIC_CLARITY_ID || '',
    /** Google Ads 557-279-4074 — etiqueta e rótulos das ações de conversão. */
    googleAds: {
      id: import.meta.env.PUBLIC_GOOGLE_ADS_ID || 'AW-18485179839',
      labels: {
        /** Pedido de marcação (formulário) — principal */
        lead: 'M5AzCL-aj44dEL_rte5E',
        /** Clique no telefone — principal */
        phone: 'T0c2CMKaj44dEL_rte5E',
        /** Clique no WhatsApp — secundária */
        whatsapp: 'wHTPCM34ho4dEL_rte5E',
      },
    },
  },
} as const;

/**
 * Identificador estável a partir de um nome — "Auriculoterapia" → "auriculoterapia".
 * Usado pelos cartões de Tratamentos e pelos links do rodapé para eles: tem de
 * ser a mesma função dos dois lados, senão as âncoras deixam de casar.
 */
export const slugify = (texto: string) =>
  texto
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Secções da página, na ordem. Alimenta a navegação e o fio de meridiano. */
export const sections = [
  { id: 'servicos', label: 'Tratamentos' },
  { id: 'sobre', label: 'Filosofia' },
  { id: 'areas', label: 'Áreas' },
  { id: 'percurso', label: 'Primeira consulta' },
  { id: 'terapeuta', label: 'Terapeuta' },
  { id: 'espaco', label: 'O espaço' },
  { id: 'local', label: 'Onde estamos' },
  { id: 'faq', label: 'Perguntas' },
  { id: 'marcacao', label: 'Marcação' },
] as const;

/**
 * Aviso de enquadramento exigido pelo RJPPS/ERS: a MTC é complementar
 * e não substitui acompanhamento médico. Repetido nas áreas e na FAQ.
 */
export const complementaryNotice =
  'A Medicina Tradicional Chinesa é uma abordagem complementar de bem-estar e não dispensa a avaliação e o acompanhamento médico.';
