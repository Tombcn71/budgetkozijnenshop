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
  title: "Woningontruiming Wassenaar - Laagste Prijs Garantie | Budget Ontruiming",
  description:
    "Discrete en professionele woningontruiming in Wassenaar vanaf €650. Specialist in villa's en landhuizen. Vindt u goedkoper? Wij betalen het verschil!",
  keywords:
    "woningontruiming wassenaar, ontruiming wassenaar, villa ontruimen wassenaar, landhuis ontruimen wassenaar, discrete ontruiming wassenaar, bezemschoon opleveren wassenaar, groot huis ontruimen wassenaar, luxe woning ontruimen",
  openGraph: {
    title: "Woningontruiming Wassenaar - Laagste Prijs Garantie",
    description:
      "Discrete en professionele woningontruiming in Wassenaar vanaf €650. Specialist in villa's en landhuizen.",
    url: "https://budgetontruiming.nl/woningontruiming-wassenaar",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Wassenaar - Laagste Prijs Garantie",
    description: "Discrete woningontruiming in Wassenaar vanaf €650. Specialist in villa's en landhuizen.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-wassenaar",
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

export default function WassenaarPage() {
  const data = getGemeenteData("wassenaar")!

  return (
    <>
      <TopBanner />
      <Header />
      <main>
        <GemeenteHero
          gemeenteNaam="Wassenaar"
          subtitle="Discrete en professionele woningontruiming in Wassenaar. Specialist in villa's en landhuizen. Vindt u goedkoper? Wij betalen het verschil terug."
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

