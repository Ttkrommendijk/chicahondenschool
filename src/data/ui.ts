import { l10n } from "./l10n";

const whatsappPrefilledText = l10n(
  "He Carine, ik heb een vraagje...",
  "Hi Carine, I have a question...",
);

export const ui = {
  links: {
    bookingUrl: "https://chica-hondenschool.trainin.app/",
    kennismakingUrl: "https://chica-hondenschool.trainin.app/checkout/PRZ7A4",
    whatsappPhone: "31626467714",
    whatsappPrefilledText,
    whatsappUrl: `https://api.whatsapp.com/send?phone=31626467714&text=${encodeURIComponent(whatsappPrefilledText.nl)}`,
    instagram:
      "https://www.instagram.com/chicahondenschool?igsh=bjJlOW84ZDNzcHIx",
    facebook: "https://www.facebook.com/www.chicahondenschool.nl/",
    linkedin: "https://www.linkedin.com/in/carine-krommendijk-baa5259b/",
  },
  contact: {
    phone: l10n("06 26467714", "06 26467714"),
    email: l10n("info@chicahondenschool.nl", "info@chicahondenschool.nl"),
    serviceArea: l10n(
      "Den Haag, Rijswijk, Voorschoten en omgeving",
      "The Hague, Rijswijk, Voorschoten and surrounding area",
    ),
    kvk: l10n("63424924", "63424924"),
  },
  navigation: {
    home: l10n("Home", "Home"),
    services: l10n("Diensten", "Services"),
    reviews: l10n("Reviews", "Reviews"),
    about: l10n("Over ChiCa", "About ChiCa"),
    contact: l10n("Contact", "Contact"),
    dogTraining: l10n("Hondenschool", "Dog training"),
    petSitting: l10n("Oppas & uitlaatservice", "Pet sitting & walking"),
    mainLabel: l10n("Hoofdnavigatie", "Main navigation"),
    openNavigation: l10n("Open navigatie", "Open navigation"),
    menu: l10n("Menu", "Menu"),
    languageSwitch: {
      nl: l10n("NL", "NL"),
      en: l10n("EN", "EN"),
    },
  },
  common: {
    brandName: l10n("ChiCa Hondenschool", "ChiCa Dog School"),
    contact: l10n("Contact", "Contact"),
    viewService: l10n("Bekijk dienst", "View service"),
    price: l10n("Prijs", "Price"),
    options: l10n("Opties", "Options"),
    relatedServices: l10n("Gerelateerde diensten", "Related services"),
    bookYourTraining: l10n("Boek jouw priveles", "Book your personal lesson"),
    discussFirst: l10n("Eerst overleggen?", "Discuss first?"),
    bookNow: l10n("Boek direct", "Book now"),
    planIntro: l10n("Plan een kennismaking", "Plan an introduction"),
    chooseService: l10n("Kies een dienst", "Choose a service"),
    skipToContent: l10n("Direct naar inhoud", "Skip to content"),
    menu: l10n("Menu", "Menu"),
  },
  footer: {
    followChica: l10n("Volg ChiCa", "Follow ChiCa"),
    socialInstagram: l10n("Instagram", "Instagram"),
    socialFacebook: l10n("Facebook", "Facebook"),
    socialLinkedIn: l10n("LinkedIn", "LinkedIn"),
    terms: l10n("Algemene voorwaarden", "Terms and conditions"),
    privacy: l10n("Privacy", "Privacy"),
    links: [
      {
        href: "/algemene-voorwaarden/",
        label: l10n("Algemene voorwaarden", "Terms and conditions"),
      },
      { href: "/privacy/", label: l10n("Privacy", "Privacy") },
    ],
  },
  floatingWhatsApp: {
    ariaLabel: l10n(
      "Stuur een WhatsApp bericht naar ChiCa",
      "Send a WhatsApp message to ChiCa",
    ),
    label: l10n("WhatsApp", "WhatsApp"),
  },
  contentLayout: {
    relatedPages: l10n("Gerelateerde pagina's", "Related pages"),
    contactCta: l10n("Neem contact op", "Contact us"),
  },
  contactForm: {
    name: l10n("Naam", "Name"),
    city: l10n("Woonplaats", "City"),
    phone: l10n("Telefoonnummer (WhatsApp)", "Phone number (WhatsApp)"),
    phoneHelp: l10n(
      "Gebruik bij voorkeur het nummer waarop je ook via WhatsApp bereikbaar bent.",
      "Preferably use the number where you are also reachable via WhatsApp.",
    ),
    email: l10n("E-mailadres", "Email address"),
    interest: l10n("Mijn interesse", "My interest"),
    interestPlaceholder: l10n("Maak een keuze", "Make a choice"),
    interestGroupTraining: l10n("Hondenschool", "Dog training"),
    interestGroupOppas: l10n("Oppasservice", "Pet sitting service"),
    interestOption1: l10n(
      "5 privelessen op maat (30 min)",
      "5 tailored private lessons (30 min)",
    ),
    interestOption2: l10n(
      "Priveles aan huis (75 min)",
      "Private lesson at home (75 min)",
    ),
    interestOption3: l10n("Priveles op locatie", "Private lesson on location"),
    interestOption4: l10n(
      "Fun speuren / neuswerk (5 lessen)",
      "Fun tracking / nose work (5 lessons)",
    ),
    interestOption5: l10n("Detectie (5 lessen)", "Detection (5 lessons)"),
    interestOption6: l10n(
      "Sport & spel (5 lessen - Voorschoten)",
      "Sport & play (5 lessons - Voorschoten)",
    ),
    interestOption7: l10n("Kennismaking", "Introduction"),
    interestOption8: l10n(
      "Strippenkaart (1/3/5/10 uur)",
      "Punch card (1/3/5/10 hours)",
    ),
    message: l10n("Bericht", "Message"),
    messagePlaceholder: l10n(
      "Waar kan ik je mee helpen?",
      "How can I help you?",
    ),
    submit: l10n("Verstuur bericht", "Send message"),
    submitting: l10n("Versturen...", "Sending..."),
    errorRequired: l10n("Dit veld is verplicht.", "This field is required."),
    errorEmail: l10n(
      "Vul een geldig e-mailadres in.",
      "Please enter a valid email address.",
    ),
    errorMessageShort: l10n(
      "Beschrijf je vraag in minimaal 10 tekens.",
      "Please describe your question in at least 10 characters.",
    ),
    errorCheckFields: l10n(
      "Controleer de gemarkeerde velden.",
      "Please check the highlighted fields.",
    ),
    errorSubmit: l10n("Versturen is niet gelukt.", "Sending failed."),
    success: l10n(
      "Dank je wel! Je bericht is verzonden.",
      "Thank you! Your message has been sent.",
    ),
    errorGeneric: l10n(
      "Er ging iets mis. Probeer het later opnieuw.",
      "Something went wrong. Please try again later.",
    ),
  },
  serviceDetail: {
    whyWorks: l10n("Waarom dit traject werkt", "Why this track works"),
    outcomes: l10n(
      "Wat je leert / wat het oplevert",
      "What you learn / outcomes",
    ),
    practical: l10n("Praktisch", "Practical"),
    duration: l10n("Duur", "Duration"),
    location: l10n("Locatie", "Location"),
    forWho: l10n("Voor wie", "For whom"),
    doubtTitle: l10n(
      "Twijfel je wat past bij jouw hond?",
      "Not sure what fits your dog?",
    ),
    doubtQuestion: l10n(
      "Niet zeker of dit aansluit bij je wensen?",
      "Not sure if this fits what you need?",
    ),
    whatsappCta: l10n("Stuur een berichtje", "Send a message"),
    priceInvestment: l10n("Investering", "Investment"),
  },
  redirect: {
    forwarding: l10n("Doorsturen naar", "Redirecting to"),
  },
  carousel: {
    prevImage: l10n("Vorige afbeelding", "Previous image"),
    nextImage: l10n("Volgende afbeelding", "Next image"),
    chooseImage: l10n("Afbeelding kiezen", "Choose image"),
    goToImage: l10n("Ga naar afbeelding", "Go to image"),
  },
  processStrip: {
    title: l10n(
      "Hoe werkt onze hondentraining?",
      "How does our dog training work?",
    ),
    intro: l10n(
      "Praktische privetraining aan huis, stap voor stap opgebouwd.",
      "Practical private in-home training, built step by step.",
    ),
    step1Title: l10n("1. Kennismaking", "1. Introduction"),
    step1Text: l10n(
      "We bespreken je situatie, doelen en eventuele gedragsuitdagingen van je hond.",
      "We discuss your situation, goals, and any behavioral challenges of your dog.",
    ),
    step2Title: l10n(
      "2. Training in je omgeving",
      "2. Training in your environment",
    ),
    step2Text: l10n(
      "We trainen aan huis of tijdens het wandelen, zodat gedrag verbetert waar het echt nodig is.",
      "We train at home or during walks, so behavior improves where it is truly needed.",
    ),
    step3Title: l10n("3. Oefenen en begeleiden", "3. Practice and guidance"),
    step3Text: l10n(
      "Je krijgt duidelijke handvatten en praktische oefeningen om zelfstandig verder te werken.",
      "You receive clear guidance and practical exercises to continue independently.",
    ),
    resultTitle: l10n("Resultaat", "Result"),
    resultText: l10n(
      "Meer rust, duidelijkheid en samenwerking tussen jou en je hond in het dagelijks leven.",
      "More calm, clarity, and cooperation between you and your dog in daily life.",
    ),
  },
} as const;

export const buildWhatsAppLink = (message: string) =>
  `https://api.whatsapp.com/send?phone=${ui.links.whatsappPhone}&text=${encodeURIComponent(message)}`;

export const whatsappLink = ui.links.whatsappUrl;
