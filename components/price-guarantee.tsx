import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Euro, Shield, Clock } from "lucide-react"

export function PriceGuarantee() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground">Onze Garantie</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Laagste Prijsgarantie
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty">
              Wij garanderen u de beste prijs voor uw ontruiming
            </p>
          </div>

          <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Euro className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">Beste Prijs</h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    Goedkopere offerte gevonden? Wij betalen het verschil terug.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">Volledig Verzekerd</h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    Al onze werkzaamheden zijn volledig verzekerd voor uw gemoedsrust.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">Snel Service</h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    Binnen 24 uur ter plaatse voor een vrijblijvende offerte.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
