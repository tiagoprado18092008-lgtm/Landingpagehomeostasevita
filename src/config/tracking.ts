/**
 * Google Ads — etiqueta e ações de conversão.
 *
 * Os rótulos vêm do Google Ads (Objetivos > Conversões > ação > Configuração
 * da etiqueta). Enquanto um rótulo tiver o texto de exemplo (`*_LABEL`), o
 * evento correspondente não é enviado e aparece um aviso na consola em dev.
 */
export const GOOGLE_ADS_ID = import.meta.env.PUBLIC_GOOGLE_ADS_ID || 'AW-18485179839';

/** Pedido de marcação pelo formulário — principal */
export const CONVERSION_FORM = `${GOOGLE_ADS_ID}/M5AzCL-aj44dEL_rte5E`;
/** Clique no telefone — principal */
export const CONVERSION_PHONE = `${GOOGLE_ADS_ID}/T0c2CMKaj44dEL_rte5E`;
/** Clique no WhatsApp — secundária */
export const CONVERSION_WHATSAPP = `${GOOGLE_ADS_ID}/wHTPCM34ho4dEL_rte5E`;

/** GA4 — propriedade "Homeostase Vita", fluxo homeostasevita.pt */
export const GA4_ID = import.meta.env.PUBLIC_GA4_ID || 'G-ZVB2XD7C55';

export const isPlaceholder = (sendTo: string) => /_LABEL$/.test(sendTo);
