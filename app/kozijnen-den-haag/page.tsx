"use client"

import Link from "next/link"
import Script from "next/script"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIQuoteForm } from "@/components/ai-quote-form"
import { HowItWorks } from "@/components/how-it-works"
import { FAQDenHaag } from "@/components/faq-den-haag"
import { CheckCircle2, MapPin, Home, TrendingUp, Euro, Shield } from "lucide-react"

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-den-haag#business",
      "name": "Budget Kozijnenshop Den Haag",
      "image": "https://budgetkozijnenshop.nl/logo.png",
      "url": "https://budgetkozijnenshop.nl/kozijnen-den-haag",
      "telephone": "+31-70-000-0000",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Den Haag",
        "addressRegion": "Zuid-Holland",
        "addressCountry": "NL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 52.0705,
        "longitude": 4.3007
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Den Haag",
          "sameAs": "https://nl.wikipedia.org/wiki/Den_Haag"
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
      "@id": "https://budgetkozijnenshop.nl/kozijnen-den-haag#service",
      "name": "Kozijnen plaatsen Den Haag",
      "provider": {
        "@id": "https://budgetkozijnenshop.nl/kozijnen-den-haag#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Den Haag"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Kozijnen Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Kunststof kozijnen Den Haag"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Houten kozijnen Den Haag"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Aluminium kozijnen Den Haag"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-den-haag#breadcrumb",
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
          "name": "Kozijnen Den Haag",
          "item": "https://budgetkozijnenshop.nl/kozijnen-den-haag"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-den-haag#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Leveren jullie kozijnen in heel Den Haag?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, wij leveren en plaatsen kozijnen in alle wijken van Den Haag: van het Centrum en Archipel tot Scheveningen en Kijkduin, van Loosduinen en Segbroek tot Leidschenveen en Ypenburg. Ook in de duinwijken zoals Marlot en Statenkwartier zijn wij actief."
          }
        },
        {
          "@type": "Question",
          "name": "Wat is de levertijd voor kozijnen in Den Haag?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Van eerste afspraak tot montage duurt het gemiddeld 4-6 weken. Dit omvat het gratis adviesgesprek, inmeten, productie en professionele plaatsing in Den Haag en omstreken."
          }
        },
        {
          "@type": "Question",
          "name": "Kan ik ISDE subsidie krijgen voor kozijnen in Den Haag?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, onze kozijnen komen in aanmerking voor ISDE subsidie. Voor HR++ glas ontvangt u €25 per m² en voor HR+++ triple glas zelfs €111 per m². Wij adviseren u graag over de mogelijkheden en helpen met de aanvraag."
          }
        },
        {
          "@type": "Question",
          "name": "Werken jullie ook in monumentale panden en beschermde stadsgezichten in Den Haag?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, wij hebben ruime ervaring met monumentale panden in wijken zoals het Statenkwartier, Archipel en Benoordenhout. Wij zorgen voor kozijnen die voldoen aan welstandseisen en eventuele monumentenvergunningen die in Den Haag gelden."
          }
        },
        {
          "@type": "Question",
          "name": "Bieden jullie financiering voor kozijnen in Den Haag?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, via de Energiebespaarlening van het Nationaal Warmtefonds kunt u uw kozijnen financieren. Deze lening biedt aantrekkelijke voorwaarden voor energiebesparende maatregelen zoals isolerende kozijnen."
          }
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-den-haag#waarom-vervangen",
      "headline": "Kozijnen Vervangen in Den Haag: Kustklimaat en Geluidsisolatie",
      "description": "Alles over kozijnen vervangen in Den Haag: kustklimaat, monumentale panden en geluidsisolatie.",
      "about": [
        {
          "@type": "Thing",
          "name": "Kustklimaat Den Haag kozijnen"
        },
        {
          "@type": "Thing",
          "name": "Scheveningen kozijnen"
        },
        {
          "@type": "Thing",
          "name": "Geluidsisolatie Den Haag"
        }
      ],
      "mentions": [
        {
          "@type": "MonetaryAmount",
          "currency": "EUR",
          "minValue": "700",
          "maxValue": "1100",
          "description": "Gemiddelde jaarlijkse energiebesparing"
        }
      ]
    }
  ]
}

const denhaagWijken = [
  // Centrum
  "Centrum", "Archipel", "Grote Marktstraat", "Hofkwartier", "Kortenbos", "Rivierenbuurt-Centrum",
  "Transvaalkwartier", "Voorhout",
  
  // Escamp
  "Bouwlust", "Vrederust", "Morgenstond", "Leyenburg", "Zuiderpark", "Moerwijk", "Rustenburg en Oostbroek",
  
  // Haagse Hout
  "Benoordenhout", "Bezuidenhout", "Mariahoeve", "Marlot", "Haagse Bos",
  
  // Laak
  "Laak", "Spoorwijk", "Binckhorst", "Forepark", "Houtwijk",
  
  // Leidschenveen-Ypenburg
  "Leidschenveen", "Ypenburg", "Forepark",
  
  // Loosduinen
  "Loosduinen", "Bohemen", "Bomen- en Bloemenbuurt", "Kraayenstein", "Waldeck", "Vroondaal",
  
  // Scheveningen
  "Scheveningen", "Scheveningen Haven", "Scheveningen Bad", "Duindorp", "Westbroekpark",
  
  // Segbroek
  "Segbroek", "Regentessekwartier", "Valkenboskwartier", "Vroondaal", "Morgenstond",
  
  // Statenkwartier
  "Statenkwartier", "Belgisch Park", "Zorgvliet", "Van Stolkpark",
  
  // Zuid-West (Zuidwest)
  "Wateringseveld", "Oostbroek", "Rustenburg", "Bouwlust",
  
  // Kijkduin
  "Kijkduin", "Ockenburgh",
  
  // Nieuwbouw
  "Binckhorst", "Ypenburg-Centrum", "Wateringse Veld"
]

export default function KozijnenDenHaagPage() {
  return (
    <>
      <Script
        id="structured-data-denhaag"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />
        
        {/* Hero Den Haag */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-kozijnen.jpg"
              alt="Vakman installeert raamkozijnen Den Haag"
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
                  Kozijnen met laagste prijs garantie Den Haag.
                </h1>

                <p className="text-sm sm:text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u een goedkopere offerte? Wij gaan eronder zodat u altijd de laagste prijs betaald.
                </p>

                <p className="hidden sm:block text-base sm:text-lg md:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Krijg direct een prijsindicatie voor uw kozijnen in Den Haag. Van Centrum tot Scheveningen. Laagste prijs garantie!
                </p>

                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                  <p className="text-md sm:text-lg font-semibold text-white">
                    🏆 Laagste Prijs Garantie Kozijnen Den Haag
                  </p>
                </div>

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
        
        {/* Waarom Kozijnen Vervangen in Den Haag */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Kozijnen Vervangen in Den Haag
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Kustklimaat, monumentale panden en geluidsisolatie
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Waarom in Den Haag */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Home className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Waarom in Den Haag?</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Kustklimaat: zout, wind en regen versnellen slijtage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Scheveningen: extra onderhoud nodig door zeelucht</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Geluidsisolatie: stad én kustweer</span>
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
                      <span>Roest en corrosie (vooral bij kust)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Zoutkristallen op glas en kozijnen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Houtrot en vochtproblemen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Slecht sluitende ramen door wind</span>
                    </li>
                  </ul>
                </div>

                {/* Besparing Den Haag */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Euro className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Besparing Den Haag</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>€700-€1.100/jaar energiebesparing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>30-40% minder warmteverlies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>25-35% minder geluidsoverlast</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Minder onderhoudskosten aan de kust</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Extra Voordelen */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Extra Voordelen in Den Haag</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold">Kustbestendig</p>
                    <p className="text-sm text-gray-600">Bestand tegen zout & wind</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Home className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold">Monumentaal</p>
                    <p className="text-sm text-gray-600">Ook voor beschermde panden</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Euro className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="font-semibold">ISDE Subsidie</p>
                    <p className="text-sm text-gray-600">Tot €111 per m²</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="font-semibold">Geluidsisolatie</p>
                    <p className="text-sm text-gray-600">25-35% minder geluid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* SEO Artikel Den Haag */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Kozijnen Vervangen in Den Haag: Kustklimaat en Geluidsisolatie</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Den Haag combineert stads- en kustleven op unieke wijze. Van de historische hofstad met monumentale panden tot het bruisende Scheveningen aan zee - de Haagse woningvoorraad is divers en vraagt om specifieke oplossingen. Het vervangen van kozijnen in Den Haag vereist kennis van het lokale klimaat en de architectuur.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">De uitdaging van het kustklimaat</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                De nabijheid van de Noordzee heeft grote invloed op woningen in Den Haag. Vooral in wijken zoals Scheveningen, Duindorp en Kijkduin is de invloed van zeelucht dagelijks merkbaar. Zout, vocht en wind zorgen voor versnelde slijtage van kozijnen. Houten kozijnen kunnen gaan rotten, metalen onderdelen roesten en verflagen bladderen sneller af.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Moderne kozijnen zijn speciaal ontwikkeld om bestand te zijn tegen deze omstandigheden. Kunststof kozijnen met UV-bestendige coatings, aluminium kozijnen met zee-watervaste behandeling en roestvrij beslag zorgen ervoor dat uw kozijnen decennialang meegaan, ook in het zware kustklimaat.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Monumentale panden en welstandseisen</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Den Haag kent vele monumentale panden en beschermde stadsgezichten. In wijken zoals het Statenkwartier, Archipelbuurt en het Centrum zijn strikte welstandseisen van toepassing. Dit betekent dat nieuwe kozijnen moeten passen bij het karakter van het pand en de omgeving.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Gelukkig zijn er uitstekende oplossingen die modern isoleren maar traditioneel ogen. Smalle kozijnprofielen, authentieke kleuren en klassieke raamindelingen zorgen ervoor dat het monumentale karakter behouden blijft, terwijl u wel profiteert van moderne isolatie en onderhoudsgemak.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Geluidsisolatie in de stad</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Als residentie en internationalestad is Den Haag levendig en dynamisch. Veel Hagenaars wonen aan drukke straten of in de buurt van uitgaansgebieden. Geluidsoverlast kan het woongenot flink beïnvloeden. Moderne kozijnen met hoogwaardige beglazing bieden uitstekende akoestische isolatie.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Door te investeren in kozijnen met speciale geluidswerend glas, kunt u de geluidsoverlast aanzienlijk verminderen. Dit draagt bij aan rust, concentratie en slaapkwaliteit. Vooral in de binnenstad en in wijken nabij hoofdwegen merken bewoners direct het verschil.
              </p>

<h3 className="text-2xl font-bold mt-8 mb-4">Energiebesparing en duurzaamheid</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Den Haag zet sterk in op duurzaamheid en klimaatadaptatie. De gemeente stimuleert woningeigenaren om te verduurzamen via verschillende regelingen en voorlichtingscampagnes. Het vervangen van oude kozijnen past perfect in deze aanpak.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Door te kiezen voor moderne kozijnen met HR++ of HR+++ beglazing, vermindert u het energieverbruik van uw woning aanzienlijk. Dit leidt tot lagere energiekosten en een beter energielabel. Bovendien draagt u bij aan de duurzaamheidsdoelen van de stad en verhoogt u de waarde van uw woning.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Subsidies en ondersteuning</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Haagse woningeigenaren kunnen gebruikmaken van de landelijke ISDE-subsidie voor energiebesparende maatregelen. Deze subsidie biedt een financiële bijdrage per vierkante meter glas, afhankelijk van het type beglazing. Daarnaast zijn er vaak lokale initiatieven en voorlichtingsbijeenkomsten.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Ook de Energiebespaarlening van het Nationaal Warmtefonds is beschikbaar. Deze lening maakt het mogelijk om de investering te spreiden, terwijl u direct profiteert van lagere energiekosten en meer wooncomfort.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Praktisch advies voor Haagse woningeigenaren</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Bij het vervangen van kozijnen in Den Haag is het verstandig om te kiezen voor materialen die bestand zijn tegen het kustklimaat. Informeer naar de garantievoorwaarden, vooral met betrekking tot weer- en zoutbestendigheid. Een professioneel bedrijf met ervaring in de regio kan u hierover goed adviseren.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Let ook op de U-waarde van de kozijnen: hoe lager, hoe beter de isolatie. Voor geluidsoverlast is de Rw-waarde belangrijk: deze geeft aan hoeveel geluid wordt tegengehouden. Bespreek uw specifieke wensen en situatie met de adviseur.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Tot slot: plan de werkzaamheden zorgvuldig. In beschermde gebieden kan een vergunning nodig zijn. Informeer hierover bij de gemeente of laat dit regelen door het kozijnenbedrijf. Zo verloopt het proces soepel en zonder verrassingen.
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
                  Kozijnen Den Haag
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Wij leveren en plaatsen hoogwaardige kozijnen in alle wijken en stadsdelen van Den Haag. 
                  Van karakteristieke panden in het Statenkwartier tot moderne appartementen aan de kust.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 lg:p-10 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {denhaagWijken.map((wijk, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm font-medium">{wijk}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-green-200">
                  <h3 className="font-bold text-lg mb-4 text-center">Speciale aandacht voor:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-green-600 mb-1">Monumentale Panden</p>
                      <p className="text-sm text-gray-600">Statenkwartier, Archipel, Benoordenhout</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-blue-600 mb-1">Kustgebied</p>
                      <p className="text-sm text-gray-600">Scheveningen, Kijkduin, Duindorp</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-purple-600 mb-1">Nieuwbouw</p>
                      <p className="text-sm text-gray-600">Ypenburg, Leidschenveen, Binckhorst</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FAQDenHaag />

        {/* Google Maps Sectie */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Actief in Den Haag
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
                  Wij kennen Den Haag als onze broekzak en werken in het hele gebied. Lokale kennis gecombineerd met professionele service.
                </p>
                <p className="text-lg text-gray-500">
                  📍 Werkgebied: Den Haag • Postcodes: 2490-2599
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156478.28826571607!2d4.23997785!3d52.07050465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b72f78f9f635%3A0xd7d2c3c8c8c8c8c8!2sDen%20Haag!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Werkgebied Den Haag"
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
