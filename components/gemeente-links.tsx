import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { GemeenteData } from "@/lib/gemeente-data"

interface GemeenteLinksProps {
  gemeentes: GemeenteData[]
  regio: string
}

export function GemeenteLinks({ gemeentes, regio }: GemeenteLinksProps) {
  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
            Woningontruiming in {regio}
          </h2>
          <p className="text-center text-muted-foreground mb-10 text-lg">
            Klik op uw gemeente voor specifieke informatie en prijzen
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gemeentes.map((gemeente) => (
              <Link key={gemeente.slug} href={`/woningontruiming-${gemeente.slug}`}>
                <Card className="p-6 bg-white border-0 shadow-sm hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-2">{gemeente.naam}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {gemeente.wijken.length} wijken • {gemeente.postcodes}
                      </p>
                      <p className="text-primary font-semibold text-sm">Vanaf {gemeente.prijzen.appartement}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



