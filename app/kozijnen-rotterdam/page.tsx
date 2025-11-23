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

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
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
        
        <FAQ />

        <Footer />
      </div>
    </>
  )
}

                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Kozijnen in heel Rotterdam
                </h2>
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
                      className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
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

        {/* Calculator Section */}
        <section id="calculator" className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Bereken Direct Uw Kozijn Prijs in Rotterdam
                </h2>
                <p className="text-xl text-gray-600">
                  Upload een foto of beschrijf uw kozijnen en ontvang binnen enkele seconden een indicatieve prijs
                </p>
              </div>
              
              <HeroAI />
            </div>
          </div>
        </section>

        {/* Why Choose Us Rotterdam */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                Waarom Budget Kozijnenshop in Rotterdam?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Lokale Service in Rotterdam</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Snelle service in alle Rotterdamse wijken. Wij kennen de Maasstad en haar 
                    diverse bebouwing, van haven tot hoogbouw.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">10 Jaar Volledige Garantie</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Volledige garantie op materiaal en montage. Duitse kwaliteit die bestand is 
                    tegen het Rotterdamse klimaat en de maritieme omgeving.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Duitse Topkwaliteit</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Kozijnen van topmerken zoals Aluplast, Gealan en Reynaers. Perfect isolerend, 
                    duurzaam en stijlvol voor uw Rotterdamse woning.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">ISDE Subsidie Begeleiding</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wij helpen u met de ISDE subsidieaanvraag. Tot €111 per m² voor triple glas 
                    bij verduurzaming van uw Rotterdamse woning.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Snelle Realisatie</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Van adviesgesprek tot montage in 4-6 weken. Efficiënte Rotterdamse aanpak, 
                    zonder gedoe, gewoon goed geregeld.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Complete Ontzorging</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Van advies tot afvoer oude kozijnen. Wij regelen alles voor u, 
                    inclusief vergunningen en welstandsadvies waar nodig.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Rotterdam */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                Veelgestelde Vragen over Kozijnen in Rotterdam
              </h2>

              <div className="space-y-4">
                {structuredData["@graph"][3].mainEntity.map((faq: any, index: number) => (
                  <details 
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <summary className="px-6 py-4 cursor-pointer font-semibold text-lg flex items-center justify-between">
                      <span>{faq.name}</span>
                      <span className="text-red-600 group-open:rotate-180 transition-transform">▼</span>
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
        <section className="py-16 lg:py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Klaar voor Nieuwe Kozijnen in Rotterdam?
            </h2>
            <p className="text-xl lg:text-2xl mb-10 text-red-100 max-w-3xl mx-auto">
              Plan een gratis adviesgesprek en ontdek wat wij voor uw Rotterdamse woning kunnen betekenen
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

