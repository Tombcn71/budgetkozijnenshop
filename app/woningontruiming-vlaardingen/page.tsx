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
  title: "Woningontruiming Vlaardingen - Laagste Prijs Garantie | Budget Ontruiming",
  description:
    "Professionele woningontruiming in Vlaardingen vanaf €610. Centrum, Westwijk, Holy, Ambacht. Haven stad met persoonlijke service. Vindt u goedkoper? Wij betalen het verschil!",
  keywords:
    "woningontruiming vlaardingen, ontruiming vlaardingen, huis ontruimen vlaardingen, bezemschoon opleveren vlaardingen, ontruiming westwijk, ontruiming holy vlaardingen, spoedontruiming vlaardingen",
  openGraph: {
    title: "Woningontruiming Vlaardingen - Laagste Prijs Garantie",
    description: "Professionele woningontruiming in Vlaardingen vanaf €600. Vindt u goedkoper? Wij betalen het verschil!",
    url: "https://budgetontruiming.nl/woningontruiming-vlaardingen",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Vlaardingen - Laagste Prijs Garantie",
    description: "Professionele woningontruiming in Vlaardingen vanaf €600. Vindt u goedkoper? Wij betalen het verschil!",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-vlaardingen",
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

export default function vlaardingenPage() {
  const data = getGemeenteData("vlaardingen")!
  return (
    <>
      <TopBanner />
      <Header />
      <main>
        <GemeenteHero
          gemeenteNaam="Vlaardingen"
          subtitle="Woningontruiming in Vlaardingen aan de Nieuwe Maas. Van Centrum tot Westwijk, van Holy tot Ambacht – wij ontruimen alle wijken professioneel en betaalbaar."
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
