"use client"

import Link from "next/link"
import Script from "next/script"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIQuoteForm } from "@/components/ai-quote-form"
import { HowItWorks } from "@/components/how-it-works"
import { FAQRotterdam } from "@/components/faq-rotterdam"
import { CheckCircle2, MapPin, Home, TrendingUp, Euro, Shield } from "lucide-react"

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-rotterdam#business",
      "name": "Budget Kozijnenshop Rotterdam",
      "image": "https://budgetkozijnenshop.nl/logo.png",
      "url": "https://budgetkozijnenshop.nl/kozijnen-rotterdam",
      "telephone": "+31-10-000-0000",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rotterdam",
        "addressRegion": "Zuid-Holland",
        "addressCountry": "NL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.9225,
        "longitude": 4.47917
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Rotterdam",
          "sameAs": "https://nl.wikipedia.org/wiki/Rotterdam"
        }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-rotterdam#service",
      "name": "Kozijnen plaatsen Rotterdam",
      "provider": {
        "@id": "https://budgetkozijnenshop.nl/kozijnen-rotterdam#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Rotterdam"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Kozijnen Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Kunststof kozijnen Rotterdam"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Houten kozijnen Rotterdam"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Aluminium kozijnen Rotterdam"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-rotterdam#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://budgetkozijnenshop.nl"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Kozijnen Rotterdam",
          "item": "https://budgetkozijnenshop.nl/kozijnen-rotterdam"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-rotterdam#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Leveren jullie kozijnen in heel Rotterdam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, wij leveren en plaatsen kozijnen in alle wijken van Rotterdam: van het Centrum en Delfshaven tot Feijenoord en Charlois, van Noord tot Hoogvliet, en van Kralingen tot Prins Alexander. Ook in nieuwbouwgebieden zoals de Kop van Zuid zijn wij actief."
          }
        },
        {
          "@type": "Question",
          "name": "Wat is de levertijd voor kozijnen in Rotterdam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Van eerste afspraak tot montage duurt het gemiddeld 4-6 weken. Dit omvat het gratis adviesgesprek, inmeten, productie en professionele plaatsing in Rotterdam en omstreken."
          }
        },
        {
          "@type": "Question",
          "name": "Komen jullie kozijnen in aanmerking voor ISDE subsidie in Rotterdam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, onze kozijnen voldoen aan alle eisen voor ISDE subsidie. Voor HR++ glas ontvangt u €25 per m² en voor HR+++ triple glas zelfs €111 per m². Wij adviseren u graag over de mogelijkheden."
          }
        },
        {
          "@type": "Question",
          "name": "Werken jullie ook in oudere Rotterdamse wijken en monumentale panden?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, wij hebben ervaring met karakteristieke Rotterdamse panden in wijken zoals Delfshaven, Blijdorp en Kralingen. Van vooroorlogse woningen tot beschermde stadsgezichten, wij zorgen voor passende kozijnen die voldoen aan welstandseisen."
          }
        },
        {
          "@type": "Question",
          "name": "Is financiering mogelijk voor kozijnen in Rotterdam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, via de Energiebespaarlening van het Nationaal Warmtefonds kunt u uw kozijnen financieren. Deze lening biedt aantrekkelijke voorwaarden specifiek voor energiebesparende maatregelen zoals nieuwe kozijnen."
          }
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-rotterdam#waarom-vervangen",
      "headline": "Kozijnen Vervangen in Rotterdam: Kustklimaat, Besparing en Duurzaamheid",
      "description": "Alles over kozijnen vervangen in Rotterdam: energiebesparing en duurzaamheid.",
      "about": [
        {
          "@type": "Thing",
          "name": "Kustklimaat Rotterdam kozijnen"
        },
        {
          "@type": "Thing",
          "name": "Energiebesparing Rotterdam"
        },
        {
          "@type": "Thing",
          "name": "Duurzaamheid Rotterdam"
        }
      ],
      "mentions": [
        {
          "@type": "MonetaryAmount",
          "currency": "EUR",
          "minValue": "700",
          "maxValue": "1000",
          "description": "Gemiddelde jaarlijkse energiebesparing"
        },
        {
          "@type": "MonetaryAmount",
          "currency": "EUR",
          "minValue": "12000",
          "maxValue": "20000",
          "description": "Waardestijging woning"
        }
      ]
    }
  ]
}

const rotterdamWijken = [
  // Centrum
  "Stadsdriehoek", "Oude Westen", "Cool", "CS-kwartier", "Nieuwe Werk", "Dijkzigt",
  
  // Delfshaven
  "Bospolder", "Tussendijken", "Nieuwe Westen", "Middelland", "Oud-Mathenesse", "Spangen", "Schiemond",
  
  // Noord
  "Agniesebuurt", "Bergpolder", "Blijdorp", "Liskwartier", "Provenierswijk", "'s-Gravenland", "Oude Noorden",
  
  // Overschie
  "Overschie", "Kleinpolder", "Landzicht", "Schieveen", "Zestienhoven",
  
  // Kralingen-Crooswijk
  "Kralingen-West", "Kralingen-Oost", "Oudijk", "De Esch", "Rubroek", "Crooswijk",
  
  // Feijenoord
  "Feijenoord", "Kop van Zuid", "Noordereiland", "Bloemhof", "Hillesluis", "Afrikaanderwijk", "Vreewijk",
  
  // Prins Alexander
  "Prins Alexander", "Oosterflank", "Ommoord", "Het Lage Land", "Nesselande", "Zevenkamp",
  
  // Charlois
  "Carnisse", "Charlois Zuidrand", "Heijplaat", "Oud-Charlois", "Pendrecht", "Tarwewijk", "Wielewaal", "Zuidplein", "Zuidwijk",
  
  // Hoogvliet
  "Hoogvliet-Noord", "Hoogvliet-Zuid", "Meeuwenplaat", "Oude Westen Hoogvliet",
  
  // Pernis
  "Pernis",
  
  // Hoek van Holland
  "Hoek van Holland",
  
  // Nieuwbouw
  "Lloydkwartier", "Kop van Zuid-Entrepot", "Merwe-Vierhavens", "M4H"
]

export default function KozijnenRotterdamPage() {
  return (
    <>
      <Script
        id="structured-data-rotterdam"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />
        
        {/* Hero Rotterdam */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/5691531/pexels-photo-5691531.jpeg"
              alt="Vakman installeert raamkozijnen Rotterdam"
              fill
              priority
              fetchPriority="high"
              quality={85}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-transparent" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
                  Kozijnen met laagste prijs garantie Rotterdam.
                </h1>

                <p className="text-sm sm:text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u een goedkopere offerte? Wij gaan eronder zodat u altijd de laagste prijs betaald.
                </p>

                <p className="hidden sm:block text-base sm:text-lg md:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Krijg direct een prijsindicatie voor uw kozijnen in Rotterdam. Van Centrum tot Hoogvliet. Laagste prijs garantie!
                </p>

                <div className="hidden sm:flex flex-wrap gap-3 md:gap-4 text-sm md:text-base text-white">
                  <span>Kunststof</span>
                  <span>|</span>
                  <span>Hout</span>
                  <span>|</span>
                  <span>Aluminium</span>
                </div>
              </div>

              <div className="w-full">
                <AIQuoteForm />
              </div>
            </div>
          </div>
        </section>
        
        <HowItWorks />
        
        {/* Waarom Kozijnen Vervangen in Rotterdam */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Kozijnen Vervangen in Rotterdam
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Kustklimaat, duurzaamheid en energiebesparing in Rotterdam
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Waarom in Rotterdam */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Home className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Waarom in Rotterdam?</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Kustklimaat: extra slijtage door wind, regen en zout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Duurzaamste stad van Nederland: ISDE subsidie tot €111/m²</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Energielabel verbetering verhoogt woningwaarde €12.000-€20.000</span>
                    </li>
                  </ul>
                </div>

                {/* Wanneer vervangen */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Wanneer vervangen?</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Roestvorming op scharnieren en beslag (kustklimaat)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Condens tussen dubbele beglazing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Verfbladderen en houtrot aan buitenkant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Slecht sluitende ramen</span>
                    </li>
                  </ul>
                </div>

                {/* Besparing Rotterdam */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Euro className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Besparing Rotterdam</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Gemiddeld €700-€1.000/jaar lagere energiekosten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>30-50% minder warmteverlies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Minder onderhoudskosten (geen schilderen bij kunststof)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Extra Voordelen */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Extra Voordelen in Rotterdam</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <p className="font-semibold">Kustbestendig</p>
                    <p className="text-sm text-gray-600">Bestand tegen zout & wind</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Home className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold">Waardestijging</p>
                    <p className="text-sm text-gray-600">€12.000-€20.000</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Euro className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="font-semibold">ISDE Subsidie</p>
                    <p className="text-sm text-gray-600">Tot €111 per m²</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold">Duurzaamheid</p>
                    <p className="text-sm text-gray-600">Duurzaamste stad NL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* SEO Artikel Rotterdam */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Kozijnen Vervangen in Rotterdam: Kustklimaat en Duurzaamheid</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Rotterdam is een stad in beweging. Van het karakteristieke Delfshaven tot de moderne architectuur van de Kop van Zuid - Rotterdam combineert geschiedenis met innovatie.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">De invloed van het kustklimaat</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                De ligging aan de kust en in de monding van de Maas zorgt ervoor dat Rotterdam een zeeëlimaat kent. Dit betekent meer wind, regen en zout in de lucht. Deze factoren versnellen de slijtage van kozijnen aanzienlijk. Houten kozijnen kunnen sneller gaan rotten, metalen onderdelen roesten en verflagen bladderen af.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Moderne kunststof en aluminium kozijnen zijn hier veel beter tegen bestand. Ze hebben speciale coatings die UV-bestendig en zoutbestendig zijn. De scharnieren en sluitingen zijn uitgevoerd in roestvrij staal, en de kitvoegen zijn flexibel zodat ze niet scheuren door temperatuurwisselingen. Dit maakt ze bijzonder geschikt voor het Rotterdamse klimaat.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Rotterdam als duurzaamste stad van Nederland</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Rotterdam heeft de ambitie om in 2050 klimaatneutraal te zijn. De gemeente stimuleert daarom actief verduurzaming van woningen. Dit zie je terug in subsidies, voorlichtingscampagnes en laagdrempelige financieringsmogelijkheden. Voor woningeigenaren betekent dit dat het vervangen van kozijnen door moderne, isolerende exemplaren niet alleen goed is voor het milieu, maar ook financieel aantrekkelijk.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                De ISDE-subsidie is in Rotterdam ruim beschikbaar en wordt actief gepromoot. Daarnaast zijn er vaak lokale initiatieven waarbij wijken gezamenlijk verduurzamen, wat kan leiden tot extra voordelen en kortingen.
              </p>

<h3 className="text-2xl font-bold mt-8 mb-4">Isolatie en geluidswering in de stad</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Rotterdam is een levendige havenstad met veel verkeersbewegingen. Of u nu woont in het centrum, nabij de haven, of in een buitenwijk langs een drukke weg - geluidsisolatie is voor veel Rotterdammers een belangrijk onderwerp. Moderne kozijnen met HR++ of HR+++ beglazing bieden naast thermische isolatie ook uitstekende akoestische isolatie.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Het verschil is direct merkbaar: minder verkeersgeluid, een rustiger slaapklimaat en meer comfort overdag. Dit draagt bij aan de leefbaarheid en gezondheid van bewoners.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Financiële voordelen en waardestijging</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Het vervangen van kozijnen is een investering die zichzelf terugbetaalt. Allereerst door lagere energiekosten. Oude, slecht isolerende kozijnen kunnen verantwoordelijk zijn voor een aanzienlijk deel van het warmteverlies in een woning. Door te investeren in moderne kozijnen, bespaart u direct op uw stookkosten.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Daarnaast stijgt de waarde van uw woning. Een goed energielabel maakt een woning aantrekkelijker voor kopers. In Rotterdam, waar de woningmarkt de afgelopen jaren flink is aangetrokken, kan dit verschil substantieel zijn. Ook voor verhuurders is een beter energielabel belangrijk, omdat huurders bereid zijn meer te betalen voor een energiezuinige woning.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Praktische overwegingen</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Bij het kiezen van nieuwe kozijnen is het belangrijk om te letten op kwaliteit en garantie. Goede kozijnen gaan 30-40 jaar mee, mits goed geïnstalleerd en onderhouden. Kies daarom voor een erkend bedrijf dat werkt met gecertificeerde materialen en monteurs.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Let ook op de U-waarde van de kozijnen: hoe lager, hoe beter de isolatie. Voor het Rotterdamse klimaat adviseren we minimaal HR++ beglazing, maar HR+++ is nog beter en komt in aanmerking voor hogere subsidies.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Tot slot: plan de werkzaamheden op een moment dat u het schikt. De plaatsing zelf duurt meestal enkele dagen, en het is prettig als u of iemand anders thuis kan zijn tijdens de montage. Professionele bedrijven werken netjes en zorgen ervoor dat uw woning direct weer goed afgesloten is.
              </p>
            </div>
          </div>
        </section>
        
        {/* SEO Wijken Sectie */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                  Kozijnen Rotterdam
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Wij leveren en plaatsen hoogwaardige kozijnen in alle wijken en stadsdelen van Rotterdam. 
                  Van karakteristieke vooroorlogse panden tot moderne havenkwartieren.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 lg:p-10 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {rotterdamWijken.map((wijk, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm font-medium">{wijk}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-red-200">
                  <h3 className="font-bold text-lg mb-4 text-center">Speciale aandacht voor:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-red-600 mb-1">Karakteristieke Panden</p>
                      <p className="text-sm text-gray-600">Delfshaven, Blijdorp, Kralingen</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-blue-600 mb-1">Nieuwbouw Projecten</p>
                      <p className="text-sm text-gray-600">Kop van Zuid, M4H, Nesselande</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-green-600 mb-1">Renovatie & Isolatie</p>
                      <p className="text-sm text-gray-600">Alle wijken in Rotterdam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FAQRotterdam />

        {/* Google Maps Sectie */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Actief in Rotterdam
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
                  Wij kennen Rotterdam als onze broekzak en werken in het hele gebied. Lokale kennis gecombineerd met professionele service.
                </p>
                <p className="text-lg text-gray-500">
                  📍 Werkgebied: Rotterdam • Postcodes: 3000-3099
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156393.82951086894!2d4.394842!3d51.924419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b7605f54c47d%3A0x5c3a8a8c6fab6c5!2sRotterdam!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Werkgebied Rotterdam"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
