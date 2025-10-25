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
  title: "Woningontruiming Goeree-Overflakkee - Laagste Prijs Garantie | Budget Ontruiming",
  description:
    "Professionele woningontruiming op Goeree-Overflakkee vanaf €620. Middelharnis, Ouddorp, Dirksland. Eiland specialist. Vindt u goedkoper? Wij betalen het verschil!",
  keywords:
    "woningontruiming goeree-overflakkee, ontruiming middelharnis, ontruiming ouddorp, ontruiming dirksland, vakantiehuis ontruimen goeree, huis ontruimen goeree-overflakkee, bezemschoon opleveren eiland",
  openGraph: {
    title: "Woningontruiming Goeree-Overflakkee - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming op Goeree-Overflakkee vanaf €620. Alle kernen bereikbaar.",
    url: "https://budgetontruiming.nl/woningontruiming-goeree-overflakkee",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Goeree-Overflakkee - Laagste Prijs Garantie",
    description: "Professionele woningontruiming op het eiland Goeree-Overflakkee.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-goeree-overflakkee",
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

export default function GoreeOverflakkeePage() {
  const data = getGemeenteData("goeree-overflakkee")!
  return (
    <>
      <TopBanner />
      <Header />
      <main>
        <GemeenteHero
          gemeenteNaam="Goeree-Overflakkee"
          subtitle="Woningontruiming op het eiland Goeree-Overflakkee. Van Middelharnis tot Ouddorp – wij ontruimen permanent bewoonde en vakantiewoningen tegen de laagste prijs."
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
