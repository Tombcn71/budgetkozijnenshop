"use client"

import Link from "next/link"
import Script from "next/script"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIQuoteForm } from "@/components/ai-quote-form"
import { HowItWorks } from "@/components/how-it-works"
import { FAQ } from "@/components/faq"
import { CheckCircle2, MapPin } from "lucide-react"

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
              src="https://images.pexels.com/photos/5691531/pexels-photo-5691531.jpeg"
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

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
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
        
        <FAQ />

        <Footer />
      </div>
    </>
  )
}

          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Kozijnen in heel Utrecht
                </h2>
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
                      className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
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

        {/* Calculator Section */}
        <section id="calculator" className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Bereken Direct Uw Kozijn Prijs in Utrecht
                </h2>
                <p className="text-xl text-gray-600">
                  Upload een foto of beschrijf uw kozijnen en ontvang binnen enkele seconden een indicatieve prijs
                </p>
              </div>
              
              <HeroAI />
            </div>
          </div>
        </section>

        {/* Why Choose Us Utrecht */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                Waarom Budget Kozijnenshop in Utrecht?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Lokale Service in Utrecht</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Snelle service in alle Utrechtse wijken. Wij kennen de Domstad en haar 
                    karakteristieke architectuur, van grachtenpanden tot moderne nieuwbouw.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">10 Jaar Garantie</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Volledige garantie op materiaal en montage. Duitse kwaliteit betekent 
                    jarenlang zorgeloos wooncomfort in uw Utrechtse woning.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Monumentale Expertise</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ervaring met welstandseisen en monumentenvergunningen. Perfect voor 
                    historische panden in de binnenstad en beschermde stadsgezichten.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">ISDE Subsidie Hulp</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wij helpen u met de subsidieaanvraag. Tot €111 per m² voor triple glas 
                    bij verduurzaming van uw Utrechtse woning.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Snelle Levertijd</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Van adviesgesprek tot montage in 4-6 weken. Efficiënte planning, 
                    professionele uitvoering, minimale overlast.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Complete Ontzorging</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Van advies tot afvoer oude kozijnen. Wij regelen alles voor u, 
                    inclusief vergunningen indien nodig in Utrecht.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Utrecht */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                Veelgestelde Vragen over Kozijnen in Utrecht
              </h2>

              <div className="space-y-4">
                {structuredData["@graph"][3].mainEntity.map((faq: any, index: number) => (
                  <details 
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <summary className="px-6 py-4 cursor-pointer font-semibold text-lg flex items-center justify-between">
                      <span>{faq.name}</span>
                      <span className="text-purple-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-4 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Klaar voor Nieuwe Kozijnen in Utrecht?
            </h2>
            <p className="text-xl lg:text-2xl mb-10 text-purple-100 max-w-3xl mx-auto">
              Plan een gratis adviesgesprek en ontdek wat wij voor uw Utrechtse woning kunnen betekenen
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined' && (window as any).Calendly) {
                  (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/tbvanreijn'});
                }
              }}
              className="inline-flex items-center justify-center px-10 py-5 bg-orange-500 text-white rounded-lg font-bold text-xl hover:bg-orange-600 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              Plan Gratis Adviesgesprek
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

