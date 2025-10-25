import { rijnmondData } from "./rijnmond-data"

export interface GemeenteData {
  slug: string
  naam: string
  regio: "Haaglanden" | "Rijnmond"
  title: string
  description: string
  wijken: string[]
  postcodes: string
  prijzen: {
    appartement: string
    rijtjeshuis: string
    vrijstaand: string
  }
  introText: string
  waaromKiezen: string[]
  situaties: {
    title: string
    description: string
  }[]
  faq: {
    question: string
    answer: string
  }[]
}

export const gemeenteData: Record<string, GemeenteData> = {
  "den-haag": {
    slug: "den-haag",
    naam: "Den Haag",
    regio: "Haaglanden",
    title: "Woningontruiming Den Haag - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Den Haag. Vindt u goedkoper? Wij betalen het verschil. Bezemschoon opleveren, na overlijden, seniorenverhuizing.",
    wijken: [
      "Centrum & Zeeheldenkwartier",
      "Segbroek & Valkenboskwartier",
      "Schilderswijk & Transvaal",
      "Loosduinen & Kijkduin",
      "Leidschenveen & Ypenburg",
      "Mariahoeve",
      "Statenkwartier",
      "Moerwijk",
    ],
    postcodes: "2490-2599",
    prijzen: {
      appartement: "€650 - €1.100",
      rijtjeshuis: "€1.100 - €1.700",
      vrijstaand: "€1.700 - €2.800",
    },
    introText:
      "Een woningontruiming in Den Haag vraagt om lokale kennis en ervaring. Of het nu gaat om een appartement in het Zeeheldenkwartier, een herenhuis in het Statenkwartier of een sociale huurwoning in de Schilderswijk – wij zorgen voor een professionele en respectvolle ontruiming tegen de laagste prijs.",
    waaromKiezen: [
      "Lokale kennis van alle Haagse wijken en hun specifieke toegankelijkheid",
      "Ervaring met zowel monumentale panden als moderne nieuwbouw",
      "Snel beschikbaar, vaak binnen 24-48 uur",
      "Laagste prijs garantie - vindt u goedkoper? Wij betalen het verschil",
      "Specialisatie in bezemschoon opleveren volgens Haagse huurvoorwaarden",
    ],
    situaties: [
      {
        title: "Ontruiming na overlijden in Den Haag",
        description:
          "Het verlies van een dierbare is een emotionele periode. Wij helpen u met respect en discretie bij het ontruimen van de woning. Van het sorteren van waardevolle bezittingen tot het bezemschoon opleveren – wij nemen u alles uit handen.",
      },
      {
        title: "Huurwoning opleveren in Den Haag",
        description:
          "De meeste Haagse woningcorporaties (Vestia, Haag Wonen, Staedion) stellen strenge eisen bij oplevering. Wij kennen deze voorwaarden en zorgen dat uw woning volledig aan de eisen voldoet: geen gordijnrails, geen pluggen, alle gaten gedicht en bezemschoon.",
      },
      {
        title: "Seniorenverhuizing Den Haag",
        description:
          "Een verhuizing naar een verzorgingstehuis of kleiner appartement vraagt om zorgvuldige begeleiding. Wij helpen bij het uitzoeken, inpakken en verhuizen, en ontruimen de oude woning compleet.",
      },
      {
        title: "Spoedontruiming Den Haag",
        description:
          "Soms moet het snel. Bij verkoop, een nieuwe huurder of andere spoedeisende situaties kunnen wij vaak binnen 24 uur starten met de ontruiming van uw woning in Den Haag.",
      },
    ],
    faq: [
      {
        question: "Wat kost een woningontruiming in Den Haag?",
        answer:
          "De kosten variëren per woningtype. Een klein appartement (40-70m²) kost gemiddeld €650-€1.100, een rijtjeshuis €1.100-€1.700, en een vrijstaande woning €1.700-€2.800. Met onze laagste prijs garantie bent u verzekerd van de beste prijs.",
      },
      {
        question: "Hoe snel kunnen jullie een woning in Den Haag ontruimen?",
        answer:
          "In de meeste gevallen kunnen we binnen 1-2 werkdagen starten. Bij spoedeisende situaties is ontruiming binnen 24 uur mogelijk. De duur van de ontruiming hangt af van de grootte en toegankelijkheid van de woning.",
      },
      {
        question: "Werken jullie in alle wijken van Den Haag?",
        answer:
          "Ja, wij ontruimen woningen in heel Den Haag: van het Centrum tot Loosduinen, van Scheveningen tot Leidschenveen. We kennen de lokale situatie en parkeermogelijkheden in elke wijk.",
      },
      {
        question: "Wat gebeurt er met mijn inboedel?",
        answer:
          "Bruikbare spullen gaan naar lokale kringloopwinkels of goede doelen. Waardevolle items kunnen verkocht worden (de opbrengst gaat naar u). De rest wordt milieuvriendelijk afgevoerd volgens Haagse afvalregels.",
      },
      {
        question: "Leveren jullie ook bezemschoon op voor verhuurders?",
        answer:
          "Absoluut. Wij kennen de oplevervoorwaarden van alle grote Haagse woningcorporaties (Vestia, Haag Wonen, Staedion) en zorgen dat uw woning exact volgens deze eisen wordt opgeleverd.",
      },
      {
        question: "Wat is jullie laagste prijs garantie?",
        answer:
          "Als u binnen 48 uur na onze offerte een goedkopere, vergelijkbare offerte vindt van een ander erkend bedrijf, betalen wij het verschil terug. Zo bent u altijd verzekerd van de beste prijs voor uw woningontruiming in Den Haag.",
      },
    ],
  },
  delft: {
    slug: "delft",
    naam: "Delft",
    regio: "Haaglanden",
    title: "Woningontruiming Delft - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Delft. Vindt u goedkoper? Wij betalen het verschil. Studentenwoningen, gezinswoningen en seniorenverhuizingen.",
    wijken: [
      "Binnenstad",
      "Tanthof",
      "Voorhof",
      "Vrijenban",
      "Hof van Delft",
      "TU-wijk",
      "Schieoevers",
    ],
    postcodes: "2600-2629",
    prijzen: {
      appartement: "€600 - €1.000",
      rijtjeshuis: "€1.000 - €1.600",
      vrijstaand: "€1.600 - €2.500",
    },
    introText:
      "Woningontruiming in Delft vraagt om begrip voor de unieke stad. Of het nu een studentenwoning nabij de TU, een karakteristiek pand in de binnenstad of een gezinswoning in Tanthof betreft – wij zorgen voor een grondige en betaalbare ontruiming met laagste prijs garantie.",
    waaromKiezen: [
      "Ervaring met zowel studentenwoningen als monumentale panden in de binnenstad",
      "Kennis van lokale parkeerregels en toegankelijkheid in smalle straten",
      "Flexibel beschikbaar, ook in drukke studenten-verhuisperiodes",
      "Laagste prijs garantie voor alle ontruimingen",
      "Samenwerking met lokale kringlooporganisaties",
    ],
    situaties: [
      {
        title: "Studentenwoning ontruimen Delft",
        description:
          "Na een studententijd in Delft moet de kamer of woning vaak snel en compleet worden leeggehaald. Wij zorgen voor een snelle ontruiming en bezemschone oplevering, zodat u uw borg terugkrijgt.",
      },
      {
        title: "Ontruiming na overlijden Delft",
        description:
          "Bij het verlies van een naaste helpen wij met zorg en respect bij het ontruimen van de woning. We nemen de tijd om waardevolle herinneringen te bewaren en regelen alles verder tot bezemschoon.",
      },
      {
        title: "Gezinswoning ontruimen Delft",
        description:
          "Bij verhuizing van een gezinswoning in wijken als Tanthof, Vrijenban of Voorhof zorgen wij voor complete ontruiming: van zolder tot kelder, inclusief tuin en schuur.",
      },
      {
        title: "Bezemschoon opleveren Delft",
        description:
          "Verhuurders in Delft stellen vaak hoge eisen. Wij zorgen dat uw huurwoning aan alle voorwaarden voldoet: volledig leeg, schoon en zonder beschadigingen.",
      },
    ],
    faq: [
      {
        question: "Wat kost een woningontruiming in Delft?",
        answer:
          "Voor een appartement of studentenwoning rekenen we €600-€1.000, voor een rijtjeshuis €1.000-€1.600, en voor een vrijstaande woning €1.600-€2.500. Dankzij onze laagste prijs garantie betaalt u nooit te veel.",
      },
      {
        question: "Kunnen jullie ook kleine studentenkamers ontruimen?",
        answer:
          "Ja, wij doen ook kleinere klussen. Een studentenkamer kunnen we vaak binnen een halve dag ontruimen en bezemschoon opleveren.",
      },
      {
        question: "Hoe werkt het met parkeren in de binnenstad?",
        answer:
          "Wij kennen de Delftse binnenstad goed en regelen indien nodig een parkeervergunning of ontheffing. Ook kunnen we werken met handkarren voor smalle straatjes.",
      },
      {
        question: "Werken jullie ook in de weekenden?",
        answer:
          "Ja, voor spoedgevallen of als het beter uitkomt kunnen we ook in weekenden ontruimen. Dit plannen we graag samen in.",
      },
      {
        question: "Wat is de laagste prijs garantie?",
        answer:
          "Als u binnen 48 uur een goedkopere offerte vindt voor vergelijkbare diensten, betalen wij het verschil terug. Zo weet u zeker dat u de beste prijs krijgt.",
      },
    ],
  },
  "leidschendam-voorburg": {
    slug: "leidschendam-voorburg",
    naam: "Leidschendam-Voorburg",
    regio: "Haaglanden",
    title: "Woningontruiming Leidschendam-Voorburg - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Leidschendam-Voorburg. Vindt u goedkoper? Wij betalen het verschil. Alle wijken, alle woningtypes.",
    wijken: ["Leidschendam", "Voorburg", "Stompwijk", "Het Centrum", "De Korte Akkeren", "Hofwijk"],
    postcodes: "2260-2275",
    prijzen: {
      appartement: "€600 - €1.050",
      rijtjeshuis: "€1.050 - €1.650",
      vrijstaand: "€1.650 - €2.600",
    },
    introText:
      "In Leidschendam-Voorburg combineren we snelheid met zorgvuldigheid. Of u nu een appartement in het centrum, een rijtjeshuis in de Korte Akkeren of een villa in Voorburg heeft – wij ontruimen professioneel en tegen de scherpste prijs dankzij onze laagste prijs garantie.",
    waaromKiezen: [
      "Lokale kennis van Leidschendam-Voorburg en omgeving",
      "Ervaring met verschillende woningtypes en -groottes",
      "Snel beschikbaar, ook voor spoedklussen",
      "Laagste prijs garantie",
      "Bezemschoon oplevering volgens verhuurderseisen",
    ],
    situaties: [
      {
        title: "Seniorenverhuizing Leidschendam-Voorburg",
        description:
          "Bij verhuizing naar een verzorgingstehuis of kleinere woning begeleiden wij het hele proces. Van uitzoeken en inpakken tot verhuizen en ontruimen van de oude woning.",
      },
      {
        title: "Huurwoning opleveren",
        description:
          "Wij zorgen dat uw huurwoning voldoet aan alle oplevervoorwaarden: volledig leeg, zonder pluggen en spijkergaten, schoon en gereed voor de nieuwe bewoner.",
      },
      {
        title: "Ontruiming bij verkoop",
        description:
          "Uw woning is verkocht en moet leeg? Wij ontruimen snel en grondig zodat de nieuwe eigenaar direct kan beginnen.",
      },
      {
        title: "Complete inboedelontruiming",
        description:
          "Van grote meubels tot kleine spullen op zolder – wij halen alles weg en zorgen voor milieuvriendelijke verwerking of donatie aan goede doelen.",
      },
    ],
    faq: [
      {
        question: "Wat zijn de kosten voor woningontruiming in Leidschendam-Voorburg?",
        answer:
          "Een appartement kost €600-€1.050, een rijtjeshuis €1.050-€1.650 en een vrijstaande woning €1.650-€2.600. Met onze laagste prijs garantie betaalt u gegarandeerd niet te veel.",
      },
      {
        question: "Hoe snel kunnen jullie starten?",
        answer:
          "Meestal kunnen we binnen 1-3 werkdagen beginnen. Bij spoed is ontruiming vaak al binnen 24 uur mogelijk.",
      },
      {
        question: "Ontruimen jullie ook tuinen en schuren?",
        answer:
          "Ja, wij ontruimen de gehele woning inclusief tuin, schuur, garage en berging. Alles wordt bezemschoon opgeleverd.",
      },
      {
        question: "Hoe werkt de laagste prijs garantie precies?",
        answer:
          "Vindt u binnen 48 uur na onze offerte een lagere prijs bij een vergelijkbaar bedrijf? Dan betalen wij het verschil terug. Simpel en eerlijk.",
      },
    ],
  },
  "midden-delfland": {
    slug: "midden-delfland",
    naam: "Midden-Delfland",
    regio: "Haaglanden",
    title: "Woningontruiming Midden-Delfland - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Midden-Delfland (Maassluis, Schipluiden, Maasland). Vindt u goedkoper? Wij betalen het verschil.",
    wijken: ["Maassluis", "Schipluiden", "Maasland", "Den Hoorn"],
    postcodes: "2636-2652",
    prijzen: {
      appartement: "€580 - €1.000",
      rijtjeshuis: "€1.000 - €1.550",
      vrijstaand: "€1.550 - €2.400",
    },
    introText:
      "Midden-Delfland kent een mix van karakteristieke dorpswoningen en moderne nieuwbouw. Of het nu gaat om een woning in Maassluis, Schipluiden of Maasland – wij bieden professionele ontruiming tegen de laagste prijs, gegarandeerd.",
    waaromKiezen: [
      "Bekend met het landelijke karakter van Midden-Delfland",
      "Persoonlijke benadering, passend bij de kleinschaligheid",
      "Flexibel en snel beschikbaar",
      "Laagste prijs garantie voor complete gemoedsrust",
      "Ervaring met zowel oude als nieuwe woningen",
    ],
    situaties: [
      {
        title: "Boerderij of grote woning ontruimen",
        description:
          "Midden-Delfland kent veel grotere woningen en oude boerderijen. Wij hebben ervaring met het ontruimen van grote panden inclusief bijgebouwen, schuren en grote tuinen.",
      },
      {
        title: "Ontruiming na overlijden",
        description:
          "In de kleine gemeenschap van Midden-Delfland werken we discreet en respectvol. Wij helpen u met alle aspecten van de ontruiming na het verlies van een dierbare.",
      },
      {
        title: "Verhuizing naar zorginstelling",
        description:
          "Bij verhuizing vanuit een woning in Midden-Delfland naar een verzorgingshuis helpen wij met de volledige verhuizing en ontruiming.",
      },
      {
        title: "Huurwoning bezemschoon opleveren",
        description:
          "Ook in Midden-Delfland gelden strikte oplevervoorwaarden. Wij zorgen dat uw huurwoning volledig aan de eisen voldoet.",
      },
    ],
    faq: [
      {
        question: "Wat kost een woningontruiming in Midden-Delfland?",
        answer:
          "De prijzen variëren van €580-€1.000 voor een appartement, €1.000-€1.550 voor een rijtjeshuis tot €1.550-€2.400 voor een vrijstaande woning. Dankzij onze laagste prijs garantie bent u verzekerd van de beste deal.",
      },
      {
        question: "Komen jullie ook in de kleinere kernen zoals Den Hoorn?",
        answer:
          "Ja, wij werken in heel Midden-Delfland: Maassluis, Schipluiden, Maasland én Den Hoorn. Geen enkele locatie is te afgelegen.",
      },
      {
        question: "Kunnen jullie ook grote schuren en bijgebouwen ontruimen?",
        answer:
          "Absoluut. We hebben ervaring met het ontruimen van boerderijen en panden met grote bijgebouwen. Alles wordt grondig ontruimd en opgeruimd.",
      },
      {
        question: "Hoe snel kunnen jullie er zijn?",
        answer:
          "In de meeste gevallen kunnen we binnen 2-3 werkdagen starten met de ontruiming. Bij spoed vaak nog sneller.",
      },
    ],
  },
  "pijnacker-nootdorp": {
    slug: "pijnacker-nootdorp",
    naam: "Pijnacker-Nootdorp",
    regio: "Haaglanden",
    title: "Woningontruiming Pijnacker-Nootdorp - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Pijnacker-Nootdorp. Vindt u goedkoper? Wij betalen het verschil. Snel, betrouwbaar en betaalbaar.",
    wijken: ["Pijnacker Centrum", "Pijnacker-Zuid", "Nootdorp", "Delfgauw", "Keijzershof"],
    postcodes: "2640-2649",
    prijzen: {
      appartement: "€590 - €1.020",
      rijtjeshuis: "€1.020 - €1.600",
      vrijstaand: "€1.600 - €2.500",
    },
    introText:
      "Pijnacker-Nootdorp is een groeiende gemeente met moderne woonwijken en karakteristieke dorpskernen. Wij bieden professionele woningontruiming in alle delen van de gemeente tegen de laagste prijs, gegarandeerd.",
    waaromKiezen: [
      "Kennis van zowel oude dorpskernen als nieuwe woonwijken",
      "Snel beschikbaar voor spoedontruimingen",
      "Laagste prijs garantie - nooit te veel betalen",
      "Ervaring met gezinswoningen en appartementen",
      "Lokale samenwerking met kringlooporganisaties",
    ],
    situaties: [
      {
        title: "Gezinswoning ontruimen",
        description:
          "Pijnacker-Nootdorp kent veel gezinswoningen. Bij verhuizing zorgen wij voor complete ontruiming van woning, garage, schuur en tuin.",
      },
      {
        title: "Appartement bezemschoon opleveren",
        description:
          "Vooral in de nieuwere wijken zijn veel appartementen. Wij leveren deze professioneel en bezemschoon op volgens de verhuurderseisen.",
      },
      {
        title: "Seniorenverhuizing",
        description:
          "Bij verhuizing naar een kleinere woning of zorginstelling begeleiden wij het hele proces en ontruimen we de oude woning compleet.",
      },
      {
        title: "Spoedontruiming",
        description:
          "Moet het snel? Wij kunnen vaak binnen 24-48 uur starten met de ontruiming van uw woning in Pijnacker-Nootdorp.",
      },
    ],
    faq: [
      {
        question: "Wat kost woningontruiming in Pijnacker-Nootdorp?",
        answer:
          "Een appartement ontruimen kost €590-€1.020, een rijtjeshuis €1.020-€1.600 en een vrijstaande woning €1.600-€2.500. Met onze laagste prijs garantie betaalt u gegarandeerd de beste prijs.",
      },
      {
        question: "Werken jullie ook in Delfgauw?",
        answer:
          "Ja, wij werken in heel Pijnacker-Nootdorp inclusief Delfgauw, alle wijken in Pijnacker en Nootdorp.",
      },
      {
        question: "Kunnen jullie ook de tuin en schuur ontruimen?",
        answer:
          "Zeker, wij ontruimen de gehele woning inclusief alle bijgebouwen, tuin en berging. Alles wordt netjes afgevoerd.",
      },
      {
        question: "Wat gebeurt er met bruikbare spullen?",
        answer:
          "Bruikbare spullen doneren we aan lokale kringloopwinkels. Waardevolle items kunnen verkocht worden, de opbrengst komt naar u toe.",
      },
    ],
  },
  rijswijk: {
    slug: "rijswijk",
    naam: "Rijswijk",
    regio: "Haaglanden",
    title: "Woningontruiming Rijswijk - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Rijswijk. Vindt u goedkoper? Wij betalen het verschil. Alle wijken, snelle service.",
    wijken: ["Rijswijk Centrum", "Sion", "Steenvoorde", "Oud-Rijswijk", "Plaspoelpolder", "In de Bogaard"],
    postcodes: "2280-2289",
    prijzen: {
      appartement: "€620 - €1.080",
      rijtjeshuis: "€1.080 - €1.680",
      vrijstaand: "€1.680 - €2.650",
    },
    introText:
      "Rijswijk ligt centraal tussen Den Haag en Delft en kent diverse woonwijken. Van appartementen in hoogbouw tot vrijstaande woningen – wij ontruimen professioneel en betaalbaar met onze laagste prijs garantie.",
    waaromKiezen: [
      "Uitstekende bereikbaarheid en snelle service",
      "Kennis van alle Rijswijkse wijken en woningtypes",
      "Ervaring met zowel sociale huur als koopwoningen",
      "Laagste prijs garantie voor elke ontruiming",
      "Flexibel in planning en uitvoering",
    ],
    situaties: [
      {
        title: "Hoogbouw appartement ontruimen",
        description:
          "Rijswijk kent veel hoogbouw. Wij hebben ervaring met ontruiming van appartementen in hoogbouw, inclusief het gebruik van liften en trappenhuis volgens de huisregels.",
      },
      {
        title: "Huurwoning opleveren Rijswijk",
        description:
          "Voor woningcorporaties in Rijswijk leveren wij bezemschoon op volgens de strikte oplevervoorwaarden. Geen discussie bij de eindoplevering.",
      },
      {
        title: "Ontruiming na overlijden",
        description:
          "Met respect en zorg helpen wij bij het ontruimen van een woning na overlijden. Wij nemen alle zorgen uit handen tijdens deze moeilijke periode.",
      },
      {
        title: "Bedrijfsruimte ontruimen Rijswijk",
        description:
          "Ook bedrijfsruimtes en kantoren in Rijswijk ontruimen we professioneel. Van inventaris tot inrichting, wij regelen het.",
      },
    ],
    faq: [
      {
        question: "Wat kost een woningontruiming in Rijswijk?",
        answer:
          "De kosten zijn €620-€1.080 voor een appartement, €1.080-€1.680 voor een rijtjeshuis en €1.680-€2.650 voor een vrijstaande woning. Onze laagste prijs garantie zorgt dat u nooit te veel betaalt.",
      },
      {
        question: "Hoe werken jullie in hoogbouw?",
        answer:
          "Wij hebben ervaring met hoogbouw en gebruiken de lift indien beschikbaar. Ook regelen we beschermingsmateriaal voor het trappenhuis om schade te voorkomen.",
      },
      {
        question: "Kunnen jullie ook in het weekend ontruimen?",
        answer:
          "Ja, voor spoedgevallen of als het beter uitkomt kunnen we ook in weekenden werken. Dit stemmen we graag met u af.",
      },
      {
        question: "Wat is de laagste prijs garantie?",
        answer:
          "Als u binnen 48 uur een goedkopere offerte vindt voor dezelfde diensten bij een vergelijkbaar bedrijf, betalen wij u het verschil terug.",
      },
    ],
  },
  wassenaar: {
    slug: "wassenaar",
    naam: "Wassenaar",
    regio: "Haaglanden",
    title: "Woningontruiming Wassenaar - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Wassenaar. Vindt u goedkoper? Wij betalen het verschil. Discrete service voor villa's en landhuizen.",
    wijken: ["Wassenaar Dorp", "De Kieviet", "Duinrell", "Kerkehout", "Rijksstraatweg"],
    postcodes: "2240-2249",
    prijzen: {
      appartement: "€650 - €1.100",
      rijtjeshuis: "€1.100 - €1.750",
      vrijstaand: "€1.750 - €3.500",
    },
    introText:
      "Wassenaar staat bekend om zijn ruime villa's en landhuizen. Wij bieden discrete en professionele ontruiming van woningen van elk formaat. Of het nu gaat om een landhuis aan de Rijksstraatweg of een appartement in het dorp – met onze laagste prijs garantie betaalt u altijd de beste prijs.",
    waaromKiezen: [
      "Discrete en professionele aanpak passend bij Wassenaar",
      "Ervaring met grote, luxe woningen en landhuizen",
      "Zorgvuldige behandeling van waardevolle inboedel",
      "Laagste prijs garantie, ook voor grote panden",
      "Respect voor privacy en discretie",
    ],
    situaties: [
      {
        title: "Villa of landhuis ontruimen",
        description:
          "Wassenaar kent veel grote woningen. Wij hebben ervaring met het ontruimen van villa's, landhuizen en panden met meerdere verdiepingen, inclusief kelders en zolders.",
      },
      {
        title: "Ontruiming bij verkoop",
        description:
          "Bij verkoop van uw woning in Wassenaar zorgen wij voor discrete en snelle ontruiming, zodat de nieuwe eigenaar een schone woning aantreft.",
      },
      {
        title: "Seniorenverhuizing uit grote woning",
        description:
          "Verkleinen naar een appartement of verhuizen naar een zorginstelling? Wij begeleiden het hele proces en ontruimen de grote woning professioneel.",
      },
      {
        title: "Inboedel taxeren en verkopen",
        description:
          "Bij waardevolle inboedel werken we samen met taxateurs en veilinghuizen. Zo haalt u het maximale uit uw bezittingen.",
      },
    ],
    faq: [
      {
        question: "Wat kost woningontruiming in Wassenaar?",
        answer:
          "Voor een appartement rekenen we €650-€1.100, voor een rijtjeshuis €1.100-€1.750 en voor een vrijstaande woning of villa €1.750-€3.500. Dankzij onze laagste prijs garantie weet u zeker dat u de beste prijs krijgt.",
      },
      {
        question: "Hoe discreet werken jullie?",
        answer:
          "Wij begrijpen dat privacy belangrijk is in Wassenaar. Onze medewerkers werken professioneel en discreet, zonder opvallende voertuigen of onnodige aandacht.",
      },
      {
        question: "Kunnen jullie ook grote tuinen ontruimen?",
        answer:
          "Ja, wij ontruimen ook tuinen, tuinhuizen en bijgebouwen. Tuinafval en grote objecten worden op de juiste manier afgevoerd.",
      },
      {
        question: "Werken jullie met taxateurs voor waardevolle spullen?",
        answer:
          "Absoluut. Voor antiek en waardevolle inboedel schakelen we indien gewenst een erkend taxateur in, zodat u weet wat uw bezittingen waard zijn.",
      },
    ],
  },
  westland: {
    slug: "westland",
    naam: "Westland",
    regio: "Haaglanden",
    title: "Woningontruiming Westland - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Westland (Naaldwijk, Wateringen, Monster, De Lier). Vindt u goedkoper? Wij betalen het verschil.",
    wijken: ["Naaldwijk", "Wateringen", "Monster", "De Lier", "'s-Gravenzande", "Poeldijk", "Ter Heijde"],
    postcodes: "2260-2275, 2670-2685",
    prijzen: {
      appartement: "€580 - €1.000",
      rijtjeshuis: "€1.000 - €1.550",
      vrijstaand: "€1.550 - €2.500",
    },
    introText:
      "Westland is een grote gemeente met diverse kernen. Of u nu in Naaldwijk, Wateringen, Monster of De Lier woont – wij bieden professionele woningontruiming tegen de laagste prijs in heel Westland.",
    waaromKiezen: [
      "Actief in alle kernen van Westland",
      "Kennis van lokale situaties en toegankelijkheid",
      "Snelle service en flexibele planning",
      "Laagste prijs garantie voor complete gemoedsrust",
      "Ervaring met zowel dorpswoningen als nieuwbouw",
    ],
    situaties: [
      {
        title: "Woning met kas of bedrijfsruimte ontruimen",
        description:
          "In Westland komen woningen met kassen of bedrijfsruimtes veel voor. Wij hebben ervaring met het ontruimen van deze complexe situaties.",
      },
      {
        title: "Ontruiming na overlijden in Westland",
        description:
          "Met respect en zorgvuldigheid helpen wij bij het ontruimen van een woning na overlijden. Wij werken discreet en nemen alle zorgen uit handen.",
      },
      {
        title: "Huurwoning bezemschoon opleveren",
        description:
          "Veel woningen in Westland zijn huurwoningen. Wij zorgen voor bezemschone oplevering volgens alle voorwaarden van de verhuurder.",
      },
      {
        title: "Spoedontruiming Westland",
        description:
          "Moet het snel? In Westland kunnen we vaak binnen 24-48 uur starten met de ontruiming van uw woning.",
      },
    ],
    faq: [
      {
        question: "Wat kost een woningontruiming in Westland?",
        answer:
          "Een appartement ontruimen kost €580-€1.000, een rijtjeshuis €1.000-€1.550 en een vrijstaande woning €1.550-€2.500. Met onze laagste prijs garantie bent u verzekerd van de beste prijs.",
      },
      {
        question: "Werken jullie in alle kernen van Westland?",
        answer:
          "Ja, wij werken in heel Westland: Naaldwijk, Wateringen, Monster, De Lier, 's-Gravenzande, Poeldijk en alle andere kernen.",
      },
      {
        question: "Kunnen jullie ook kassen of bedrijfsruimtes ontruimen?",
        answer:
          "Ja, wij hebben ervaring met het ontruimen van woningen met bijbehorende kassen, schuren en bedrijfsruimtes. Neem contact op voor een offerte op maat.",
      },
      {
        question: "Hoe snel kunnen jullie er zijn?",
        answer:
          "In de meeste gevallen kunnen we binnen 1-3 werkdagen beginnen. Bij spoedgevallen is start binnen 24 uur mogelijk.",
      },
    ],
  },
  zoetermeer: {
    slug: "zoetermeer",
    naam: "Zoetermeer",
    regio: "Haaglanden",
    title: "Woningontruiming Zoetermeer - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Zoetermeer. Vindt u goedkoper? Wij betalen het verschil. Alle wijken, snelle service.",
    wijken: [
      "Zoetermeer Centrum",
      "Meerzicht",
      "Dorp",
      "Palenstein",
      "Buytenwegh",
      "Rokkeveen",
      "Noordhove",
      "Oosterheem",
      "Seghwaert",
    ],
    postcodes: "2700-2729",
    prijzen: {
      appartement: "€600 - €1.050",
      rijtjeshuis: "€1.050 - €1.650",
      vrijstaand: "€1.650 - €2.600",
    },
    introText:
      "Zoetermeer is een grote stad met diverse wijken van vroege nieuwbouw tot modern. Wij bieden professionele woningontruiming in alle wijken van Zoetermeer tegen de laagste prijs, gegarandeerd.",
    waaromKiezen: [
      "Kennis van alle Zoetermeerse wijken",
      "Ervaring met zowel portiekflats als eengezinswoningen",
      "Snelle beschikbaarheid, ook voor spoedklussen",
      "Laagste prijs garantie",
      "Samenwerking met lokale kringlooporganisaties",
    ],
    situaties: [
      {
        title: "Portiekflat ontruimen Zoetermeer",
        description:
          "Zoetermeer kent veel portiekflats en galerijwoningen. Wij hebben ervaring met het ontruimen van appartementen in deze woningtypes, rekening houdend met buren en gemeenschappelijke ruimtes.",
      },
      {
        title: "Eengezinswoning ontruimen",
        description:
          "Van Meerzicht tot Rokkeveen, van Palenstein tot Noordhove – wij ontruimen eengezinswoningen compleet inclusief garage, schuur en tuin.",
      },
      {
        title: "Seniorenverhuizing Zoetermeer",
        description:
          "Bij verhuizing naar een zorginstelling of kleiner appartement begeleiden wij u volledig en ontruimen we de oude woning professioneel.",
      },
      {
        title: "Bezemschoon opleveren huurwoning",
        address:
          "Woningcorporaties in Zoetermeer stellen hoge eisen. Wij zorgen dat uw huurwoning volledig aan de oplevervoorwaarden voldoet.",
      },
    ],
    faq: [
      {
        question: "Wat kost woningontruiming in Zoetermeer?",
        answer:
          "De kosten zijn €600-€1.050 voor een appartement, €1.050-€1.650 voor een rijtjeshuis en €1.650-€2.600 voor een vrijstaande woning. Onze laagste prijs garantie zorgt ervoor dat u nooit te veel betaalt.",
      },
      {
        question: "Werken jullie in alle wijken van Zoetermeer?",
        answer:
          "Ja, van Dorp tot Oosterheem, van Meerzicht tot Seghwaert – wij werken in heel Zoetermeer.",
      },
      {
        question: "Hoe snel kunnen jullie een woning in Zoetermeer ontruimen?",
        answer:
          "Een gemiddelde woning ontruimen we in 1-2 werkdagen. Starten kunnen we meestal binnen 1-3 werkdagen, bij spoed zelfs binnen 24 uur.",
      },
      {
        question: "Wat gebeurt er met mijn spullen?",
        answer:
          "Bruikbare spullen gaan naar kringloopwinkels, waardevolle items kunnen verkocht worden, en de rest wordt milieuvriendelijk afgevoerd volgens de regels van de gemeente Zoetermeer.",
      },
      {
        question: "Wat houdt de laagste prijs garantie in?",
        answer:
          "Als u binnen 48 uur na onze offerte een goedkopere, vergelijkbare offerte vindt, betalen wij het verschil terug. Zo weet u zeker dat u bij ons altijd de beste prijs krijgt.",
      },
    ],
  },
  albrandswaard: {
    slug: "albrandswaard",
    naam: "Albrandswaard",
    regio: "Rijnmond",
    title: "Woningontruiming Albrandswaard - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Albrandswaard. Vindt u goedkoper? Wij betalen het verschil. Poortugaal, Rhoon en omgeving.",
    wijken: ["Poortugaal", "Rhoon"],
    postcodes: "3160-3161",
    prijzen: {
      appartement: "€600 - €1.050",
      rijtjeshuis: "€1.050 - €1.650",
      vrijstaand: "€1.650 - €2.600",
    },
    introText:
      "Woningontruiming in Albrandswaard vraagt om lokale kennis. Of het nu gaat om een woning in Poortugaal of Rhoon – wij zorgen voor een professionele ontruiming tegen de laagste prijs, gegarandeerd.",
    waaromKiezen: [
      "Kennis van Albrandswaard en directe omgeving",
      "Snelle beschikbaarheid voor spoedontruimingen",
      "Laagste prijs garantie",
      "Ervaring met alle woningtypes",
      "Persoonlijke service in kleinschalige gemeente",
    ],
    situaties: [
      {
        title: "Ontruiming na overlijden Albrandswaard",
        description:
          "Met respect en zorg helpen wij bij het ontruimen van een woning na overlijden. Wij werken discreet en nemen alle zorgen uit handen.",
      },
      {
        title: "Huurwoning bezemschoon opleveren",
        description:
          "Wij zorgen dat uw huurwoning in Albrandswaard volledig voldoet aan de oplevervoorwaarden: leeg, schoon en zonder beschadigingen.",
      },
      {
        title: "Verhuizing en ontruiming",
        description:
          "Bij verhuizing zorgen wij voor complete ontruiming van uw oude woning inclusief tuin en bijgebouwen.",
      },
      {
        title: "Spoedontruiming",
        description:
          "Moet het snel? Wij kunnen vaak binnen 24-48 uur starten met de ontruiming van uw woning in Albrandswaard.",
      },
    ],
    faq: [
      {
        question: "Wat kost woningontruiming in Albrandswaard?",
        answer:
          "Een appartement kost €600-€1.050, een rijtjeshuis €1.050-€1.650 en een vrijstaande woning €1.650-€2.600. Met onze laagste prijs garantie betaalt u gegarandeerd de beste prijs.",
      },
      {
        question: "Werken jullie in Poortugaal en Rhoon?",
        answer: "Ja, wij werken in heel Albrandswaard inclusief Poortugaal en Rhoon.",
      },
      {
        question: "Hoe snel kunnen jullie starten?",
        answer:
          "In de meeste gevallen kunnen we binnen 1-3 werkdagen beginnen. Bij spoed is ontruiming vaak al binnen 24 uur mogelijk.",
      },
      {
        question: "Wat is de laagste prijs garantie?",
        answer:
          "Als u binnen 48 uur een goedkopere offerte vindt voor vergelijkbare diensten, betalen wij het verschil terug.",
      },
    ],
  },
  barendrecht: {
    slug: "barendrecht",
    naam: "Barendrecht",
    regio: "Rijnmond",
    title: "Woningontruiming Barendrecht - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Barendrecht. Vindt u goedkoper? Wij betalen het verschil. Alle wijken, snelle service.",
    wijken: ["Carnisselande", "Barendrecht Centrum", "Oost-Barendrecht", "West-Barendrecht"],
    postcodes: "2990-2995",
    prijzen: {
      appartement: "€610 - €1.070",
      rijtjeshuis: "€1.070 - €1.680",
      vrijstaand: "€1.680 - €2.700",
    },
    introText:
      "Barendrecht is een groeiende gemeente met moderne wijken en oudere kernen. Wij bieden professionele woningontruiming in alle delen van Barendrecht tegen de laagste prijs, gegarandeerd.",
    waaromKiezen: [
      "Kennis van alle Barendrechtse wijken",
      "Ervaring met zowel nieuwbouw als oudere woningen",
      "Snel beschikbaar, ook voor spoedklussen",
      "Laagste prijs garantie",
      "Flexibele planning",
    ],
    situaties: [
      {
        title: "Woningontruiming Carnisselande",
        description:
          "De moderne wijk Carnisselande heeft vaak jonge gezinnen. Wij helpen bij verhuizing en ontruiming van gezinswoningen.",
      },
      {
        title: "Ontruiming na overlijden",
        description:
          "Met respect en zorg helpen wij bij het ontruimen van een woning na overlijden. Discreet en professioneel.",
      },
      {
        title: "Bezemschoon opleveren huurwoning",
        description:
          "Wij zorgen dat uw huurwoning voldoet aan alle oplevervoorwaarden van de verhuurder.",
      },
      {
        title: "Spoedontruiming Barendrecht",
        description: "Bij spoed kunnen we vaak binnen 24 uur starten met de ontruiming.",
      },
    ],
    faq: [
      {
        question: "Wat kost woningontruiming in Barendrecht?",
        answer:
          "De kosten zijn €610-€1.070 voor een appartement, €1.070-€1.680 voor een rijtjeshuis en €1.680-€2.700 voor een vrijstaande woning. Onze laagste prijs garantie zorgt dat u nooit te veel betaalt.",
      },
      {
        question: "Werken jullie ook in Carnisselande?",
        answer: "Ja, wij werken in heel Barendrecht inclusief Carnisselande, Oost en West.",
      },
      {
        question: "Kunnen jullie ook tuinen ontruimen?",
        answer: "Ja, wij ontruimen de gehele woning inclusief tuin, schuur en berging.",
      },
      {
        question: "Hoe snel kunnen jullie er zijn?",
        answer: "Meestal kunnen we binnen 1-3 werkdagen starten, bij spoed sneller.",
      },
    ],
  },
  "capelle-aan-den-ijssel": {
    slug: "capelle-aan-den-ijssel",
    naam: "Capelle aan den IJssel",
    regio: "Rijnmond",
    title: "Woningontruiming Capelle aan den IJssel - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Capelle aan den IJssel. Vindt u goedkoper? Wij betalen het verschil. Alle wijken bereikbaar.",
    wijken: ["Capelle Centrum", "Schollevaar", "Fascinatio", "'t Slag", "Oostgaarde"],
    postcodes: "2900-2907",
    prijzen: {
      appartement: "€620 - €1.080",
      rijtjeshuis: "€1.080 - €1.690",
      vrijstaand: "€1.690 - €2.750",
    },
    introText:
      "Capelle aan den IJssel kent diverse woonwijken van hoogbouw tot vrijstaande woningen. Wij bieden professionele woningontruiming in heel Capelle tegen de laagste prijs, gegarandeerd.",
    waaromKiezen: [
      "Uitstekende bereikbaarheid vanuit Rotterdam",
      "Kennis van alle wijken in Capelle",
      "Ervaring met hoogbouw en galerijflats",
      "Laagste prijs garantie",
      "Snelle service, ook in weekenden",
    ],
    situaties: [
      {
        title: "Hoogbouw appartement ontruimen",
        description:
          "Capelle kent veel hoogbouw. Wij hebben ervaring met ontruiming van appartementen in torens en galerijflats.",
      },
      {
        title: "Huurwoning opleveren Capelle",
        description:
          "Voor woningcorporaties in Capelle leveren wij bezemschoon op volgens de strikte oplevervoorwaarden.",
      },
      {
        title: "Seniorenverhuizing",
        description:
          "Bij verhuizing naar een zorginstelling begeleiden wij u volledig en ontruimen we de oude woning.",
      },
      {
        title: "Ontruiming na overlijden",
        description: "Met respect en zorg helpen wij bij het ontruimen na verlies van een dierbare.",
      },
    ],
    faq: [
      {
        question: "Wat kost woningontruiming in Capelle aan den IJssel?",
        answer:
          "Een appartement kost €620-€1.080, een rijtjeshuis €1.080-€1.690 en een vrijstaande woning €1.690-€2.750. Met onze laagste prijs garantie bent u verzekerd van de beste prijs.",
      },
      {
        question: "Werken jullie ook in hoogbouw?",
        answer:
          "Ja, wij hebben veel ervaring met hoogbouw en gebruiken liften en trappenhuis volgens de huisregels.",
      },
      {
        question: "Hoe snel kunnen jullie een woning ontruimen?",
        answer: "Een gemiddelde woning ontruimen we in 1-2 werkdagen. Starten kunnen we meestal binnen 2-3 dagen.",
      },
      {
        question: "Wat gebeurt er met mijn spullen?",
        answer:
          "Bruikbare spullen gaan naar kringloop, waardevolle items kunnen verkocht worden, de rest wordt milieuvriendelijk afgevoerd.",
      },
    ],
  },
  ...rijnmondData,
}

export const gemeenteList = Object.keys(gemeenteData)

export function getGemeenteData(slug: string): GemeenteData | undefined {
  return gemeenteData[slug]
}

export function getGemeentesByRegio(regio: "Haaglanden" | "Rijnmond"): GemeenteData[] {
  return Object.values(gemeenteData).filter((gemeente) => gemeente.regio === regio)
}


