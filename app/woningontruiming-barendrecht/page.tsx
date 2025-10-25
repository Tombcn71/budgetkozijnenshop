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
  title: "Woningontruiming Barendrecht - Laagste Prijs Garantie | Budget Ontruiming",
  description:
    "Professionele woningontruiming in Barendrecht vanaf €610. Carnisselande, Oost, West en Centrum. Vindt u goedkoper? Wij betalen het verschil! Direct beschikbaar.",
  keywords:
    "woningontruiming barendrecht, ontruiming barendrecht, huis ontruimen barendrecht, bezemschoon opleveren barendrecht, woningontruiming carnisselande, gezinswoning ontruimen barendrecht, spoedontruiming barendrecht",
  openGraph: {
    title: "Woningontruiming Barendrecht - Laagste Prijs Garantie",
    description: "Professionele woningontruiming in Barendrecht vanaf €600. Vindt u goedkoper? Wij betalen het verschil!",
    url: "https://budgetontruiming.nl/woningontruiming-barendrecht",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Barendrecht - Laagste Prijs Garantie",
    description: "Professionele woningontruiming in Barendrecht vanaf €600. Vindt u goedkoper? Wij betalen het verschil!",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-barendrecht",
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

export default function uarendrechtPage() {
  const data = getGemeenteData("barendrecht")!
  return (
    <>
      <TopBanner />
      <Header />
      <main>
        <GemeenteHero
          gemeenteNaam="Barendrecht"
          subtitle="Woningontruiming in heel Barendrecht inclusief Carnisselande. Van moderne gezinswoningen tot oudere panden – wij ontruimen snel en professioneel tegen de laagste prijs."
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
