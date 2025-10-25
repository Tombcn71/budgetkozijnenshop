import { GemeenteData } from "@/lib/gemeente-data"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface GemeenteSeoContentProps {
  data: GemeenteData
}

export function GemeenteSeoContent({ data }: GemeenteSeoContentProps) {
  return (
    <div className="bg-background">
      {/* Intro Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Woningontruiming in {data.naam}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{data.introText}</p>

            {/* Wijken */}
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-xl text-foreground mb-4">Actief in alle wijken van {data.naam}:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {data.wijken.map((wijk, index) => (
                  <div key={index} className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{wijk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Kiezen */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Waarom kiezen voor Budget Ontruiming in {data.naam}?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.waaromKiezen.map((reden, index) => (
                <Card key={index} className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground leading-relaxed">{reden}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Situaties */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Wanneer heeft u een woningontruiming nodig?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.situaties.map((situatie, index) => (
                <Card key={index} className="p-6 bg-white border-0 shadow-sm">
                  <h3 className="font-bold text-lg text-foreground mb-3">{situatie.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{situatie.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prijzen */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Wat kost een woningontruiming in {data.naam}?
            </h2>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              Indicatieve prijzen voor woningontruiming in {data.naam}. Met onze laagste prijs garantie betaalt u
              gegarandeerd de beste prijs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white border-0 shadow-sm text-center">
                <h3 className="font-bold text-foreground mb-2">Appartement</h3>
                <p className="text-sm text-muted-foreground mb-4">40-70 m²</p>
                <p className="text-2xl font-bold text-primary">{data.prijzen.appartement}</p>
              </Card>
              <Card className="p-6 bg-white border-0 shadow-sm text-center">
                <h3 className="font-bold text-foreground mb-2">Rijtjeshuis</h3>
                <p className="text-sm text-muted-foreground mb-4">70-120 m²</p>
                <p className="text-2xl font-bold text-primary">{data.prijzen.rijtjeshuis}</p>
              </Card>
              <Card className="p-6 bg-white border-0 shadow-sm text-center">
                <h3 className="font-bold text-foreground mb-2">Vrijstaande woning</h3>
                <p className="text-sm text-muted-foreground mb-4">120+ m²</p>
                <p className="text-2xl font-bold text-primary">{data.prijzen.vrijstaand}</p>
              </Card>
            </div>
            <div className="mt-8 bg-primary/10 rounded-lg p-6 text-center">
              <h3 className="font-bold text-foreground text-xl mb-2">💰 Laagste Prijs Garantie</h3>
              <p className="text-foreground">
                Vindt u binnen 48 uur een goedkopere offerte? Dan betalen wij het verschil terug!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Veelgestelde vragen over woningontruiming in {data.naam}
            </h2>
            <div className="space-y-6">
              {data.faq.map((item, index) => (
                <Card key={index} className="p-6 bg-white border-0 shadow-sm">
                  <h3 className="font-bold text-lg text-foreground mb-3">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Direct een prijsindicatie voor uw woningontruiming in {data.naam}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Gebruik onze slimme AI tool hierboven om binnen enkele minuten een prijsindicatie te ontvangen. Geheel
              vrijblijvend en zonder verplichtingen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Bereken nu uw prijs
              </a>
              <a
                href="tel:0612345678"
                className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Of bel direct: 06 123 456 78
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



