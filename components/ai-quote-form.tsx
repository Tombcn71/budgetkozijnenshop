"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Loader2, Check, Sparkles, X, ZoomIn, Share2 } from "lucide-react"
import { PhotoUpload } from "@/components/photo-upload"

// ============================================================================
// TYPES & INTERFACES - Nieuwe Pricing Calculator
// ============================================================================

interface WoningtypeData {
  label: string
  kozijnenRange: {
    min: number
    max: number
  }
  glasRange: {
    min: number
    max: number
  }
}

interface PriceRange {
  min: number
  max: number
}

type WoningtypeKey = 'appartement' | 'tussenwoning' | 'hoekwoning' | 'twee_onder_een_kap' | 'vrijstaand'
type GlasType = 'hr++' | 'hr+++'

// ============================================================================
// CONSTANTEN - Woningtype Data uit Marktonderzoek
// ============================================================================

const WONINGTYPE_DATA: Record<WoningtypeKey, WoningtypeData> = {
  appartement: {
    label: 'Appartement',
    kozijnenRange: { min: 6, max: 8 },
    glasRange: { min: 10, max: 18 }
  },
  tussenwoning: {
    label: 'Tussenwoning',
    kozijnenRange: { min: 8, max: 10 },
    glasRange: { min: 18, max: 22 }
  },
  hoekwoning: {
    label: 'Hoekwoning',
    kozijnenRange: { min: 10, max: 12 },
    glasRange: { min: 20, max: 25 }
  },
  twee_onder_een_kap: {
    label: 'Twee-onder-een-kap',
    kozijnenRange: { min: 12, max: 15 },
    glasRange: { min: 25, max: 30 }
  },
  vrijstaand: {
    label: 'Vrijstaande woning',
    kozijnenRange: { min: 15, max: 20 },
    glasRange: { min: 30, max: 40 }
  }
}

// Prijs per vierkante meter (inclusief montage en HR++ glas)
const PRICE_PER_M2 = {
  min: 1000, // Basis kunststof kozijnen
  max: 1400  // Premium kunststof kozijnen
} as const

// ============================================================================
// CALCULATIE FUNCTIES
// ============================================================================

/**
 * Bereken prijs range op basis van glasoppervlakte en glastype
 */
function calculatePriceRange(
  glasoppervlakte: string | number,
  glasType: GlasType
): PriceRange | null {
  if (!glasoppervlakte) return null
  
  const m2 = typeof glasoppervlakte === 'string' 
    ? parseInt(glasoppervlakte, 10) 
    : glasoppervlakte
  
  // Basis berekening
  let minPrice = m2 * PRICE_PER_M2.min  // Gekozen m² × €1.000
  let maxPrice = m2 * PRICE_PER_M2.max  // Gekozen m² × €1.400
  
  // Als HR+++ gekozen, +10% op beide prijzen
  if (glasType === 'hr+++') {
    minPrice = Math.round(minPrice * 1.10)
    maxPrice = Math.round(maxPrice * 1.10)
  }
  
  return { min: minPrice, max: maxPrice }
}

/**
 * Genereer array met aantal kozijnen opties op basis van woningtype
 */
function getKozijnenOptions(woningtype: WoningtypeKey): number[] {
  const data = WONINGTYPE_DATA[woningtype]
  if (!data) return []
  
  const options: number[] = []
  for (let i = data.kozijnenRange.min; i <= data.kozijnenRange.max; i++) {
    options.push(i)
  }
  return options
}

/**
 * Genereer array met glasoppervlakte opties (in m²) op basis van woningtype
 */
function getGlasoppervlakteOptions(woningtype: WoningtypeKey): number[] {
  const data = WONINGTYPE_DATA[woningtype]
  if (!data) return []
  
  const options: number[] = []
  for (let i = data.glasRange.min; i <= data.glasRange.max; i++) {
    options.push(i)
  }
  return options
}

/**
 * Format prijs naar Nederlands formaat (€20.000)
 */
function formatPrice(price: number): string {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

// ============================================================================
// COMPONENT
// ============================================================================

interface AIQuoteFormProps {
  className?: string
}

export function AIQuoteForm({ className = "" }: AIQuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [photos, setPhotos] = useState<File[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState<any[]>([])
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    woningtype: "" as WoningtypeKey | "",
    aantalRamen: "",
    glasoppervlakte: "", // Exacte m² (nummer)
    glasType: "hr++" as GlasType,
    materiaal: "", // kunststof, hout, aluminium
    kleur: "", // wit, grijs, zwart, houtkleur, etc
    kozijnType: "", // draaikiepraam, schuifraam, vaste beglazing, etc
    montage: true,
    afvoerOudeKozijnen: true,
    naam: "",
    email: "",
    telefoon: "",
  })

  // Bereken prijs automatisch bij wijziging van glasoppervlakte of glasType
  const priceRange = formData.glasoppervlakte 
    ? calculatePriceRange(formData.glasoppervlakte, formData.glasType)
    : null

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [currentStep])

  const handleShare = async (imageUrl: string, title: string) => {
    try {
      // Check if Web Share API is supported
      if (navigator.share) {
        // Fetch the image and convert to blob
        const response = await fetch(imageUrl)
        const blob = await response.blob()
        const file = new File([blob], 'kozijnen.jpg', { type: 'image/jpeg' })
        
        await navigator.share({
          title: title,
          text: `Bekijk mijn nieuwe ${formData.materiaal} kozijnen in ${formData.kleur}!`,
          files: [file]
        })
      } else {
        // Fallback: copy link to clipboard
        await navigator.clipboard.writeText(imageUrl)
        alert('Link gekopieerd naar clipboard!')
      }
    } catch (error) {
      console.log('Share cancelled or failed:', error)
    }
  }

  const handleNext = async () => {
    if (currentStep === 1) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      await analyzePhotos()
      setCurrentStep(3)
    }
  }

  const analyzePhotos = async () => {
    setIsAnalyzing(true)
    const results = []

    try {
      // Alleen AI preview genereren als er foto's zijn EN materiaal/kleur/type gekozen zijn
      if (photos.length === 0) {
        console.log('⏭️ Geen foto\'s geüpload - sla AI preview over')
        setAnalysisResults([])
        setIsAnalyzing(false)
        return
      }

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
      console.log('✅ AI previews gereed!')
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
    <Card className={`p-4 sm:p-6 lg:p-8 bg-white shadow-2xl border-0 ${className}`}>
      {currentStep < 3 ? (
        <>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
              <h2 className="font-bold text-base sm:text-lg lg:text-xl text-foreground">
                Direct een prijsindicatie en AI preview van uw nieuwe kozijnen.
              </h2>
          </div>
          <p className="text-xs sm:text-sm italic text-muted-foreground mb-3">
            {currentStep === 1 && "Vul uw voorkeuren in voor de nieuwe kozijnen"}
            {currentStep === 2 && "Upload foto's voor AI preview (optioneel maar aanbevolen)"}
          </p>

          <div className="mb-4">
            <div className="flex justify-between text-xs text-foreground mb-2">
              <span className={currentStep >= 1 ? "font-bold" : ""}>Gegevens</span>
              <span className={currentStep >= 2 ? "font-bold" : ""}>Preview</span>
              <span className={currentStep >= 3 ? "font-bold" : ""}>Offerte</span>
            </div>
            <Progress 
              value={progressPercentage} 
              className="h-2 bg-muted" 
              aria-label={`Stap ${currentStep} van 3`}
              aria-valuenow={progressPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>

          <form className="space-y-4">
            {currentStep === 1 && (
              <div className="space-y-4">
                {/* STAP 1A: Woningtype Selectie */}
                <div>
                  <Label className="text-foreground text-sm font-semibold mb-3 block">
                    Wat voor type woning heeft u? *
                  </Label>
                  <div className="grid grid-cols-1 gap-2">
                    {(Object.entries(WONINGTYPE_DATA) as [WoningtypeKey, WoningtypeData][]).map(([key, value]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          setFormData({ 
                            ...formData, 
                            woningtype: key,
                            aantalRamen: '', // Reset dependent fields
                            glasoppervlakte: ''
                          })
                        }}
                        className={`p-3 border-2 rounded-lg text-left transition-all ${
                          formData.woningtype === key
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="font-semibold text-foreground text-sm">{value.label}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {value.kozijnenRange.min}-{value.kozijnenRange.max} kozijnen · {value.glasRange.min}-{value.glasRange.max} m² glas
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* STAP 1B: Details (alleen tonen als woningtype gekozen) */}
                {formData.woningtype && (
                  <>
                    {/* Aantal Kozijnen */}
                <div>
                      <Label className="text-foreground text-sm mb-2 block">Hoeveel kozijnen wilt u vervangen? *</Label>
                  <Select
                        value={formData.aantalRamen}
                        onValueChange={(value) => setFormData({ ...formData, aantalRamen: value })}
                  >
                    <SelectTrigger className="bg-background border-0 h-11">
                          <SelectValue placeholder="Kies aantal kozijnen" />
                    </SelectTrigger>
                    <SelectContent>
                          {getKozijnenOptions(formData.woningtype).map(num => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} kozijnen
                            </SelectItem>
                          ))}
                    </SelectContent>
                  </Select>
                </div>

                    {/* Glasoppervlakte */}
                <div>
                      <Label className="text-foreground text-sm mb-2 block">Totale glasoppervlakte (alle ramen samen) *</Label>
                  <Select
                        value={formData.glasoppervlakte}
                        onValueChange={(value) => setFormData({ ...formData, glasoppervlakte: value })}
                  >
                    <SelectTrigger className="bg-background border-0 h-11">
                          <SelectValue placeholder="Kies glasoppervlakte" />
                    </SelectTrigger>
                    <SelectContent>
                          {getGlasoppervlakteOptions(formData.woningtype).map(num => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} m²
                            </SelectItem>
                          ))}
                    </SelectContent>
                  </Select>
                </div>

                    {/* Glastype (HR++ of HR+++) */}
                <div>
                      <Label className="text-foreground text-sm font-semibold mb-3 block">
                        Welk type glas wenst u? *
                      </Label>
                      <div className="grid grid-cols-1 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, glasType: 'hr++' })}
                          className={`p-3 border-2 rounded-lg text-left transition-all ${
                            formData.glasType === 'hr++'
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="font-semibold text-foreground text-sm">HR++ glas</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Standaard isolatie - inbegrepen in prijs
                </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, glasType: 'hr+++' })}
                          className={`p-3 border-2 rounded-lg text-left transition-all ${
                            formData.glasType === 'hr+++'
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="font-semibold text-foreground text-sm">HR+++ glas</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Beste isolatie - +10% op totaalprijs
              </div>
                        </button>
                  </div>
                  </div>

                    <p className="text-xs text-muted-foreground italic">
                      💡 Niet zeker van de maten? Kies een schatting - we bespreken de exacte details later
                    </p>
                  </>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                {/* AI Preview Sectie - Optioneel maar aanbevolen */}
                <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-4">
                  <div className="flex items-start gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-sm text-foreground mb-1">
                        ✨ AI Preview (Aanbevolen)
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Upload foto's van uw huidige ramen en zie direct hoe de nieuwe kozijnen eruit gaan zien!
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Foto Upload */}
                    <div>
                      <Label className="text-foreground text-xs sm:text-sm font-medium mb-1 block">
                        Upload foto's (optioneel)
                      </Label>
                      <p className="text-xs text-muted-foreground mb-2">
                        0-5 foto's (binnen of buiten)
                      </p>
                      <PhotoUpload 
                        onPhotosChange={setPhotos}
                        maxPhotos={5}
                        minPhotos={0}
                      />
                    </div>

                    {/* Materiaal, Kleur, Type Kozijn - Alleen tonen als foto's zijn geüpload */}
                    {photos.length > 0 && (
                      <>
                        <div className="border-t border-border pt-4">
                          <p className="text-xs text-muted-foreground mb-3">
                            Voor AI preview: kies materiaal, kleur en type kozijn
                          </p>

                          <div className="space-y-3">
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
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Extra Services sectie */}
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

            <div className="flex gap-2 pt-2 sm:pt-3">
              {currentStep > 1 && !isAnalyzing && (
                <Button
                  type="button"
                  onClick={handlePrevious}
                  variant="outline"
                  className="flex-1 bg-muted hover:bg-muted/90 text-foreground border-0 h-10 text-sm"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Vorige
                </Button>
              )}
              <Button
                type="button"
                onClick={handleNext}
                disabled={
                  (currentStep === 1 && (!formData.woningtype || !formData.aantalRamen || !formData.glasoppervlakte)) ||
                  (currentStep === 2 && photos.length > 0 && (!formData.materiaal || !formData.kleur || !formData.kozijnType)) ||
                  isAnalyzing
                }
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-10 text-sm disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    <span className="hidden sm:inline">{photos.length > 0 ? "AI Preview Genereren..." : "Offerte Voorbereiden..."}</span>
                    <span className="sm:hidden">Bezig...</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">{currentStep === 2 ? "Bekijk Offerte" : "Volgende"}</span>
                    <span className="sm:hidden">{currentStep === 2 ? "Offerte" : "Volgende"}</span>
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

            <h2 className="font-bold text-2xl text-foreground">Uw Instant Offerte:</h2>

          {priceRange && (
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border-2 border-primary/20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Vanaf</p>
                  <p className="text-4xl font-bold text-primary">
                    {formatPrice(priceRange.min)}
                  </p>
                </div>
                <div className="text-2xl text-muted-foreground">-</div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Tot</p>
                  <p className="text-4xl font-bold text-primary">
                    {formatPrice(priceRange.max)}
                  </p>
                </div>
              </div>
            <p className="text-sm text-muted-foreground">
                Totale offerte voor {formData.aantalRamen} {formData.materiaal ? `${formData.materiaal} ` : ''}raamkozijnen
            </p>
          </div>
          )}

          <div className="bg-background rounded-lg p-4 space-y-2 text-left">
            <p className="text-xs text-muted-foreground mb-2">Inbegrepen in uw offerte:</p>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Kozijnen & Installatie</span>
              <span className="font-medium">✓</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{formData.glasType === 'hr++' ? 'HR++ glas' : 'HR+++ glas'} ({formData.glasoppervlakte} m²)</span>
              <span className="font-medium">✓</span>
            </div>
            {formData.montage && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Montage door professionals</span>
                <span className="font-medium">✓</span>
              </div>
            )}
            {formData.afvoerOudeKozijnen && (
            <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Afvoer oude kozijnen</span>
                <span className="font-medium">✓</span>
            </div>
            )}
            <div className="border-t border-border pt-2 mt-2">
              <p className="text-xs text-muted-foreground">
                ✓ Vanaf-prijs: basis kunststof kozijnen<br/>
                ✓ Tot-prijs: premium opties & afwerking
              </p>
            </div>
          </div>

          {/* Voor & Na Vergelijking - Alleen tonen als er foto's zijn */}
          {analysisResults.length > 0 && formData.materiaal && (
            <div className="bg-background rounded-lg p-4 text-left border-2 border-primary/20">
              <h3 className="font-semibold text-base text-foreground mb-3">🎨 Voor & Na: Uw nieuwe {formData.materiaal} kozijnen</h3>
              <div className="space-y-6">
                {analysisResults.map((result, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Originele foto */}
                      <div className="space-y-2">
                        <div 
                          className="relative rounded-lg overflow-hidden border-2 border-border group"
                        >
                          <img
                            src={result.url}
                            alt={`Huidige kozijnen ${idx + 1}`}
                            className="w-full h-auto object-contain max-h-64 cursor-pointer"
                            onClick={() => setEnlargedImage(result.url)}
                          />
                          <div className="absolute top-2 right-2 flex gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleShare(result.url, 'Huidige kozijnen')
                              }}
                              className="bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors"
                              aria-label="Deel huidige kozijn foto"
                              title="Deel foto"
                            >
                              <Share2 className="w-4 h-4 text-white" />
                            </button>
                            <button
                              onClick={() => setEnlargedImage(result.url)}
                              className="bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors"
                              aria-label="Vergroot huidige kozijn foto"
                              title="Vergroot foto"
                            >
                              <ZoomIn className="w-4 h-4 text-white" />
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-center text-muted-foreground font-medium">
                          📸 Huidige kozijnen
                        </p>
                      </div>

                      {/* AI Preview */}
                      <div className="space-y-2">
                        <div 
                          className="relative rounded-lg overflow-hidden border-2 border-border group"
                        >
                          <img
                            src={result.previewUrl || result.url}
                            alt={`Nieuwe kozijnen ${idx + 1}`}
                            className="w-full h-auto object-contain max-h-64 cursor-pointer"
                            onClick={() => setEnlargedImage(result.previewUrl || result.url)}
                          />
                          <div className="absolute top-2 right-2 flex gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleShare(result.previewUrl || result.url, 'Nieuwe kozijnen')
                              }}
                              className="bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors"
                              aria-label="Deel nieuwe kozijn preview"
                              title="Deel preview"
                            >
                              <Share2 className="w-4 h-4 text-white" />
                            </button>
                            <button
                              onClick={() => setEnlargedImage(result.previewUrl || result.url)}
                              className="bg-black/60 p-1.5 rounded-full hover:bg-black/80 transition-colors"
                              aria-label="Vergroot nieuwe kozijn preview"
                              title="Vergroot preview"
                            >
                              <ZoomIn className="w-4 h-4 text-white" />
                            </button>
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
            <h3 className="font-bold text-base text-foreground mb-3">📋 Uw Specificaties:</h3>
                
                <div className="bg-background rounded-md p-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                <span className="text-muted-foreground">Woningtype:</span>
                <span className="font-medium text-foreground">{formData.woningtype ? WONINGTYPE_DATA[formData.woningtype as WoningtypeKey].label : '-'}</span>
              </div>
                  <div className="flex justify-between">
                <span className="text-muted-foreground">Aantal kozijnen:</span>
                <span className="font-medium text-foreground">{formData.aantalRamen}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Glasoppervlakte:</span>
                <span className="font-medium text-foreground">{formData.glasoppervlakte} m²</span>
                  </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Glastype:</span>
                <span className="font-medium text-foreground">{formData.glasType === 'hr++' ? 'HR++ glas' : 'HR+++ glas'}</span>
              </div>
              {formData.materiaal && (
                  <div className="flex justify-between">
                <span className="text-muted-foreground">Materiaal:</span>
                <span className="font-medium text-foreground">{formData.materiaal}</span>
                  </div>
              )}
              {formData.kleur && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Kleur:</span>
                <span className="font-medium text-foreground">{formData.kleur}</span>
                    </div>
              )}
              {formData.kozijnType && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type kozijn:</span>
                <span className="font-medium text-foreground">{formData.kozijnType}</span>
                    </div>
                  )}
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
              setFormData({
                woningtype: "",
                aantalRamen: "",
                glasoppervlakte: "",
                glasType: "hr++",
                materiaal: "",
                kleur: "",
                kozijnType: "",
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
                <div className="absolute -top-12 right-0 flex items-center gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleShare(enlargedImage, 'Mijn nieuwe kozijnen')
                    }}
                    className="text-white hover:text-gray-300 flex items-center gap-2 text-lg"
                  >
                    <Share2 className="w-5 h-5" />
                    Delen
                  </button>
                  <button
                    onClick={() => setEnlargedImage(null)}
                    className="text-white hover:text-gray-300 flex items-center gap-2 text-lg"
                  >
                    <X className="w-6 h-6" />
                    Sluiten
                  </button>
                </div>
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



