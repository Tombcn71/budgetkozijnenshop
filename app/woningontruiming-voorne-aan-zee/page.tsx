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
  title: "Woningontruiming Voorne aan Zee - Laagste Prijs Garantie | Budget Ontruiming",
  description:
    "Professionele woningontruiming in Voorne aan Zee vanaf €630. Rockanje en kustgebied. Vakantiehuis specialist. Vindt u goedkoper? Wij betalen het verschil!",
  keywords:
    "woningontruiming voorne aan zee, ontruiming rockanje, vakantiehuis ontruimen rockanje, huis ontruimen voorne aan zee, bezemschoon opleveren rockanje, strandhuisje ontruimen, kustgebied ontruiming",
  openGraph: {
    title: "Woningontruiming Voorne aan Zee - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Voorne aan Zee vanaf €630. Rockanje en kustgebied.",
    url: "https://budgetontruiming.nl/woningontruiming-voorne-aan-zee",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Voorne aan Zee - Laagste Prijs Garantie",
    description: "Professionele woningontruiming in Voorne aan Zee. Rockanje specialist.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-voorne-aan-zee",
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

export default function VoorneAanZeePage() {
  const data = getGemeenteData("voorne-aan-zee")!
  return (
    <>
      <TopBanner />
      <Header />
      <main>
        <GemeenteHero
          gemeenteNaam="Voorne aan Zee"
          subtitle="Kustspecialist voor woningontruiming in Voorne aan Zee en Rockanje. Van vakantiehuizen tot permanente bewoning – professioneel en betaalbaar."
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
