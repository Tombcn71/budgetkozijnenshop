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

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
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
        
        <FAQ />

        <Footer />
      </div>
    </>
  )
}

