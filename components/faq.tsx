"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "Waarom bieden jullie de beste prijzen voor kozijnen in Nederland?",
    answer: "Wij combineren Duitse kwaliteit met efficiënte productie. De kozijnen zijn Duitse producten die geassembleerd worden in Polen, wat zorgt voor lagere productiekosten zonder concessies te doen aan de hoogste Duitse kwaliteitsnormen."
  },
  {
    question: "Kan ik financieren met het Nationaal Warmtefonds?",
    answer: "Ja, nieuwe kozijnen kunnen worden gefinancierd met de Energiebespaarlening van het Nationaal Warmtefonds. Dit biedt lage rentetarieven vanaf 3,61%, geen notariskosten en de mogelijkheid van een renteloze lening bij een huishoudinkomen onder €60.000. De lening kan later eenvoudig worden omgezet in de hypotheek.",
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
    question: "Welke kleuren kunststof kozijnen zijn er beschikbaar?",
    answer: "Wij bieden alle gangbare kleuren voor kunststof kozijnen aan. Van klassiek wit tot moderne antraciet en houtimitaties, er is een ruime keuze om perfect aan te sluiten bij elke woning."
  },
  {
    question: "Wat is de prijs van standaard HR++ glas per m²?",
    answer: "Standaard HR++ glas kost €76 per m² inclusief BTW. Dit dubbelglas biedt goede isolatie en voldoet aan de huidige bouwnormen voor energiezuinige woningen."
  },
  {
    question: "Wat is de prijs per m² van HR+++ glas voor betere isolatie?",
    answer: "HR+++ glas kost €113 per m² inclusief BTW. Dit drievoudig glas biedt superieure isolatie, lagere energiekosten en meer wooncomfort door betere warmte- en geluidsisolatie."
  },
  {
    question: "Wat kost een kunststof kozijn per m²?",
    answer: "De prijs voor kunststof kozijnen varieert van €94 tot €177 per m² inclusief BTW. De exacte prijs hangt af van de gekozen uitvoering, glaskeuze en eventuele extra opties zoals veiligheidsbeslag."
  },
  {
    question: "Wat kost een kunststof deur met glas per m²?",
    answer: "Kunststof deuren met glas kosten tussen €430 en €670 per m² inclusief BTW. De prijs is afhankelijk van het type deur, glaskeuze en specifieke wensen zoals veiligheidssloten of designelementen."
  },
  {
    question: "Wat kost een kunststof schuifdeur per m²?",
    answer: "Kunststof schuifdeuren variëren van €270 tot €650 per m² inclusief BTW. De prijs wordt bepaald door het systeem, de afmetingen en de gekozen opties zoals inbraakwerend glas."
  },
  {
    question: "Wat zijn de kosten voor kozijnen in een gemiddeld appartement?",
    answer: "Voor een gemiddeld Nederlands appartement met 6 tot 8 kozijnen en 10 tot 18 m² glas bedragen de totale kosten inclusief montage circa €15.000 voor 6 kozijnen tot €20.000 voor 8 kozijnen."
  },
  {
    question: "Wat zijn de kosten voor kozijnen in een tussenwoning?",
    answer: "Voor een gemiddelde Nederlandse tussenwoning met 8 tot 10 kozijnen en 18 tot 22 m² glas bedragen de kosten inclusief montage tussen €20.000 en €25.000."
  },
  {
    question: "Wat zijn de kosten voor kozijnen in een hoekwoning?",
    answer: "Voor een gemiddelde hoekwoning met 10 tot 12 kozijnen en 20 tot 25 m² glas bedragen de totale kosten inclusief montage tussen €25.000 en €30.000."
  },
  {
    question: "Wat zijn de kosten voor kozijnen in een twee-onder-een-kapwoning?",
    answer: "Voor een gemiddelde twee-onder-een-kapwoning met 12 tot 15 kozijnen en 25 tot 30 m² glas bedragen de kosten inclusief montage tussen €30.000 en €37.500."
  },
  {
    question: "Wat zijn de kosten voor kozijnen in een vrijstaande woning?",
    answer: "Voor een gemiddelde vrijstaande eengezinswoning met 15 tot 20 kozijnen en 30 tot 40 m² glas bedragen de totale kosten inclusief montage tussen €37.500 en €50.000."
  },
  {
    question: "Welke garantie is er op de kozijnen?",
    answer: "Er is standaard 10 jaar fabrieksgarantie op alle kozijnen. Deze garantie dekt materiaal- en productiefouten en geeft jarenlang zekerheid over de investering."
  },
  {
    question: "Komen de kozijnen in aanmerking voor ISDE-subsidie?",
    answer: "Ja, de kunststof kozijnen komen in aanmerking voor de ISDE-subsidie in Nederland. Hiermee is er extra financiële ondersteuning mogelijk bij het verduurzamen van de woning."
  },
  {
    question: "Zijn de kozijnen voorzien van SKG-gecertificeerd hang- en sluitwerk?",
    answer: "Ja, de kozijnen zijn standaard voorzien van SKG-gecertificeerd hang- en sluitwerk (SKG** of SKG***). Dit biedt optimale beveiliging tegen inbraak en voldoet aan de hoogste veiligheidseisen."
  },
  {
    question: "Voldoen de kozijnen aan het Politie Keurmerk Veilig Wonen (PKVW)?",
    answer: "Ja, de kozijnen voldoen aan de eisen van het Politie Keurmerk Veilig Wonen (PKVW). Dit door de politie goedgekeurde keurmerk garandeert dat de woning optimaal beschermd is tegen inbraak."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-600">
              Vind snel antwoord op de meest gestelde vragen over onze kozijnen en diensten
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                    {faq.hasLink && (
                      <Link 
                        href="/financiering"
                        className="inline-block mt-3 text-orange-600 hover:text-orange-700 font-semibold hover:underline"
                      >
                        Meer informatie over financiering →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Staat uw vraag er niet bij?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

