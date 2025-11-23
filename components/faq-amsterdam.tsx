"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const faqsAmsterdam = [
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
  
  // Amsterdam-specifieke vragen
  {
    question: "Werken jullie ook in beschermde stadsgezichten in Amsterdam?",
    answer: "Ja, wij hebben ruime ervaring met kozijnen in beschermde stadsgezichten en bij monumentale panden. Wij zorgen ervoor dat de kozijnen voldoen aan welstandseisen en passen bij het karakter van uw pand en de omgeving. In wijken zoals de Grachtengordel, Jordaan en De Pijp weten wij precies welke eisen gelden.",
    citySpecific: true
  },
  {
    question: "Hoe gaan jullie om met de bereikbaarheid in de Amsterdamse binnenstad?",
    answer: "Wij zijn gewend te werken in de smalle straten van Amsterdam. Onze monteurs plannen hun werkzaamheden zorgvuldig, regelen eventuele parkeervergunningen en zorgen voor minimale overlast voor u en uw buren. Ook in nauwe stegen en bij grachten hebben wij oplossingen.",
    citySpecific: true
  },
  {
    question: "Kan ik kozijnen plaatsen in een grachtenpand zonder het authentieke karakter te verliezen?",
    answer: "Absoluut. Moderne kozijnen kunnen worden uitgevoerd met smalle profielen, authentieke kleuren en klassieke raamindelingen. Zo behoudt u het monumentale karakter van uw grachtenpand, maar profiteert u wel van moderne isolatie, geluidswering en onderhoudsgemak.",
    citySpecific: true
  },
  {
    question: "Helpen jullie met vergunningen voor monumentale panden in Amsterdam?",
    answer: "Ja, wij adviseren u over de benodigde vergunningen. Voor monumentale panden is vaak een monumentenvergunning nodig. Wij kunnen u ondersteunen bij het aanvraagproces en zorgen ervoor dat de kozijnen voldoen aan alle eisen van de gemeente Amsterdam.",
    citySpecific: true
  }
]

export function FAQAmsterdam() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Veelgestelde Vragen over Kozijnen in Amsterdam
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat u moet weten over het vervangen van kozijnen in Amsterdam
            </p>
          </div>

          <div className="space-y-4">
            {faqsAmsterdam.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md overflow-hidden border ${
                  faq.citySpecific ? 'border-blue-200' : 'border-gray-200'
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

