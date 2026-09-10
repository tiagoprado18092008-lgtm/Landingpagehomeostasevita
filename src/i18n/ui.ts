/**
 * Dicionário de interface — todo o texto corrido das secções.
 *
 * Uma chave por frase, agrupada por componente. O objecto `pt` é a fonte de
 * verdade (é o texto que já estava validado no site); `en` tem exactamente
 * as mesmas chaves, garantido pelo tipo — falhar uma chave é erro de build,
 * não uma frase em português a aparecer no meio da versão inglesa.
 *
 * Usar sempre via `t(locale)`; os componentes não devem importar `pt`/`en`
 * directamente.
 */
import type { Locale } from './index';

const pt = {
  // --- Comum ---
  'common.book': 'Marcar consulta',
  'common.bookShort': 'Marcar',
  'common.call': 'Ligar',
  'common.skipToContent': 'Saltar para o conteúdo',
  'common.homeAria': 'início',
  'common.complementaryNotice':
    'A Medicina Tradicional Chinesa é uma abordagem complementar de bem-estar e não dispensa a avaliação e o acompanhamento médico.',

  // --- Idioma ---
  'lang.switchTo': 'English',
  'lang.switchLabel': 'Ver este site em inglês',
  'lang.current': 'Português',
  'lang.groupLabel': 'Idioma',

  // --- Header / navegação ---
  'nav.treatments': 'Tratamentos',
  'nav.philosophy': 'Filosofia',
  'nav.firstVisit': '1.ª consulta',
  'nav.therapist': 'Terapeuta',
  'nav.space': 'O espaço',
  'nav.questions': 'Perguntas',
  'nav.main': 'Navegação principal',
  'nav.small': 'Navegação em ecrã pequeno',
  'nav.openMenu': 'Abrir menu',
  'nav.closeMenu': 'Fechar menu',

  // --- Hero ---
  /* O enunciado do hero deixou de repetir o nome da clínica — esse vive no
     header, no emblema e na linha de contexto por cima do título. Aqui
     diz-se o que a pessoa vem procurar. `titleEm` sai em itálico.
     titleA/titleB ficam: continuam a servir o <title> da página. */
  'hero.kicker': 'Medicina Tradicional Chinesa',
  'hero.title': 'Equilíbrio que',
  'hero.titleEm': 'se constrói',
  'hero.titleEnd': 'consigo',
  'hero.scroll': 'Ver os tratamentos',
  'hero.titleA': 'Homeostase Vita — Clínica',
  'hero.titleB': ' de Medicina Tradicional Chinesa',
  'hero.sub':
    'Clínica integrativa na Maia. Avaliação individual e acompanhamento continuado para dores persistentes, saúde emocional e um equilíbrio que dura.',
  'hero.imgAlt':
    'Agulhas de acupuntura a serem colocadas nas costas de uma pessoa, durante uma sessão.',

  // --- Credenciais ---
  'cred.aria': 'Credenciais da clínica',
  'cred.licence': 'Cédula Profissional ACSS',
  'cred.licenceValue': 'n.º',
  'cred.assessment': 'Avaliação individual',
  'cred.assessmentValue': 'Antes de qualquer tratamento',
  'cred.techniques': 'Várias técnicas',
  'cred.techniquesValue': 'Escolhidas caso a caso',

  // --- Tratamentos ---
  'services.eyebrow': 'Tratamentos',
  'services.title': 'Os nossos tratamentos',
  'services.intro':
    'De acordo com os sintomas, as características e as necessidades de cada pessoa, podem ser utilizadas diferentes técnicas da Medicina Tradicional Chinesa e áreas complementares.',
  'services.note':
    'A escolha das técnicas resulta da avaliação individual feita em consulta.',

  // --- Abordagem ---
  'approach.title': 'Como tratamos na Homeostase Vita',
  'approach.p1':
    'Com raízes na Medicina Tradicional Chinesa, olhamos o corpo como um todo interligado em vez de tratar o sintoma isolado. Cada tratamento é desenhado à medida da pessoa, a partir de uma avaliação individual, e pode incluir acupuntura, fitoterapia, massagem Tui Na, ventosas, moxabustão, Gua Sha e dietética chinesa.',
  'approach.p2':
    'Acompanhamos um leque alargado de queixas agudas e crónicas — dor, problemas digestivos, stress, fadiga, perturbações do sono e desequilíbrios hormonais — devolvendo o equilíbrio e cuidando da saúde a longo prazo.',
  'approach.imgAlt':
    'Terapeuta a avaliar o pulso no punho de uma paciente, apoiado numa almofada.',

  // --- Filosofia ---
  'about.eyebrow': 'A nossa filosofia',
  'about.phrase': 'Uma abordagem centrada na pessoa.',
  'about.p1a':
    'Cada pessoa é avaliada de forma individualizada. Os sintomas não são analisados isoladamente, mas relacionados com outros sinais, hábitos e características pessoais, permitindo construir uma ',
  'about.p1strong': 'visão global do estado de saúde',
  'about.p1b': '.',
  'about.p2':
    'A partir desta avaliação, é definida uma estratégia terapêutica adaptada às necessidades de cada pessoa, recorrendo às técnicas mais adequadas a cada situação.',
  'about.p3':
    'O acompanhamento é realizado num ambiente tranquilo e profissional, onde o tempo dedicado à avaliação e a atenção às particularidades de cada caso clínico assumem um papel central.',

  // --- Áreas ---
  'areas.eyebrow': 'Áreas de procura',
  'areas.title': 'Em que situações pode ser utilizada',
  'areas.lead':
    'A Medicina Tradicional Chinesa pode ser utilizada na abordagem de diferentes condições de saúde, entre outras:',
  'areas.link': 'Marcar uma avaliação',
  'areas.notice':
    'A intervenção é sempre personalizada, tendo em consideração os sintomas apresentados, as características individuais e as necessidades de cada pessoa, podendo constituir um complemento aos cuidados de saúde convencionais quando adequado.',

  // --- Acupuntura em destaque ---
  'acup.eyebrow': 'Em destaque',
  'acup.titleA': 'Acupuntura, uma das',
  'acup.titleB': 'principais técnicas',
  'acup.leadA': 'A acupuntura é uma das principais técnicas utilizadas na Medicina Tradicional Chinesa, podendo ser ',
  'acup.leadStrong': 'complementada por outras estratégias terapêuticas',
  'acup.leadB': ' de acordo com as necessidades de cada pessoa.',
  'acup.point1': 'Agulhas muito finas, geralmente bem toleradas',
  'acup.point2': 'Pontos escolhidos a partir da avaliação individual',
  'acup.point3': 'Intervenção ajustada à sensibilidade de cada pessoa',
  'acup.faqEyebrow': 'A pergunta mais frequente',
  'acup.faqQ': 'A acupuntura dói?',
  'acup.faqA1':
    'As agulhas de acupuntura são muito finas e, geralmente, a sua aplicação é bem tolerada. A sensação varia de pessoa para pessoa: para muitas, a inserção é praticamente indolor, podendo sentir-se uma ligeira picada ou uma sensação momentânea de pressão, calor ou formigueiro.',
  'acup.faqA2':
    'Durante a sessão, procura-se garantir o maior conforto possível, ajustando a intervenção à sensibilidade e às características individuais de cada pessoa.',

  // --- Percurso ---
  'process.eyebrow': 'Como funciona a consulta',
  'process.title': 'Do primeiro contacto ao acompanhamento',
  'process.lead':
    'Uma avaliação individualizada precede sempre qualquer intervenção. Este é o percurso de quem chega pela primeira vez.',
  'process.step1Title': 'Avaliação aprofundada',
  'process.step1Text':
    'A primeira consulta começa pela recolha e análise de diferentes parâmetros relacionados com a saúde, sintomas, hábitos e características pessoais.',
  'process.step2Title': 'Observação global',
  'process.step2Text':
    'A observação da língua e a avaliação do pulso são elementos importantes desta avaliação, a par das questões dirigidas a cada situação.',
  'process.step3Title': 'Estratégia terapêutica',
  'process.step3Text':
    'Da avaliação resulta uma estratégia adequada à situação, que pode integrar acupuntura, auriculoterapia, ventosaterapia ou reflexologia.',
  'process.step4Title': 'Consultas de seguimento',
  'process.step4Text':
    'Permitem acompanhar a evolução e ajustar a intervenção sempre que necessário, ao longo do acompanhamento.',
  'process.bookingStrong': 'Marcação prévia',
  'process.bookingText': 'As consultas são realizadas mediante marcação',

  // --- Terapeuta ---
  'practitioner.eyebrow': 'Quem cuida de si',
  'practitioner.title': 'A pessoa por trás de cada consulta',
  'practitioner.role': 'Terapeuta de Medicina Tradicional Chinesa',
  'practitioner.licence': 'Cédula ACSS n.º',
  'practitioner.techniques': 'Técnicas praticadas',
  'practitioner.bioPending': 'Biografia por confirmar',
  'practitioner.bio':
    'Formada em Medicina Tradicional Chinesa, com uma atuação personalizada e integrada, orientada para a saúde física e emocional. A formação contínua permite uma atualização constante e o aprofundamento de conhecimentos na avaliação e abordagem terapêutica de diferentes condições de saúde. É valorizada uma visão global de cada pessoa, relacionando sintomas, hábitos e estilo de vida, no sentido de promover a homeostase e o equilíbrio do organismo.',

  // --- FAQ ---
  'faq.eyebrow': 'Perguntas frequentes',
  'faq.title': 'Antes da primeira consulta',

  // --- Faixa CTA ---
  'cta.aria': 'Marcar consulta',
  'cta.eyebrow': 'Dê o primeiro passo',
  'cta.title': 'A sua consulta começa com uma conversa.',
  'cta.sub': 'Sem compromisso: pode ligar só para esclarecer dúvidas antes de decidir.',

  // --- Espaço ---
  'space.eyebrow': 'O espaço',
  'space.title': 'Onde vai ser recebido',
  'space.lead':
    'As consultas decorrem em gabinete próprio, dentro de um espaço partilhado na Maia — amplo, luminoso e tranquilo, com hall de entrada e relvado exterior.',
  'space.note':
    'A sala comum e o hall de entrada são de uso partilhado com outros profissionais do edifício. As consultas são sempre mediante marcação prévia.',
  'space.cap1': 'Sala comum, com acesso ao exterior',
  'space.alt1': 'Sala ampla e luminosa, com janelas de chão ao tecto viradas para um relvado.',
  'space.cap2': 'Gabinete de consulta',
  'space.alt2':
    'Gabinete de consulta com sofá, poltrona, tapete e uma janela ampla com cortinados claros.',
  'space.cap3': 'Hall de entrada',
  'space.alt3':
    'Hall de entrada do edifício, com balcão de recepção, orquídeas e o letreiro do espaço.',
  'space.cap4': 'Relvado exterior do edifício',
  'space.alt4': 'Exterior do edifício, com relvado e portas envidraçadas ao nível do jardim.',

  // --- Local ---
  'local.eyebrow': 'Onde estamos',
  'local.title': 'Como chegar até nós',
  'local.lead':
    'A Homeostase Vita funciona na Rua Engenheiro Frederico Ulrich, na Maia — no espaço que se vê acima.',
  'local.address': 'Morada',
  'local.consultations': 'Consultas',
  'local.byAppointment': 'Mediante marcação prévia',

  // --- Marcação / formulário ---
  'contact.eyebrow': 'Marcação',
  'contact.titleA': 'Marque a sua consulta',
  'contact.titleB': 'ou fale connosco.',
  'contact.formIntro':
    'As consultas são realizadas mediante marcação prévia. Deixe os seus dados e entramos em contacto consigo para confirmar o horário.',
  'contact.name': 'Nome',
  'contact.reason': 'Motivo do contacto',
  'contact.reasonPlaceholder': 'Ex.: dores nas costas há alguns meses',
  'contact.phone': 'Contacto',
  'contact.email': 'Email',
  'contact.honeypot': 'Não preencher',
  'contact.subject': 'Novo pedido de marcação — homeostasevita.pt',
  'contact.consentA': 'Autorizo o tratamento dos meus dados para efeitos de contacto e marcação, nos termos da ',
  'contact.consentLink': 'Política de Privacidade',
  'contact.consentB': '.',
  'contact.demoNotice':
    'O envio automático ainda não está ligado. Use o WhatsApp ou o telefone — respondemos da mesma forma.',
  'contact.submit': 'Enviar pedido',
  'contact.submitBusy': 'A enviar…',
  'contact.whatsappTalk': 'Falar por WhatsApp',
  'contact.minimise':
    'Só pedimos o necessário para o contactarmos. Os dados não são usados para mais nada nem partilhados com terceiros.',
  'contact.successTitle': 'Recebemos o seu pedido.',
  'contact.successText': 'Entramos em contacto consigo em breve para confirmar o horário.',
  'contact.successWhatsapp': 'Falar já por WhatsApp',
  'contact.errorTitle': 'Não foi possível enviar o pedido.',
  'contact.errorText':
    'Os seus dados não se perderam — continuam no formulário. Tente de novo ou envie-nos o pedido por WhatsApp, já preenchido.',
  'contact.retry': 'Tentar novamente',
  'contact.sendWhatsapp': 'Enviar por WhatsApp',
  'contact.asideAria': 'Contactos e localização',
  'contact.whatsappSend': 'Enviar mensagem',
  'contact.errName': 'Indique o seu nome.',
  'contact.errReason': 'Diga-nos em poucas palavras o motivo do contacto.',
  'contact.errPhone': 'Indique um número de telemóvel português válido.',
  'contact.errEmail': 'Indique um email válido para lhe podermos responder.',
  'contact.errConsent': 'Precisamos da sua autorização para o contactarmos.',
  'contact.liveInvalid': 'O formulário tem campos por corrigir.',
  'contact.liveSending': 'A enviar o pedido.',
  'contact.liveFailed': 'Não foi possível enviar o pedido.',
  'contact.liveFailedSaved': 'Não foi possível enviar o pedido. Os seus dados foram guardados.',
  'contact.liveSuccess': 'Pedido recebido. Entramos em contacto em breve.',
  'contact.waIntro': 'Olá, gostaria de marcar uma consulta.',
  'contact.waName': 'Nome',
  'contact.waPhone': 'Telemóvel',
  'contact.waEmail': 'Email',
  'contact.waReason': 'Motivo',
  'contact.consentYes': 'sim',
  'contact.consentNo': 'não',

  // --- Rodapé ---
  'footer.backToTop': 'voltar ao topo',
  'footer.name': 'Homeostase Vita — Medicina Tradicional Chinesa',
  'footer.contact': 'Contacto',
  'footer.address': 'MORADA:',
  'footer.phone': 'TELEFONE / WHATSAPP:',
  'footer.email': 'EMAIL:',
  'footer.bookings': 'MARCAÇÕES:',
  'footer.bookingsValue': 'Por contacto directo, telefone ou WhatsApp.',
  'footer.legalNav': 'Informação legal',
  'footer.linkContact': 'Contacto',
  'footer.linkPrivacy': 'Política de Privacidade (RGPD)',
  'footer.linkCookies': 'Política de Cookies',
  'footer.cookieSettings': 'Definições de cookies',
  'footer.licences': 'Licenças:',
  'footer.licenceAcss': 'Cédula Profissional ACSS n.º',
  'footer.social': 'Redes sociais',
  'footer.socialOf': 'da Homeostase Vita',
  'footer.complaints': 'Livro de Reclamações electrónico — abre em nova janela',
  'footer.complaintsAlt': 'Livro de Reclamações',
  'footer.builtBy': 'Desenvolvido por',
  'footer.builtByAria': 'AlphaScale AI — abre o site em nova janela',
  'footer.country': 'Portugal',

  // --- Consentimento ---
  'consent.title': 'Cookies e privacidade',
  'consent.text':
    'Usamos cookies de medição e o mapa do Google apenas se autorizar. Sem a sua autorização, o site funciona na mesma — só não recolhemos estatísticas.',
  'consent.policy': 'Política de Cookies',
  'consent.reject': 'Recusar',
  'consent.accept': 'Aceitar',

  // --- Chat / WhatsApp ---
  'chat.dialogAria': 'Conversa com a',
  'chat.assistant': 'Assistente',
  'chat.online': 'Online',
  'chat.close': 'Fechar conversa',
  'chat.greeting': 'Olá, como podemos ajudar? 👋',
  'chat.handoff': 'Escreva a sua mensagem e continuamos no WhatsApp.',
  'chat.yourMessage': 'A sua mensagem',
  'chat.placeholder': 'Escreva a sua mensagem…',
  'chat.send': 'Enviar por WhatsApp',
  'chat.launcher': 'Falar connosco',
  'chat.launcherAria': 'Falar connosco por WhatsApp',
  'chat.quick1': 'Marcar consulta',
  'chat.quick1Text': 'Olá! Gostaria de marcar uma consulta.',
  'chat.quick2': 'Como é a primeira consulta?',
  'chat.quick2Text': 'Olá! Queria saber como funciona a primeira consulta.',
  'chat.quick3': 'Onde ficam?',
  'chat.quick3Text': 'Olá! Podem indicar-me a morada da clínica?',
  'chat.opening': 'A abrir o WhatsApp…',
  'chat.openWhatsapp': 'Abrir o WhatsApp',
  'chat.tapToContinue': 'Toque para continuar: ',

  // --- Mapa ---
  'map.consent':
    'O mapa é do Google e coloca cookies de terceiros. Só carrega se autorizar.',
  'map.load': 'Carregar mapa',
  'map.route': 'Ver rota',

  // --- Páginas legais e de confirmação ---
  'legal.eyebrow': 'Informação legal',
  'legal.updated': 'Última atualização:',
  'legal.back': '← Voltar à página inicial',
  'received.title': 'Pedido recebido — Homeostase Vita',
  'received.description': 'Recebemos o seu pedido de marcação.',
  'received.heading': 'Recebemos o seu pedido.',
  'received.lead':
    'Entramos em contacto consigo em breve para confirmar o horário. Se preferir falar já connosco, use um dos contactos abaixo.',
  'received.home': 'Voltar ao início',

  // --- Metadados das páginas ---
  'meta.homeTitle': 'Medicina Tradicional Chinesa na Maia | Acupuntura — Homeostase Vita',
  'meta.homeDescription':
    'Clínica de Medicina Tradicional Chinesa na Maia: acupuntura, auriculoterapia, ventosaterapia e reflexologia. Saúde integrativa com avaliação individual e acompanhamento personalizado.',
} as const;

export type UiKey = keyof typeof pt;

const en: Record<UiKey, string> = {
  // --- Comum ---
  'common.book': 'Book a consultation',
  'common.bookShort': 'Book',
  'common.call': 'Call',
  'common.skipToContent': 'Skip to content',
  'common.homeAria': 'home',
  'common.complementaryNotice':
    'Traditional Chinese Medicine is a complementary wellbeing approach and does not replace medical assessment and care.',

  // --- Idioma ---
  'lang.switchTo': 'Português',
  'lang.switchLabel': 'View this site in Portuguese',
  'lang.current': 'English',
  'lang.groupLabel': 'Language',

  // --- Header / navegação ---
  'nav.treatments': 'Treatments',
  'nav.philosophy': 'Philosophy',
  'nav.firstVisit': 'First visit',
  'nav.therapist': 'Therapist',
  'nav.space': 'The space',
  'nav.questions': 'Questions',
  'nav.main': 'Main navigation',
  'nav.small': 'Small-screen navigation',
  'nav.openMenu': 'Open menu',
  'nav.closeMenu': 'Close menu',

  // --- Hero ---
  'hero.kicker': 'Traditional Chinese Medicine',
  'hero.title': 'Balance,',
  'hero.titleEm': 'built with',
  'hero.titleEnd': 'you',
  'hero.scroll': 'See the treatments',
  'hero.titleA': 'Homeostase Vita — Traditional',
  'hero.titleB': ' Chinese Medicine clinic',
  'hero.sub':
    'An integrative clinic in Maia. Individual assessment and continued care for persistent pain, emotional health and balance that lasts.',
  'hero.imgAlt':
    'Acupuncture needles being placed on a person’s back during a session.',

  // --- Credenciais ---
  'cred.aria': 'Clinic credentials',
  'cred.licence': 'ACSS professional licence',
  'cred.licenceValue': 'no.',
  'cred.assessment': 'Individual assessment',
  'cred.assessmentValue': 'Before any treatment',
  'cred.techniques': 'Several techniques',
  'cred.techniquesValue': 'Chosen case by case',

  // --- Tratamentos ---
  'services.eyebrow': 'Treatments',
  'services.title': 'Our treatments',
  'services.intro':
    'According to the symptoms, characteristics and needs of each person, different techniques of Traditional Chinese Medicine and complementary areas may be used.',
  'services.note':
    'The choice of techniques follows from the individual assessment made during the consultation.',

  // --- Abordagem ---
  'approach.title': 'How we treat at Homeostase Vita',
  'approach.p1':
    'Rooted in Traditional Chinese Medicine, we look at the body as an interconnected whole rather than treating an isolated symptom. Each treatment is designed around the person, based on an individual assessment, and may include acupuncture, herbal medicine, Tui Na massage, cupping, moxibustion, Gua Sha and Chinese dietetics.',
  'approach.p2':
    'We work with a wide range of acute and chronic complaints — pain, digestive problems, stress, fatigue, sleep disturbances and hormonal imbalances — restoring balance and caring for health over the long term.',
  'approach.imgAlt':
    'Therapist assessing the pulse at a patient’s wrist, resting on a cushion.',

  // --- Filosofia ---
  'about.eyebrow': 'Our philosophy',
  'about.phrase': 'An approach centred on the person.',
  'about.p1a':
    'Each person is assessed individually. Symptoms are not analysed in isolation but related to other signs, habits and personal characteristics, making it possible to build ',
  'about.p1strong': 'a whole view of their state of health',
  'about.p1b': '.',
  'about.p2':
    'From this assessment, a therapeutic strategy is defined to suit the needs of each person, drawing on the techniques best suited to each situation.',
  'about.p3':
    'Care takes place in a calm, professional setting, where the time devoted to assessment and the attention paid to the particularities of each clinical case are central.',

  // --- Áreas ---
  'areas.eyebrow': 'Areas of care',
  'areas.title': 'Situations where it can be used',
  'areas.lead':
    'Traditional Chinese Medicine can be used in addressing different health conditions, among others:',
  'areas.link': 'Book an assessment',
  'areas.notice':
    'The intervention is always personalised, taking into account the symptoms presented, the individual characteristics and the needs of each person, and may serve as a complement to conventional health care where appropriate.',

  // --- Acupuntura em destaque ---
  'acup.eyebrow': 'In focus',
  'acup.titleA': 'Acupuncture, one of the',
  'acup.titleB': 'main techniques',
  'acup.leadA':
    'Acupuncture is one of the main techniques used in Traditional Chinese Medicine, and may be ',
  'acup.leadStrong': 'complemented by other therapeutic strategies',
  'acup.leadB': ' according to the needs of each person.',
  'acup.point1': 'Very fine needles, generally well tolerated',
  'acup.point2': 'Points chosen from the individual assessment',
  'acup.point3': 'Intervention adjusted to each person’s sensitivity',
  'acup.faqEyebrow': 'The most frequent question',
  'acup.faqQ': 'Does acupuncture hurt?',
  'acup.faqA1':
    'Acupuncture needles are very fine and their application is generally well tolerated. The sensation varies from person to person: for many, insertion is practically painless, with perhaps a slight prick or a momentary sensation of pressure, warmth or tingling.',
  'acup.faqA2':
    'During the session, the aim is to ensure the greatest possible comfort, adjusting the intervention to the sensitivity and individual characteristics of each person.',

  // --- Percurso ---
  'process.eyebrow': 'How the consultation works',
  'process.title': 'From first contact to ongoing care',
  'process.lead':
    'An individual assessment always precedes any intervention. This is the path for those coming for the first time.',
  'process.step1Title': 'In-depth assessment',
  'process.step1Text':
    'The first consultation begins by gathering and analysing different parameters related to health, symptoms, habits and personal characteristics.',
  'process.step2Title': 'Overall observation',
  'process.step2Text':
    'Observation of the tongue and assessment of the pulse are important elements of this evaluation, alongside questions directed at each situation.',
  'process.step3Title': 'Therapeutic strategy',
  'process.step3Text':
    'The assessment leads to a strategy suited to the situation, which may bring together acupuncture, auriculotherapy, cupping or reflexology.',
  'process.step4Title': 'Follow-up consultations',
  'process.step4Text':
    'These make it possible to track progress and adjust the intervention whenever necessary, throughout the course of care.',
  'process.bookingStrong': 'Prior appointment',
  'process.bookingText': 'Consultations take place by appointment',

  // --- Terapeuta ---
  'practitioner.eyebrow': 'Who looks after you',
  'practitioner.title': 'The person behind every consultation',
  'practitioner.role': 'Traditional Chinese Medicine therapist',
  'practitioner.licence': 'ACSS licence no.',
  'practitioner.techniques': 'Techniques practised',
  'practitioner.bioPending': 'Biography to be confirmed',
  'practitioner.bio':
    'Trained in Traditional Chinese Medicine, with a personalised and integrated practice oriented towards physical and emotional health. Continuing education allows for constant updating and for deepening knowledge in the assessment and therapeutic approach to different health conditions. A whole view of each person is valued, relating symptoms, habits and lifestyle, with the aim of promoting homeostasis and balance in the body.',

  // --- FAQ ---
  'faq.eyebrow': 'Frequently asked questions',
  'faq.title': 'Before your first consultation',

  // --- Faixa CTA ---
  'cta.aria': 'Book a consultation',
  'cta.eyebrow': 'Take the first step',
  'cta.title': 'Your consultation begins with a conversation.',
  'cta.sub': 'No commitment: you can call just to clear up any questions before deciding.',

  // --- Espaço ---
  'space.eyebrow': 'The space',
  'space.title': 'Where you will be received',
  'space.lead':
    'Consultations take place in a dedicated room within a shared space in Maia — spacious, bright and quiet, with an entrance hall and a lawn outside.',
  'space.note':
    'The common room and the entrance hall are shared with other professionals in the building. Consultations are always by prior appointment.',
  'space.cap1': 'Common room, with access to the outside',
  'space.alt1':
    'A spacious, bright room with floor-to-ceiling windows looking onto a lawn.',
  'space.cap2': 'Consultation room',
  'space.alt2':
    'Consultation room with a sofa, armchair, rug and a large window with light curtains.',
  'space.cap3': 'Entrance hall',
  'space.alt3':
    'The building’s entrance hall, with a reception desk, orchids and the venue sign.',
  'space.cap4': 'Lawn outside the building',
  'space.alt4':
    'The outside of the building, with a lawn and glazed doors at garden level.',

  // --- Local ---
  'local.eyebrow': 'Where we are',
  'local.title': 'How to find us',
  'local.lead':
    'Homeostase Vita is located on Rua Engenheiro Frederico Ulrich, in Maia — in the space shown above.',
  'local.address': 'Address',
  'local.consultations': 'Consultations',
  'local.byAppointment': 'By prior appointment',

  // --- Marcação / formulário ---
  'contact.eyebrow': 'Booking',
  'contact.titleA': 'Book your consultation',
  'contact.titleB': 'or get in touch.',
  'contact.formIntro':
    'Consultations take place by prior appointment. Leave your details and we will get in touch to confirm a time.',
  'contact.name': 'Name',
  'contact.reason': 'Reason for contact',
  'contact.reasonPlaceholder': 'e.g. back pain for a few months',
  'contact.phone': 'Phone',
  'contact.email': 'Email',
  'contact.honeypot': 'Do not fill in',
  'contact.subject': 'New appointment request — homeostasevita.pt',
  'contact.consentA':
    'I consent to my data being processed for the purposes of contact and booking, under the terms of the ',
  'contact.consentLink': 'Privacy Policy',
  'contact.consentB': '.',
  'contact.demoNotice':
    'Automatic sending is not connected yet. Please use WhatsApp or the phone — we answer just the same.',
  'contact.submit': 'Send request',
  'contact.submitBusy': 'Sending…',
  'contact.whatsappTalk': 'Message us on WhatsApp',
  'contact.minimise':
    'We only ask for what we need in order to contact you. Your data is not used for anything else, nor shared with third parties.',
  'contact.successTitle': 'We have received your request.',
  'contact.successText': 'We will be in touch shortly to confirm a time.',
  'contact.successWhatsapp': 'Message us on WhatsApp now',
  'contact.errorTitle': 'The request could not be sent.',
  'contact.errorText':
    'Your details have not been lost — they are still in the form. Try again, or send us the request on WhatsApp, already filled in.',
  'contact.retry': 'Try again',
  'contact.sendWhatsapp': 'Send on WhatsApp',
  'contact.asideAria': 'Contacts and location',
  'contact.whatsappSend': 'Send a message',
  'contact.errName': 'Please enter your name.',
  'contact.errReason': 'Tell us in a few words the reason for getting in touch.',
  'contact.errPhone': 'Please enter a valid Portuguese mobile number.',
  'contact.errEmail': 'Please enter a valid email so we can reply to you.',
  'contact.errConsent': 'We need your consent in order to contact you.',
  'contact.liveInvalid': 'The form has fields that need correcting.',
  'contact.liveSending': 'Sending your request.',
  'contact.liveFailed': 'The request could not be sent.',
  'contact.liveFailedSaved': 'The request could not be sent. Your details have been saved.',
  'contact.liveSuccess': 'Request received. We will be in touch shortly.',
  'contact.waIntro': 'Hello, I would like to book a consultation.',
  'contact.waName': 'Name',
  'contact.waPhone': 'Mobile',
  'contact.waEmail': 'Email',
  'contact.waReason': 'Reason',
  'contact.consentYes': 'yes',
  'contact.consentNo': 'no',

  // --- Rodapé ---
  'footer.backToTop': 'back to top',
  'footer.name': 'Homeostase Vita — Traditional Chinese Medicine',
  'footer.contact': 'Contact',
  'footer.address': 'ADDRESS:',
  'footer.phone': 'PHONE / WHATSAPP:',
  'footer.email': 'EMAIL:',
  'footer.bookings': 'BOOKINGS:',
  'footer.bookingsValue': 'By direct contact, phone or WhatsApp.',
  'footer.legalNav': 'Legal information',
  'footer.linkContact': 'Contact',
  'footer.linkPrivacy': 'Privacy Policy (GDPR)',
  'footer.linkCookies': 'Cookie Policy',
  'footer.cookieSettings': 'Cookie settings',
  'footer.licences': 'Licences:',
  'footer.licenceAcss': 'ACSS professional licence no.',
  'footer.social': 'Social media',
  'footer.socialOf': 'of Homeostase Vita',
  'footer.complaints': 'Electronic complaints book — opens in a new window',
  'footer.complaintsAlt': 'Complaints book',
  'footer.builtBy': 'Built by',
  'footer.builtByAria': 'AlphaScale AI — opens the site in a new window',
  'footer.country': 'Portugal',

  // --- Consentimento ---
  'consent.title': 'Cookies and privacy',
  'consent.text':
    'We use measurement cookies and the Google map only with your permission. Without it the site works just the same — we simply do not collect statistics.',
  'consent.policy': 'Cookie Policy',
  'consent.reject': 'Decline',
  'consent.accept': 'Accept',

  // --- Chat / WhatsApp ---
  'chat.dialogAria': 'Chat with',
  'chat.assistant': 'Assistant',
  'chat.online': 'Online',
  'chat.close': 'Close chat',
  'chat.greeting': 'Hello, how can we help? 👋',
  'chat.handoff': 'Write your message and we will continue on WhatsApp.',
  'chat.yourMessage': 'Your message',
  'chat.placeholder': 'Write your message…',
  'chat.send': 'Send on WhatsApp',
  'chat.launcher': 'Chat with us',
  'chat.launcherAria': 'Chat with us on WhatsApp',
  'chat.quick1': 'Book a consultation',
  'chat.quick1Text': 'Hello! I would like to book a consultation.',
  'chat.quick2': 'What is the first consultation like?',
  'chat.quick2Text': 'Hello! I would like to know how the first consultation works.',
  'chat.quick3': 'Where are you?',
  'chat.quick3Text': 'Hello! Could you tell me the clinic address?',
  'chat.opening': 'Opening WhatsApp…',
  'chat.openWhatsapp': 'Open WhatsApp',
  'chat.tapToContinue': 'Tap to continue: ',

  // --- Mapa ---
  'map.consent':
    'The map is provided by Google and sets third-party cookies. It only loads with your permission.',
  'map.load': 'Load map',
  'map.route': 'Get directions',

  // --- Páginas legais e de confirmação ---
  'legal.eyebrow': 'Legal information',
  'legal.updated': 'Last updated:',
  'legal.back': '← Back to the home page',
  'received.title': 'Request received — Homeostase Vita',
  'received.description': 'We have received your appointment request.',
  'received.heading': 'We have received your request.',
  'received.lead':
    'We will be in touch shortly to confirm a time. If you would rather speak to us now, use one of the contacts below.',
  'received.home': 'Back to the home page',

  // --- Metadados das páginas ---
  'meta.homeTitle': 'Traditional Chinese Medicine in Maia | Acupuncture — Homeostase Vita',
  'meta.homeDescription':
    'Traditional Chinese Medicine clinic in Maia, Portugal: acupuncture, auriculotherapy, cupping and reflexology. Integrative health with individual assessment and personalised care.',
};

const dictionaries: Record<Locale, Record<UiKey, string>> = { pt, en };

/**
 * Devolve o tradutor do idioma. `const t = t(locale)` no frontmatter do
 * componente, depois `t('chave')` no markup.
 */
export function useTranslations(locale: Locale) {
  const dict = dictionaries[locale] ?? dictionaries.pt;
  return (key: UiKey): string => dict[key];
}
