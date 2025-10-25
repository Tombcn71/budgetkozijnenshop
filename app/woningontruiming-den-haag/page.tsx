import type { Metadata } from "next"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GemeenteHero } from "@/components/gemeente-hero"
import { HowItWorks } from "@/components/how-it-works"
import { GemeenteSeoContent } from "@/components/gemeente-seo-content"
import { GemeenteMap } from "@/components/gemeente-map"
import { AIQuoteForm } from "@/components/ai-quote-form"
import { getGemeenteData } from "@/lib/gemeente-data"

export const metadata: Metadata = {
  title: "Woningontruiming Den Haag - Laagste Prijs Garantie | Budget Ontruiming",
  description:
    "Professionele woningontruiming in Den Haag vanaf €650. Vindt u goedkoper? Wij betalen het verschil! Bezemschoon opleveren, na overlijden, spoedontruiming. Direct beschikbaar.",
  keywords:
    "woningontruiming den haag, ontruiming den haag, huis ontruimen den haag, bezemschoon opleveren den haag, woning leeghalen den haag, ontruiming na overlijden den haag, spoedontruiming den haag, inboedel ontruiming den haag",
  openGraph: {
    title: "Woningontruiming Den Haag - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Den Haag vanaf €650. Vindt u goedkoper? Wij betalen het verschil! Direct beschikbaar.",
    url: "https://budgetontruiming.nl/woningontruiming-den-haag",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Den Haag - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Den Haag vanaf €650. Vindt u goedkoper? Wij betalen het verschil!",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-den-haag",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function DenHaagPage() {
  const data = getGemeenteData("den-haag")!

  return (
    <>
      <TopBanner />
      <Header />
      <main>
        <GemeenteHero
          gemeenteNaam="Den Haag"
          subtitle="Vindt u een goedkopere offerte voor woningontruiming in Den Haag? Wij betalen u het verschil terug. Zo bent u ervan verzekerd dat u de laagste prijs betaalt."
        />
        <HowItWorks />
        <GemeenteSeoContent data={data} />
        
        {/* AI Quote Form Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Direct een offerte aanvragen?
              </h2>
              <p className="text-lg text-muted-foreground">
                Upload foto's van uw woning en krijg binnen 2 minuten een prijsindicatie via onze AI tool.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <AIQuoteForm />
            </div>
          </div>
        </section>

        <GemeenteMap gemeenteNaam={data.naam} postcodes={data.postcodes} />
      </main>
      <Footer />
    </>
  )
}

