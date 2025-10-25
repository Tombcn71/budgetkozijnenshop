"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Hero() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showResult, setShowResult] = useState(false)

  // Form data
  const [formData, setFormData] = useState({
    postcode: "",
    woningType: "",
    oppervlakte: "",
    verdieping: "",
    inhoudWoning: "",
    vloeren: false,
    gordijnen: false,
    herstelwerkzaamheden: false,
    grofvuil: false,
    naam: "",
    email: "",
    telefoon: "",
    startdatum: "",
    opmerkingen: "",
  })

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResult(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progressPercentage = (currentStep / 3) * 100

  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/professional-movers-carrying-boxes-in-modern-home.jpg"
          alt="Professionele verhuizers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              Ontruimingen zonder gedoe met laagste prijs garantie.
            </h1>

            <p className="text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
              Vindt u een goedkopere offerte? Wij betalen u het verschil terug. Zo bent u ervan verzekerd dat u de laatste
              prijs betaald.
            </p>

            <div className="flex flex-wrap gap-4 text-md text-white">
              <span>Woningen</span>
              <span>|</span>
              <span>Bedrijfsruimtes</span>
              <span>|</span>
              <span>Seniorenkamers</span>
            </div>
          </div>

          <div>
            <Card className="p-6 lg:p-8 bg-white shadow-2xl border-0">
              {!showResult ? (
                <>
                  <h3 className="font-bold text-xl text-foreground mb-1">
                    Direct prijsindicatie met onze slimme AI tool
                  </h3>
                  <p className="text-sm italic text-muted-foreground mb-4">
                    Even een paar vragen en wat foto's uploaden dat is alles
                  </p>

                  {/* Progress bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs text-foreground mb-2">
                      <span className={currentStep >= 1 ? "font-bold" : ""}>Stap 1</span>
                      <span className={currentStep >= 2 ? "font-bold" : ""}>Stap 2</span>
                      <span className={currentStep >= 3 ? "font-bold" : ""}>Stap 3</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2 bg-muted" />
                  </div>

                  <form className="space-y-4">
                    {/* Step 1: Locatie en Type */}
                    {currentStep === 1 && (
                      <div className="space-y-4">
                        <div>
                          <Label className="text-foreground text-sm mb-2 block">Postcode</Label>
                          <Input
                            placeholder="Bijv. 1234 AB"
                            value={formData.postcode}
                            onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                            className="bg-background border-0 h-11"
                          />
                        </div>

                        <div>
                          <Label className="text-foreground text-sm mb-2 block">Woning Type</Label>
                          <Select
                            value={formData.woningType}
                            onValueChange={(value) => setFormData({ ...formData, woningType: value })}
                          >
                            <SelectTrigger className="bg-background border-0 h-11">
                              <SelectValue placeholder="Selecteer type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="appartement">Appartement</SelectItem>
                              <SelectItem value="tussenwoning">Tussenwoning</SelectItem>
                              <SelectItem value="hoekwoning">Hoekwoning</SelectItem>
                              <SelectItem value="vrijstaand">Vrijstaande woning</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label className="text-foreground text-sm mb-2 block">Oppervlakte</Label>
                          <Select
                            value={formData.oppervlakte}
                            onValueChange={(value) => setFormData({ ...formData, oppervlakte: value })}
                          >
                            <SelectTrigger className="bg-background border-0 h-11">
                              <SelectValue placeholder="Selecteer oppervlakte" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-50">0-50 m²</SelectItem>
                              <SelectItem value="50-100">50-100 m²</SelectItem>
                              <SelectItem value="100-150">100-150 m²</SelectItem>
                              <SelectItem value="150+">150+ m²</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label className="text-foreground text-sm mb-2 block">Verdieping</Label>
                          <Select
                            value={formData.verdieping}
                            onValueChange={(value) => setFormData({ ...formData, verdieping: value })}
                          >
                            <SelectTrigger className="bg-background border-0 h-11">
                              <SelectValue placeholder="Selecteer verdieping" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="begane-grond">Begane grond</SelectItem>
                              <SelectItem value="1e-verdieping">1e verdieping</SelectItem>
                              <SelectItem value="2e-verdieping">2e verdieping</SelectItem>
                              <SelectItem value="3e-verdieping">3e verdieping of hoger</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Werkzaamheden */}
                    {currentStep === 2 && (
                      <div className="space-y-4">
                        <div>
                          <Label className="text-foreground text-sm mb-2 block">Inhoud Woning</Label>
                          <Select
                            value={formData.inhoudWoning}
                            onValueChange={(value) => setFormData({ ...formData, inhoudWoning: value })}
                          >
                            <SelectTrigger className="bg-background border-0 h-11">
                              <SelectValue placeholder="Selecteer inhoud" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="leeg">Leeg</SelectItem>
                              <SelectItem value="half-vol">Half vol</SelectItem>
                              <SelectItem value="vol">Vol</SelectItem>
                              <SelectItem value="zeer-vol">Zeer vol</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3 pt-2">
                          <Label className="text-foreground text-sm block">Extra Werkzaamheden</Label>

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="vloeren"
                              checked={formData.vloeren}
                              onCheckedChange={(checked) => setFormData({ ...formData, vloeren: checked as boolean })}
                              className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            />
                            <label htmlFor="vloeren" className="text-sm text-foreground cursor-pointer">
                              Vloeren verwijderen
                            </label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="gordijnen"
                              checked={formData.gordijnen}
                              onCheckedChange={(checked) => setFormData({ ...formData, gordijnen: checked as boolean })}
                              className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            />
                            <label htmlFor="gordijnen" className="text-sm text-foreground cursor-pointer">
                              Gordijnen verwijderen
                            </label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="herstel"
                              checked={formData.herstelwerkzaamheden}
                              onCheckedChange={(checked) =>
                                setFormData({ ...formData, herstelwerkzaamheden: checked as boolean })
                              }
                              className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            />
                            <label htmlFor="herstel" className="text-sm text-foreground cursor-pointer">
                              Herstelwerkzaamheden
                            </label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="grofvuil"
                              checked={formData.grofvuil}
                              onCheckedChange={(checked) => setFormData({ ...formData, grofvuil: checked as boolean })}
                              className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            />
                            <label htmlFor="grofvuil" className="text-sm text-foreground cursor-pointer">
                              Grofvuil afvoeren
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Contact */}
                    {currentStep === 3 && (
                      <div className="space-y-4">
                        <div>
                          <Label className="text-foreground text-sm mb-2 block">Naam *</Label>
                          <Input
                            placeholder="Uw naam"
                            value={formData.naam}
                            onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
                            className="bg-background border-0 h-11"
                            required
                          />
                        </div>

                        <div>
                          <Label className="text-foreground text-sm mb-2 block">E-mail *</Label>
                          <Input
                            type="email"
                            placeholder="uw@email.nl"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="bg-background border-0 h-11"
                            required
                          />
                        </div>

                        <div>
                          <Label className="text-foreground text-sm mb-2 block">Telefoon</Label>
                          <Input
                            type="tel"
                            placeholder="06 12345678"
                            value={formData.telefoon}
                            onChange={(e) => setFormData({ ...formData, telefoon: e.target.value })}
                            className="bg-background border-0 h-11"
                          />
                        </div>

                        <div>
                          <Label className="text-foreground text-sm mb-2 block">Gewenste Startdatum</Label>
                          <Input
                            type="date"
                            value={formData.startdatum}
                            onChange={(e) => setFormData({ ...formData, startdatum: e.target.value })}
                            className="bg-background border-0 h-11"
                          />
                        </div>

                        <div>
                          <Label className="text-foreground text-sm mb-2 block">Opmerkingen</Label>
                          <Textarea
                            placeholder="Eventuele extra informatie..."
                            value={formData.opmerkingen}
                            onChange={(e) => setFormData({ ...formData, opmerkingen: e.target.value })}
                            className="bg-background border-0 min-h-[80px]"
                          />
                        </div>
                      </div>
                    )}

                    {/* Navigation buttons */}
                    <div className="flex gap-3 pt-4">
                      {currentStep > 1 && (
                        <Button
                          type="button"
                          onClick={handlePrevious}
                          variant="outline"
                          className="flex-1 bg-muted hover:bg-muted/90 text-foreground border-0 h-12"
                        >
                          <ChevronLeft className="w-4 h-4 mr-1" />
                          Vorige
                        </Button>
                      )}
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12"
                      >
                        {currentStep === 3 ? "Bereken Prijs" : "Volgende"}
                        {currentStep < 3 && <ChevronRight className="w-4 h-4 ml-1" />}
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                // Result display
                <div className="text-center space-y-6">
                  <h3 className="font-bold text-2xl text-foreground">Uw Geschatte Prijsindicatie:</h3>

                  <div className="bg-background rounded-lg p-6">
                    <p className="text-3xl font-bold text-primary mb-2">€ 450 - € 750</p>
                    <p className="text-sm text-muted-foreground">Indicatieve prijs op basis van uw gegevens</p>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-foreground font-bold text-lg mb-2">Onze Prijsgarantie:</p>
                    <p className="text-foreground text-sm">
                      Vindt u elders een lagere prijs? Dan betalen wij u het verschil terug!
                    </p>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 text-base">
                    Vraag Gratis de Definitieve Offerte Aan
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={() => {
                      setShowResult(false)
                      setCurrentStep(1)
                    }}
                    className="text-foreground hover:text-foreground/80 hover:bg-transparent"
                  >
                    Opnieuw berekenen
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
