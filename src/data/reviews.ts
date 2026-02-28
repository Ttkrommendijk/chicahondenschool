import { l10n, type L10n } from "./l10n";
import { localize } from "../i18n";

export interface ReviewItem {
  id: string;
  quote: L10n;
  fullText?: L10n;
  author?: L10n;
  contextTag?: L10n;
  sourceUrl?: string;
}

export const reviewsPage = {
  seo: {
    title: l10n("Reviews | ChiCa Hondenschool", "Reviews | ChiCa Dog School"),
    description: l10n(
      "Ervaringen, recensies en foto-impressie van klanten van ChiCa Hondenschool.",
      "Experiences, reviews, and photo impressions from ChiCa Dog School clients.",
    ),
  },
  hero: {
    title: l10n("Reviews en recensies", "Reviews and testimonials"),
    lead: l10n(
      "Ervaringen van hondeneigenaren over training en begeleiding in de praktijk: persoonlijk, rustig en doelgericht.",
      "Experiences from dog owners about practical training and coaching: personal, calm, and focused.",
    ),
    image: {
      src: "/images/chica-hondenschool-review-impressie.webp",
      alt: l10n(
        "Foto-impressie van reviews en praktijkmomenten",
        "Photo impression of reviews and practical moments",
      ),
      width: 800,
      height: 450,
    },
    primaryCta: { label: l10n("Boek direct", "Book now") },
    secondaryCta: { label: l10n("Contact", "Contact"), href: "/contact/" },
  },
  highlights: {
    title: l10n("Wat mensen zeggen", "What people say"),
    intro: l10n(
      "Een selectie van reacties van enthousiaste klanten uit Den Haag, Rijswijk en Voorschoten die het verschil in de praktijk goed laten zien.",
      "A selection of responses of enthusiastic customers from Den Haag, Rijswijk, and Voorschoten that clearly show the practical difference.",
    ),
  },
  gallery: {
    title: l10n("Foto-impressie", "Photo impression"),
    intro: l10n(
      "Een sfeerbeeld van lessen en praktijkmomenten.",
      "An impression of lessons and practical moments.",
    ),
    ariaLabel: l10n(
      "Foto-impressie van reviews",
      "Photo impression of reviews",
    ),
    emptyText: l10n(
      "Er zijn momenteel geen reviewfoto's beschikbaar.",
      "There are currently no review photos available.",
    ),
  },
  list: {
    title: l10n("Alle recensies", "All reviews"),
    intro: l10n(
      "Alle reacties blijven beschikbaar, maar ingeklapt voor overzicht en leesrust.",
      "All responses remain available, but collapsed for overview and readability.",
    ),
    readMoreLabel: l10n("Lees meer", "Read more"),
    showMoreLabel: l10n("Toon meer recensies", "Show more reviews"),
    defaultAuthorLabel: l10n("Review", "Review"),
  },
  cta: {
    title: l10n(
      "Klaar voor begeleiding die echt past?",
      "Ready for guidance that truly fits?",
    ),
    text: l10n(
      "Plan een eerste stap die aansluit op jouw hond, jouw situatie en jouw tempo.",
      "Plan a first step that fits your dog, your situation, and your pace.",
    ),
    primary: { label: l10n("Contact", "Contact"), href: "/contact/" },
    secondary: { label: l10n("Boek direct", "Book now") },
  },
};

export const allReviews: ReviewItem[] = [
  {
    id: "fleurtje-2024",
    quote: l10n(
      "Zo fijn de begeleiding, aandacht en uitleg. Eén-op-één uitleg gaf ons veel meer vertrouwen om onze hond te lezen.",
      "The guidance, attention, and explanations were so helpful. One-on-one coaching gave us much more confidence in reading our dog.",
    ),
    fullText: l10n(
      "Bij Carine zijn wij gestart met de puppylessen in een kleine groep. Zo fijn de begeleiding, aandacht en uitleg. Daarna de basiscursus en inmiddels maken wij gebruik van privélessen detectie. Het is bijzonder leerzaam om één op één uitleg te krijgen over de signalen die onze hond geeft. Dit geeft meer vertrouwen dat wij haar ook kunnen lezen. De lessen worden helemaal op eigen wensen vormgegeven, natuurlijk wel met adviezen van Carine waar wijzelf en onze hond het meeste aan hebben. Super dankbaar!",
      "With Carine, we started with puppy lessons in a small group. The guidance, attention, and explanations were excellent. After that we did the basic course, and now we follow private detection lessons. Getting one-on-one guidance on the signals our dog gives is incredibly educational. It gave us much more confidence that we can read her properly. The lessons are fully tailored to our wishes, with Carine's advice on what benefits both us and our dog most. Very grateful!",
    ),
    author: l10n("Fleurtje", "Fleurtje"),
    contextTag: l10n("Detectie", "Detection"),
    sourceUrl: "https://www.chicahondenschool.nl/foto-s-en-recensies",
  },
  {
    id: "tessa-2023",
    quote: l10n(
      "Na een paar maanden hebben wij nog steeds veel profijt van wat we leerden, en er kwam rust rond het alleen zijn.",
      "After a few months we still benefit greatly from what we learned, and there is now calmness around being home alone.",
    ),
    fullText: l10n(
      "Het is een paar maanden terug dat wij bij Carine de puppycursus en de basiscursus hebben gevolgd. Na deze maanden hebben wij nog steeds heel veel profijt van alles wat wij hebben geleerd, vooral ook van de theorieavond. De trainingen zijn laagdrempelig en gaan echt om de band tussen jou en je hond. Daarnaast is er de mogelijkheid voor andere vragen. Carine heeft ons destijds enorm geholpen met de verlatingsangst van onze pup. Inmiddels kan hij makkelijk een paar uur alleen zijn. Kortom: een dikke aanrader voor elke hondeneigenaar!",
      "A few months ago we followed both the puppy course and the basic course with Carine. We still benefit a lot from everything we learned, especially from the theory evening. The training is approachable and truly focuses on the bond between you and your dog. There is also room for additional questions. Carine helped us enormously with our puppy's separation anxiety. He can now stay alone for a few hours without issues. In short: highly recommended for every dog owner!",
    ),
    author: l10n("Tessa", "Tessa"),
    contextTag: l10n("Puppy", "Puppy"),
    sourceUrl: "https://www.chicahondenschool.nl/foto-s-en-recensies",
  },
  {
    id: "corien-2023",
    quote: l10n(
      "Leerzaam, leuk en speels. De theorieles hielp me veel gerichter naar gedrag van honden te kijken.",
      "Educational, fun, and playful. The theory class helped me look at dog behavior much more clearly.",
    ),
    fullText: l10n(
      "De puppycursus en basiscursus gevolgd bij Carine. Ik vond het leerzaam, leuk en speels. De theorieles vond ik ook heel interessant en leerde me gerichter naar het gedrag van honden te kijken. Carine, bedankt!",
      "I followed the puppy course and basic course with Carine. I found it educational, fun, and playful. The theory lesson was also very interesting and taught me to observe dog behavior in a much more focused way. Thank you, Carine!",
    ),
    author: l10n("Corien", "Corien"),
    contextTag: l10n("Basiscursus", "Basic course"),
    sourceUrl: "https://www.chicahondenschool.nl/foto-s-en-recensies",
  },
  {
    id: "nicole-2023",
    quote: l10n(
      "Heel veel aandacht voor de omgang met je hond. Een privélesje heeft mij echt goed op weg geholpen.",
      "A lot of attention is given to how you handle your dog. A private lesson really helped me get started.",
    ),
    fullText: l10n(
      "Fijne hondenschool met heel veel aandacht voor de omgang met je hond. Je leert je hond goed kennen en snappen waarom hij dingen doet zoals hij doet. Ook een privélesje heeft mij goed op weg geholpen, zeker de moeite van de investering waard.",
      "A great dog school with lots of attention to how you work with your dog. You get to know your dog better and understand why he does what he does. A private lesson also helped me a lot, definitely worth the investment.",
    ),
    author: l10n("Nicole", "Nicole"),
    contextTag: l10n("Priveles", "Private lesson"),
    sourceUrl: "https://www.chicahondenschool.nl/foto-s-en-recensies",
  },
  {
    id: "marco-2023",
    quote: l10n(
      "Leuke lessen met kleine groepjes en creatieve voorbeelden. Onze jonge herder is er enorm door gegroeid.",
      "Great lessons in small groups with creative examples. Our young shepherd has grown tremendously because of it.",
    ),
    fullText: l10n(
      "Wat een leuke cursussen. Geen eindeloos standaard oefenen, maar juist veel interactie met je hond en creatieve voorbeelden. Kleine groepjes waarin rekening wordt gehouden met karakter en leerpunten van de honden. Daardoor zijn wij met onze jonge herder echt gegroeid.",
      "What great courses. No endless standard drills, but lots of interaction with your dog and creative examples. Small groups where the character and learning points of each dog are taken into account. It helped us and our young shepherd make real progress.",
    ),
    author: l10n("Marco", "Marco"),
    contextTag: l10n("Basiscursus", "Basic course"),
    sourceUrl: "https://www.chicahondenschool.nl/foto-s-en-recensies",
  },
  {
    id: "jet-2022",
    quote: l10n(
      "Onze dochter leerde signalen beter lezen en respectvol aandacht vragen. Dat heeft hun band zichtbaar versterkt.",
      "Our daughter learned to read signals better and ask for attention respectfully. It clearly strengthened their bond.",
    ),
    fullText: l10n(
      "De hond-cursus was heel leerzaam en leuk voor mijn dochter en onze hond. Prachtig om te zien hoe zij signalen van de hond beter kan lezen en aandacht op een respectvolle manier kan vragen. De hond heeft er ook van genoten en hun band is nog sterker geworden.",
      "The dog course was very educational and fun for my daughter and our dog. It was wonderful to see how she learned to read the dog's signals better and ask for attention respectfully. Our dog enjoyed it too, and their bond has become even stronger.",
    ),
    author: l10n("Jet", "Jet"),
    contextTag: l10n("Basiscursus", "Basic course"),
    sourceUrl: "https://www.chicahondenschool.nl/foto-s-en-recensies",
  },
  {
    id: "tineke-2022",
    quote: l10n(
      "Kleine groepen, veel persoonlijke aandacht en heel positieve begeleiding. Een echte aanrader.",
      "Small groups, lots of personal attention, and very positive guidance. Truly recommended.",
    ),
    fullText: l10n(
      "Onlangs de puppycursus bij Carine gedaan. Hoewel dit mijn vierde hond is, heb ik veel geleerd. Kleine groepen zorgen voor tempo, iedereen krijgt aandacht en de begeleiding is positief. Je merkt dat oefeningen op een hondvriendelijke manier worden aangeleerd. Voor mij een echte aanrader.",
      "I recently took the puppy course with Carine. Even though this is my fourth dog, I learned a lot. Small groups keep a good pace, everyone gets attention, and the guidance is positive. You can tell the exercises are taught in a dog-friendly way. I highly recommend it.",
    ),
    author: l10n("Tineke", "Tineke"),
    contextTag: l10n("Puppy", "Puppy"),
    sourceUrl: "https://www.chicahondenschool.nl/foto-s-en-recensies",
  },
  {
    id: "petra-2021",
    quote: l10n(
      "De workshop voorwerpen zoeken was superleuk en je zag hoe snel mijn hond het oppakte.",
      "The object-search workshop was great fun and you could see how quickly my dog picked it up.",
    ),
    fullText: l10n(
      "Vorige week vrijdag heb ik met Max de workshop voorwerpen zoeken gevolgd. Het was heel leuk om te zien hoe enthousiast Max was en hoe snel hij alles oppakte.",
      "Last Friday I joined the object-search workshop with Max. It was wonderful to see how enthusiastic Max was and how quickly he learned everything.",
    ),
    author: l10n("Petra", "Petra"),
    contextTag: l10n("Workshop", "Workshop"),
    sourceUrl: "https://www.chicahondenschool.nl/foto-s-en-recensies",
  },
  {
    id: "queriene-2021",
    quote: l10n(
      "Detectie én carrousel gedaan: uitdagend, leerzaam en vooral heel leuk om samen te doen.",
      "We did both detection and carousel: challenging, educational, and above all very fun to do together.",
    ),
    fullText: l10n(
      "Wow, gisteren twee workshops gedaan met onze hond. Eerst detectie, leuk om te merken dat zowel hond als eigenaar er plezier in hadden. Daarna carrousel met een onbekende hond, een echte uitdaging. We hebben er veel van geleerd en het was erg leuk om samen te doen.",
      "Wow, yesterday we did two workshops with our dog. First detection, and it was great to notice how much both dog and owner enjoyed it. Then carousel with an unfamiliar dog, a real challenge. We learned a lot and it was very enjoyable to do together.",
    ),
    author: l10n("Queriene", "Queriene"),
    contextTag: l10n("Detectie", "Detection"),
    sourceUrl: "https://www.chicahondenschool.nl/foto-s-en-recensies",
  },
  {
    id: "familie-us-2019",
    quote: l10n(
      "Dankzij de privélessen kwam er meer rust, competentie en saamhorigheid rond de opvoeding van onze pup.",
      "Thanks to the private lessons, we gained more calm, confidence, and unity in raising our puppy.",
    ),
    fullText: l10n(
      "Carine is onze redding geweest. We hadden onze eerste pup en dankzij haar adviezen in privélessen kwam er meer rust en gevoel van competentie en saamhorigheid rondom de opvoeding. Dat gaf een goede start en veel vertrouwen voor de toekomst.",
      "Carine was our lifesaver. We had our first puppy, and thanks to her private-lesson advice there was much more calmness, confidence, and teamwork around the upbringing. It gave us a great start and a lot of confidence for the future.",
    ),
    author: l10n("Familie", "Family"),
    contextTag: l10n("Priveles", "Private lesson"),
    sourceUrl: "https://www.chicahondenschool.nl/foto-s-en-recensies",
  },
];

const positiveKeywords = [
  "vertrouwen",
  "rust",
  "geholpen",
  "aanrader",
  "profijt",
  "geleerd",
  "persoonlijke",
  "plezier",
  "band",
];

const outcomeKeywords = ["kan", "meer", "sneller", "beter", "groeid"];

const scoreReview = (review: ReviewItem): number => {
  const text =
    `${localize(review.quote, "nl")} ${review.fullText ? localize(review.fullText, "nl") : ""}`.toLowerCase();
  const keywordScore = positiveKeywords.reduce(
    (score, word) => score + (text.includes(word) ? 2 : 0),
    0,
  );
  const outcomeScore = outcomeKeywords.reduce(
    (score, word) => score + (text.includes(word) ? 1 : 0),
    0,
  );
  const lengthBonus = Math.min(
    Math.floor(
      (review.fullText
        ? localize(review.fullText, "nl").length
        : localize(review.quote, "nl").length) / 120,
    ),
    4,
  );
  return keywordScore + outcomeScore + lengthBonus;
};

export const selectHighlightReviews = (
  reviews: ReviewItem[],
  max = 8,
): ReviewItem[] => {
  const ranked = [...reviews].sort((a, b) => scoreReview(b) - scoreReview(a));
  const withContextDiversity: ReviewItem[] = [];
  const usedTags = new Set<string>();

  for (const review of ranked) {
    if (withContextDiversity.length >= max) {
      break;
    }
    const tag = review.contextTag
      ? localize(review.contextTag, "nl")
      : "algemeen";
    if (!usedTags.has(tag)) {
      withContextDiversity.push(review);
      usedTags.add(tag);
    }
  }

  for (const review of ranked) {
    if (withContextDiversity.length >= max) {
      break;
    }
    if (!withContextDiversity.find((item) => item.id === review.id)) {
      withContextDiversity.push(review);
    }
  }

  return withContextDiversity.slice(0, max);
};

export const highlightedReviews = selectHighlightReviews(allReviews, 8);
