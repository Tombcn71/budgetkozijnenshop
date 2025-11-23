"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const faqsDenHaag = [
  // Originele algemene vragen
  {
    question: "Waarom bieden jullie de beste prijzen voor kozijnen in Nederland?",
    answer: "Wij combineren Duitse kwaliteit met efficiënte productie. De kozijnen zijn Duitse producten die geassembleerd worden in Polen, wat zorgt voor lagere productiekosten zonder concessies te doen aan de hoogste Duitse kwaliteitsnormen."
  },
  {
    question: "Kan ik financieren met het Nationaal Warmtefonds?",
    answer: "Ja, nieuwe kozijnen kunnen worden gefinancierd met de Energiebespaarlening van het Nationaal Warmtefonds. Dit biedt lage rentetarieven, geen notariskosten en de mogelijkheid van een renteloze lening bij een huishoudinkomen onder €60.000.",
    hasLink: true
  },
  {
    question: "Welke merken kozijnen worden geleverd?",
    answer: "Wij leveren premium merken zoals Aluplast, Aliplast, Gealan, Salamander, Eko Sun, Rehau, Aluprof, Deceuninck, Cortizo, Reynaers Aluminium, Forster en NFRC. Zo garanderen we topkwaliteit en de beste keuze voor elke situatie."
  },
  {
    question: "Wat is de levertijd van kozijnen? Van afspraak tot montage?",
    answer: "De totale doorlooptijd van afspraak tot montage bedraagt 4 tot 6 weken. Dit omvat de opmeting, productie op maat en professionele plaatsing van de nieuwe kozijnen."
  },
  {
    question: "Komen de kozijnen in aanmerking voor ISDE subsidie?",
    answer: "Ja, alle kozijnen die wij leveren komen in aanmerking voor ISDE subsidie. Afhankelijk van het type beglazing (HR++ of HR+++) kunt u subsidie ontvangen. Wij helpen u graag bij de aanvraag."
  },
  {
    question: "Krijg ik garantie op de kozijnen?",
    answer: "Ja, op alle kozijnen die wij leveren krijgt u 10 jaar fabrieksgarantie. Dit dekt fabricagefouten en materiaaldefecten, zodat u jarenlang zorgeloos kunt genieten van uw nieuwe kozijnen."
  },
  {
    question: "Zijn de kozijnen voorzien van inbraakwerend beslag?",
    answer: "Ja, alle kozijnen worden standaard geleverd met SKG-gecertificeerd hang- en sluitwerk (SKG** of SKG***) en voldoen aan het Politiekeurmerk Veilig Wonen (PKVW). Dit biedt optimale beveiliging tegen inbraak."
  },
  
  // Den Haag-specifieke vragen
  {
    question: "Zijn jullie kozijnen geschikt voor het kustklimaat bij Scheveningen?",
    answer: "Ja, onze kozijnen zijn speciaal geschikt voor kustklimaat. Ze hebben zoutbestendige coatings, roestvrij beslag en flexibele kitvoegen die bestand zijn tegen zeelucht, wind en vocht. Dit maakt ze ideaal voor wijken nabij de kust zoals Scheveningen, Duindorp en Kijkduin.",
    citySpecific: true
  },
  {
    question: "Werken jullie ook in monumentale wijken zoals het Statenkwartier?",
    answer: "Ja, wij hebben ruime ervaring met monumentale panden en beschermde stadsgezichten in Den Haag. Wij zorgen ervoor dat de kozijnen voldoen aan welstandseisen en passen bij het karakter van wijken zoals het Statenkwartier, Archipelbuurt en het historische centrum.",
    citySpecific: true
  },
  {
    question: "Kunnen nieuwe kozijnen de geluidsoverlast in de stad verminderen?",
    answer: "Ja, moderne kozijnen met hoogwaardige beglazing bieden uitstekende geluidsisolatie. Vooral in drukke gebieden zoals het centrum of nabij hoofdwegen merkt u direct het verschil. Dit draagt bij aan rust, concentratie en slaapkwaliteit.",
    citySpecific: true
  },
  {
    question: "Welke oplossingen hebben jullie voor naoorlogse woningen in Den Haag?",
    answer: "Veel Haagse wijken zoals Transvaal, Schilderswijk en Morgenstond hebben naoorlogse woningen met originele kozijnen die aan vervanging toe zijn. Wij hebben veel ervaring met dit type woningen en kunnen u adviseren over de beste aanpak voor isolatie en comfort.",
    citySpecific: true
  }
]

export function FAQDenHaag() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Veelgestelde Vragen over Kozijnen in Den Haag
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat u moet weten over het vervangen van kozijnen in Den Haag
            </p>
          </div>

          <div className="space-y-4">
            {faqsDenHaag.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md overflow-hidden border ${
                  faq.citySpecific ? 'border-green-200' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                      {faq.hasLink && (
                        <>
                          {" "}
                          <Link href="/financiering" className="text-primary hover:underline font-medium">
                            Meer informatie over financiering →
                          </Link>
                        </>
                      )}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

