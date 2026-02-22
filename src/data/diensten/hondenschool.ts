import { l10n } from "../l10n";
import { ui } from "../ui";
import { dienst as dienst5Privelessen } from "./5-privelessen-op-maat";
import { dienst as dienstPrivelesAanHuis } from "./priveles-aan-huis";
import { dienst as dienstPrivelesOpLocatie } from "./priveles-op-locatie";
import { dienst as dienstFunSpeuren } from "./fun-speuren-neuswerk";
import { dienst as dienstDetectie } from "./detectie";
import { dienst as dienstSportEnSpel } from "./sport-en-spel";

export const services = [
  {
    slug: dienst5Privelessen.slug,
    href: `/diensten/${dienst5Privelessen.slug}/`,
    shortTitle: dienst5Privelessen.hero.title,
    shortDescription: dienst5Privelessen.persuasion.body,
    priceLabel: dienst5Privelessen.pricing.priceText,
  },
  {
    slug: dienstPrivelesAanHuis.slug,
    href: `/diensten/${dienstPrivelesAanHuis.slug}/`,
    shortTitle: dienstPrivelesAanHuis.hero.title,
    shortDescription: dienstPrivelesAanHuis.persuasion.body,
    priceLabel: dienstPrivelesAanHuis.pricing.priceText,
  },
  {
    slug: dienstPrivelesOpLocatie.slug,
    href: `/diensten/${dienstPrivelesOpLocatie.slug}/`,
    shortTitle: dienstPrivelesOpLocatie.hero.title,
    shortDescription: dienstPrivelesOpLocatie.persuasion.body,
    priceLabel: dienstPrivelesOpLocatie.pricing.priceText,
  },
  {
    slug: dienstFunSpeuren.slug,
    href: `/diensten/${dienstFunSpeuren.slug}/`,
    shortTitle: dienstFunSpeuren.hero.title,
    shortDescription: dienstFunSpeuren.persuasion.body,
    priceLabel: dienstFunSpeuren.pricing.priceText,
  },
  {
    slug: dienstDetectie.slug,
    href: `/diensten/${dienstDetectie.slug}/`,
    shortTitle: dienstDetectie.hero.title,
    shortDescription: dienstDetectie.persuasion.body,
    priceLabel: dienstDetectie.pricing.priceText,
  },
  {
    slug: dienstSportEnSpel.slug,
    href: `/diensten/${dienstSportEnSpel.slug}/`,
    shortTitle: dienstSportEnSpel.hero.title,
    shortDescription: dienstSportEnSpel.persuasion.body,
    priceLabel: dienstSportEnSpel.pricing.priceText,
  },
] as const;

export const page = {
  seo: {
    title: l10n(
      "Hondenschool | ChiCa Hondenschool",
      "Dog training | ChiCa Dog School",
    ),
    description: l10n(
      "Praktijkgerichte privebegeleiding voor hond en eigenaar.",
      "Practical private guidance for dog and owner.",
    ),
  },
  hero: {
    title: l10n("Hondentraining aan huis", "In-home dog training"),
    subtitle: l10n(
      "Privé hondentraining in de praktijk, gericht op gedrag en samenwerking.",
      "Private dog training in practice, focused on behavior and cooperation.",
    ),
    imageSrc: "/images/services/detectie.jpg",
    imageAlt: l10n(
      "Detectie en training bij ChiCa Hondenschool",
      "Detection and training at ChiCa Dog School",
    ),
    primaryCta: {
      label: l10n("Boek een les", "Plan a lesson"),
      href: ui.links.bookingUrl,
    },
    secondaryCta: {
      label: l10n("Stel een vraag", "Ask a question"),
      href: "/contact/",
    },
  },
  process: {
    title: l10n(
      "Hoe werkt onze hondentraining?",
      "How does our dog training work?",
    ),
    intro: l10n(
      "Praktische privetraining aan huis, stap voor stap opgebouwd.",
      "Practical private in-home training, built step by step.",
    ),
    items: [
      {
        title: l10n("1. Kennismaking", "1. Introduction"),
        text: l10n(
          "We bespreken je situatie, doelen en eventuele gedragsuitdagingen van je hond.",
          "We discuss your situation, goals, and any behavioral challenges of your dog.",
        ),
      },
      {
        title: l10n(
          "2. Training in je omgeving",
          "2. Training in your environment",
        ),
        text: l10n(
          "We trainen aan huis of tijdens het wandelen, zodat gedrag verbetert waar het echt nodig is.",
          "We train at home or during walks, so behavior improves where it is truly needed.",
        ),
      },
      {
        title: l10n("3. Oefenen en begeleiden", "3. Practice and guidance"),
        text: l10n(
          "Je krijgt duidelijke handvatten en praktische oefeningen om zelfstandig verder te werken.",
          "You receive clear guidance and practical exercises to continue independently.",
        ),
      },
      {
        title: l10n("Resultaat", "Result"),
        text: l10n(
          "Meer rust, duidelijkheid en samenwerking tussen jou en je hond in het dagelijks leven.",
          "More calm, clarity, and cooperation between you and your dog in daily life.",
        ),
        emphasized: true,
      },
    ],
  },
  services,
  cards: {
    title: l10n("Kies jouw traject", "Choose your program"),
    actionLink: {
      label: l10n("Neem contact op", "Contact"),
      href: "/contact/",
    },
    cardCtaLabel: l10n("Bekijk dienst", "View service"),
  },
  faq: {
    title: l10n(
      "Veelgestelde vragen over hondentraining",
      "Frequently asked questions about dog training",
    ),
    items: [
      {
        question: l10n(
          "Hoeveel lessen heb ik nodig?",
          "How many lessons do I need?",
        ),
        answer: l10n(
          "Dat is maatwerk. Het aantal lessen hangt af van je hond, jouw doelen en de uitdagingen waar je tegenaan loopt. Tijdens de kennismaking bespreken we je situatie en maken we samen een passend plan.",
          "This is tailored. The number of lessons depends on your dog, your goals, and the challenges you face. During the introduction we discuss your situation and create a suitable plan together.",
        ),
      },
      {
        question: l10n(
          "Trainen jullie in groepen of individueel?",
          "Do you train in groups or individually?",
        ),
        answer: l10n(
          "De trainingen zijn voornamelijk individueel (1-op-1). Zo kunnen we gericht werken aan het gedrag van je hond in je eigen omgeving.",
          "Training sessions are mainly individual (1-on-1). This allows targeted work on your dog's behavior in your own environment.",
        ),
      },
      {
        question: l10n(
          "Waar vindt de training plaats?",
          "Where does training take place?",
        ),
        answer: l10n(
          "Wij geven hondentraining aan huis of in je directe omgeving. Zo oefenen we in de situaties waar het gedrag ook echt speelt, zoals tijdens het wandelen of thuis.",
          "We provide dog training at home or in your immediate area. This way we practice in the situations where the behavior really occurs, such as during walks or at home.",
        ),
      },
      {
        question: l10n(
          "Helpen jullie ook bij probleemgedrag zoals trekken of uitvallen?",
          "Do you also help with problem behavior such as pulling or reacting?",
        ),
        answer: l10n(
          "Ja. We begeleiden onder andere bij trekken aan de lijn, uitvallen naar andere honden, onzeker gedrag en opvoedvragen. De aanpak is altijd afgestemd op je hond en jouw situatie.",
          "Yes. We guide owners with pulling on the leash, reacting to other dogs, insecure behavior, and upbringing questions. The approach is always tailored to your dog and your situation.",
        ),
      },
      {
        question: l10n(
          "Is de training geschikt voor pups én volwassen honden?",
          "Is training suitable for puppies and adult dogs?",
        ),
        answer: l10n(
          "Ja. We begeleiden pups, pubers en volwassen honden. De inhoud van de training verschilt per levensfase en hulpvraag.",
          "Yes. We guide puppies, adolescents, and adult dogs. The training content differs per life stage and support request.",
        ),
      },
      {
        question: l10n(
          "Welke trainingsmethode gebruiken jullie?",
          "Which training method do you use?",
        ),
        answer: l10n(
          "Wij werken met een positieve en duidelijke aanpak, gericht op samenwerking, vertrouwen en praktische toepasbaarheid in het dagelijks leven.",
          "We use a positive and clear approach focused on cooperation, trust, and practical application in daily life.",
        ),
      },
    ],
  },
  cta: {
    title: l10n("Klaar om gericht te trainen?", "Ready to train with focus?"),
    text: l10n(
      "Plan direct een pakket of start met een losse les aan huis of op locatie.",
      "Plan a package directly or start with a single lesson at home or on location.",
    ),
    primary: { label: l10n("Contact", "Contact"), href: "/contact/" },
    secondary: {
      label: l10n("Boek direct", "Book now"),
      href: ui.links.bookingUrl,
    },
  },
} as const;
