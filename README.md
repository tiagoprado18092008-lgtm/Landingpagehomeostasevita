# Homeostase Vita — landing page

Landing page de conversão para a clínica de Medicina Tradicional Chinesa da Maia.
Astro 5 + Tailwind CSS v4, build estático, sem framework de UI.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o dist/ localmente
```

> **Nota ao trabalhar no projeto:** apagar e recriar um `.astro` confunde o HMR do
> servidor de dev, que fica a servir o módulo antigo. Se uma alteração não aparecer,
> reinicie o `npm run dev` (ou reveja pelo `npm run build && npm run preview`).

---

## Fotografias dos tratamentos

Fotografia só onde acrescenta: os cartões dos tratamentos são a única secção
com imagens. O resto da página vive de tipografia, cor e espaço.

| Tratamento | Ficheiro |
|---|---|
| Acupuntura | `src/assets/img/acupuntura.jpg` |
| Auriculoterapia | `src/assets/img/auriculoterapia.jpg` |
| Ventosaterapia | `src/assets/img/ventosaterapia.webp` |
| Reflexologia | `src/assets/img/reflexologia.jpg` |

### Como acrescentar ou trocar uma fotografia

Os quatro tratamentos têm fotografia. Para um tratamento novo, ou para
substituir uma imagem:

1. Colocar o ficheiro em `src/assets/img/` (nome em minúsculas, sem acentos).
2. Importá-lo no topo de `src/components/Services.astro` e acrescentá-lo ao
   objeto `fotos`, com a mesma chave que vai usar a seguir.
3. Em `src/content/services.json`, acrescentar ao tratamento os campos
   `image` (a chave em `fotos`) e `alt` (descrição da fotografia, obrigatória).

Sem `image`, o cartão mostra o slot de aguarela da marca com a legenda do
campo `photo` — nunca stock genérico. Com `image`, o Astro trata do WebP, do
`srcset` e das dimensões explícitas; o recorte é sempre 3 / 2, igual ao slot.

Originais em alta resolução: quanto maior o ficheiro de partida, melhor —
o Astro reduz, mas não amplia. Abaixo de ~900 px de largura a fotografia fica
menos nítida em ecrãs Retina.

---

## Conteúdo

**O texto da página é o fornecido pela clínica** (biografia, apresentação, os
seis princípios, as condições abordadas e as seis perguntas frequentes). Vive
em `src/content/*.json` e em `src/config/site.ts`, fora dos componentes.

O que continua a ser nosso, e convém validar:

- **Descrições das quatro técnicas** (`src/content/services.json`) — escritas em
  linguagem factual, sem promessas de resultado. A clínica forneceu a lista das
  técnicas, não as descrições.
- **Títulos e chamadas** das secções.

Tudo o resto é literalmente o texto da cliente.

---

## Dados por confirmar

Quatro. Cada um aparece como placeholder **visível** (itálico dourado) para
não passar despercebido em revisão.

| O que falta | Onde se troca | Onde aparece |
|---|---|---|
| Apelido da terapeuta | `src/config/site.ts` → `practitioner.lastName` | Secção da terapeuta |
| N.º de registo na ERS | `src/config/site.ts` → `credentials.ers` | Faixa de credenciais e rodapé |
| Dias exatos de atendimento | `src/config/site.ts` → `hours` (pôr `confirmed: true`) | Rodapé e "Onde estamos" |
| Estacionamento e acessos | `src/components/Local.astro` → `detalhes` | Secção "Onde estamos" |

Já resolvidos com o conteúdo da cliente: biografia da terapeuta, lista de
condições abordadas e as respostas às perguntas frequentes.

**As durações das consultas não são publicadas em lado nenhum do site** — foi
uma decisão da clínica. Não voltar a acrescentá-las.

Falta ainda o **domínio final** (`.env` → `PUBLIC_SITE_URL` e a linha do
sitemap em `public/robots.txt`) e o **NIPC** na Política de Privacidade.

**Nota:** as seis perguntas frequentes entram todas nos dados estruturados
(`FAQPage`), porque todas têm resposta real. Um número inventado numa unidade
de saúde não é um detalhe de design, é publicidade enganosa — por isso não há
estatísticas nem testemunhos na página.

---

## Formulário de marcação

Envia para o **Formspree**. Falta um passo para ficar a funcionar.

### Ligar (obrigatório antes de publicar)

1. Cria conta em [formspree.io](https://formspree.io) e cria um formulário.
2. Aponta a notificação para `homeostase.vita@gmail.com`.
3. Copia o endpoint (`Settings → Integration → Endpoint`) e define-o no
   alojamento como variável de ambiente:

```
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

   Em alternativa, substitui `SEU_FORM_ID_AQUI` em `src/config/site.ts`. A
   variável de ambiente, quando existe, ganha ao valor do ficheiro.

4. Submete o formulário uma vez em produção — o Formspree só passa a entregar
   depois de confirmares o primeiro envio por email.

> **Enquanto não estiver ligado**, o build imprime um aviso e o site **não
> mostra botão de enviar**: em vez disso oferece WhatsApp e telefone. É
> deliberado — um botão que aceita o pedido e não o entrega perde o contacto
> sem ninguém dar por isso.

### Como se garante que nenhum contacto se perde

| Falha | O que acontece |
|---|---|
| Endpoint por configurar | Sem botão de enviar; WhatsApp e telefone em destaque, e aviso no build |
| JavaScript desligado ou partido | O botão faz `POST` nativo para o Formspree; o `_next` traz a pessoa para `/pedido-recebido` |
| Formspree em baixo, erro HTTP, offline | Painel de erro com **Tentar novamente** e um botão de WhatsApp **com o pedido já redigido** (nome, contacto, email e motivo) — basta enviar |
| Ligação pendurada | `AbortSignal.timeout(15s)` desiste e cai no mesmo painel de erro |
| Fechou o separador a meio | O que escreveu fica em `localStorage` (`hv:marcacao`) e reaparece; é apagado assim que o envio segue |
| Bot | Honeypot `_gotcha`, filtrado aqui e no Formspree |

O sucesso **só** aparece depois de uma resposta `ok` do Formspree. Não há
caminho no código que mostre "Recebemos o seu pedido" sem entrega confirmada.

### Notas de implementação

- `POST` em JSON (`Content-Type` e `Accept: application/json`).
- `_subject` define o assunto do email que chega à clínica.
- `/pedido-recebido` leva `noindex` e está fora do sitemap.
- Validação inline em PT-PT, `aria-invalid`/`aria-describedby` por campo,
  região `aria-live`, `aria-busy` durante o envio.
- **Limite do plano gratuito: 50 envios/mês.** Acima disso o Formspree
  bloqueia — convém vigiar, ou passar a plano pago.
- O `motivo` pode conter dados de saúde (art.º 9.º RGPD). Assina o DPA no
  Formspree e considera nomeá-lo na política de privacidade, que hoje refere
  genericamente um "serviço de envio do formulário".

---

## RGPD e conformidade ERS

- **Nada de terceiros carrega antes do opt-in.** GA4, Meta Pixel e o mapa do Google
  ficam bloqueados até a pessoa aceitar. A escolha fica em `localStorage`
  (`hv-consent`) e é revogável pelo link no rodapé.
- **Fontes self-hosted** (`public/fonts/`) — nenhum pedido a servidores Google.
- **Mapa em facade:** morada e botão "Carregar mapa"; o `iframe` só entra depois
  do clique. Quem recusar continua com a morada e o "Ver rota".
- **Sem claims proibidos.** O "resultados comprovados" do flyer não foi transposto.
  A MTC é sempre enquadrada como abordagem complementar, com o aviso nas áreas de
  procura, na FAQ e no rodapé.
- **Sem testemunhos e sem preços.**
- Cédula ACSS e registo ERS visíveis no rodapé, como exige o RJPPS.

Analítica, depois de o domínio estar decidido:

```bash
PUBLIC_GA4_ID="G-XXXXXXXXXX"
PUBLIC_META_PIXEL_ID="000000000000000"
```

---

## Deploy

Build estático puro.

**Cloudflare Pages** · build `npm run build` · output `dist` · env `PUBLIC_SITE_URL`
**Netlify** · build `npm run build` · publish `dist` · mesma variável

Depois do primeiro deploy: confirmar o domínio em `public/robots.txt` (linha do
sitemap) e submeter `sitemap-index.xml` no Google Search Console.

---

## Direção de arte

### Tipografia

**DM Sans** faz todo o trabalho — títulos e corpo. O carácter vem do contraste de
peso e do *tracking* fechado, não de uma segunda família:

| Papel | Peso | Tracking |
|---|---|---|
| H1 / enunciado | 700 | −0.032em |
| Títulos de secção | 400 | −0.028em |
| Item inativo numa lista | 300 | −0.02em |
| Item selecionado | 600 | −0.02em |
| Eyebrow (maiúsculas) | 600 | +0.18em |

A serifa (Cormorant Garamond) ficou reservada ao **wordmark**, que é a marca
desenhada e não texto de interface.

Cada título de secção fecha com uma linha a dourado (`.accent-line`) — é o remate
do enunciado e o sítio onde a cor da marca entra na tipografia.

### Estrutura

Esqueleto limpo, de secções bem separadas, cada uma com um só trabalho:

1. **Barra de topo** — morada, telefone, email. Sobe e sai de vista.
2. **Header** *sticky* — logo, navegação, CTA cheio.
3. **Hero** em duas colunas — enunciado à esquerda, arte da marca à direita
   (emblema em ondas concêntricas douradas) com um cartão de vidro por cima.
4. **Quatro princípios** — cartões brancos, ícone assente no fundo.
5. **Filosofia** — frase curta a dourado de um lado, enunciado grande do outro.
   É a única secção com o filete-lótus e com o caráter 平衡.
6. **Áreas de procura** — lista de verificação com visto dourado e filetes.
7. **Tratamentos** — faixa navy de margem a margem, cartões brancos com
   fotografia. A única secção com imagens.
8. **A terapeuta** — cartão largo, sem retrato: a credibilidade vem da cédula
   e da forma de trabalhar.
9. **Perguntas** — acordeão de linhas finas, com um "+" que vira "−".
10. **Marcação** — formulário à esquerda, painel de contactos à direita.
11. **Rodapé** claro em quatro colunas + barra inferior com os legais.

O ritmo de superfícies alterna `paper → cloud → white → cloud → navy →
cloud → white → ivory`, para nenhuma secção colar à seguinte.

**Tipografia:** o carácter vem do peso e do *tracking*, não de ornamento.
Títulos a 500 com −0.028em; dentro do corpo, as palavras que importam ficam
a 500 e em navy (`<strong>`), como destaques de leitura.

### Elementos da marca

- **Emblema em ondas concêntricas** — a mandala no centro de anéis dourados
  que se afastam. Substituiu os canais verticais de meridiano, que penduravam
  o emblema como um móbile.
- **Filete dourado com lótus** (`LotusRule.astro`) — a assinatura do impresso,
  usada uma vez só, na filosofia.
- **平衡** aparece uma vez, como arte de fundo da filosofia, e só depois de se
  confirmar que o dispositivo tem uma fonte CJK — dois quadrados de "tofu"
  seriam pior do que a ausência do caráter.
- **Medalhões e discos dourados** — os do flyer, no painel de contactos e nos
  vistos das listas.

### Fundo e movimento

Duas camadas dão profundidade sem pôr nada por cima do conteúdo:

- **Grão** (`Grain.astro`) — textura de filme gerada por SVG (sem ficheiro
  para descarregar), fixa ao ecrã, a 5% em `multiply`. É o que impede as
  superfícies quase brancas de parecerem chapadas.
- **Halos** (`Ambient.astro`) — dois ou três círculos muito desfocados nas
  cores da marca, fora de centro, atrás do conteúdo. Três composições:
  `calmo`, `duplo`, `canto`. A secção que os usa leva a classe
  `.tem-ambiente` — **nunca** numa secção com filhos `sticky`, porque o
  `overflow: hidden` desliga o *sticky*.

**Reveals** entram por `animation`, não por `transition`. A transition de um
componente (o *lift* de um cartão) tem mais especificidade e substituía a do
reveal, deixando os elementos a aparecer de repente. As keyframes usam
`transform`; os hovers usam `translate`/`scale`, por isso compõem-se.

Variantes: `.reveal` (sobe), `.reveal--scale` (cresce, para cartões),
`.reveal--left` / `--right` (secções de duas colunas), `.reveal--soft`
(desfoque a assentar).

**Cascata automática:** um contentor com `data-stagger="90"` distribui o
atraso pelos filhos `.reveal` por ordem, sem estilos inline espalhados pelo
HTML. Quem já passou acima da dobra (scroll rápido, âncora, recarregar a
meio) aparece sem atraso, para não haver blocos invisíveis.

Tudo isto desliga em `prefers-reduced-motion`.

### Notas de implementação

- **CSS com scope não alcança componentes filhos.** Uma classe passada a `<Icon>`
  ou `<Placeholder>` aterra na raiz do filho, que não leva o atributo de scope do
  pai. Por isso o `Icon` recebe a dimensão por prop (`size`), e os poucos seletores
  que atravessam componentes usam `:global()`.
- **Acordeões** usam `<details>`/`<summary>` nativo: funcionam sem JS e já trazem a
  semântica de expansão. A animação de altura é progressive enhancement.
- **Emblema:** PNG de 520 px com paleta de 64 cores (19,6 KB). É arte de cor
  chapada — o WebP com perdas custava 74 KB para pior resultado.

---

*Desenvolvido pela AlphaScale AI.*
