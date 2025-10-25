"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Loader2, Check, Sparkles, X } from "lucide-react"
import { PhotoUpload } from "@/components/photo-upload"
import { calculatePriceFromAI } from "@/lib/pricing/ai-calculator"

interface AIQuoteFormProps {
  className?: string
}

export function AIQuoteForm({ className = "" }: AIQuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [photos, setPhotos] = useState<File[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState<any[]>([])
  const [priceResult, setPriceResult] = useState<any>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    materiaal: "", // kunststof, hout, aluminium
    kleur: "", // wit, grijs, zwart, houtkleur, etc
    kozijnType: "", // draaikiepraam, schuifraam, vaste beglazing, etc
    vierkanteMeterRamen: "",
    aantalRamen: "",
    glasType: "", // dubbel glas, HR++, triple glas
    montage: true,
    afvoerOudeKozijnen: true,
    naam: "",
    email: "",
    telefoon: "",
  })

  const handleNext = async () => {
    if (currentStep === 1) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      await analyzePhotos()
      setCurrentStep(3)
    }
  }

  // Removed auto-scroll functionality per user request

  const analyzePhotos = async () => {
    if (photos.length === 0) return

    setIsAnalyzing(true)
    const results = []

    try {
      // Build kozijn specifications to send to Gemini
      const kozijnSpecs = {
        materiaal: formData.materiaal,
        kleur: formData.kleur,
        kozijnType: formData.kozijnType,
        glasType: formData.glasType,
      }

      console.log('🎨 Gemini Nano Banana: Genereren van kozijnen previews...')

      for (const photo of photos) {
        const uploadFormData = new FormData()
        uploadFormData.append('file', photo)
        
        // Upload photo first
        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: uploadFormData,
        })
        const { url } = await uploadRes.json()

        try {
          // Generate preview with Gemini
          const generateRes = await fetch('/api/generate-kozijn-preview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              imageUrl: url,
              specs: kozijnSpecs 
            }),
          })
          
          if (!generateRes.ok) {
            const errorData = await generateRes.json()
            console.warn('⚠️ Gemini preview generatie mislukt:', errorData)
            console.warn('⚠️ Gebruik originele foto als fallback')
            
            // Fallback: use original photo
            results.push({ 
              url, 
              previewUrl: url, 
              analysis: { 
                window_count: parseInt(formData.aantalRamen) || 1,
                window_type: formData.kozijnType,
                estimated_size: 0,
                condition: 'good',
                notes: 'Preview niet beschikbaar (Gemini API key vereist)'
              } 
            })
          } else {
            const responseData = await generateRes.json()
            console.log('✅ Gemini preview succesvol gegenereerd!')
            results.push({ 
              url, 
              previewUrl: responseData.previewImage, 
              analysis: {
                window_count: parseInt(formData.aantalRamen) || 1,
                window_type: formData.kozijnType,
                estimated_size: 0,
                condition: 'good',
                notes: 'AI preview gegenereerd met Gemini'
              }
            })
          }
        } catch (error) {
          console.error('❌ Gemini preview error:', error)
          console.warn('⚠️ Gebruik originele foto als fallback')
          
          // Fallback: use original photo
          results.push({ 
            url, 
            previewUrl: url, 
            analysis: {
              window_count: parseInt(formData.aantalRamen) || 1,
              window_type: formData.kozijnType,
              estimated_size: 0,
              condition: 'good',
              notes: 'Preview fout - originele foto getoond'
            }
          })
        }
      }

      setAnalysisResults(results)
      
      console.log('📊 Alle Gemini previews gegenereerd:', results)
      console.log('📋 Form data voor berekening:', formData)

      // Bereken prijs op basis van kozijn specs
      const priceCalculation = calculatePriceFromAI(formData, results)
      
      console.log('💰 Berekende prijs:', priceCalculation)
      console.log('💰 Totaal:', priceCalculation.total)
      console.log('💰 Breakdown:', priceCalculation.breakdown)
      
      setPriceResult({
        total: priceCalculation.total,
        breakdown: {
          kozijnen: priceCalculation.breakdown.kozijnen,
          glas: priceCalculation.breakdown.glas,
          montage: priceCalculation.breakdown.montage,
          afvoer: priceCalculation.breakdown.afvoer,
        }
      })
      
      console.log('✅ Prijs en previews gereed!')
    } catch (error) {
      console.error('Analysis error:', error)
      alert('Er ging iets mis bij het genereren van de preview. Probeer opnieuw.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progressPercentage = (currentStep / 3) * 100

  return (
    <Card ref={formRef} className={`p-6 lg:p-8 bg-white shadow-2xl border-0 ${className}`}>
      {currentStep < 3 ? (
        <>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-10 h-10 lg:w-7 lg:h-7 text-primary" />
            <h3 className="font-bold text-xl text-foreground">
              Direct een prijsindicatie en AI preview van uw nieuwe kozijnen.
            </h3>
          </div>
          <p className="text-sm italic text-muted-foreground mb-4">
            {currentStep === 1 && "Vul uw voorkeuren in voor de nieuwe kozijnen"}
            {currentStep === 2 && "Upload minimaal 1 foto van uw ramen (binnen of buiten)"}
          </p>

          <div className="mb-6">
            <div className="flex justify-between text-xs text-foreground mb-2">
              <span className={currentStep >= 1 ? "font-bold" : ""}>Gegevens</span>
              <span className={currentStep >= 2 ? "font-bold" : ""}>Foto's</span>
              <span className={currentStep >= 3 ? "font-bold" : ""}>Resultaat</span>
            </div>
            <Progress value={progressPercentage} className="h-2 bg-muted" />
          </div>

          <form className="space-y-4">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <Label className="text-foreground text-sm mb-2 block">Materiaal Kozijnen *</Label>
                  <Select
                    value={formData.materiaal}
                    onValueChange={(value) => setFormData({ ...formData, materiaal: value })}
                  >
                    <SelectTrigger className="bg-background border-0 h-11">
                      <SelectValue placeholder="Kies materiaal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kunststof">Kunststof (PVC)</SelectItem>
                      <SelectItem value="hout">Hout</SelectItem>
                      <SelectItem value="aluminium">Aluminium</SelectItem>
                      <SelectItem value="hout-aluminium">Hout/Aluminium combinatie</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-foreground text-sm mb-2 block">Kleur *</Label>
                  <Select
                    value={formData.kleur}
                    onValueChange={(value) => setFormData({ ...formData, kleur: value })}
                  >
                    <SelectTrigger className="bg-background border-0 h-11">
                      <SelectValue placeholder="Kies kleur" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wit">Wit</SelectItem>
                      <SelectItem value="creme">Crème</SelectItem>
                      <SelectItem value="grijs">Grijs (RAL 7016)</SelectItem>
                      <SelectItem value="antraciet">Antraciet (RAL 7021)</SelectItem>
                      <SelectItem value="zwart">Zwart</SelectItem>
                      <SelectItem value="donkergroen">Donkergroen (RAL 6009)</SelectItem>
                      <SelectItem value="houtkleur">Houtkleur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-foreground text-sm mb-2 block">Type Kozijn *</Label>
                  <Select
                    value={formData.kozijnType}
                    onValueChange={(value) => setFormData({ ...formData, kozijnType: value })}
                  >
                    <SelectTrigger className="bg-background border-0 h-11">
                      <SelectValue placeholder="Selecteer type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draaikiepraam">Draaikiepraam</SelectItem>
                      <SelectItem value="draadraam">Draadraam</SelectItem>
                      <SelectItem value="kiepraam">Kiepraam</SelectItem>
                      <SelectItem value="schuifraam">Schuifraam</SelectItem>
                      <SelectItem value="vaste-beglazing">Vaste beglazing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-foreground text-sm mb-2 block">Type Glas *</Label>
                  <Select
                    value={formData.glasType}
                    onValueChange={(value) => setFormData({ ...formData, glasType: value })}
                  >
                    <SelectTrigger className="bg-background border-0 h-11">
                      <SelectValue placeholder="Kies glastype" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dubbel">Dubbel glas</SelectItem>
                      <SelectItem value="hr++">HR++ glas</SelectItem>
                      <SelectItem value="triple">Triple glas</SelectItem>
                      <SelectItem value="geluidswerend">Geluidswerend glas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-foreground text-sm mb-2 block">Aantal Ramen *</Label>
                  <Input
                    type="number"
                    placeholder="Bijv. 8"
                    value={formData.aantalRamen}
                    onChange={(e) => setFormData({ ...formData, aantalRamen: e.target.value })}
                    className="bg-background border-0 h-11"
                    required
                    min="1"
                  />
                </div>

                <div>
                  <Label className="text-foreground text-sm mb-2 block">Totaal m² Glas (schatting) *</Label>
                  <Select
                    value={formData.vierkanteMeterRamen}
                    onValueChange={(value) => setFormData({ ...formData, vierkanteMeterRamen: value })}
                  >
                    <SelectTrigger className="bg-background border-0 h-11">
                      <SelectValue placeholder="Selecteer oppervlakte" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10">5-10 m²</SelectItem>
                      <SelectItem value="10-15">10-15 m²</SelectItem>
                      <SelectItem value="15-20">15-20 m²</SelectItem>
                      <SelectItem value="20-30">20-30 m²</SelectItem>
                      <SelectItem value="30-40">30-40 m²</SelectItem>
                      <SelectItem value="40+">40+ m²</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-foreground text-sm block">Extra Services</Label>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="montage"
                      checked={formData.montage}
                      onCheckedChange={(checked) => setFormData({ ...formData, montage: checked as boolean })}
                      className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <label htmlFor="montage" className="text-sm text-foreground cursor-pointer">
                      Montage (aangeraden)
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="afvoer"
                      checked={formData.afvoerOudeKozijnen}
                      onCheckedChange={(checked) => setFormData({ ...formData, afvoerOudeKozijnen: checked as boolean })}
                      className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <label htmlFor="afvoer" className="text-sm text-foreground cursor-pointer">
                      Afvoer oude kozijnen
                    </label>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-3 -mx-6 lg:-mx-8 px-6 lg:px-8">
                <div>
                  <Label className="text-foreground text-base font-semibold mb-2 block">Foto's van uw ramen uploaden *</Label>
                  <p className="text-sm text-muted-foreground mb-3">
                    Upload minimaal 1 foto van uw ramen (binnen of buitenkant)
                  </p>
                  <PhotoUpload 
                    onPhotosChange={setPhotos}
                    maxPhotos={5}
                    minPhotos={1}
                  />
                </div>
                
                {isAnalyzing && (
                  <Card className="p-4 bg-primary/5 border-primary/20">
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-5 h-5 text-primary animate-spin" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          AI analyseert uw foto's en genereert preview...
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Dit kan 30-60 seconden duren
                        </p>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            )}

            <div className="flex gap-3 pt-4">
              {currentStep > 1 && !isAnalyzing && (
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
                disabled={
                  (currentStep === 1 && (!formData.materiaal || !formData.kleur || !formData.kozijnType || !formData.glasType || !formData.aantalRamen || !formData.vierkanteMeterRamen)) ||
                  (currentStep === 2 && photos.length < 1) ||
                  isAnalyzing
                }
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Analyseren & Genereren...
                  </>
                ) : (
                  <>
                    {currentStep === 2 ? "Bereken Prijs & Genereer Preview" : "Volgende"}
                    {currentStep < 2 && <ChevronRight className="w-4 h-4 ml-1" />}
                  </>
                )}
              </Button>
            </div>
          </form>
        </>
      ) : (
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-2">
            <Check className="w-4 h-4" />
            <span className="text-sm font-semibold">AI Analyse & Preview Klaar</span>
          </div>

          <h3 className="font-bold text-2xl text-foreground">Uw Instant Offerte:</h3>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border-2 border-primary/20">
            <p className="text-4xl font-bold text-primary mb-2">
              €{priceResult?.total || '4.500'}
            </p>
            <p className="text-sm text-muted-foreground">
              Totale offerte voor {formData.aantalRamen} {formData.materiaal} raamkozijnen
            </p>
          </div>

          <div className="bg-background rounded-lg p-4 space-y-2 text-left">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Kozijnen ({formData.materiaal})</span>
              <span className="font-medium">€{priceResult?.breakdown.kozijnen || 2800}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Glas ({formData.glasType})</span>
              <span className="font-medium">€{priceResult?.breakdown.glas || 900}</span>
            </div>
            {formData.montage && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Montage</span>
                <span className="font-medium">€{priceResult?.breakdown.montage || 600}</span>
              </div>
            )}
            {formData.afvoerOudeKozijnen && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Afvoer oude kozijnen</span>
                <span className="font-medium">€{priceResult?.breakdown.afvoer || 200}</span>
              </div>
            )}
          </div>

          {/* Voor & Na Vergelijking */}
          {analysisResults.length > 0 && (
            <div className="bg-background rounded-lg p-4 text-left border-2 border-primary/20">
              <h4 className="font-semibold text-base text-foreground mb-3">🎨 Voor & Na: Uw nieuwe {formData.materiaal} kozijnen</h4>
              <div className="space-y-6">
                {analysisResults.map((result, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Originele foto */}
                      <div className="space-y-2">
                        <div 
                          className="relative rounded-lg overflow-hidden border-2 border-border cursor-pointer hover:border-primary transition-colors group"
                          onClick={() => setEnlargedImage(result.url)}
                        >
                          <img
                            src={result.url}
                            alt={`Huidige kozijnen ${idx + 1}`}
                            className="w-full h-auto object-contain max-h-64"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <span className="text-white opacity-0 group-hover:opacity-100 text-sm bg-black/50 px-3 py-1 rounded">
                              🔍 Klik om te vergroten
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-center text-muted-foreground font-medium">
                          📸 Huidige kozijnen
                        </p>
                      </div>

                      {/* AI Preview */}
                      <div className="space-y-2">
                        <div 
                          className="relative rounded-lg overflow-hidden border-2 border-border cursor-pointer hover:border-primary transition-colors group"
                          onClick={() => setEnlargedImage(result.previewUrl || result.url)}
                        >
                          <img
                            src={result.previewUrl || result.url}
                            alt={`Nieuwe kozijnen ${idx + 1}`}
                            className="w-full h-auto object-contain max-h-64"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <span className="text-white opacity-0 group-hover:opacity-100 text-sm bg-black/50 px-3 py-1 rounded">
                              🔍 Klik om te vergroten
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-center text-primary font-medium">
                          ✨ Nieuwe kozijnen
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                <p className="text-xs text-foreground text-center">
                  ✨ <strong>Powered by Google Gemini "Nano Banana"</strong> - Deze previews zijn gegenereerd door AI op basis van uw gekozen specificaties: {formData.materiaal} kozijnen in {formData.kleur} met {formData.glasType}.
                </p>
              </div>
            </div>
          )}

          {/* Specificaties overzicht */}
          <div className="bg-muted/30 rounded-lg p-4 text-left">
            <h4 className="font-bold text-base text-foreground mb-3">📋 Uw Specificaties:</h4>
            
            <div className="bg-background rounded-md p-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Aantal ramen:</span>
                <span className="font-medium text-foreground">{formData.aantalRamen}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Totaal m² glas:</span>
                <span className="font-medium text-foreground">{formData.vierkanteMeterRamen}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Materiaal:</span>
                <span className="font-medium text-foreground">{formData.materiaal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Kleur:</span>
                <span className="font-medium text-foreground">{formData.kleur}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type:</span>
                <span className="font-medium text-foreground">{formData.kozijnType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Glastype:</span>
                <span className="font-medium text-foreground">{formData.glasType}</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 rounded-lg p-4">
            <p className="text-foreground font-bold text-lg mb-2">💰 Laagste Prijs Garantie</p>
            <p className="text-foreground text-sm">
              Vindt u dezelfde kozijnen elders goedkoper? Dan betalen wij het verschil terug!
            </p>
          </div>

          <div className="space-y-3 text-left pt-4">
            <Label className="text-foreground text-sm">Uw gegevens voor bevestiging:</Label>
            <Input
              placeholder="Naam"
              value={formData.naam}
              onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
              className="bg-background border-0 h-11"
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background border-0 h-11"
            />
            <Input
              type="tel"
              placeholder="Telefoon"
              value={formData.telefoon}
              onChange={(e) => setFormData({ ...formData, telefoon: e.target.value })}
              className="bg-background border-0 h-11"
            />
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 text-base">
            Bevestig Offerte & Plan Opname
          </Button>

          <Button
            variant="ghost"
            onClick={() => {
              setCurrentStep(1)
              setPhotos([])
              setAnalysisResults([])
              setPriceResult(null)
              setFormData({
                materiaal: "",
                kleur: "",
                kozijnType: "",
                vierkanteMeterRamen: "",
                aantalRamen: "",
                glasType: "",
                montage: true,
                afvoerOudeKozijnen: true,
                naam: "",
                email: "",
                telefoon: "",
              })
            }}
            className="text-foreground hover:text-foreground/80 hover:bg-transparent"
          >
            Nieuwe berekening starten
          </Button>
        </div>
      )}

      {/* Lightbox Modal voor vergrote foto's */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 flex items-center gap-2 text-lg"
            >
              <X className="w-6 h-6" />
              Sluiten
            </button>
            <img
              src={enlargedImage}
              alt="Vergrote weergave"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-sm">
              Klik buiten de foto om te sluiten
            </p>
          </div>
        </div>
      )}
    </Card>
  )
}



