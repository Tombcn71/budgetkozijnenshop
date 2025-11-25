import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Stuur ons een bericht
            </h2>
            <p className="text-base text-muted-foreground">
              Heeft u een vraag? Stuur ons een bericht.
            </p>
          </div>

          <Card className="border-border">
            <CardContent className="p-6 lg:p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Uw volledige naam
                  </label>
                  <Input id="name" placeholder="Uw naam" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mailadres
                  </label>
                  <Input id="email" type="email" placeholder="uw.email@voorbeeld.nl" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefoonnummer
                  </label>
                  <Input id="phone" type="tel" placeholder="06 12 34 56 78" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Waar gaat uw bericht over?
                  </label>
                  <Input id="subject" placeholder="Onderwerp" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Bericht
                  </label>
                  <Textarea id="message" placeholder="Vertel ons over uw situatie..." rows={5} />
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                  📧 Verstuur Bericht
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
