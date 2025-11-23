import { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Euro, Percent, Home, FileText, ExternalLink, Calculator } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Financiering voor Kozijnen | Budget Kozijnenshop",
  description: "Spreid de kosten van nieuwe kozijnen met de Energiebespaarlening. Lage rente, fiscaal voordeel en direct genieten van betere isolatie.",
}

export default function FinancieringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <p className="text-sm lg:text-base font-semibold">
                Nationaal Warmtefonds
              </p>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Energiebespaarlening voor Kozijnen
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-4">
              Financier nieuwe kozijnen met de Energiebespaarlening van het Nationaal Warmtefonds. 
              Betaal comfortabel in termijnen met lage rente en fiscale voordelen.
            </p>
            <p className="text-base lg:text-lg text-primary-foreground/80">
              Direct genieten van lagere energiekosten en meer wooncomfort
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 lg:p-10 mb-12">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Hoe werkt de Energiebespaarlening?
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Bekijk deze video van het Nationaal Warmtefonds voor een duidelijke uitleg over het aanvragen van de Energiebespaarlening
              </p>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/wMY6HfyjSJU?start=63"
                  title="Energiebespaarlening Nationaal Warmtefonds"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-10 mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Waarom financieren?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nieuwe kozijnen zijn een waardevolle investering in energiezuinigheid, wooncomfort 
                en de waarde van de woning. Door te financieren hoeft niet het volledige bedrag 
                in één keer te worden betaald. De kosten kunnen overzichtelijk gespreid worden, 
                terwijl er direct geprofiteerd wordt van alle voordelen.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                De Energiebespaarlening van het Nationaal Warmtefonds is de meest gekozen 
                financieringsvorm voor kozijnen. Deze lening biedt aantrekkelijke voorwaarden 
                en kan later eenvoudig worden omgezet in een hypotheek, vaak met nog lagere 
                maandlasten.
              </p>
            </div>

            {/* Voordelen Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Direct genieten</h3>
                    <p className="text-gray-600">
                      Geen lange spaarperiode nodig. Start meteen met besparen op energiekosten 
                      en geniet van beter wooncomfort.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Percent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Lage vaste rente</h3>
                    <p className="text-gray-600">
                      Profiteer van een aantrekkelijk laag rentetarief met vaste maandlasten. 
                      Vaak lager dan de energiebesparing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Euro className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Fiscaal voordeel</h3>
                    <p className="text-gray-600">
                      De betaalde rente is in veel gevallen fiscaal aftrekbaar. 
                      Geen notariskosten en directe besparing op onderhoud.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Home className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Waardestijging</h3>
                    <p className="text-gray-600">
                      De woning stijgt direct in waarde door de nieuwe kozijnen. 
                      Een slimme investering die zich terugbetaalt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rentetarieven Section */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-lg p-8 lg:p-10 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Percent className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold">Actuele Rentetarieven</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Het Nationaal Warmtefonds is een stichting zonder winstoogmerk, opgericht op 
                initiatief van de Rijksoverheid. Daarom zijn de rentetarieven vaak lager dan bij 
                commerciële aanbieders. De rente blijft gedurende de hele looptijd gelijk.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6 overflow-x-auto">
                <h3 className="font-bold text-xl mb-4">Effectieve jaarrente per looptijd</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">7 jaar</p>
                    <p className="text-3xl font-bold text-green-600">3,61%</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">10 jaar</p>
                    <p className="text-3xl font-bold text-green-600">3,61%</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">15 jaar</p>
                    <p className="text-3xl font-bold text-green-600">4,11%</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">20 jaar*</p>
                    <p className="text-3xl font-bold text-green-600">4,16%</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  * Een looptijd van 20 jaar is alleen mogelijk bij leningen vanaf €15.000
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Tarieven bijgewerkt op 16 mei 2025
                </p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-blue-900">Renteloze lening mogelijk</h3>
                    <p className="text-gray-700 mb-3">
                      Is het totale bruto-inkomen van het huishouden minder dan €60.000 per jaar? 
                      Dan is er mogelijk een lening tegen 0% rente beschikbaar.
                    </p>
                    <p className="text-sm text-gray-600">
                      Een aantrekkelijke optie om nog meer te besparen op de maandlasten.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-xl mb-4">Rekenvoorbeelden maandlasten</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <div>
                      <p className="font-semibold">€10.000 over 10 jaar</p>
                      <p className="text-sm text-gray-600">Rente: 3,61%</p>
                    </div>
                    <p className="text-xl font-bold text-green-600">€99,12/mnd</p>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <div>
                      <p className="font-semibold">€15.000 over 10 jaar</p>
                      <p className="text-sm text-gray-600">Rente: 3,61%</p>
                    </div>
                    <p className="text-xl font-bold text-green-600">€148,68/mnd</p>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <div>
                      <p className="font-semibold">€15.000 over 15 jaar</p>
                      <p className="text-sm text-gray-600">Rente: 4,11%</p>
                    </div>
                    <p className="text-xl font-bold text-green-600">€111,18/mnd</p>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <p className="font-semibold">€28.000 over 20 jaar</p>
                      <p className="text-sm text-gray-600">Rente: 4,16%</p>
                    </div>
                    <p className="text-xl font-bold text-green-600">€170,86/mnd</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Dit zijn voorbeeldberekeningen. De exacte maandlasten kunnen afwijken.
                </p>
              </div>
            </div>

            {/* Energiebespaarlening Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8 lg:p-10 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold">De Energiebespaarlening</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                De Energiebespaarlening van het Nationaal Warmtefonds is speciaal ontworpen 
                voor energiebesparende maatregelen zoals hoogwaardige kozijnen met HR++ of 
                triple glas. Alle kozijnen voldoen ruimschoots aan de gestelde eisen.
              </p>

              <div className="bg-white rounded-lg p-6 mb-8">
                <h3 className="font-bold text-xl mb-4">Voorwaarden</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Eigenaar-bewoner zijn van een bestaande woning
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Leenbedrag tussen €1.000 en €65.000
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Maandannuïteitenlening met vaste maandlasten
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Aanvraag is drie maanden geldig
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Geen leeftijdsgrens - ook mogelijk voor 75-plussers
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-xl mb-4">Combineer met subsidie</h3>
                <p className="text-gray-700">
                  De Energiebespaarlening kan worden gecombineerd met de ISDE-subsidie. 
                  Zo worden de kosten nog verder verlaagd en is de investering nog aantrekkelijker.
                </p>
              </div>
            </div>

            {/* Isolatiewaarden Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-10 mb-12">
              <h2 className="text-2xl font-bold mb-6">Voldoet aan alle eisen</h2>
              <p className="text-gray-700 mb-6">
                De kozijnen voldoen ruimschoots aan de isolatie-eisen van het Warmtefonds. 
                Hier zijn enkele voorbeelden van de uitstekende U-waardes:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="font-semibold">Premium kunststof kozijnen</p>
                  <p className="text-gray-600">U-waarde vanaf 1,0 W/m²K</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <p className="font-semibold">Hoogwaardige isolatiekozijnen</p>
                  <p className="text-gray-600">U-waarde vanaf 0,7 W/m²K</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <p className="font-semibold">Kunststof deuren</p>
                  <p className="text-gray-600">U-waarde vanaf 0,8 W/m²K</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                * Hoe lager de U-waarde, hoe beter de isolatie
              </p>
            </div>

            {/* Calculator & Aanvraag CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 lg:p-12 text-white mb-8">
              <div className="text-center mb-8">
                <Calculator className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Bereken je maandlasten en vraag direct aan
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Via het Nationaal Warmtefonds kun je eenvoudig je exacte maandlasten berekenen 
                  en direct een lening aanvragen. Volledig online en binnen enkele minuten geregeld.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <a
                  href="https://www.warmtefonds.nl/particulieren/actuele-rentetarieven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-700 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Calculator className="w-5 h-5" />
                  Bereken maandlasten
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.warmtefonds.nl/energiebespaarlening-aanvragen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-lg font-bold text-lg hover:bg-green-600 transition-colors shadow-lg"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Vraag lening aan
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20 text-center">
                <p className="text-white/80 text-sm mb-4">
                  Extra rentekorting mogelijk voor bewoners van:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Den Haag</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Capelle aan den IJssel</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Leidschendam-Voorburg</span>
                </div>
              </div>
            </div>

            {/* Offerte CTA Section */}
            <div className="bg-gradient-to-r from-primary to-primary/90 rounded-lg shadow-lg p-8 lg:p-10 text-center text-primary-foreground">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Eerst een offerte voor kozijnen?
              </h2>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Vraag vrijblijvend een offerte aan en ontvang alle informatie over de kosten en mogelijkheden
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Vraag offerte aan
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

