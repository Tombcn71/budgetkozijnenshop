import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { GemeenteLinks } from "@/components/gemeente-links"
import { getGemeentesByRegio } from "@/lib/gemeente-data"

export const metadata: Metadata = {
  title: "Woningontruiming Haaglanden - Laagste Prijs Garantie",
  description:
    "Professionele woningontruiming in heel Haaglanden. Den Haag, Delft, Rijswijk, Wassenaar en meer. Vindt u goedkoper? Wij betalen het verschil.",
  keywords: [
    "woningontruiming Haaglanden",
    "ontruiming Den Haag",
    "ontruiming Delft",
    "bezemschoon opleveren Haaglanden",
  ],
}

export default function HaaglandenPage() {
  const gemeentes = getGemeentesByRegio("Haaglanden")

  return (
    <>
      <Header />
      <main>
        <Hero />
        <GemeenteLinks gemeentes={gemeentes} regio="Haaglanden" />
        
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Professionele Woningontruiming in Haaglanden
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  De regio Haaglanden omvat diverse gemeentes met elk hun eigen karakter. Van de grootstedelijke
                  dynamiek van Den Haag tot de studentenstad Delft, van het landelijke Midden-Delfland tot het
                  moderne Zoetermeer. Bij Budget Ontruiming kennen we de regio als geen ander.
                </p>
                <p className="mb-4">
                  Of u nu een appartement in het centrum van Den Haag heeft, een villa in Wassenaar, een
                  studentenwoning in Delft of een gezinswoning in Pijnacker-Nootdorp – wij bieden professionele
                  woningontruiming met onze unieke laagste prijs garantie.
                </p>
                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Onze diensten in Haaglanden</h3>
                <ul className="space-y-2 mb-6">
                  <li>✓ Complete woningontruiming van klein tot groot</li>
                  <li>✓ Bezemschoon opleveren voor verhuurders</li>
                  <li>✓ Ontruiming na overlijden met respect en zorg</li>
                  <li>✓ Seniorenverhuizingen en begeleiding</li>
                  <li>✓ Spoedontruimingen binnen 24 uur mogelijk</li>
                  <li>✓ Inboedel taxatie en verkoop</li>
                  <li>✓ Milieuvriendelijke afvalverwerking</li>
                </ul>
                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Laagste Prijs Garantie</h3>
                <p className="mb-4">
                  Wij garanderen u de laagste prijs voor uw woningontruiming in Haaglanden. Vindt u binnen 48 uur na
                  onze offerte een goedkopere, vergelijkbare offerte bij een ander erkend bedrijf? Dan betalen wij u
                  het verschil terug. Zo simpel is het.
                </p>
                <p>
                  Klik hierboven op uw gemeente voor specifieke informatie, lokale prijzen en veelgestelde vragen
                  over woningontruiming in uw gebied.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}



