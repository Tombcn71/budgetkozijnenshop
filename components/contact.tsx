import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Vraag Een Gratis Offerte Aan
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardContent className="p-6 lg:p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Naam
                        </label>
                        <Input id="name" placeholder="Uw naam" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Telefoonnummer
                        </label>
                        <Input id="phone" type="tel" placeholder="06 12345678" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-mailadres
                      </label>
                      <Input id="email" type="email" placeholder="uw@email.nl" />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                        Adres
                      </label>
                      <Input id="address" placeholder="Straat en huisnummer" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Bericht
                      </label>
                      <Textarea id="message" placeholder="Vertel ons over uw ontruiming..." rows={5} />
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                      Verstuur Aanvraag
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Telefoon</h3>
                      <p className="text-sm text-muted-foreground">06 12 34 56 78</p>
                      <p className="text-xs text-muted-foreground mt-1">Ma-Za: 07:00 - 22:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">E-mail</h3>
                      <p className="text-sm text-muted-foreground break-all">info@budgetontruiming.nl</p>
                      <p className="text-xs text-muted-foreground mt-1">Reactie binnen 2 uur</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Werkgebied</h3>
                      <p className="text-sm text-muted-foreground">Heel Nederland</p>
                      <p className="text-xs text-muted-foreground mt-1">24/7 beschikbaar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
