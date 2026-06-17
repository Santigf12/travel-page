// src/i18n/dictionaries.ts

export const locales = ["en", "es", "fr"] as const;

export type Locale = (typeof locales)[number];

export const dictionaries = {
  en: {
    nav: {
      home: "Home",
      aboutMexico: "About Mexico",
      trips: "Trips",
      handpickedTravel: "Handpicked Travel",
      whoWeAre: "Who We Are",
      contact: "Contact",
    },
    home: {
      hero: [
        {
          image: "/images/mariachi.jpg",
          title: "Experience Mexico with ease.",
          subtitle: "Curated journeys designed with culture, comfort, and care.",
        },
        {
          image: "/images/beach.jpg",
          title: "Travel beautifully.",
          subtitle: "Handpicked escapes across Mexico's coastlines, cities, and heritage.",
        },
        {
          image: "/images/cathedral.avif",
          title: "Discover the art of travel.",
          subtitle: "Luxury itineraries shaped around your rhythm, taste, and story.",
        },
      ],
      intro:
        "You don't just want an itinerary. You want someone who knows you — your pace, your preferences, the kind of moment that makes a journey worth remembering. At Alico Tours Mexico, that's exactly what you get. Not a booking engine. Not a one-time transaction. Custom itineraries designed by a trusted advisor who is invested in your travel story, now and for every adventure that follows.",
      tagline: "We make traveling through Mexico seamless for you",
      about: {
        eyebrow: "Incoming Tour Operator · DMC · MICE",
        title: "More than 24 years creating travel experiences in Mexico",
        body: "ALICO TOURS is a Mexican incoming Tour Operator, DMC & MICE with more than 24 years of experience working B2B with wholesalers all over the world.",
        body2:
          "Our travel specialists will advise you and help you set up the perfect itinerary for your client. We also publish a manual with pre-set itineraries for your inspiration.",
      },
    },
    whoWeAre: {
      title: "Who We Are",
      body: "",
    },
    trips: {
      title: "Trips",
      body: "",
    },
    handpickedTravel: {
      title: "Handpicked Travel",
      body: "",
    },
    aboutMexico: {
      title: "About Mexico",
      body: "",
    },
    contact: {
      title: "Contact",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      aboutMexico: "Sobre México",
      trips: "Viajes",
      handpickedTravel: "Viajes seleccionados",
      whoWeAre: "Quiénes somos",
      contact: "Contacto",
    },
    home: {
      hero: [
        {
          image: "/images/mariachi.jpg",
          title: "Vive México con facilidad.",
          subtitle: "Experiencias diseñadas con cultura, comodidad y cuidado.",
        },
        {
          image: "/images/beach.jpg",
          title: "Viaja con estilo.",
          subtitle: "Escapadas únicas por las costas, ciudades y patrimonio de México.",
        },
        {
          image: "/images/cathedral.avif",
          title: "Descubre el arte de viajar.",
          subtitle: "Itinerarios de lujo creados a tu ritmo, gusto e historia.",
        },
      ],
      intro:
        "No solo quieres un itinerario. Quieres a alguien que te conozca — tu ritmo, tus preferencias, el tipo de momento que hace que un viaje valga la pena. En Alico Tours México, eso es exactamente lo que obtienes. No un motor de reservas. No una transacción única. Itinerarios personalizados diseñados por un asesor de confianza comprometido con tu historia de viaje, ahora y en cada aventura futura.",
      tagline: "Hacemos que viajar por México sea sencillo para ti",
      about: {
        eyebrow: "Operador Turístico Receptivo · DMC · MICE",
        title: "Más de 24 años creando experiencias de viaje en México",
        body: "ALICO TOURS es un Operador Turístico Receptivo, DMC & MICE mexicano con más de 24 años de experiencia trabajando B2B con mayoristas de todo el mundo.",
        body2:
          "Nuestros especialistas en viajes te asesorarán y ayudarán a diseñar el itinerario perfecto para tu cliente. También publicamos un manual con itinerarios predefinidos para tu inspiración.",
      },
    },
    whoWeAre: {
      title: "Quiénes somos",
      body: "",
    },
    trips: {
      title: "Viajes",
      body: "",
    },
    handpickedTravel: {
      title: "Viajes seleccionados",
      body: "",
    },
    aboutMexico: {
      title: "Sobre México",
      body: "",
    },
    contact: {
      title: "Contacto",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar mensaje",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      aboutMexico: "À propos du Mexique",
      trips: "Voyages",
      handpickedTravel: "Voyages sélectionnés",
      whoWeAre: "Qui sommes-nous",
      contact: "Contact",
    },
    home: {
      hero: [
        {
          image: "/images/mariachi.jpg",
          title: "Vivez le Mexique en toute sérénité.",
          subtitle: "Des séjours conçus avec culture, confort et attention.",
        },
        {
          image: "/images/beach.jpg",
          title: "Voyagez avec élégance.",
          subtitle: "Des escapades uniques sur les côtes, dans les villes et le patrimoine du Mexique.",
        },
        {
          image: "/images/cathedral.avif",
          title: "Découvrez l'art du voyage.",
          subtitle: "Des itinéraires de luxe façonnés selon votre rythme, vos goûts et votre histoire.",
        },
      ],
      intro:
        "Vous ne voulez pas seulement un itinéraire. Vous voulez quelqu'un qui vous connaît — votre rythme, vos préférences, le genre de moment qui rend un voyage inoubliable. Chez Alico Tours Mexico, c'est exactement ce que vous obtenez. Pas un moteur de réservation. Pas une transaction unique. Des itinéraires personnalisés conçus par un conseiller de confiance investi dans votre histoire de voyage, aujourd'hui et pour chaque aventure à venir.",
      tagline: "Nous rendons les voyages au Mexique faciles pour vous",
      about: {
        eyebrow: "Opérateur Touristique Réceptif · DMC · MICE",
        title: "Plus de 24 ans à créer des expériences de voyage au Mexique",
        body: "ALICO TOURS est un Opérateur Touristique Réceptif, DMC & MICE mexicain avec plus de 24 ans d'expérience en B2B avec des grossistes du monde entier.",
        body2:
          "Nos spécialistes du voyage vous conseilleront et vous aideront à créer l'itinéraire parfait pour votre client. Nous publions également un manuel avec des itinéraires prédéfinis pour votre inspiration.",
      },
    },
    whoWeAre: {
      title: "Qui sommes-nous",
      body: "",
    },
    trips: {
      title: "Voyages",
      body: "",
    },
    handpickedTravel: {
      title: "Voyages sélectionnés",
      body: "",
    },
    aboutMexico: {
      title: "À propos du Mexique",
      body: "",
    },
    contact: {
      title: "Contact",
      name: "Nom",
      email: "Adresse e-mail",
      message: "Message",
      send: "Envoyer le message",
    },
  },
} satisfies Record<Locale, any>;

export type Dictionary = (typeof dictionaries)[Locale];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDictionary(locale: string): Dictionary {
  if (isValidLocale(locale)) {
    return dictionaries[locale];
  }
  return dictionaries.en;
}

export function generateLocaleParams() {
  return locales.map((locale) => ({ locale }));
}
