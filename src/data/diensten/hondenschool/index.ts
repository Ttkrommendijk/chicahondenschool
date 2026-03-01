import { l10n } from "../../l10n";
import { ui } from "../../ui";
import { dienst as dienstPuppycursus } from "./puppycursus";
import { dienst as dienstBasiscursus } from "./basiscursus";
import { dienst as dienstPrivelesAanHuis } from "./priveles-aan-huis";
import { dienst as dienstPrivelesOpLocatie } from "./priveles-op-locatie";
import { dienst as dienstFunSpeuren } from "./fun-speuren-neuswerk";
import { dienst as dienstDetectie } from "./detectie";
import { dienst as dienstSportEnSpel } from "./sport-en-spel";
import type { L10n } from "../../l10n";

type GroupedServiceOption = {
  label: L10n;
  description: L10n;
  href: string;
  image: string;
  imageAlt: L10n;
  badge: L10n;
};

type HondenschoolServiceCard = {
  slug: string;
  href: string;
  shortTitle: L10n;
  shortDescription: L10n;
  priceLabel?: L10n;
  groupedOptions?: readonly GroupedServiceOption[];
};

export const services: readonly HondenschoolServiceCard[] = [
  {
    slug: "privelessen-op-maat",
    href: `/diensten/hondenschool/${dienstPrivelesAanHuis.slug}/`,
    shortTitle: l10n(
      "Individuele gedragstraining",
      "Individual behavior training",
    ),
    shortDescription: l10n(
      "Wanneer je hond thuis of op straat specifiek gedrag vertoont waar jij of je omgeving niet blij van wordt, bieden wij probleemgerichte trainingen aan.We kijken zorgvuldig naar het gedrag van zowel de hond als de eigenaar en passen dit gericht aan, zodat we in zo kort mogelijke tijd het gewenste resultaat bereiken.",
      "If your dog shows specific behaviour at home or outdoors that you or your surroundings are not happy with, we offer targeted behaviour-focused training. We carefully assess both the dog’s behaviour and the owner’s role, and adjust them accordingly, so we can achieve the desired results in the shortest possible time.",
    ),
    groupedOptions: [
      {
        label: l10n("Thuisbegeleiding", "Guidance at home"),
        description: l10n(
          "Als je hond specifieke uitdagingen kent in je woning heeft, zoals blaffen als de bel gaat, niet alleen thuis kunnen zijn of niet op de plaats blijven liggen.",
          "If your dog faces specific challenges at home, such as barking when the doorbell rings, being unable to stay home alone, or struggling to remain calmly in place.",
        ),
        href: `/diensten/hondenschool/${dienstPrivelesAanHuis.slug}/`,
        image: dienstPrivelesAanHuis.hero.image.src,
        imageAlt: dienstPrivelesAanHuis.hero.image.alt,
        badge: l10n("Training", "Training"),
      },
      {
        label: l10n("Locatiebegeleiding", "Guidence on location"),
        description: l10n(
          "Als je tijdens het wandelen problemen hebt met de omgang met andere honden of mensen, zoals te enthousiast reageren, agressie, niet los kunnen lopen.",
          "If you experience difficulties during walks in interactions with other dogs or people, such as overexcitement, reactive or aggressive behaviour, or being unable to walk off leash,",
        ),
        href: `/diensten/hondenschool/${dienstPrivelesOpLocatie.slug}/`,
        image: dienstPrivelesOpLocatie.hero.image.src,
        imageAlt: dienstPrivelesOpLocatie.hero.image.alt,
        badge: l10n("Training", "Training"),
      },
    ],
  },
  {
    slug: "gebruik-je-neus",
    href: `/diensten/hondenschool/${dienstFunSpeuren.slug}/`,
    shortTitle: l10n(
      "Leuke en natuurlijke uitdagingen voor je hond",
      "Nice and natural challenges for your dog",
    ),
    shortDescription: l10n(
      "Kies het neuswerk-traject dat past bij jouw hond: speels speuren of gerichte detectie.",
      "Choose the nosework track that fits your dog: playful tracking or focused detection.",
    ),
    groupedOptions: [
      {
        label: dienstFunSpeuren.hero.title,
        description: l10n(
          "Samen op zoek naar een spoor. Je hond leert een geur volgen en een persoon opsporen. Ideaal voor energie, concentratie en onderlinge band.",
          "Together you follow the trail. Your dog learns to track a scent and locate a person. Perfect for channeling energy, building focus, and strengthening your bond.",
        ),
        href: `/diensten/hondenschool/${dienstFunSpeuren.slug}/`,
        image: dienstFunSpeuren.hero.image.src,
        imageAlt: dienstFunSpeuren.hero.image.alt,
        badge: l10n("Training", "Training"),
      },
      {
        label: dienstDetectie.hero.title,
        description: l10n(
          "Je hond leert een specifieke geur herkennen en verborgen objecten opsporen. Een uitdagende activiteit die focus, precisie en samenwerking versterkt.",
          "Your dog learns to recognise a specific scent and locate hidden objects. A challenging activity that strengthens focus, precision, and teamwork.",
        ),
        href: `/diensten/hondenschool/${dienstDetectie.slug}/`,
        image: dienstDetectie.hero.image.src,
        imageAlt: dienstDetectie.hero.image.alt,
        badge: l10n("Training", "Training"),
      },
    ],
  },
  {
    slug: "prive-cursussen",
    href: "/diensten/hondenschool/puppycursus/",
    shortTitle: l10n("Privé cursussen", "Private courses"),
    shortDescription: l10n(
      "Onze privé cursussen bieden de inhoud van onze standaard trainingen, maar in een persoonlijke 1-op-1 setting. Je krijgt alle aandacht, zonder wachttijden of afleiding van andere honden. We trainen bij jou thuis of op een locatie die past bij jouw hond en jouw doelen.",
      "Our private courses offer the content of our standard training programs in a personal 1-on-1 setting. You get full attention, without waiting times or distractions from other dogs. We train in an environment that fits your dog and your goals.",
    ),
    groupedOptions: [
      {
        label: l10n("Puppycursus (privé)", "Puppy course (private)"),
        description: l10n(
          "De beste start voor jouw pup, met individuele begeleiding die volledig is afgestemd op jullie tempo. We werken aan socialisatie, basisvaardigheden en rust in het dagelijks leven, zonder overprikkeling door een groep.",
          "The best start for your puppy, with individual guidance fully tailored to your pace. We work on socialization, core skills, and calm in daily life without group overstimulation.",
        ),
        href: "/diensten/hondenschool/puppycursus/",
        image: dienstPuppycursus.hero.image.src,
        imageAlt: dienstPuppycursus.hero.image.alt,
        badge: l10n("Training", "Training"),
      },
      {
        label: l10n("Basiscursus (privé)", "Basic course (private)"),
        description: l10n(
          "Een stevige basis voor focus, samenwerken en betrouwbare oefeningen tijdens het wandelen en thuis. Je krijgt persoonlijke coaching en duidelijke stappen, precies afgestemd op jouw hond.",
          "A solid foundation for focus, cooperation, and reliable exercises during walks and at home. You get personal coaching and clear steps tailored exactly to your dog.",
        ),
        href: "/diensten/hondenschool/basiscursus/",
        image: dienstBasiscursus.hero.image.src,
        imageAlt: dienstBasiscursus.hero.image.alt,
        badge: l10n("Training", "Training"),
      },
    ],
  },
  {
    slug: "beweeg-samen",
    href: `/diensten/hondenschool/${dienstSportEnSpel.slug}/`,
    shortTitle: l10n("Beweeg samen", "Move together"),
    shortDescription: l10n(
      "Samen actief aan de slag met een traject dat draait om plezier, focus en samenwerking.",
      "Get active together with a track focused on fun, focus, and cooperation.",
    ),
    groupedOptions: [
      {
        label: dienstSportEnSpel.hero.title,
        description: dienstSportEnSpel.persuasion.body,
        href: `/diensten/hondenschool/${dienstSportEnSpel.slug}/`,
        image: dienstSportEnSpel.hero.image.src,
        imageAlt: dienstSportEnSpel.hero.image.alt,
        badge: l10n("Training", "Training"),
      },
    ],
  },
];

const servicesBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
);

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
      "Privé hondentraining in de praktijk, gericht op gedrag en samenwerking in Den Haag, Rijswijk, Voorschoten (en omstreken).",
      "Private dog training in practice, focused on behavior and cooperation.",
    ),
    imageSrc: "/images/services/op de kruk.webp",
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
  servicesBySlug,
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
          "De trainingen zijn uitsluitend individueel (1-op-1). Zo kunnen we gericht werken aan het gedrag van je hond in je eigen omgeving.",
          "Training sessions are mainly individual (1-on-1). This allows targeted work on your dog's behavior in your own environment.",
        ),
      },
      {
        question: l10n(
          "Waar vindt de training plaats?",
          "Where does training take place?",
        ),
        answer: l10n(
          "Je kan kiezen tussen bundels waarbij we bij jou thuis en in de directe omgeving aan de slag gaan of waarbij een specifieke locatie afspreken. Zo kunnen we ons aanpassen aan de behoefte van je hond en in die omgeving trainen en socialiseren waar het meeste behoefte aan is",
          "You can choose between packages where we work with you at home and in your immediate surroundings, or packages where we agree on a specific training location. This way, we can adapt to your dog’s needs and train and socialize in the environment where it is most needed.",
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
