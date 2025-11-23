"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const faqsUtrecht = [
  {
    question: "Waarom bieden jullie de beste prijzen voor kozijnen in Utrecht?",
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
    question: "Wat is de levertijd van kozijnen in Utrecht? Van afspraak tot montage?",
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
    question: "Wat zijn de kosten voor kozijnen in een gemiddeld appartement in Utrecht?",
    answer: "Voor een gemiddeld appartement met 6 tot 8 kozijnen en 10 tot 18 m² glas bedragen de totale kosten inclusief montage circa €15.000 voor 6 kozijnen tot €20.000 voor 8 kozijnen."
  },
  {
    question: "Wat zijn de kosten voor kozijnen in een tussenwoning in Utrecht?",
    answer: "Voor een gemiddelde tussenwoning met 8 tot 10 kozijnen en 18 tot 22 m² glas bedragen de kosten inclusief montage tussen €20.000 en €25.000."
  },
  {
    question: "Wat zijn de kosten voor kozijnen in een hoekwoning in Utrecht?",
    answer: "Voor een gemiddelde hoekwoning met 10 tot 12 kozijnen en 20 tot 25 m² glas bedragen de totale kosten inclusief montage tussen €25.000 en €30.000."
  },
  {
    question: "Wat zijn de kosten voor kozijnen in een twee-onder-een-kapwoning in Utrecht?",
    answer: "Voor een gemiddelde twee-onder-een-kapwoning met 12 tot 15 kozijnen en 25 tot 30 m² glas bedragen de kosten inclusief montage tussen €30.000 en €37.500."
  },
  {
    question: "Wat zijn de kosten voor kozijnen in een vrijstaande woning in Utrecht?",
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

export function FAQUtrecht() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Veelgestelde Vragen over Kozijnen in Utrecht
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat u moet weten over het vervangen van kozijnen in Utrecht
            </p>
          </div>

          <div className="space-y-4">
            {faqsUtrecht.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
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
