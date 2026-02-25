import { l10n } from "./l10n";
import { ui } from "./ui";

export const home = {
  hero: {
    title: l10n(
      "Hondentraining aan huis in Den Haag & Voorschoten",
      "In-home dog training in Den Haag & Voorschoten",
    ),
    subtitle: l10n(
      "Persoonlijke hondentraining aan huis, gericht op gedrag in het dagelijks leven - Al jarenlang vertrouwd in Voorschoten en nu ook actief in Den Haag en Rijswijk.",
      "Personal dog training at home, focused on behavior in daily life - Trusted in Voorschoten for years and now also active in Den Haag and Rijswijk.",
    ),
    primaryCtaLabel: l10n(
      "Hondentraining & cursussen",
      "Dog training & courses",
    ),
    secondaryCtaLabel: l10n(
      "Oppas / Uitlaatservice",
      "Pet sitting / dog walking",
    ),
    imageAlt: l10n(
      "ChiCa Hondenschool praktijktraining",
      "ChiCa Dog School practical training",
    ),
  },
} as const;

export const page = {
  seo: {
    title: l10n("ChiCa Hondenschool", "ChiCa Dog School"),
    description: l10n(
      "Persoonlijke hondentraining aan huis, gericht op gedrag in het dagelijks leven.",
      "Personal dog training at home, focused on behavior in daily life.",
    ),
  },
  hero: {
    image: "/images/hero-chica-hondenschool.jpg",
    primaryCta: {
      href: "/diensten/hondenschool/",
    },
    secondaryCta: {
      href: "/diensten/oppas-uitlaatservice/",
    },
  },
  heroL10n: home.hero,
  uspBlock: {
    items: [
      {
        title: l10n("Aan huis in Zuid-Holland", "At home in South Holland"),
        line: l10n(
          "Training in je eigen omgeving, waar gedrag echt plaatsvindt.",
          "Training in your own environment, where behavior truly happens.",
        ),
      },
      {
        title: l10n("1-op-1 begeleiding", "1-on-1 guidance"),
        line: l10n(
          "Volledig afgestemd op je hond en jouw situatie.",
          "Fully tailored to your dog and your situation.",
        ),
      },
      {
        title: l10n(
          "Voor pups en volwassen honden",
          "For puppies and adult dogs",
        ),
        line: l10n(
          "Van basisopvoeding tot gerichte gedragsbegeleiding.",
          "From basic upbringing to targeted behavioral coaching.",
        ),
      },
      {
        title: l10n("Praktijkgericht & positief", "Practical & positive"),
        line: l10n(
          "Toepasbaar in het dagelijks leven, met rust en duidelijkheid.",
          "Applicable in daily life, with calmness and clarity.",
        ),
      },
    ],
  },
  processFlow: {
    title: l10n("Hoe werkt het?", "How does it work?"),
    subtitle: l10n(
      "Een helder stappenplan, zodat je precies weet wat je kunt verwachten.",
      "A clear step-by-step plan, so you know exactly what to expect.",
    ),
    steps: [
      {
        number: 1,
        title: l10n("Plan je kennismaking", "Plan your introduction"),
        description: l10n(
          "Je kiest zelf een moment in de agenda dat jou uitkomt.",
          "You choose a moment in the calendar that works for you.",
        ),
      },
      {
        number: 2,
        title: l10n("Persoonlijke intake aan huis", "Personal in-home intake"),
        description: l10n(
          "We bespreken jouw hulpvraag en bekijken wat jouw hond nodig heeft.",
          "We discuss your support request and assess what your dog needs.",
        ),
      },
      {
        number: 3,
        title: l10n(
          "Training in jouw omgeving",
          "Training in your environment",
        ),
        description: l10n(
          "We werken praktisch aan gedrag tijdens het wandelen en thuis.",
          "We work practically on behavior during walks and at home.",
        ),
      },
      {
        number: 4,
        title: l10n("Blijf flexibel plannen", "Stay flexible with planning"),
        description: l10n(
          "Via de online agenda plan je eenvoudig vervolgsessies wanneer het jou uitkomt.",
          "Using the online calendar, you can easily schedule follow-up sessions when it suits you.",
        ),
      },
    ],
  },
  pain: {
    title: l10n("Herken je dit?", "Do you recognize this?"),
    text: l10n(
      "Op de hondencursus luistert je hond uitstekend, maar thuis of tijdens het wandelen lijkt je hond alles 'vergeten'? Je bent niet de enige. Bij ChiCa Hondenschool weten we dat een hond plaatsgebonden leert, daarom brengen we de lessen naar de plek waar jij ze het hardst nodig hebt.",
      "At dog class your dog listens very well, but at home or during walks your dog seems to have forgotten everything? You are not the only one. At ChiCa Dog School we know dogs learn contextually, so we bring the lessons to the place where you need them most.",
    ),
    supporting: l10n(
      "Geen drukte van een grote groep: je krijgt 1-op-1 begeleiding die past bij jouw hond en jouw situatie. Ideaal als je gericht wilt werken aan gedrag in het dagelijks leven.",
      "No pressure of a large group: you receive 1-on-1 guidance tailored to your dog and your situation. Ideal when you want to work specifically on behavior in daily life.",
    ),
  },
  usp: {
    title: l10n(
      "Waarom kiezen hondeneigenaren voor ChiCa Hondenschool?",
      "Why do dog owners choose ChiCa Dog School?",
    ),
    intro: l10n(
      "Praktisch, persoonlijk en gericht op lange termijn resultaat in het dagelijks leven.",
      "Practical, personal, and focused on long-term results in daily life.",
    ),
    items: [
      {
        title: l10n(
          "Praktijkgerichte hondentraining aan huis",
          "Practical in-home dog training",
        ),
        description: l10n(
          "Wij trainen in jouw eigen omgeving, zodat gedrag ook thuis en tijdens het wandelen verbetert.",
          "We train in your own environment, so behavior improves at home and during walks.",
        ),
        icon: "01",
      },
      {
        title: l10n("1-op-1 begeleiding op maat", "Tailored 1-on-1 guidance"),
        description: l10n(
          "1 op 1 begeleiding op maat afgestemd op jouw hond en gezinssituatie met gerichte aanpak bij trekken aan de lijn, uitvallen aan de lijn of opvoedvragen. Geen wachttijden maar alle aandacht voor jou en je hond.",
          "Private training tailored to your dog and family situation, with targeted support for pulling on the leash, reactivity, or upbringing questions. No waiting times, all attention for you and your dog.",
        ),
        icon: "02",
      },
      {
        title: l10n(
          "Positieve en duidelijke werkwijze",
          "Positive and clear method",
        ),
        description: l10n(
          "We werken met positieve hondentraining, gericht op rust, vertrouwen en duidelijke communicatie.",
          "We work with positive dog training, focused on calmness, trust, and clear communication.",
        ),
        icon: "03",
      },
      {
        title: l10n("Ervaren instructeur", "Experienced instructor"),
        description: l10n(
          "Met ruim 10 jaar ervaring als kynologisch instructeur, coach van cursisten en het opleiden van (assistentie)honden. Altijd up to date door bijscholing en jarenlange praktijkervaring.",
          "With over 10 years of experience as a canine instructor, coach of students, and trainer of (assistance) dogs. Always up to date through continuing education and years of practical experience.",
        ),
        icon: "04",
      },
    ],
  },
  services: {
    title: l10n(
      "Hondentraining en oppas aan huis in regio Den Haag",
      "Dog training and in-home pet care in the Den Haag region",
    ),
    items: [
      {
        title: l10n(
          "Hondentraining aan huis (privetraining)",
          "In-home dog training (private training)",
        ),
        description: l10n(
          "Privelessen op maat voor pups, pubers en volwassen honden, met focus op gedrag, vertrouwen en samenwerking in het dagelijks leven.",
          "Tailored private lessons for puppies, adolescents, and adult dogs, focused on behavior, trust, and cooperation in daily life.",
        ),
        href: "/diensten/hondenschool/",
        ctaLabel: l10n("Bekijk hondenschool", "View dog training"),
        image: "/images/service-hondenschool.jpg",
        imageAlt: l10n(
          "Hondenschool en detectietraining",
          "Dog training and detection training",
        ),
        badge: l10n("Training", "Training"),
      },
      {
        title: l10n(
          "Oppas- en uitlaatservice aan huis",
          "In-home pet sitting and walking service",
        ),
        description: l10n(
          "Oppas en uitlaatservice aan huis, met dezelfde rust en persoonlijke benadering als in onze hondentraining.",
          "In-home pet sitting and walking service, with the same calm and personal approach as in our dog training.",
        ),
        href: "/diensten/oppas-uitlaatservice/",
        ctaLabel: l10n(
          "Bekijk oppas / uitlaatservice",
          "View pet sitting / walking service",
        ),
        image: "/images/service-oppas-uitlaatservice.jpg",
        imageAlt: l10n(
          "Prive oppas en uitlaatservice aan huis",
          "Private in-home pet sitting and walking service",
        ),
        badge: l10n("Service", "Service"),
      },
    ],
  },
  about: {
    title: l10n("Over ChiCa Hondenschool", "About ChiCa Dog School"),
    text: l10n(
      "Ik ben Carine Krommendijk, kynologisch instructeur sinds 2015. Met ChiCa Hondenschool help ik honden en hun eigenaren met persoonlijke hondentraining aan huis, gericht op gedrag, vertrouwen en samenwerking in het dagelijks leven.",
      "I am Carine Krommendijk, a canine instructor since 2015. With ChiCa Dog School, I help dogs and their owners with personal in-home dog training focused on behavior, trust, and cooperation in daily life.",
    ),
    linkLabel: l10n("Maak kennis met Carine", "Meet Carine"),
    linkHref: "/over/",
  },
  testimonials: {
    title: l10n(
      "Wat hondeneigenaren zeggen over ChiCa Hondenschool",
      "What dog owners say about ChiCa Dog School",
    ),
    items: [
      {
        quote: l10n(
          "Zo fijn de begeleiding, aandacht en uitleg. Privelessen detectie geven ons veel vertrouwen en maken het echt leerzaam.",
          "The guidance, attention, and explanations are so helpful. Private detection lessons give us confidence and make it truly educational.",
        ),
        author: l10n("Sandra", "Sandra"),
      },
      {
        quote: l10n(
          "De trainingen zijn laagdrempelig en gaan echt om de band tussen jou en je hond. Absoluut een aanrader.",
          "The trainings are accessible and truly about the bond between you and your dog. Absolutely recommended.",
        ),
        author: l10n("Marieke", "Marieke"),
      },
      {
        quote: l10n(
          "Je leert je hond goed kennen en begrijpen. De privelessen hebben mij enorm op weg geholpen.",
          "You really get to know and understand your dog. The private lessons helped me a lot.",
        ),
        author: l10n("Ilse", "Ilse"),
      },
      {
        quote: l10n(
          "Ideaal dat je zelf je planning beheert; zo oefen ik altijd op mijn eigen tempo en wanneer het mij uitkomt.",
          "It's ideal that you yourself manage your schedule; so I always train at my own pace and when it suits me.",
        ),
        author: l10n("Petra", "Petra"),
      },
    ],
    cta: {
      label: l10n("Bekijk alle recensies", "View all reviews"),
      href: "/reviews/",
    },
  },
  faq: {
    title: l10n("Veelgestelde vragen", "Frequently asked questions"),
    items: [
      {
        question: l10n(
          "Zijn de lessen in een groep of individueel?",
          "Are the lessons in a group or individual?",
        ),
        answer: l10n(
          "Voornamelijk individueel (1-op-1), zodat de training past bij je hond en jouw dagelijkse situatie.",
          "Mainly individual (1-on-1), so the training fits your dog and your daily situation.",
        ),
      },
      {
        question: l10n(
          "In welke regio geven jullie training?",
          "In which region do you provide training?",
        ),
        answer: l10n(
          "We geven hondentraining aan huis en in de directe omgeving in Zuid-Holland.",
          "We provide in-home dog training and in the direct area in South Holland.",
        ),
      },
      {
        question: l10n(
          "Voor welke leeftijden is de training geschikt?",
          "For which ages is the training suitable?",
        ),
        answer: l10n(
          "Voor pups, pubers en volwassen honden. De aanpak stemmen we af op leeftijd, ervaring en hulpvraag.",
          "For puppies, adolescents, and adult dogs. The approach is tailored to age, experience, and support request.",
        ),
      },
      {
        question: l10n(
          "Is een groepstraining niet beter voor de socialisatie?",
          "Is a group training not better for socialization?",
        ),
        answer: l10n(
          "Je hebt zeker geen groepstraining nodig om je pup te socialiseren. Socialiseren doet een pup de hele dag. Het is vooral belangrijk dat een pup leert wat normaal is in zijn omgeving, wat hij wel of niet spannend moet vinden. En dat kan juist in privélessen gewoon op straat. Daar kom je verschillende mensen, honden, geluiden, geuren, verkeer, vogels, katten enz. tegen. Vanuit de praktijk ga je daar direct mee aan de slag. Een hondenschool is leuk, maar vaak afgebakend. Er zijn veel prikkels van andere pups waardoor de hond minder in zich opneemt en sneller overprikkeld raakt. De situatie is nooit hetzelfde als in de praktijk.",
          "You definitely don’t need group training to socialize your puppy. A puppy is socializing all day long. What really matters is that your puppy learns what is normal in their environment and what they should or shouldn’t find exciting or overwhelming. And that can actually be done very well in private lessons, simply out on the street. There, your puppy encounters different people, dogs, sounds, smells, traffic, birds, cats, and more. You work with those real-life situations directly as they happen. A dog school can be fun, but it’s often a controlled setting. There are many stimuli from other puppies, which can make it harder for your dog to process everything and may lead to overstimulation. The situation is never quite the same as in real daily life.",
        ),
      },
    ],
  },
  contact: {
    title: l10n(
      "Klaar om te starten met hondentraining aan huis?",
      "Ready to start with in-home dog training?",
    ),
    text: l10n(
      "Wil je werken aan gedrag, vertrouwen en samenwerking met je hond? Neem contact op voor persoonlijke hondentraining of plan direct een kennismaking.",
      "Would you like to work on behavior, trust, and cooperation with your dog? Contact us for personal dog training or schedule an introduction directly.",
    ),
    cta: { label: l10n("Neem contact op", "Contact us"), href: "/contact/" },
    secondaryCta: {
      label: l10n(
        "Kies een van onze opleidingen",
        "Choose one of our training programs",
      ),
      href: "/diensten/hondenschool/",
    },
  },
};
