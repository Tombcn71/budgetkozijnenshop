"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertCircle, Calculator, CheckCircle, Download } from "lucide-react"

// START TARIEVEN (uit lib/pricing/ai-calculator.ts)
const START_TARIEVEN = {
  materiaal: {
    kunststof: 280,
    hout: 450,
    aluminium: 550,
  },
  glas: {
    dubbel: 80,
    "hr++": 120,
    triple: 180,
  },
  type: {
    draai: 0.9,
    "draai-kiep": 1.0,
    schuif: 1.2,
  },
  kleur: {
    wit: 0,
    grijs: 50,
    zwart: 75,
  },
  montage: 75,
  afvoer: 200,
  minimum: 1500,
}

export default function CalculatorDataPage() {
  // BEWERKBARE TARIEVEN - Provider kan hier mee spelen
  const [tarieven, setTarieven] = useState(START_TARIEVEN)
  
  const [testScenario, setTestScenario] = useState({
    m2: 3.6,
    aantalRamen: 2,
    materiaal: "kunststof",
    glas: "hr++",
    type: "draai-kiep",
    kleur: "wit",
    metMontage: true,
    metAfvoer: true,
  })

  // BEREKEN MET INGESTELDE TARIEVEN
  const berekenPrijs = () => {
    const m2 = testScenario.m2
    const aantal = testScenario.aantalRamen

    // 1. Kozijn
    const materiaalPrijs = tarieven.materiaal[testScenario.materiaal as keyof typeof tarieven.materiaal]
    const typeMultiplier = tarieven.type[testScenario.type as keyof typeof tarieven.type]
    const kozijn = m2 * materiaalPrijs * typeMultiplier

    // 2. Kleur
    const kleur = aantal * tarieven.kleur[testScenario.kleur as keyof typeof tarieven.kleur]

    // 3. Glas
    const glasPrijs = tarieven.glas[testScenario.glas as keyof typeof tarieven.glas]
    const glas = m2 * glasPrijs

    // 4. Montage
    const montage = testScenario.metMontage ? aantal * tarieven.montage : 0

    // 5. Afvoer
    const afvoer = testScenario.metAfvoer ? tarieven.afvoer : 0

    // Totaal
    const subtotaal = kozijn + kleur + glas + montage + afvoer
    const totaal = Math.max(subtotaal, tarieven.minimum)

    return {
      kozijn: Math.round(kozijn),
      kleur: Math.round(kleur),
      glas: Math.round(glas),
      montage,
      afvoer,
      subtotaal: Math.round(subtotaal),
      totaal: Math.round(totaal),
    }
  }

  const prijs = berekenPrijs()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Warning */}
      <div className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2">
            <AlertCircle className="w-5 h-5" />
            <p className="font-semibold">INTERN - Calculator Analyse met Kozijnprovider</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Calculator Check</h1>
          <p className="text-gray-600">Doorloop samen met de kozijnprovider of deze berekeningen kloppen</p>
        </div>

        {/* BEWERKBARE TARIEVEN */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-2 text-purple-900">🎯 Pas Tarieven Aan</h2>
          <p className="text-sm text-gray-600 mb-6">Provider: speel met deze prijzen totdat de totaalprijs klopt</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Materiaal Prijzen */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-blue-600">Materiaal (€/m²)</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-600">Kunststof</label>
                  <input
                    type="number"
                    value={tarieven.materiaal.kunststof}
                    onChange={(e) => setTarieven({
                      ...tarieven,
                      materiaal: {...tarieven.materiaal, kunststof: parseFloat(e.target.value) || 0}
                    })}
                    className="w-full px-3 py-2 border rounded font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Hout</label>
                  <input
                    type="number"
                    value={tarieven.materiaal.hout}
                    onChange={(e) => setTarieven({
                      ...tarieven,
                      materiaal: {...tarieven.materiaal, hout: parseFloat(e.target.value) || 0}
                    })}
                    className="w-full px-3 py-2 border rounded font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Aluminium</label>
                  <input
                    type="number"
                    value={tarieven.materiaal.aluminium}
                    onChange={(e) => setTarieven({
                      ...tarieven,
                      materiaal: {...tarieven.materiaal, aluminium: parseFloat(e.target.value) || 0}
                    })}
                    className="w-full px-3 py-2 border rounded font-semibold"
                  />
                </div>
              </div>
            </div>

            {/* Glas Prijzen */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-green-600">Glas (€/m²)</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-600">Dubbel</label>
                  <input
                    type="number"
                    value={tarieven.glas.dubbel}
                    onChange={(e) => setTarieven({
                      ...tarieven,
                      glas: {...tarieven.glas, dubbel: parseFloat(e.target.value) || 0}
                    })}
                    className="w-full px-3 py-2 border rounded font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">HR++</label>
                  <input
                    type="number"
                    value={tarieven.glas["hr++"]}
                    onChange={(e) => setTarieven({
                      ...tarieven,
                      glas: {...tarieven.glas, "hr++": parseFloat(e.target.value) || 0}
                    })}
                    className="w-full px-3 py-2 border rounded font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Triple</label>
                  <input
                    type="number"
                    value={tarieven.glas.triple}
                    onChange={(e) => setTarieven({
                      ...tarieven,
                      glas: {...tarieven.glas, triple: parseFloat(e.target.value) || 0}
                    })}
                    className="w-full px-3 py-2 border rounded font-semibold"
                  />
                </div>
              </div>
            </div>

            {/* Type Multipliers */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-purple-600">Type (multiplier)</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-600">Draai</label>
                  <input
                    type="number"
                    step="0.1"
                    value={tarieven.type.draai}
                    onChange={(e) => setTarieven({
                      ...tarieven,
                      type: {...tarieven.type, draai: parseFloat(e.target.value) || 0}
                    })}
                    className="w-full px-3 py-2 border rounded font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Draai-kiep</label>
                  <input
                    type="number"
                    step="0.1"
                    value={tarieven.type["draai-kiep"]}
                    onChange={(e) => setTarieven({
                      ...tarieven,
                      type: {...tarieven.type, "draai-kiep": parseFloat(e.target.value) || 0}
                    })}
                    className="w-full px-3 py-2 border rounded font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Schuif</label>
                  <input
                    type="number"
                    step="0.1"
                    value={tarieven.type.schuif}
                    onChange={(e) => setTarieven({
                      ...tarieven,
                      type: {...tarieven.type, schuif: parseFloat(e.target.value) || 0}
                    })}
                    className="w-full px-3 py-2 border rounded font-semibold"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Kleur Toeslagen */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-orange-600">Kleur (€/raam)</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-600">Wit</label>
                  <input
                    type="number"
                    value={tarieven.kleur.wit}
                    onChange={(e) => setTarieven({
                      ...tarieven,
                      kleur: {...tarieven.kleur, wit: parseFloat(e.target.value) || 0}
                    })}
                    className="w-full px-3 py-2 border rounded font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Grijs</label>
                  <input
                    type="number"
                    value={tarieven.kleur.grijs}
                    onChange={(e) => setTarieven({
                      ...tarieven,
                      kleur: {...tarieven.kleur, grijs: parseFloat(e.target.value) || 0}
                    })}
                    className="w-full px-3 py-2 border rounded font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Zwart</label>
                  <input
                    type="number"
                    value={tarieven.kleur.zwart}
                    onChange={(e) => setTarieven({
                      ...tarieven,
                      kleur: {...tarieven.kleur, zwart: parseFloat(e.target.value) || 0}
                    })}
                    className="w-full px-3 py-2 border rounded font-semibold"
                  />
                </div>
              </div>
            </div>

            {/* Service */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-teal-600">Service (€)</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-600">Montage/raam</label>
                  <input
                    type="number"
                    value={tarieven.montage}
                    onChange={(e) => setTarieven({
                      ...tarieven,
                      montage: parseFloat(e.target.value) || 0
                    })}
                    className="w-full px-3 py-2 border rounded font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Afvoer forfait</label>
                  <input
                    type="number"
                    value={tarieven.afvoer}
                    onChange={(e) => setTarieven({
                      ...tarieven,
                      afvoer: parseFloat(e.target.value) || 0
                    })}
                    className="w-full px-3 py-2 border rounded font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Minimum totaal</label>
                  <input
                    type="number"
                    value={tarieven.minimum}
                    onChange={(e) => setTarieven({
                      ...tarieven,
                      minimum: parseFloat(e.target.value) || 0
                    })}
                    className="w-full px-3 py-2 border rounded font-semibold"
                  />
                </div>
              </div>
            </div>

            {/* Reset knop */}
            <div className="bg-white rounded-lg p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold mb-3 text-gray-600">Acties</h3>
                <button
                  onClick={() => setTarieven(START_TARIEVEN)}
                  className="w-full px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded font-semibold"
                >
                  Reset naar Start
                </button>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-xs text-yellow-800">
                  💡 Speel met de prijzen totdat de totaalprijs klopt met jouw werkelijke prijzen
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* LEFT: Tarieven Aanpassen */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-green-900">Provider: Pas Tarieven Aan</h2>
                <div className="flex gap-2">
                  <button
                    onClick={resetTarieven}
                    className="text-xs px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
                  >
                    Reset
                  </button>
                  <button
                    onClick={downloadTarieven}
                    className="text-xs px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-1"
                  >
                    <Download className="w-3 h-3" />
                    Download
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-green-900">Materiaal Prijzen (per m²)</label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-24">Kunststof:</span>
                      <span className="text-sm">€</span>
                      <input
                        type="number"
                        value={tarieven.materiaal.kunststof}
                        onChange={(e) => setTarieven({...tarieven, materiaal: {...tarieven.materiaal, kunststof: parseInt(e.target.value)}})}
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-24">Hout:</span>
                      <span className="text-sm">€</span>
                      <input
                        type="number"
                        value={tarieven.materiaal.hout}
                        onChange={(e) => setTarieven({...tarieven, materiaal: {...tarieven.materiaal, hout: parseInt(e.target.value)}})}
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-24">Aluminium:</span>
                      <span className="text-sm">€</span>
                      <input
                        type="number"
                        value={tarieven.materiaal.aluminium}
                        onChange={(e) => setTarieven({...tarieven, materiaal: {...tarieven.materiaal, aluminium: parseInt(e.target.value)}})}
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-green-200">
                  <label className="block text-sm font-semibold mb-2 text-green-900">Glas Prijzen (per m²)</label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-24">Dubbel:</span>
                      <span className="text-sm">€</span>
                      <input
                        type="number"
                        value={tarieven.glas.dubbel}
                        onChange={(e) => setTarieven({...tarieven, glas: {...tarieven.glas, dubbel: parseInt(e.target.value)}})}
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-24">HR++:</span>
                      <span className="text-sm">€</span>
                      <input
                        type="number"
                        value={tarieven.glas["hr++"]}
                        onChange={(e) => setTarieven({...tarieven, glas: {...tarieven.glas, "hr++": parseInt(e.target.value)}})}
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-24">Triple:</span>
                      <span className="text-sm">€</span>
                      <input
                        type="number"
                        value={tarieven.glas.triple}
                        onChange={(e) => setTarieven({...tarieven, glas: {...tarieven.glas, triple: parseInt(e.target.value)}})}
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-green-200">
                  <label className="block text-sm font-semibold mb-2 text-green-900">Type Multipliers</label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-24">Draai:</span>
                      <input
                        type="number"
                        step="0.1"
                        value={tarieven.type.draai}
                        onChange={(e) => setTarieven({...tarieven, type: {...tarieven.type, draai: parseFloat(e.target.value)}})}
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                      <span className="text-sm">×</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-24">Draai-kiep:</span>
                      <input
                        type="number"
                        step="0.1"
                        value={tarieven.type["draai-kiep"]}
                        onChange={(e) => setTarieven({...tarieven, type: {...tarieven.type, "draai-kiep": parseFloat(e.target.value)}})}
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                      <span className="text-sm">×</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-24">Schuif:</span>
                      <input
                        type="number"
                        step="0.1"
                        value={tarieven.type.schuif}
                        onChange={(e) => setTarieven({...tarieven, type: {...tarieven.type, schuif: parseFloat(e.target.value)}})}
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                      <span className="text-sm">×</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-green-200">
                  <label className="block text-sm font-semibold mb-2 text-green-900">Kleur Toeslagen (per raam)</label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-24">Wit:</span>
                      <span className="text-sm">€</span>
                      <input
                        type="number"
                        value={tarieven.kleur.wit}
                        onChange={(e) => setTarieven({...tarieven, kleur: {...tarieven.kleur, wit: parseInt(e.target.value)}})}
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-24">Grijs:</span>
                      <span className="text-sm">€</span>
                      <input
                        type="number"
                        value={tarieven.kleur.grijs}
                        onChange={(e) => setTarieven({...tarieven, kleur: {...tarieven.kleur, grijs: parseInt(e.target.value)}})}
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-24">Zwart:</span>
                      <span className="text-sm">€</span>
                      <input
                        type="number"
                        value={tarieven.kleur.zwart}
                        onChange={(e) => setTarieven({...tarieven, kleur: {...tarieven.kleur, zwart: parseInt(e.target.value)}})}
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-green-200">
                  <label className="block text-sm font-semibold mb-2 text-green-900">Service Kosten</label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-24">Montage:</span>
                      <span className="text-sm">€</span>
                      <input
                        type="number"
                        value={tarieven.montage}
                        onChange={(e) => setTarieven({...tarieven, montage: parseInt(e.target.value)})}
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                      <span className="text-xs text-gray-500">/raam</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-24">Afvoer:</span>
                      <span className="text-sm">€</span>
                      <input
                        type="number"
                        value={tarieven.afvoer}
                        onChange={(e) => setTarieven({...tarieven, afvoer: parseInt(e.target.value)})}
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                      <span className="text-xs text-gray-500">forfait</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-24">Minimum:</span>
                      <span className="text-sm">€</span>
                      <input
                        type="number"
                        value={tarieven.minimum}
                        onChange={(e) => setTarieven({...tarieven, minimum: parseInt(e.target.value)})}
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE: Test Scenario */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-blue-600" />
                Test Scenario
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Totale m² (alle ramen)</label>
                  <input
                    type="number"
                    value={testScenario.m2}
                    onChange={(e) => setTestScenario({...testScenario, m2: parseFloat(e.target.value)})}
                    className="w-full px-4 py-2 border rounded-lg"
                    step="0.1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Aantal Ramen</label>
                  <input
                    type="number"
                    value={testScenario.aantalRamen}
                    onChange={(e) => setTestScenario({...testScenario, aantalRamen: parseInt(e.target.value)})}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Materiaal</label>
                  <select
                    value={testScenario.materiaal}
                    onChange={(e) => setTestScenario({...testScenario, materiaal: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg"
                  >
                    <option value="kunststof">Kunststof (€{tarieven.materiaal.kunststof}/m²)</option>
                    <option value="hout">Hout (€{tarieven.materiaal.hout}/m²)</option>
                    <option value="aluminium">Aluminium (€{tarieven.materiaal.aluminium}/m²)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Glas Type</label>
                  <select
                    value={testScenario.glas}
                    onChange={(e) => setTestScenario({...testScenario, glas: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg"
                  >
                    <option value="dubbel">Dubbel (€{tarieven.glas.dubbel}/m²)</option>
                    <option value="hr++">HR++ (€{tarieven.glas["hr++"]}/m²)</option>
                    <option value="triple">Triple (€{tarieven.glas.triple}/m²)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Kozijn Type</label>
                  <select
                    value={testScenario.type}
                    onChange={(e) => setTestScenario({...testScenario, type: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg"
                  >
                    <option value="draai">Draai ({tarieven.type.draai}×)</option>
                    <option value="draai-kiep">Draai-kiep ({tarieven.type["draai-kiep"]}×)</option>
                    <option value="schuif">Schuif ({tarieven.type.schuif}×)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Kleur</label>
                  <select
                    value={testScenario.kleur}
                    onChange={(e) => setTestScenario({...testScenario, kleur: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg"
                  >
                    <option value="wit">Wit (€{tarieven.kleur.wit}/raam)</option>
                    <option value="grijs">Grijs (€{tarieven.kleur.grijs}/raam)</option>
                    <option value="zwart">Zwart (€{tarieven.kleur.zwart}/raam)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={testScenario.metMontage}
                      onChange={(e) => setTestScenario({...testScenario, metMontage: e.target.checked})}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-semibold">Montage (€{tarieven.montage}/raam)</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={testScenario.metAfvoer}
                      onChange={(e) => setTestScenario({...testScenario, metAfvoer: e.target.checked})}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-semibold">Afvoer oude kozijnen (€{tarieven.afvoer})</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Berekening */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-4">Berekening volgens huidige formule</h2>
              
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Kozijn ({testScenario.m2}m² × €{tarieven.materiaal[testScenario.materiaal as keyof typeof tarieven.materiaal]} × {tarieven.type[testScenario.type as keyof typeof tarieven.type]})</span>
                  <span className="font-bold text-lg">€{prijs.kozijn}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Kleur ({testScenario.aantalRamen} × €{tarieven.kleur[testScenario.kleur as keyof typeof tarieven.kleur]})</span>
                  <span className="font-bold text-lg">€{prijs.kleur}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Glas ({testScenario.m2}m² × €{tarieven.glas[testScenario.glas as keyof typeof tarieven.glas]})</span>
                  <span className="font-bold text-lg">€{prijs.glas}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Montage ({testScenario.aantalRamen} × €{tarieven.montage})</span>
                  <span className="font-bold text-lg">€{prijs.montage}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Afvoer</span>
                  <span className="font-bold text-lg">€{prijs.afvoer}</span>
                </div>

                <div className="flex justify-between items-center pt-3 text-lg">
                  <span className="font-bold">TOTAAL</span>
                  <span className="font-bold text-2xl text-yellow-300">€{prijs.totaal}</span>
                </div>

                {prijs.subtotaal < tarieven.minimum && (
                  <div className="text-xs text-yellow-200 mt-2">
                    * Minimum prijs €{tarieven.minimum} toegepast
                  </div>
                )}
              </div>
            </div>

            {/* Vragenlijst */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-orange-600">Bespreek met Provider</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-orange-400 pl-4 py-2">
                  <p className="font-semibold mb-1">1. Klopt deze totaalprijs?</p>
                  <p className="text-sm text-gray-600">Is €{prijs.totaal} realistisch voor dit scenario?</p>
                </div>

                <div className="border-l-4 border-orange-400 pl-4 py-2">
                  <p className="font-semibold mb-1">2. Kloppen de m² prijzen?</p>
                  <p className="text-sm text-gray-600">Materiaal: {testScenario.materiaal} €{tarieven.materiaal[testScenario.materiaal as keyof typeof tarieven.materiaal]}/m² | Glas: {testScenario.glas} €{tarieven.glas[testScenario.glas as keyof typeof tarieven.glas]}/m²</p>
                </div>

                <div className="border-l-4 border-orange-400 pl-4 py-2">
                  <p className="font-semibold mb-1">3. Type multiplier correct?</p>
                  <p className="text-sm text-gray-600">{testScenario.type}: {tarieven.type[testScenario.type as keyof typeof tarieven.type]}× - realistisch?</p>
                </div>

                <div className="border-l-4 border-orange-400 pl-4 py-2">
                  <p className="font-semibold mb-1">4. Kleur toeslagen OK?</p>
                  <p className="text-sm text-gray-600">{testScenario.kleur}: €{tarieven.kleur[testScenario.kleur as keyof typeof tarieven.kleur]}/raam - correct bedrag?</p>
                </div>

                <div className="border-l-4 border-orange-400 pl-4 py-2">
                  <p className="font-semibold mb-1">5. Montage & Afvoer</p>
                  <p className="text-sm text-gray-600">€{tarieven.montage}/raam montage + €{tarieven.afvoer} afvoer - realistisch?</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Huidige Tarieven Tabel */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Huidige Tarieven Overzicht</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-blue-600">Materiaal (per m²)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Kunststof:</span><strong>€280</strong></div>
                <div className="flex justify-between"><span>Hout:</span><strong>€450</strong></div>
                <div className="flex justify-between"><span>Aluminium:</span><strong>€550</strong></div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-green-600">Glas (per m²)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Dubbel:</span><strong>€80</strong></div>
                <div className="flex justify-between"><span>HR++:</span><strong>€120</strong></div>
                <div className="flex justify-between"><span>Triple:</span><strong>€180</strong></div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-purple-600">Type Multipliers</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Draai:</span><strong>0.9×</strong></div>
                <div className="flex justify-between"><span>Draai-kiep:</span><strong>1.0×</strong></div>
                <div className="flex justify-between"><span>Schuif:</span><strong>1.2×</strong></div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-orange-600">Kleur (per raam)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Wit/Creme:</span><strong>€0</strong></div>
                <div className="flex justify-between"><span>Grijs/Antraciet:</span><strong>€50</strong></div>
                <div className="flex justify-between"><span>Zwart:</span><strong>€75</strong></div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-teal-600">Service</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Montage/raam:</span><strong>€75</strong></div>
                <div className="flex justify-between"><span>Afvoer forfait:</span><strong>€200</strong></div>
                <div className="flex justify-between"><span>Minimum totaal:</span><strong>€1.500</strong></div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">CODE LOCATIE</p>
                <p className="text-sm font-mono text-green-700">lib/pricing/ai-calculator.ts</p>
                <p className="text-xs text-gray-500 mt-2">Pas hier de tarieven aan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
