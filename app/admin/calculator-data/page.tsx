"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  AlertCircle, 
  Calculator, 
  Database, 
  FileText,
  Settings,
  TrendingUp,
  Eye,
  Download
} from "lucide-react"

export default function CalculatorDataPage() {
  const [showRawData, setShowRawData] = useState(false)

  // Voorbeelddata - dit zou later uit een database komen
  const calculationExamples = [
    {
      id: 1,
      date: "2025-01-20",
      imageAnalysis: {
        detectedWindows: 2,
        estimatedWidth: 1200,
        estimatedHeight: 1400,
        totalArea: 3.36,
        frameType: "draaikiepraam"
      },
      pricing: {
        glassType: "HR++",
        pricePerM2: 94,
        frameCost: 316.8,
        laborCost: 200,
        totalEstimate: 516.8
      },
      userInputs: {
        location: "Rotterdam",
        floors: 2,
        urgency: "binnen 3 maanden"
      }
    },
    {
      id: 2,
      date: "2025-01-19",
      imageAnalysis: {
        detectedWindows: 4,
        estimatedWidth: 800,
        estimatedHeight: 1200,
        totalArea: 3.84,
        frameType: "draairaam"
      },
      pricing: {
        glassType: "Triple",
        pricePerM2: 177,
        frameCost: 679.68,
        laborCost: 400,
        totalEstimate: 1079.68
      },
      userInputs: {
        location: "Den Haag",
        floors: 1,
        urgency: "zo snel mogelijk"
      }
    }
  ]

  // ECHTE TARIEVEN UIT lib/pricing/ai-calculator.ts
  const pricingFactors = {
    materialen: {
      "kunststof": { pricePerM2: 280, description: "Kunststof kozijn" },
      "hout": { pricePerM2: 450, description: "Houten kozijn" },
      "aluminium": { pricePerM2: 550, description: "Aluminium kozijn" },
      "hout-aluminium": { pricePerM2: 650, description: "Hout-aluminium combinatie" }
    },
    glassTypes: {
      "dubbel": { pricePerM2: 80, description: "Standaard dubbel glas" },
      "hr++": { pricePerM2: 120, description: "HR++ isolatieglas" },
      "triple": { pricePerM2: 180, description: "Triple glas, beste isolatie" },
      "geluidswerend": { pricePerM2: 220, description: "Geluidswerend glas" }
    },
    frameTypes: {
      "draaikiepraam": { multiplier: 1.0, description: "Draai-kiep raam (standaard)" },
      "draadraam": { multiplier: 0.9, description: "Alleen draairaam (-10%)" },
      "kiepraam": { multiplier: 0.95, description: "Alleen kiepraam (-5%)" },
      "schuifraam": { multiplier: 1.2, description: "Schuifraam (+20%)" },
      "vaste-beglazing": { multiplier: 0.7, description: "Vaste beglazing (-30%)" }
    },
    kleurToeslagen: {
      "wit": { toeslag: 0, description: "Wit (standaard)" },
      "creme": { toeslag: 0, description: "Creme (standaard)" },
      "grijs": { toeslag: 50, description: "Grijs (+€50/raam)" },
      "antraciet": { toeslag: 50, description: "Antraciet (+€50/raam)" },
      "zwart": { toeslag: 75, description: "Zwart (+€75/raam)" },
      "donkergroen": { toeslag: 50, description: "Donkergroen (+€50/raam)" },
      "houtkleur": { toeslag: 100, description: "Houtkleur (+€100/raam)" }
    },
    montage: 75,        // €75 per raam
    afvoer: 200,        // €200 forfait
    minimumPrijs: 1500  // €1500 minimum totaalprijs
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Warning Banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-2">
            <AlertCircle className="w-5 h-5" />
            <p className="font-semibold">INTERN GEBRUIK - Niet delen met klanten</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Database className="w-10 h-10 text-blue-600" />
              Calculator Data & Analyse
            </h1>
            <p className="text-gray-600 text-lg">
              Interne pagina om berekeningen te analyseren en te verbeteren samen met kozijnproviders
            </p>
          </div>

          {/* Calculation Formulas */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-lg shadow-lg p-6 lg:p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold">Berekeningsformules</h2>
            </div>

            <div className="space-y-6">
              {/* Formula 1 */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-900">1. Kozijn Materiaalkosten</h3>
                <div className="bg-purple-100 rounded-lg p-4 mb-4 font-mono text-sm">
                  <p className="font-bold mb-2">Formule:</p>
                  <p>Kozijn = (Oppervlakteₘ² × MateriaalPrijsₘ² × TypeMultiplier) + (AantalRamen × KleurToeslag)</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Oppervlakte:</strong> Totale m² van alle ramen</p>
                  <p><strong>MateriaalPrijsₘ²:</strong> Kunststof €280 | Hout €450 | Aluminium €550</p>
                  <p><strong>TypeMultiplier:</strong> Draai-kiep 1.0× | Draai 0.9× | Schuif 1.2× | Vast 0.7×</p>
                  <p><strong>KleurToeslag:</strong> Wit/Creme €0 | Grijs/Antraciet €50 | Zwart €75 | Houtkleur €100</p>
                </div>
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
                  <p className="font-semibold text-green-900 mb-2">Voorbeeld:</p>
                  <p className="text-sm">2 ramen van 1.5m × 1.2m = 3.6m², kunststof, draai-kiep, wit</p>
                  <p className="text-sm">(3.6 × 280 × 1.0) + (2 × 0) = <strong>€1,008</strong></p>
                </div>
              </div>

              {/* Formula 2 */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-900">2. Glaskosten</h3>
                <div className="bg-purple-100 rounded-lg p-4 mb-4 font-mono text-sm">
                  <p className="font-bold mb-2">Formule:</p>
                  <p>Glas = Oppervlakteₘ² × GlasPrijsₘ²</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Dubbel glas:</strong> €80/m²</p>
                  <p><strong>HR++ glas:</strong> €120/m²</p>
                  <p><strong>Triple glas:</strong> €180/m²</p>
                  <p><strong>Geluidswerend:</strong> €220/m²</p>
                </div>
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
                  <p className="font-semibold text-green-900 mb-2">Voorbeeld:</p>
                  <p className="text-sm">3.6m² met HR++ glas</p>
                  <p className="text-sm">3.6 × 120 = <strong>€432</strong></p>
                </div>
              </div>

              {/* Formula 3 */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-900">3. Montage & Afvoer</h3>
                <div className="bg-purple-100 rounded-lg p-4 mb-4 font-mono text-sm">
                  <p className="font-bold mb-2">Formule:</p>
                  <p>Montage = AantalRamen × €75 (indien gekozen)</p>
                  <p>Afvoer = €200 forfait (indien gekozen)</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Montage:</strong> €75 per raam (optioneel)</p>
                  <p><strong>Afvoer oude kozijnen:</strong> €200 forfait (optioneel)</p>
                </div>
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
                  <p className="font-semibold text-green-900 mb-2">Voorbeeld:</p>
                  <p className="text-sm">2 ramen met montage + afvoer</p>
                  <p className="text-sm">(2 × 75) + 200 = <strong>€350</strong></p>
                </div>
              </div>

              {/* Formula 4 */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-900">4. Totaalprijs & Minimum</h3>
                <div className="bg-purple-100 rounded-lg p-4 mb-4 font-mono text-sm">
                  <p className="font-bold mb-2">Formule:</p>
                  <p>Subtotaal = Kozijn + Glas + Montage + Afvoer</p>
                  <p className="mt-2"><strong>Totaal = MAX(Subtotaal, €1.500)</strong></p>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Minimum totaalprijs:</strong> €1.500</p>
                  <p><strong>Alle prijzen zijn inclusief BTW</strong></p>
                </div>
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
                  <p className="font-semibold text-green-900 mb-2">Voorbeeld:</p>
                  <p className="text-sm">Kozijn €1,008 + Glas €432 + Montage €150 + Afvoer €200</p>
                  <p className="text-sm">MAX(1790, 1500) = <strong>€1,790</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Pricing Factors */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold">Huidige Prijsfactoren</h2>
            </div>

            {/* Materialen */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Kozijn Materialen</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Type</th>
                      <th className="px-4 py-3 text-left font-semibold">Prijs/m²</th>
                      <th className="px-4 py-3 text-left font-semibold">Omschrijving</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(pricingFactors.materialen).map(([key, value]) => (
                      <tr key={key} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium capitalize">{key}</td>
                        <td className="px-4 py-3 font-bold text-blue-600">€{value.pricePerM2}</td>
                        <td className="px-4 py-3 text-gray-600">{value.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Glass Types */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Glastypen</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Type</th>
                      <th className="px-4 py-3 text-left font-semibold">Prijs/m²</th>
                      <th className="px-4 py-3 text-left font-semibold">Omschrijving</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(pricingFactors.glassTypes).map(([key, value]) => (
                      <tr key={key} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium capitalize">{key}</td>
                        <td className="px-4 py-3 font-bold text-green-600">€{value.pricePerM2}</td>
                        <td className="px-4 py-3 text-gray-600">{value.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Frame Types */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Kozijntypen</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Type</th>
                      <th className="px-4 py-3 text-left font-semibold">Multiplier</th>
                      <th className="px-4 py-3 text-left font-semibold">Impact</th>
                      <th className="px-4 py-3 text-left font-semibold">Omschrijving</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(pricingFactors.frameTypes).map(([key, value]) => (
                      <tr key={key} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{key}</td>
                        <td className="px-4 py-3">{value.multiplier}x</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            value.multiplier === 1.0 ? 'bg-green-100 text-green-800' :
                            value.multiplier <= 1.2 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-orange-100 text-orange-800'
                          }`}>
                            +{Math.round((value.multiplier - 1) * 100)}%
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">{value.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Kleur Toeslagen */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Kleur Toeslagen (per raam)</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Kleur</th>
                      <th className="px-4 py-3 text-left font-semibold">Toeslag per raam</th>
                      <th className="px-4 py-3 text-left font-semibold">Omschrijving</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(pricingFactors.kleurToeslagen).map(([key, value]) => (
                      <tr key={key} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium capitalize">{key}</td>
                        <td className="px-4 py-3 font-bold text-orange-600">
                          {value.toeslag === 0 ? '€0' : `+€${value.toeslag}`}
                        </td>
                        <td className="px-4 py-3 text-gray-600">{value.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Service Costs */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Service Kosten</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Montage per Raam</p>
                  <p className="text-2xl font-bold text-blue-600">
                    €{pricingFactors.montage}
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Afvoer Oude Kozijnen</p>
                  <p className="text-2xl font-bold text-green-600">
                    €{pricingFactors.afvoer}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Forfait</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Minimum Totaalprijs</p>
                  <p className="text-2xl font-bold text-purple-600">
                    €{pricingFactors.minimumPrijs}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Calculations */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-bold">Recente Berekeningen</h2>
              </div>
              <button
                onClick={() => setShowRawData(!showRawData)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Eye className="w-4 h-4" />
                {showRawData ? 'Verberg' : 'Toon'} Raw Data
              </button>
            </div>

            <div className="space-y-6">
              {calculationExamples.map((calc) => (
                <div key={calc.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Berekening #{calc.id}</h3>
                    <span className="text-sm text-gray-500">{calc.date}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Image Analysis */}
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-600 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        AI Analyse
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Ramen:</span>
                          <span className="font-semibold">{calc.imageAnalysis.detectedWindows}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Breedte (est):</span>
                          <span className="font-semibold">{calc.imageAnalysis.estimatedWidth}mm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Hoogte (est):</span>
                          <span className="font-semibold">{calc.imageAnalysis.estimatedHeight}mm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Oppervlakte:</span>
                          <span className="font-semibold">{calc.imageAnalysis.totalArea}m²</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Type:</span>
                          <span className="font-semibold">{calc.imageAnalysis.frameType}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing Breakdown */}
                    <div>
                      <h4 className="font-semibold mb-3 text-green-600 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Prijsopbouw
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Glas type:</span>
                          <span className="font-semibold">{calc.pricing.glassType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Prijs/m²:</span>
                          <span className="font-semibold">€{calc.pricing.pricePerM2}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Kozijn kosten:</span>
                          <span className="font-semibold">€{calc.pricing.frameCost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Montage:</span>
                          <span className="font-semibold">€{calc.pricing.laborCost}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-gray-200">
                          <span className="text-gray-900 font-bold">Totaal:</span>
                          <span className="font-bold text-green-600">€{calc.pricing.totalEstimate}</span>
                        </div>
                      </div>
                    </div>

                    {/* User Inputs */}
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-600 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Klant Input
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Locatie:</span>
                          <span className="font-semibold">{calc.userInputs.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Verdiepingen:</span>
                          <span className="font-semibold">{calc.userInputs.floors}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Urgentie:</span>
                          <span className="font-semibold">{calc.userInputs.urgency}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {showRawData && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
                        {JSON.stringify(calc, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Calculator */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-xl p-6 lg:p-8 mb-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Snelle Rekencheck</h2>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold mb-4">Voorbeeld: 2 kunststof draai-kiep ramen (wit) met HR++ glas + montage + afvoer</h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between pb-2 border-b border-white/20">
                  <span>Afmetingen:</span>
                  <span className="font-bold">2× (1.5m × 1.2m) = 3.6m²</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/20">
                  <span>Kozijn (kunststof):</span>
                  <span className="font-bold">3.6 × €280 × 1.0 = €1,008</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/20">
                  <span>Kleur (wit):</span>
                  <span className="font-bold">2 × €0 = €0</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/20">
                  <span>HR++ glas:</span>
                  <span className="font-bold">3.6 × €120 = €432</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/20">
                  <span>Montage:</span>
                  <span className="font-bold">2 × €75 = €150</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/20">
                  <span>Afvoer oude kozijnen:</span>
                  <span className="font-bold">€200</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/20">
                  <span>Subtotaal:</span>
                  <span className="font-bold">€1,790</span>
                </div>
                <div className="flex justify-between pt-2 text-lg">
                  <span className="font-bold">TOTAAL (incl BTW):</span>
                  <span className="font-bold text-yellow-300">€1,790</span>
                </div>
                <p className="text-xs text-white/70 mt-2">* Prijzen zijn inclusief BTW</p>
              </div>
            </div>
          </div>

          {/* Improvement Suggestions */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-lg p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-orange-600" />
              <h2 className="text-2xl font-bold">Discussiepunten voor Kozijnprovider</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-orange-900">1. Zijn deze formules correct?</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Kloppen de basis berekeningen? Missen we stappen of factoren?
                </p>
                <ul className="text-sm text-gray-600 ml-4 space-y-1">
                  <li>• Is de prijs/m² juist voor HR++ (€94) en HR+++ (€177)?</li>
                  <li>• Zijn de multipliers correct voor verschillende kozijntypen?</li>
                  <li>• Klopt de montage van €100/raam, minimum €200?</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-orange-900">2. Welke variabelen ontbreken?</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Welke factoren beïnvloeden de prijs maar zitten niet in de formule?
                </p>
                <ul className="text-sm text-gray-600 ml-4 space-y-1">
                  <li>• Kleur kozijn (wit standaard, RAL kleuren duurder?)</li>
                  <li>• Aantal ramen (volumekorting vanaf X stuks?)</li>
                  <li>• Verdieping (hoger = duurder montage?)</li>
                  <li>• Toegankelijkheid (steiger nodig = extra kosten?)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-orange-900">3. Toeslagen & Kortingen</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Welke percentages zijn realistisch?
                </p>
                <ul className="text-sm text-gray-600 ml-4 space-y-1">
                  <li>• Spoed toeslag van +20% - te hoog/laag?</li>
                  <li>• Hele woning korting -10% - correct vanaf hoeveel ramen?</li>
                  <li>• Monument toeslag +25% - accuraat?</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-orange-900">4. Extra opties toevoegen</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Welke opties moeten we kunnen berekenen?
                </p>
                <ul className="text-sm text-gray-600 ml-4 space-y-1">
                  <li>• Zonwering (€X per m²)</li>
                  <li>• Horren (€X per stuk)</li>
                  <li>• Veiligheidsglas (€X extra per m²)</li>
                  <li>• Geluidwerend glas (€X extra per m²)</li>
                  <li>• Speciale kleuren/finishes</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-orange-900">5. Regionale & Seizoensprijzen</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Zijn er regionale of seizoensgebonden verschillen?
                </p>
                <ul className="text-sm text-gray-600 ml-4 space-y-1">
                  <li>• Reiskosten per regio - zijn de bedragen realistisch?</li>
                  <li>• Drukte seizoenen - prijsverschil zomer vs winter?</li>
                  <li>• Leveringstijden per seizoen</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Export Button */}
          <div className="mt-8 flex justify-center">
            <button className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
              <Download className="w-5 h-5" />
              Exporteer Data voor Analyse
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

