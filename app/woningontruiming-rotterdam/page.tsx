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
  title: "Woningontruiming Rotterdam - Laagste Prijs Garantie | Budget Ontruiming",
  description:
    "Professionele woningontruiming in Rotterdam vanaf €650. Alle wijken: Noord, Zuid, West, Oost, Centrum. Vindt u goedkoper? Wij betalen het verschil! 24/7 bereikbaar.",
  keywords:
    "woningontruiming rotterdam, ontruiming rotterdam, huis ontruimen rotterdam, bezemschoon opleveren rotterdam, woning leeghalen rotterdam, spoedontruiming rotterdam, appartement ontruimen rotterdam, hoogbouw ontruimen rotterdam",
  openGraph: {
    title: "Woningontruiming Rotterdam - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Rotterdam vanaf €650. Alle wijken, 24/7 bereikbaar. Vindt u goedkoper? Wij betalen het verschil!",
    url: "https://budgetontruiming.nl/woningontruiming-rotterdam",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Rotterdam - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Rotterdam vanaf €650. Alle wijken, 24/7 bereikbaar. Vindt u goedkoper? Wij betalen het verschil!",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-rotterdam",
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

export default function RotterdamPage() {
  const data = getGemeenteData("rotterdam")!

  return (
    <>
      <TopBanner />
      <Header />
      <main>
        <GemeenteHero
          gemeenteNaam="Rotterdam"
          subtitle="Professionele woningontruiming in heel Rotterdam met laagste prijs garantie. Van hoogbouw in Noord tot villa's in Hillegersberg – wij zijn 24/7 bereikbaar."
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

