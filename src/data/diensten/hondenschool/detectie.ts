import { l10n } from "../../l10n";
import { ui } from "../../ui";
import { formatPrice } from "../../price";

export const dienst = {
  slug: "detectie",
  checkoutUrl: "https://chica-hondenschool.trainin.app/checkout/P89XKJ",
  seo: {
    title: l10n(
      "Detectie | ChiCa Hondenschool",
      "Detection | ChiCa Dog School",
    ),
    description: l10n(
      "Gestructureerde detectietraining met focus op nauwkeurigheid en samenwerking.",
      "Structured detection training focused on accuracy and cooperation.",
    ),
  },
  hero: {
    title: l10n("Detectie", "Detection"),
    subtitle: l10n(
      "Gerichte zoektraining waarbij je hond leert een aangeleerde geur te vinden en de bron aan te wijzen. Jij en je hond leren samenwerken met focus en precisie, terwijl jullie op een leuke manier werken aan een positieve relatie gebaseerd op vertrouwen.",
      "Focused search training where your dog learns to find an alerted scent and identify the source. You and your dog work together with concentration and precision, while enjoying a positive relationship based on trust.",
    ),
    primaryCtaLabel: ui.common.bookYourTraining,
    trustLine: l10n(
      "Beschikbaar in Den Haag, Rijswijk, Voorschoten en omstreken.",
      "Available in The Hague, Rijswijk, Voorschoten and surrounding areas.",
    ),
    image: {
      src: "/images/services/sniffing.webp",
      alt: l10n(
        "Detectietraining met hond en begeleider",
        "Detection training with dog and coach",
      ),
    },
  },
  persuasion: {
    title: l10n("Waarom dit werkt", "Why this works"),
    body: l10n(
      "Bij detectie leert je hond een specifieke geur te herkennen en verborgen objecten terug te vinden. Denk aan een verstopt voorwerp in een ruimte, buitenomgeving of tussen andere materialen. Detectie vraagt om heldere communicatie en consequente begeleiding. Door de training logisch op te bouwen, ontwikkelt je hond precisie, concentratie en zelfstandigheid, terwijl jij leert zijn signalen beter te lezen.",
      "In detection training, your dog learns to recognise a specific scent and locate hidden objects. This can be a concealed item in a room, outdoor environment, or hidden among other materials. Detection requires clear communication and consistent guidance. By building the training step by step, your dog develops precision, focus, and independence, while you learn to better read and understand your dog’s signals.",
    ),
    highlight: l10n(
      "Precisie zonder druk: rustig opbouwen geeft het beste resultaat.",
      "Precision without pressure: calm progression delivers the best results.",
    ),
    quote: {
      text: l10n(
        '"Doordat mijn pup van 4 maanden fysiek rust moest houden, was dit een perfecte manier om hem toch uit te dagen en zijn energie kwijt te raken. Het is geweldig om te zien hoe hij zich ontwikkelt en het spel steeds beter zelfstandig begrijpt."',
        '"Since my 4-month-old puppy needed physical rest, this was a perfect way to challenge him and let him burn off energy. It’s amazing to see him develop and gradually understand the game on his own."',
      ),
      byline: l10n("Hondeneigenaar, Leiden", "Dog owner, Leiden"),
    },
  },
  whatWeDo: {
    title: l10n("Wat gaan we doen", "What are we going to do"),
    body: [
      l10n(
        "We leren je hond een geur aan te leren, te zoeken, te herkennen en aan te wijzen. Jij leert je hond lezen en zijn zoekgedrag herkennen. Met gerichte oefeningen kun je thuis samen blijven trainen en je hond blijvend uitdaging bieden.",
        "We teach your dog to associate with a scent, search for it, recognize it, and indicate it. You will learn to read your dog and understand their search behavior. With targeted exercises, you can continue training together at home and provide your dog with ongoing mental stimulation.",
      ),
    ],
    ctaLabel: l10n(
      "Stuur een bericht met je vragen",
      "Send a message with your questions",
    ),
    ctaHref: ui.links.whatsappUrl,
  },
  benefits: {
    items: [
      l10n(
        "5 lessen met technische opbouw",
        "5 lessons with technical progression",
      ),
      l10n(
        "Duidelijke uitleg over zoekgedrag",
        "Clear guidance on search behavior",
      ),
      l10n(
        "Persoonlijke coaching op timing en belonen",
        "Personal coaching on timing and rewards",
      ),
      l10n(
        "Oefeningen voor zelfstandig vervolg",
        "Exercises for independent continuation",
      ),
    ],
  },
  audience: {
    title: l10n("Voor wie dit is", "Who this is for"),
    fitTitle: l10n("Dit past bij jou als", "This fits you if"),
    fitItems: [
      l10n(
        "je hond van mentale uitdaging houdt",
        "your dog enjoys mental challenge",
      ),
      l10n(
        "je hond onzeker is, het geeft zelfvertrouwen een boost.",
        "your dog is insecure, it gives you confidence.",
      ),
      l10n(
        "je hond een fysieke beperking heeft en geen lange wandelingen kan maken.",
        "your dog has a physical limitation and can't walk long distances.",
      ),
    ],
  },
  timeline: {
    enabled: false,
    title: l10n("Hoe het werkt", "How it works"),
    steps: [
      {
        title: l10n("Basis", "Foundation"),
        text: l10n(
          "We starten met duidelijke zoekopdrachten.",
          "We start with clear search tasks.",
        ),
      },
      {
        title: l10n("Bevestigen", "Reinforce"),
        text: l10n(
          "Je hond leert gericht markeren.",
          "Your dog learns targeted indication.",
        ),
      },
      {
        title: l10n("Uitbreiden", "Expand"),
        text: l10n(
          "We bouwen variatie en complexiteit op.",
          "We build variation and complexity.",
        ),
      },
      {
        title: l10n("Borgen", "Consolidate"),
        text: l10n(
          "Je krijgt een plan voor vervolgtraining.",
          "You get a plan for follow-up training.",
        ),
      },
    ],
  },
  testimonial: {
    quote: l10n(
      "“Detectie gaf ons structuur en mijn hond werkt met veel meer focus.”",
      '"Detection gave us structure and my dog now works with much more focus."',
    ),
    byline: l10n("Hondeneigenaar, Leiden", "Dog owner, Leiden"),
  },
  pricing: {
    title: ui.common.price,
    priceText: formatPrice(250),
    metaLines: [
      l10n("5 lessen", "5 lessons"),
      l10n("Op locatie in overleg", "On location by agreement"),
    ],
    options: [
      {
        label: l10n(
          "Boek in Den haag / Rijswijk",
          "Book in The Hague / Rijswijk",
        ),
        href: "https://chica-hondenschool.trainin.app/checkout/P89XKJ",
        external: true,
      },
      {
        label: l10n("Boek in Voorschoten", "Book in Voorschoten"),
        href: "https://chica-hondenschool.trainin.app/checkout/PAA9MZ",
        external: true,
      },
    ],
  },
  related: ["fun-speuren-neuswerk", "sport-en-spel", "priveles-op-locatie"],
} as const;
