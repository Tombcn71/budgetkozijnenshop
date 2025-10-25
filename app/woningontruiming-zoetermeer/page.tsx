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
  title: "Woningontruiming Zoetermeer - Laagste Prijs Garantie | Budget Ontruiming",
  description:
    "Professionele woningontruiming in Zoetermeer vanaf €600. Alle wijken: Meerzicht, Rokkeveen, Palenstein. Vindt u goedkoper? Wij betalen het verschil!",
  keywords:
    "woningontruiming zoetermeer, ontruiming zoetermeer, huis ontruimen zoetermeer, bezemschoon opleveren zoetermeer, woning leeghalen zoetermeer, appartement ontruimen zoetermeer, spoedontruiming zoetermeer, inboedel ontruiming zoetermeer",
  openGraph: {
    title: "Woningontruiming Zoetermeer - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Zoetermeer vanaf €600. Alle wijken, snelle service. Direct beschikbaar!",
    url: "https://budgetontruiming.nl/woningontruiming-zoetermeer",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Zoetermeer - Laagste Prijs Garantie",
    description: "Professionele woningontruiming in Zoetermeer vanaf €600. Vindt u goedkoper? Wij betalen het verschil!",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-zoetermeer",
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

export default function ZoetermeerPage() {
  const data = getGemeenteData("zoetermeer")!

  return (
    <>
      <TopBanner />
      <Header />
      <main>
        <GemeenteHero
          gemeenteNaam="Zoetermeer"
          subtitle="Woningontruiming in heel Zoetermeer met laagste prijs garantie. Van Meerzicht tot Rokkeveen, wij ontruimen snel en professioneel tegen de beste prijs."
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

