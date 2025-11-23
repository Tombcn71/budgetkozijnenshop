"use client"

import Link from "next/link"
import Script from "next/script"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIQuoteForm } from "@/components/ai-quote-form"
import { HowItWorks } from "@/components/how-it-works"
import { FAQAmsterdam } from "@/components/faq-amsterdam"
import { CheckCircle2, MapPin, Home, TrendingUp, Euro, Shield } from "lucide-react"

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-amsterdam#business",
      "name": "Budget Kozijnenshop Amsterdam",
      "image": "https://budgetkozijnenshop.nl/logo.png",
      "url": "https://budgetkozijnenshop.nl/kozijnen-amsterdam",
      "telephone": "+31-20-000-0000",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Amsterdam",
        "addressRegion": "Noord-Holland",
        "addressCountry": "NL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 52.3676,
        "longitude": 4.9041
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Amsterdam",
          "sameAs": "https://nl.wikipedia.org/wiki/Amsterdam"
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
      "@id": "https://budgetkozijnenshop.nl/kozijnen-amsterdam#service",
      "name": "Kozijnen plaatsen Amsterdam",
      "provider": {
        "@id": "https://budgetkozijnenshop.nl/kozijnen-amsterdam#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Amsterdam"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Kozijnen Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Kunststof kozijnen Amsterdam"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Houten kozijnen Amsterdam"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Aluminium kozijnen Amsterdam"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-amsterdam#breadcrumb",
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
          "name": "Kozijnen Amsterdam",
          "item": "https://budgetkozijnenshop.nl/kozijnen-amsterdam"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-amsterdam#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Leveren jullie kozijnen in heel Amsterdam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, wij leveren en plaatsen kozijnen in alle wijken van Amsterdam: van het Centrum en de Jordaan tot Amsterdam Noord, van De Pijp en Oud-Zuid tot IJburg en Oost. Ook in nieuwbouwwijken zoals Haven-Stad en Amstelkwartier zijn wij actief."
          }
        },
        {
          "@type": "Question",
          "name": "Hoe lang duurt de levertijd voor kozijnen in Amsterdam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Van eerste afspraak tot montage duurt het gemiddeld 4-6 weken. Dit omvat het gratis adviesgesprek, inmeten, productie en professionele plaatsing in Amsterdam."
          }
        },
        {
          "@type": "Question",
          "name": "Kan ik ISDE subsidie krijgen voor nieuwe kozijnen in Amsterdam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, onze kozijnen komen in aanmerking voor ISDE subsidie. Voor HR++ glas ontvangt u €25 per m² en voor HR+++ triple glas zelfs €111 per m². Wij helpen u graag met de aanvraag."
          }
        },
        {
          "@type": "Question",
          "name": "Werken jullie ook in beschermde stadsgezichten in Amsterdam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, wij hebben ruime ervaring met monumentale panden en beschermde stadsgezichten in wijken zoals de Grachtengordel, Jordaan en De Pijp. Wij zorgen voor козijnen die voldoen aan welstandseisen en monumentenvergunningen."
          }
        },
        {
          "@type": "Question",
          "name": "Bieden jullie financieringsmogelijkheden voor kozijnen in Amsterdam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, via de Energiebespaarlening van het Nationaal Warmtefonds kunt u uw kozijnen financieren tegen aantrekkelijke voorwaarden. Deze lening is speciaal bedoeld voor energiebesparende maatregelen."
          }
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://budgetkozijnenshop.nl/kozijnen-amsterdam#waarom-vervangen",
      "headline": "Kozijnen Vervangen in Amsterdam: Waarom, Wanneer en Hoeveel Besparen",
      "description": "Alles over kozijnen vervangen in Amsterdam: van grachtenpanden tot moderne nieuwbouw, energiebesparing en waardestijging.",
      "about": [
        {
          "@type": "Thing",
          "name": "Energiebesparing in Amsterdam"
        },
        {
          "@type": "Thing",
          "name": "Kozijnen monumentale panden"
        },
        {
          "@type": "Thing",
          "name": "Woningwaarde verbetering Amsterdam"
        }
      ],
      "mentions": [
        {
          "@type": "MonetaryAmount",
          "currency": "EUR",
          "minValue": "800",
          "maxValue": "1200",
          "description": "Gemiddelde jaarlijkse energiebesparing"
        },
        {
          "@type": "MonetaryAmount",
          "currency": "EUR",
          "minValue": "15000",
          "maxValue": "25000",
          "description": "Waardestijging woning"
        }
      ]
    }
  ]
}

const amsterdamWijken = [
  // Centrum
  "Burgwallen-Nieuwe Zijde", "Burgwallen-Oude Zijde", "Grachtengordel-West", "Grachtengordel-Zuid", 
  "Nieuwmarkt/Lastage", "Haarlemmerbuurt", "Jordaan", "De Weteringschans",
  
  // West
  "Bos en Lommer", "De Baarsjes", "Oud-West", "Westerpark", "Overtoomse Veld",
  
  // Nieuw-West
  "Slotervaart", "Osdorp", "Geuzenveld-Slotermeer", "De Aker", "Sloten",
  
  // Zuid
  "Oud-Zuid", "De Pijp", "Rivierenbuurt", "Apollobuurt", "Stadionbuurt", "Zuidas", "Buitenveldert",
  
  // Oost
  "Indische Buurt", "Oostelijk Havengebied", "IJburg", "Zeeburg", "Transvaalbuurt", "Dapperbuurt",
  
  // Noord
  "Amsterdam-Noord", "Nieuwendam", "Buiksloot", "Overhoeks", "NDSM-werf",
  
  // Zuidoost
  "Bijlmermeer", "Gaasperdam", "Driemond", "Amstelkwartier"
]

export default function KozijnenAmsterdamPage() {
  return (
    <>
      <Script
        id="structured-data-amsterdam"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />
        
        {/* Hero Amsterdam */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/5691531/pexels-photo-5691531.jpeg"
              alt="Vakman installeert raamkozijnen Amsterdam"
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
                  Kozijnen met laagste prijs garantie Amsterdam.
                </h1>

                <p className="text-sm sm:text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u een goedkopere offerte? Wij gaan eronder zodat u altijd de laagste prijs betaald.
                </p>

                <p className="hidden sm:block text-base sm:text-lg md:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Krijg direct een prijsindicatie voor uw kozijnen in Amsterdam. Van Jordaan tot IJburg. Laagste prijs garantie!
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
        
        {/* Waarom Kozijnen Vervangen in Amsterdam */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Kozijnen Vervangen in Amsterdam
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ontdek waarom zoveel Amsterdammers kiezen voor nieuwe kozijnen en wat dit voor uw woning betekent
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Waarom in Amsterdam */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Home className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Waarom in Amsterdam?</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>70% van grachtenpanden heeft nog originele kozijnen uit 1900-1950</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Energieverlies tot 40% door oude kozijnen in monumentale panden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Geluidsisolatie cruciaal (centrum, toerisme, verkeer)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Waardestijging woning: gemiddeld €15.000-€25.000</span>
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
                      <span>Tocht en condensvorming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Verfschilfers en houtrot (vooral bij oude panden)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Hogere stookkosten dan buren</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Energielabel D of lager</span>
                    </li>
                  </ul>
                </div>

                {/* Besparing Amsterdam */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Euro className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Besparing Amsterdam</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Gemiddeld €800-€1.200/jaar op energiekosten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Energielabel verbetering: E→B = +10% woningwaarde</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>25-40% minder geluid van buiten</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Extra Voordelen */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Extra Voordelen in Amsterdam</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold">Monumentaal</p>
                    <p className="text-sm text-gray-600">Welstandseisen conform</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Home className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold">Waardestijging</p>
                    <p className="text-sm text-gray-600">Tot €25.000 extra</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Euro className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="font-semibold">ISDE Subsidie</p>
                    <p className="text-sm text-gray-600">Tot €111 per m²</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="font-semibold">Geluidsisolatie</p>
                    <p className="text-sm text-gray-600">25-40% minder geluid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* SEO Artikel Amsterdam */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Kozijnen Vervangen in Amsterdam: Complete Gids 2025</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Amsterdam is een unieke stad met een rijke architectuurgeschiedenis. Van de iconische grachtenpanden in de Jordaan tot moderne appartementen in IJburg - elk pand heeft zijn eigen karakter en uitdagingen als het gaat om kozijnen. Het vervangen van kozijnen in Amsterdam vereist daarom een gedegen kennis van lokale bouwstijlen, welstandseisen en de specifieke uitdagingen van stedelijk wonen.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Waarom kiezen zoveel Amsterdammers voor nieuwe kozijnen?</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Amsterdam kent een groot percentage historische panden, vooral in wijken zoals de Grachtengordel, De Pijp en Oud-West. Veel van deze woningen hebben nog steeds originele kozijnen uit de periode 1900-1950. Hoewel deze kozijnen esthetisch waardevol zijn, voldoen ze vaak niet meer aan moderne eisen voor isolatie, geluidswering en onderhoud.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Daarnaast speelt het stedelijke karakter van Amsterdam een belangrijke rol. Het verkeer, toerisme en de levendige atmosfeer zorgen voor veel geluidsoverlast. Moderne kozijnen met hoogwaardige beglazing kunnen het geluidsniveau binnenshuis aanzienlijk verlagen, wat bijdraagt aan een rustiger en aangenamer woonklimaat.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">De unieke uitdagingen van Amsterdamse panden</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Het vervangen van kozijnen in Amsterdam brengt specifieke uitdagingen met zich mee. In beschermde stadsgezichten en bij monumentale panden zijn er strikte welstandseisen. Dit betekent dat nieuwe kozijnen qua uitstraling en kleur moeten passen bij het oorspronkelijke karakter van het pand en de omgeving. Gelukkig zijn er tegenwoordig moderne kozijnen die voldoen aan alle isolatie-eisen én tegelijkertijd authentiek ogen.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Een ander aspect is de bereikbaarheid. In de binnenstad zijn veel straten smal en is parkeren beperkt. Professionele kozijnenbedrijven die in Amsterdam werken, weten hier rekening mee te houden en plannen hun werkzaamheden zodanig dat overlast voor bewoners en buren tot een minimum wordt beperkt.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Energiebesparing en waardestijging in Amsterdam</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Het vervangen van oude kozijnen kan een aanzienlijke impact hebben op de energiekosten. Oude enkelglas- of verouderde dubbelglasramen laten veel warmte ontsnappen, vooral in de winter. Dit resulteert in hogere stookkosten en een minder comfortabel binnenklimaat. Moderne kozijnen met HR++ of HR+++ beglazing kunnen het energieverlies drastisch verminderen.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Naast de directe besparing op energiekosten, draagt kozijnvervanging ook bij aan de waarde van uw woning. In een markt waar woningen schaars zijn en de vraag hoog is, kan een goed energielabel het verschil maken. Kopers zijn steeds meer bereid om extra te betalen voor een woning die klaar is voor de toekomst.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Subsidies en financieringsmogelijkheden</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Voor Amsterdammers zijn er verschillende mogelijkheden om de investering in nieuwe kozijnen betaalbaarder te maken. De ISDE-subsidie (Investeringssubsidie Duurzame Energie en Energiebesparing) biedt een financiële bijdrage voor energiebesparende maatregelen zoals het plaatsen van isolerende kozijnen. Deze subsidie is beschikbaar voor eigenaar-bewoners en kan oplopen tot aanzienlijke bedragen, afhankelijk van het type beglazing en de oppervlakte.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Daarnaast is er de Energiebespaarlening van het Nationaal Warmtefonds. Deze lening biedt aantrekkelijke voorwaarden specifiek voor energiebesparende verbouwingen. Het voordeel is dat u direct kunt profiteren van nieuwe kozijnen, terwijl u de kosten gespreid kunt terugbetalen. Voor veel huishoudens zijn de maandlasten lager dan de besparing op de energierekening.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Het proces: van aanvraag tot plaatsing</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Het traject van kozijnvervanging begint meestal met een gratis adviesgesprek en inmeting. Hierbij wordt gekeken naar uw specifieke situatie: het type woning, de huidige staat van de kozijnen, uw wensen qua isolatie en geluidswering, en eventuele beperkingen vanwege welstandseisen.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Na de inmeting ontvangt u een offerte op maat. Als u akkoord gaat, worden de kozijnen op maat geproduceerd. Dit duurt gemiddeld enkele weken. Vervolgens wordt een afspraak ingepland voor de plaatsing. In Amsterdam is het belangrijk dat dit zorgvuldig wordt gepland, rekening houdend met bereikbaarheid en eventuele parkeervergunningen.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                De plaatsing zelf gebeurt meestal binnen één tot enkele dagen, afhankelijk van het aantal kozijnen. Professionele monteurs zorgen ervoor dat alles netjes wordt afgewerkt en het oude materiaal wordt afgevoerd. Direct na plaatsing kunt u genieten van de voordelen: minder tocht, minder geluid en een beter binnenklimaat.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tips voor Amsterdamse woningeigenaren</h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Als u overweegt om uw kozijnen te vervangen, is het verstandig om dit tijdig te doen. Wacht niet tot er acute problemen zijn zoals lekkages of ernstige tocht. Door proactief te handelen, kunt u op een rustig moment kiezen voor de beste oplossing, zonder tijdsdruk.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Informeer ook bij uw gemeente of VvE over eventuele regelgeving. In sommige gevallen is een vergunning nodig, vooral bij monumentale panden of in beschermde stadsgezichten. Een professioneel kozijnenbedrijf kan u hierbij adviseren en ondersteunen.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Tot slot: vergelijk niet alleen op prijs, maar kijk ook naar kwaliteit, service en garantie. Goede kozijnen gaan tientallen jaren mee, dus het is belangrijk om te kiezen voor een betrouwbare partij die ook na plaatsing beschikbaar blijft voor service en onderhoud.
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
                  Kozijnen Amsterdam
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Wij leveren en plaatsen hoogwaardige kozijnen in alle wijken en stadsdelen van Amsterdam. 
                  Van historische grachtenpanden tot moderne nieuwbouw.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 lg:p-10 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {amsterdamWijken.map((wijk, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm font-medium">{wijk}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-blue-200">
                  <h3 className="font-bold text-lg mb-4 text-center">Speciale aandacht voor:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-blue-600 mb-1">Monumentale Panden</p>
                      <p className="text-sm text-gray-600">Grachtengordel, Jordaan, De Pijp</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-green-600 mb-1">Nieuwbouw Projecten</p>
                      <p className="text-sm text-gray-600">IJburg, Haven-Stad, Amstelkwartier</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-purple-600 mb-1">Renovatie & Verduurzaming</p>
                      <p className="text-sm text-gray-600">Alle wijken in Amsterdam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FAQAmsterdam />

        {/* Google Maps Sectie */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Actief in Amsterdam
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
                  Wij kennen Amsterdam als onze broekzak en werken in het hele gebied. Lokale kennis gecombineerd met professionele service.
                </p>
                <p className="text-lg text-gray-500">
                  📍 Werkgebied: Amsterdam • Postcodes: 1000-1109
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.23825460445!2d4.76208795!3d52.37403705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Werkgebied Amsterdam"
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

