import { Card, CardContent } from "@/components/ui/card"
import { Home, Trash2, Recycle, Truck } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Woningontruiming",
    description: "Volledige ontruiming van woningen, appartementen en huizen. Snel en professioneel uitgevoerd.",
  },
  {
    icon: Trash2,
    title: "Bedrijfsontruiming",
    description: "Ontruiming van kantoren, winkels en bedrijfspanden. Minimale overlast voor uw bedrijf.",
  },
  {
    icon: Recycle,
    title: "Duurzaam Afvoeren",
    description: "Milieuvriendelijke verwerking van uw spullen. Hergebruik waar mogelijk.",
  },
  {
    icon: Truck,
    title: "Spoedontruiming",
    description: "Binnen 24 uur ter plaatse voor urgente ontruimingen. Altijd beschikbaar.",
  },
]

export function Services() {
  return (
    <section id="diensten" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Onze Diensten
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professionele ontruimingsdiensten voor elke situatie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
