import type { CampsiteConfig } from "../types";

/**
 * Campingclub Hinterberg — Leoben, Steiermark.
 * Kleiner, familiengeführter Campingplatz, umgeben von Bergen und Wald (kein See).
 * Inhalt zu 100 % aus raw/digest abgeleitet. Design: Original-Palette (kein theme), heroVariant center.
 */
const IMG = "/campsites/campingclub-hinterberg";

const campingclubHinterberg: CampsiteConfig = {
  name: "Campingclub Hinterberg",
  shortName: "Hinterberg",
  slug: "campingclub-hinterberg",
  ort: "Leoben",
  region: "Steiermark",
  brandKind: "Familiencamping",
  regionLong: "Region Leoben · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Dein ruhiger Platz in Leobens Bergen",
  claimEmphasis: "Leobens Bergen",
  emailDetail: "eure eigene Gassi-Wiese für die Hunde",
  intro:
    "Ein kleiner, familiengeführter Campingplatz in Leoben — umgeben von Bergen und Wald, mit fairen Preisen, sauberen Sanitäranlagen und viel Ruhe zum Durchatmen nach einer langen Reise.",

  statement: {
    text: "Seit Generationen ein familiengeführter Platz — klein, ruhig und mittendrin in der Natur rund um Leoben.",
    emphasis: "familiengeführter Platz",
  },

  pillars: [
    {
      title: "Stellplätze mit Strom",
      text: "Ebene Stellplätze mit Strom für Zelt, Wohnwagen und Wohnmobil — ringsum der Blick auf die grünen Berge rund um Leoben.",
      image: { src: `${IMG}/gallery-d37de1ed38.webp`, alt: "Wohnwagen und Reisefahrzeuge auf dem Stellplatz am Campingclub Hinterberg" },
    },
    {
      title: "Hunde willkommen",
      text: "Vierbeiner sind ausdrücklich willkommen — und haben am Platz sogar ihr eigenes Gassi-Revier. Kinder bis 15 Jahre übernachten ohnehin ohne Aufpreis.",
      image: { src: `${IMG}/activity-1cc243fb69.webp`, alt: "Saftig grüne Sommerwiese und Felder rund um den Campingclub Hinterberg — ideales Gassi-Revier für Hunde" },
    },
    {
      title: "Mitten im Grünen",
      text: "Ein familiengeführter Platz mitten im Grünen, umrahmt von den bewaldeten Bergen rund um Leoben — ruhig und überschaubar.",
      image: { src: `${IMG}/gallery-81e42a392f.webp`, alt: "Zelt auf der sonnigen grünen Wiese am Campingclub Hinterberg" },
    },
  ],

  usps: ["Familiengeführt", "Stellplätze mit Strom", "Hunde willkommen", "Kinder & Haustiere frei", "Frisches Quellwasser"],

  trust: {
    heading: "Klein, ruhig, seit Generationen",
    headingEmphasis: "seit Generationen",
    intro:
      "Der Campingclub Hinterberg wird seit Generationen von einer Familie geführt — ein überschaubarer, sauberer Platz mit entspannter Atmosphäre, umgeben von den Bergen und Wäldern rund um Leoben.",
  },

  awards: [],

  saison: { von: "Mai", bis: "Mitte September" },

  hero: {
    aerial: { src: `${IMG}/gallery-36291c6821.webp`, alt: "Wohnwagen und Zelte auf der Wiese vor grünen Bergen am Campingclub Hinterberg" },
  },

  breather: {
    image: { src: `${IMG}/gallery-65c2732b77.webp`, alt: "Belebter Campingclub Hinterberg mit Zelten und Caravans vor den grünen Bergen" },
    line: "Durchatmen, wo die Stadt aufhört und das Grün beginnt.",
  },

  camping: {
    heading: "Dein Stellplatz in Hinterberg",
    intro:
      "Ob Zelt, Wohnwagen oder Wohnmobil — bei uns findest du geräumige Stellplätze mit Strom, saubere Sanitäranlagen und Platz auch für ungewöhnliche Reisefahrzeuge.",
    features: [
      {
        title: "Stellplätze für Wohnwagen & Wohnmobile",
        text: "Geräumige Plätze für Wohnwagen und Wohnmobile mit Stromanschluss — eben, gepflegt und mit genug Raum, um sich ein bisschen auszubreiten.",
        image: { src: `${IMG}/gallery-1634619977.webp`, alt: "Sonniger Wohnwagen mit Vorzelt auf dem Stellplatz am Campingclub Hinterberg" },
      },
      {
        title: "Zeltwiese",
        text: "Einfach, aber gemütlich: Stell dein eigenes Zelt auf die grüne Wiese und genieße eine typische Camping-Erfahrung mitten in der Natur.",
        image: { src: `${IMG}/gallery-05035cfcc9.webp`, alt: "Zelte auf der Wiese am Campingclub Hinterberg" },
      },
      {
        title: "Alternative Reisefahrzeuge willkommen",
        text: "Du reist mit etwas Besonderem an? Ob Velomobil, Oldtimer-Bus oder Wohnmobil — bei uns ist Platz für jedes Reisefahrzeug.",
        image: { src: `${IMG}/gallery-d66ec82aa1.webp`, alt: "Velomobile auf dem Campingclub Hinterberg vor grünen Hügeln" },
      },
      {
        title: "Dauercamping",
        text: "Manche bleiben länger: Dauerplätze lassen sich wie ein kleiner Garten gestalten — frag einfach nach, solange freie Plätze reichen.",
        image: { src: `${IMG}/gallery-1ce2577d68.webp`, alt: "Individuell ausgebaute Reisefahrzeuge am Campingclub Hinterberg" },
      },
      {
        title: "Ruhig zwischen den Bergen",
        text: "Umgeben von grünen Bergen und Wald liegst du hier ruhig und doch nah an Leoben — ein guter Ausgangspunkt für Touren in die Region.",
        image: { src: `${IMG}/gallery-c80bde25f4.webp`, alt: "Ruhiger Campingclub Hinterberg, eingebettet in die grünen Berge bei Leoben" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Leoben liegt direkt vor dem Platz",
    intro:
      "Leoben und seine Umgebung liegen direkt vor dem Platz: Radwege, Wanderungen, Kultur in der Stadt und Veranstaltungen — vom Campingplatz aus schnell erreichbar.",
    items: [
      {
        title: "Radfahren in der Fahrradstadt",
        text: "Leoben ist Fahrradstadt: Gut ausgebaute Radwege führen direkt vom Platz ins Stadtzentrum und in die Region.",
        image: { src: `${IMG}/gallery-61c2f3a313.webp`, alt: "Radweg mit Schild Fahrradstadt Leoben vor den Bergen" },
      },
      {
        title: "Kultur in Leoben",
        text: "Die Altstadt von Leoben mit ihren Museen, historischen Gebäuden und charmanten Gassen ist nur eine kurze Fahrt entfernt.",
        image: { src: `${IMG}/gallery-7096cac518.webp`, alt: "Historischer Turm und Brücke in der Altstadt von Leoben" },
      },
      {
        title: "Veranstaltungen rund um Leoben",
        text: "Leoben hat einiges zu bieten und liegt nahe an Hotspots wie dem Red Bull Ring — ideal für Ausflüge zu Events in der Umgebung.",
        image: { src: `${IMG}/gallery-f2cc010cfe.webp`, alt: "Veranstaltung mit Motorrädern in der Innenstadt von Leoben" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Hinterberg",
    modes: [
      { title: "Mit dem Auto", text: "Über die Phyrn Autobahn (A9) bis Leoben, von dort wenige Minuten zur Hinterbergstraße — der Platz ist ausgeschildert." },
      { title: "Mit der Bahn", text: "Der Bahnhof Leoben ist gut angebunden; vom Bahnhof sind es nur wenige Minuten bis zum Campingplatz." },
      { title: "Mit dem Flugzeug", text: "Der Flughafen Graz liegt rund eine Fahrstunde entfernt." },
    ],
  },

  galerie: {
    heading: "Hinterberg in Bildern",
    headingEmphasis: "Bildern",
    intro:
      "Ein kleiner Vorgeschmack, wie es bei uns aussieht — vom Zeltplatz über ungewöhnliche Reisefahrzeuge bis zu den liebevoll gestalteten Ecken am Platz.",
    tag: "Mai bis Mitte September",
    moreCount: 12,
    images: [
      { src: `${IMG}/gallery-276b1bd215.webp`, alt: "Ausgebautes Oldtimer-Fahrzeug als Reisemobil am Campingclub Hinterberg" },
      { src: `${IMG}/gallery-878535172f.webp`, alt: "Bunte Oldtimer-Reisebusse auf dem Campingclub Hinterberg vor grünen Bergen" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz in Hinterberg",
    headingEmphasis: "deinen Platz",
    intro:
      "Sag uns Zeitraum und Personen — die Familie meldet sich persönlich mit deiner Verfügbarkeit zurück.",
    pricesArePlaceholder: false,
    priceNote:
      "Zeltplatz ab 1 Person (€ 20) · Wohnwagen ab 2 Personen (€ 35) inkl. Dusche, Strom und Kurtaxe · Wohnmobil € 35–€ 50 je nach Stellplatz, ab 2 Personen inkl. Dusche, Strom und Kurtaxe · je weitere Person € 5 · Kinder bis 15 Jahre und Haustiere frei · Saison 1. Mai bis 15. September · bitte bestätigen.",
    highlight: { title: "Kinder & Hunde frei", text: "Kinder bis 15 Jahre und Haustiere übernachten ohne Aufpreis." },
    categories: [
      { id: "zelt", label: "Zeltplatz", perNight: 20, perExtraGuest: 5 },
      { id: "wohnwagen", label: "Wohnwagen", perNight: 35, perExtraGuest: 5 },
      { id: "wohnmobil", label: "Wohnmobil ab €35", perNight: 35, perExtraGuest: 5 },
    ],
  },

  kontakt: {
    tel: "+43 384 222 782",
    telHref: "tel:+43384222782",
    mail: "campingclubleobenhinterberg@gmx.at",
    adresse: "Hinterbergstraße 47 · 8700 Leoben · Steiermark",
    coords: { lat: 47.361220, lng: 15.065600 },
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Sanitär", href: "#camping" },
    ]},
    { label: "Aktivitäten", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingclubHinterberg;
