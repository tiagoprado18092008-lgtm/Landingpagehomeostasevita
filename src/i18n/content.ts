/**
 * Conteúdo de dados traduzido — tratamentos, áreas, princípios e FAQ.
 *
 * O português vem dos JSON em `src/content/` (continua a ser a fonte de
 * verdade, editável pela clínica). O inglês vive aqui, indexado pela mesma
 * ordem, porque só a parte textual muda: ícones, imagens e slugs são
 * partilhados e não se traduzem.
 *
 * NOTA(cliente): tradução de trabalho, fiel ao português validado. Nenhuma
 * frase acrescenta afirmação clínica que o original não faça — a mesma regra
 * que rege o texto português aplica-se aqui.
 */
import type { Locale } from './index';

import servicesPt from '../content/services.json';
import benefitsPt from '../content/benefits.json';
import concernsPt from '../content/concerns.json';
import faqPt from '../content/faq.json';

export interface Service {
  icon: string;
  name: string;
  /**
   * Nome português do tratamento, sempre. É daqui que sai a âncora do cartão
   * (`#trat-acupuntura`), para que um link partilhado continue a apontar para
   * o mesmo cartão seja qual for a língua da página.
   */
  anchor?: string;
  description: string;
  detail?: string;
  photo: string;
  image?: string;
  alt?: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface Concern {
  icon: string;
  title: string;
}

export interface FaqItem {
  q: string;
  a: string[];
}

const servicesEn: Service[] = [
  {
    icon: 'needles',
    name: 'Acupuncture',
    anchor: 'Acupuntura',
    description:
      'The technique most widely used in Traditional Chinese Medicine, particularly in the West. It involves applying needles at specific points of the body (acupoints), according to each person’s energetic and functional assessment.',
    detail:
      'The stimulation produced by inserting the needle has effects at the level of the nervous system, through neurotransmitters, prompting the body to release substances that support healing. The needles are very fine and insertion is generally well tolerated. The points may vary from session to session, according to the assessment and how the health condition progresses.',
    photo: 'photo: acupuncture session',
    image: 'acupuntura',
    alt: 'Acupuncture needles being placed on the back of a person lying down.',
  },
  {
    icon: 'ear',
    name: 'Auriculotherapy',
    anchor: 'Auriculoterapia',
    description:
      'A therapeutic technique that uses the stimulation of specific points on the outer ear as a way of prompting responses in the body.',
    detail:
      'It is applied to the outer ear, auriculotherapy being a microsystem that represents the whole human body, and is integrated into the therapeutic strategy where appropriate to the situation.',
    photo: 'photo: auriculotherapy',
    image: 'auriculoterapia',
    alt: 'A stimulation point being placed on the outer ear of a patient.',
  },
  {
    icon: 'head',
    name: 'Craniopuncture',
    anchor: 'Craniopuntura',
    description:
      'Stimulation of specific points and areas of the scalp, integrated into the therapeutic strategy according to the individual diagnosis.',
    detail:
      'It may be used in a range of conditions and energetic and functional imbalances, drawing on a correspondence system of its own.',
    photo: 'photo: craniopuncture session',
    image: 'craniopuntura',
    alt: 'Craniopuncture needles being applied to the scalp of a person.',
  },
];

const benefitsEn: Benefit[] = [
  {
    icon: 'person',
    title: 'Individual assessment',
    description:
      'Every course of care begins with understanding the person, their symptoms and their individual characteristics.',
  },
  {
    icon: 'yinyang',
    title: 'A whole view of health',
    description:
      'The various symptoms and signs are analysed together, seeking to understand how they connect and to see the body as a whole.',
  },
  {
    icon: 'needles',
    title: 'Personalised intervention',
    description:
      'The therapeutic strategy is defined according to the assessment carried out and may bring together different techniques of Traditional Chinese Medicine.',
  },
  {
    icon: 'hands',
    title: 'Individual follow-up',
    description:
      'Progress is followed across the consultations, allowing the therapeutic strategy to be adapted whenever necessary.',
  },
  {
    icon: 'leaf',
    title: 'Prevention and balance',
    description:
      'Beyond working on the symptoms, value is placed on prevention and on adopting habits that support balance and wellbeing.',
  },
  {
    icon: 'lotus',
    title: 'A range of techniques',
    description:
      'Depending on each situation, different techniques may be used, such as acupuncture, auriculotherapy, craniopuncture, moxibustion, herbal medicine or Chinese dietetics.',
  },
];

const concernsEn: Concern[] = [
  { icon: 'stomach', title: 'Digestive and intestinal problems' },
  { icon: 'head', title: 'Migraines' },
  { icon: 'joints', title: 'Muscle pain' },
  { icon: 'lotus', title: 'Stress, anxiety and insomnia' },
  { icon: 'energy', title: 'Allergies, rhinitis and sinusitis' },
  { icon: 'yinyang', title: 'Physical and emotional imbalances' },
];

const faqEn: FaqItem[] = [
  {
    q: 'What is Traditional Chinese Medicine?',
    a: [
      'Traditional Chinese Medicine (TCM) is a therapeutic approach to health based on age-old knowledge, which seeks to understand the person as a whole. Rather than analysing each symptom in isolation, it relates the different complaints and individual characteristics, considering that the same manifestation may be associated with different factors and imbalances.',
      'Diagnosis in Traditional Chinese Medicine is carried out through an overall observation of the person and questions directed at symptoms, habits and individual characteristics. Observation of the tongue and assessment of the pulse are important elements of this evaluation.',
      'Acupuncture is one of the main techniques used in Traditional Chinese Medicine, and may be complemented by other therapeutic strategies according to the needs of each person. Prevention and health promotion are also pillars of this medicine, valuing aspects such as diet, daily habits and lifestyle.',
      'The aim is to provide a personalised intervention, oriented towards balance and the overall wellbeing of the body.',
    ],
  },
  {
    q: 'In what situations can Traditional Chinese Medicine be used?',
    a: [
      'Traditional Chinese Medicine can be used in addressing different health conditions, namely situations of pain, muscle tension, migraines, digestive and intestinal changes, stress, anxiety, insomnia, allergies, rhinitis and sinusitis, among others.',
      'The intervention is always personalised, taking into account the symptoms presented, the individual characteristics and the needs of each person, and may serve as a complement to conventional health care where appropriate.',
    ],
  },
  {
    q: 'How does the consultation work?',
    a: [
      'The first consultation involves an in-depth, individual assessment, through gathering and analysing different parameters related to health, symptoms, habits and personal characteristics.',
      'Follow-up consultations make it possible to track progress and adjust the intervention whenever necessary.',
      'According to the symptoms, characteristics and needs of each person, different therapeutic techniques of Traditional Chinese Medicine and complementary areas may be used, namely acupuncture, auriculotherapy, craniopuncture, moxibustion, herbal medicine and Chinese dietetics.',
    ],
  },
  {
    q: 'Does acupuncture hurt?',
    a: [
      'Acupuncture needles are very fine and their application is generally well tolerated.',
      'The sensation varies from person to person. For many people insertion is practically painless, with perhaps a slight prick or a momentary sensation of pressure, warmth or tingling.',
      'During the session, the aim is to ensure the greatest possible comfort, adjusting the intervention to the sensitivity and individual characteristics of each person.',
    ],
  },
  {
    q: 'How many sessions are needed?',
    a: [
      'There is no single number of sessions that applies to everyone. The frequency and length of care depend on the situation presented, the therapeutic goals and the individual response to treatment.',
      'Progress is followed across the consultations, allowing the therapeutic strategy to be adjusted whenever necessary.',
    ],
  },
  {
    q: 'How can I book a consultation?',
    a: [
      'Consultations take place by prior appointment.',
      'To request an appointment or clarify any question before the first consultation, you can get in touch through the channels provided on this site.',
    ],
  },
];

/**
 * Técnicas praticadas pela terapeuta — lista mais larga do que os três
 * tratamentos em destaque na secção de cartões, que é uma selecção e não o
 * âmbito todo da prática.
 */
const techniquesPt = [
  'Acupuntura',
  'Auriculoterapia',
  'Craniopuntura',
  'Moxabustão',
  'Fitoterapia',
  'Dietética chinesa',
  'Massagem Tuina',
];

const techniquesEn = [
  'Acupuncture',
  'Auriculotherapy',
  'Craniopuncture',
  'Moxibustion',
  'Herbal medicine',
  'Chinese dietetics',
  'Tuina massage',
];

export const getTechniques = (locale: Locale): string[] =>
  locale === 'en' ? techniquesEn : techniquesPt;

export const getServices = (locale: Locale): Service[] =>
  locale === 'en' ? servicesEn : (servicesPt as Service[]);

export const getBenefits = (locale: Locale): Benefit[] =>
  locale === 'en' ? benefitsEn : (benefitsPt as Benefit[]);

export const getConcerns = (locale: Locale): Concern[] =>
  locale === 'en' ? concernsEn : (concernsPt as Concern[]);

export const getFaq = (locale: Locale): FaqItem[] =>
  locale === 'en' ? faqEn : (faqPt as FaqItem[]);
