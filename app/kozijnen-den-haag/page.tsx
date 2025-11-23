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
              src="https://images.pexels.com/photos/5691531/pexels-photo-5691531.jpeg"
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

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
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
        
        <FAQ />

        <Footer />
      </div>
    </>
  )
}

        <section className="py-16 lg:py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Klaar voor Nieuwe Kozijnen in Den Haag?
            </h2>
            <p className="text-xl lg:text-2xl mb-10 text-green-100 max-w-3xl mx-auto">
              Plan een gratis adviesgesprek en ontdek wat wij voor uw Haagse woning kunnen betekenen
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

