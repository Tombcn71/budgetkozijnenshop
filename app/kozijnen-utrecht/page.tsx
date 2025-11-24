"use client"

import Link from "next/link"
import Script from "next/script"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIQuoteForm } from "@/components/ai-quote-form"
import { HowItWorks } from "@/components/how-it-works"
import { FAQUtrecht } from "@/components/faq-utrecht"
import { CheckCircle2, MapPin, Home, TrendingUp, Euro, Shield } from "lucide-react"

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-utrecht#business",
      "name": "Budget Kozijnenshop Utrecht",
      "image": "https://budgetkozijnenshop.nl/logo.png",
      "url": "https://budgetkozijnenshop.nl/kozijnen-utrecht",
      "telephone": "+31-30-000-0000",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Utrecht",
        "addressRegion": "Utrecht",
        "addressCountry": "NL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 52.0907,
        "longitude": 5.1214
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Utrecht",
          "sameAs": "https://nl.wikipedia.org/wiki/Utrecht_(stad)"
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
      "@id": "https://budgetkozijnenshop.nl/kozijnen-utrecht#service",
      "name": "Kozijnen plaatsen Utrecht",
      "provider": {
        "@id": "https://budgetkozijnenshop.nl/kozijnen-utrecht#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Utrecht"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Kozijnen Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Kunststof kozijnen Utrecht"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Houten kozijnen Utrecht"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Aluminium kozijnen Utrecht"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-utrecht#breadcrumb",
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
          "name": "Kozijnen Utrecht",
          "item": "https://budgetkozijnenshop.nl/kozijnen-utrecht"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-utrecht#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Leveren jullie kozijnen in heel Utrecht?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, wij leveren en plaatsen kozijnen in alle wijken van Utrecht: van de historische Binnenstad en Museumkwartier tot Leidsche Rijn en Vleuten-De Meern, van Lombok en Zuilen tot Overvecht en Hoograven. Ook in nieuwe wijken zoals Rijnvliet zijn wij actief."
          }
        },
        {
          "@type": "Question",
          "name": "Hoe lang is de levertijd voor kozijnen in Utrecht?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Van eerste afspraak tot montage duurt het gemiddeld 4-6 weken. Dit omvat het gratis adviesgesprek, inmeten, productie en professionele plaatsing in Utrecht en omliggende gemeenten."
          }
        },
        {
          "@type": "Question",
          "name": "Kan ik ISDE subsidie aanvragen voor kozijnen in Utrecht?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, onze kozijnen voldoen ruimschoots aan de ISDE-eisen. Voor HR++ glas ontvangt u €25 per m² en voor HR+++ triple glas zelfs €111 per m². Wij adviseren u graag over de mogelijkheden en helpen met de aanvraag."
          }
        },
        {
          "@type": "Question",
          "name": "Werken jullie ook in beschermde stadsgezichten in Utrecht?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, wij hebben ruime ervaring met monumentale panden in de Utrechtse binnenstad en beschermde stadsgezichten zoals de Wittevrouwenbuurt en het Museumkwartier. Wij zorgen voor kozijnen die voldoen aan welstandseisen en eventuele monumentenvergunningen."
          }
        },
        {
          "@type": "Question",
          "name": "Is financiering mogelijk voor nieuwe kozijnen in Utrecht?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, via de Energiebespaarlening van het Nationaal Warmtefonds kunt u uw kozijnen financieren tegen gunstige voorwaarden. Deze lening is specifiek bedoeld voor energiebesparende maatregelen zoals isolerende kozijnen."
          }
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-utrecht#waarom-vervangen",
      "headline": "Kozijnen Vervangen in Utrecht: Waardestijging en Energielabel-eisen",
      "description": "Alles over kozijnen vervangen in Utrecht: woningwaardestijging, energielabel-eisen en verhuurders.",
      "about": [
        {
          "@type": "Thing",
          "name": "Woningwaarde Utrecht"
        },
        {
          "@type": "Thing",
          "name": "Energielabel eisen 2030"
        },
        {
          "@type": "Thing",
          "name": "Verhuurders energielabel"
        }
      ],
      "mentions": [
        {
          "@type": "MonetaryAmount",
          "currency": "EUR",
          "minValue": "750",
          "maxValue": "1100",
          "description": "Gemiddelde jaarlijkse energiebesparing"
        },
        {
          "@type": "MonetaryAmount",
          "currency": "EUR",
          "minValue": "10000",
          "maxValue": "18000",
          "description": "Waardestijging woning"
        }
      ]
    }
  ]
}

const utrechtWijken = [
  // Binnenstad
  "Binnenstad", "Museumkwartier", "Wittevrouwenbuurt", "Lange Nieuwstraat", "Oudegracht", "Neude", 
  "Plompetorengracht", "Zadelstraat",
  
  // Oost
  "Abstede", "Lunetten", "Tolsteeg", "Hoograven-Noord", "Hoograven-Zuid", "Rijnsweerd",
  
  // Zuid
  "Rivierenwijk", "Oog in Al", "Transwijk", "Kanaleneiland-Noord", "Kanaleneiland-Zuid",
  
  // West
  "Lombok", "Leidsche Rijn Centrum", "Leidsche Rijn-Vleuten", "Vleuterweide", "Terwijde",
  "De Meern", "Vleuten", "Laagraven",
  
  // Noord
  "Zuilen", "Overvecht", "Tuindorp", "Wittevrouwen", "Ondiep", "Pijlsweerd",
  
  // Noordoost
  "Tuindorp-Oost", "Tuindorp-West", "Zuilen-Noord", "Zuilen-Zuid",
  
  // Noordwest
  "Noordwest", "Ondiep", "Pijlsweerd",
  
  // Zuidwest
  "Papendorp", "Lage Weide",
  
  // Nieuwbouw
  "Rijnvliet", "Merwestein", "Park Voorn", "Parkwijk", "Terwijde"
]

export default function KozijnenUtrechtPage() {
  return (
    <>
      <Script
        id="structured-data-utrecht"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />
        
        {/* Hero Utrecht */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-kozijnen.jpg"
              alt="Vakman installeert raamkozijnen Utrecht"
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
                  Kozijnen met laagste prijs garantie Utrecht.
                </h1>

                <p className="text-sm sm:text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u een goedkopere offerte? Wij gaan eronder zodat u altijd de laagste prijs betaald.
                </p>

                <p className="hidden sm:block text-base sm:text-lg md:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Krijg direct een prijsindicatie voor uw kozijnen in Utrecht. Van Binnenstad tot Leidsche Rijn. Laagste prijs garantie!
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
        
        {/* Waarom Kozijnen Vervangen in Utrecht */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Kozijnen Vervangen in Utrecht
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Waardestijging, energielabel-eisen en voorbereiding op 2030
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Waarom in Utrecht */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Home className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Waarom in Utrecht?</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Snelst stijgende woningprijzen: investering loont direct</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Energielabel C of hoger verplicht bij verkoop (vanaf 2030)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Veel studenten/huurwoningen: hogere eisen energielabel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Historisch centrum + moderne wijken: diverse oplossingen</span>
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
                      <span>Verhuur: energielabel verbeteren voor hogere huur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Verkoop: energielabel B of hoger = snellere verkoop</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Tocht en hoge stookkosten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Voorbereiding op 2030 energielabel-eis</span>
                    </li>
                  </ul>
                </div>

                {/* Besparing Utrecht */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Euro className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Besparing Utrecht</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>€750-€1.100/jaar energiebesparing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Huurinkomsten: +€50-€100/maand bij beter energielabel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Woningwaarde stijgt €10.000-€18.000</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Extra Voordelen */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Extra Voordelen in Utrecht</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="font-semibold">2030-proof</p>
                    <p className="text-sm text-gray-600">Voldoet aan toekomstige eisen</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Home className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold">Waardestijging</p>
                    <p className="text-sm text-gray-600">€10.000-€18.000</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Euro className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="font-semibold">Verhuurvoordeel</p>
                    <p className="text-sm text-gray-600">+€50-€100/maand</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold">Snellere verkoop</p>
                    <p className="text-sm text-gray-600">Label B of hoger</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* SEO Artikel Utrecht */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Kozijnen Vervangen in Utrecht: Waardestijging en Toekomstbestendigheid</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Utrecht groeit en floreert. De woningprijzen stijgen sneller dan in de meeste andere steden, en de vraag naar kwaliteitswoningen is enorm. Voor woningeigenaren in Utrecht betekent dit dat investeren in uw woning extra loont. Het vervangen van kozijnen is zo'n investering die direct zichtbaar is en bijdraagt aan zowel wooncomfort als woningwaarde.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Energielabel-eisen vanaf 2030</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Nederland bereidt zich voor op aangescherpte energielabel-eisen. Vanaf 2030 wordt minimaal energielabel C verplicht voor alle woningen die verkocht of verhuurd worden. Voor veel Utrechtse woningen betekent dit dat er stappen gezet moeten worden. Het vervangen van oude kozijnen is vaak één van de meest effectieve manieren om het energielabel te verbeteren.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Door nu al te investeren in nieuwe, goed isolerende kozijnen, bent u voorbereid op de toekomst. U voorkomt dat u vlak voor verkoop of verhuur onder tijdsdruk alsnog grote investeringen moet doen. Bovendien profiteert u direct van het verhoogde wooncomfort en de lagere energiekosten.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Utrecht als studentenstad en verhuurmarkt</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Utrecht kent een grote verhuurmarkt. Veel woningeigenaren verhuren kamers of complete woningen aan studenten, young professionals of gezinnen. Voor verhuurders is een goed energielabel steeds belangrijker. Huurders letten hier op, en terecht: een energiezuinige woning betekent lagere woonlasten.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Woningen met een goed energielabel worden sneller verhuurd en tegen een hogere huurprijs. Bovendien voldoet u als verhuurder aan de toekomstige wetgeving. Investeren in goede kozijnen is dus niet alleen goed voor uw huurders, maar ook voor uw eigen rendement.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Historisch centrum en moderne uitleggebieden</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Utrecht kent een rijke variatie aan bouwstijlen. Van middeleeuwse panden in de binnenstad tot nieuwbouwwijken zoals Leidsche Rijn. Elk type woning vraagt om een eigen aanpak als het gaat om kozijnvervanging.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                In het historische centrum zijn welstandseisen van toepassing. Kozijnen moeten passen bij het karakter van het pand en de omgeving. Gelukkig zijn er tegenwoordig uitstekende oplossingen die modern isoleren maar traditioneel ogen. In nieuwere wijken is er meer vrijheid, en ligt de focus vooral op optimale isolatie en duurzaamheid.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Financiële voordelen en return on investment</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Het vervangen van kozijnen is een investering met een aantrekkelijk rendement. Allereerst bespaart u direct op energiekosten. Oude kozijnen kunnen verantwoordelijk zijn voor tot 25% van het warmteverlies in een woning. Nieuwe, goed isolerende kozijnen verminderen dit drastisch.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Daarnaast stijgt de waarde van uw woning. In Utrecht, waar de vraag naar woningen hoog is, maken details het verschil. Een woning met een recent verbeterd energielabel, nieuwe kozijnen en laag energieverbruik is aantrekkelijk voor kopers. Dit vertaalt zich direct in een hogere verkoopprijs en snellere verkoop.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Subsidies en financiering</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Ook in Utrecht zijn verschillende subsidiemogelijkheden beschikbaar. De landelijke ISDE-subsidie biedt een bijdrage per vierkante meter glas. Afhankelijk van het type beglazing (HR++ of HR+++) varieert de hoogte van de subsidie. Deze regeling is bedoeld om energiebesparende maatregelen toegankelijker te maken.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Daarnaast is er de Energiebespaarlening van het Nationaal Warmtefonds. Deze lening biedt aantrekkelijke voorwaarden en is speciaal bedoeld voor verduurzaming. U kunt hiermee uw kozijnvervanging financieren zonder grote eenmalige uitgave, terwijl u wel direct profiteert van de voordelen.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Praktische tips voor Utrechtse woningeigenaren</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Als u overweegt om uw kozijnen te vervangen, begin dan met een goede inventarisatie. Welke kozijnen zijn het meest urgent? Waar treedt de meeste tocht of condensvorming op? Dit helpt bij het stellen van prioriteiten.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Vraag meerdere offertes aan en vergelijk niet alleen op prijs. Kijk naar de kwaliteit van de materialen, de U-waarde (isolatiewaarde), de garantievoorwaarden en de ervaring van het bedrijf. Een professionele partij denkt met u mee en adviseert eerlijk over de beste oplossing voor uw situatie.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Tot slot: zorg dat alle papierwerk op orde is. Voor sommige panden of locaties kan een vergunning nodig zijn. Informeer hiernaar bij de gemeente of laat dit uitzoeken door het kozijnenbedrijf. Zo voorkomt u verrassingen tijdens of na de plaatsing.
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
                  Kozijnen Utrecht
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Wij leveren en plaatsen hoogwaardige kozijnen in alle wijken en stadsdelen van Utrecht. 
                  Van historische grachtenpanden tot moderne nieuwbouwwijken.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 lg:p-10 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {utrechtWijken.map((wijk, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm font-medium">{wijk}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-purple-200">
                  <h3 className="font-bold text-lg mb-4 text-center">Speciale aandacht voor:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-purple-600 mb-1">Monumentale Panden</p>
                      <p className="text-sm text-gray-600">Binnenstad, Wittevrouwenbuurt, Museumkwartier</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-blue-600 mb-1">Nieuwbouw Projecten</p>
                      <p className="text-sm text-gray-600">Leidsche Rijn, Rijnvliet, Terwijde</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-green-600 mb-1">Renovatie & Verduurzaming</p>
                      <p className="text-sm text-gray-600">Alle wijken in Utrecht</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FAQUtrecht />

        {/* Google Maps Sectie */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Actief in Utrecht
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
                  Wij kennen Utrecht als onze broekzak en werken in het hele gebied. Lokale kennis gecombineerd met professionele service.
                </p>
                <p className="text-lg text-gray-500">
                  📍 Werkgebied: Utrecht • Postcodes: 3400-3584
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155358.05892841856!2d5.08754!3d52.09073935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66f5350189c89%3A0x47d895c2c2c5e42!2sUtrecht!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Werkgebied Utrecht"
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
