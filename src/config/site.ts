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
   * Biografia fornecida e validada pela clínica.
   */
  practitioner: {
    firstName: 'Teresa',
    lastName: 'Morais' as string | null,
    bio:
      'Formada em Medicina Tradicional Chinesa, com uma atuação personalizada e ' +
      'integrada, orientada para a saúde física e emocional. A formação contínua ' +
      'permite uma atualização constante e o aprofundamento de conhecimentos na ' +
      'avaliação e abordagem terapêutica de diferentes condições de saúde. É ' +
      'valorizada uma visão global de cada pessoa, relacionando sintomas, hábitos ' +
      'e estilo de vida, no sentido de promover a homeostase e o equilíbrio do ' +
      'organismo.' as string | null,
  },

  /**
   * Formulário de marcação — envia para o Formspree em JSON.
   *
   * >>> SUBSTITUIR "SEU_FORM_ID_AQUI" pelo ID do formulário depois de criar
   * >>> a conta em https://formspree.io (Settings → o teu formulário → Endpoint).
   *
   * Também pode ser definido via PUBLIC_FORM_ENDPOINT no .env — útil para
   * usar um endpoint diferente em preview/produção sem tocar no código.
   * Essa variável, quando definida, tem prioridade sobre o valor abaixo.
   */
  form: {
    endpoint:
      import.meta.env.PUBLIC_FORM_ENDPOINT || 'https://formspree.io/f/SEU_FORM_ID_AQUI',
    provider: import.meta.env.PUBLIC_FORM_PROVIDER || 'formspree',
  },

  analytics: {
    ga4: import.meta.env.PUBLIC_GA4_ID ?? '',
    metaPixel: import.meta.env.PUBLIC_META_PIXEL_ID ?? '',
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
