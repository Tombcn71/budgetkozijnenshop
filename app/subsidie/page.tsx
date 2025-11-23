import { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Euro, FileText, ExternalLink, TrendingUp, Home } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "ISDE Subsidie voor Kozijnen 2025 | Budget Kozijnenshop",
  description: "Profiteer van de ISDE-subsidie 2025 voor nieuwe kozijnen. Tot €111 per m² voor triple glas. Bespaar op energiekosten én aanschafkosten.",
}

export default function SubsidiePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <p className="text-sm lg:text-base font-semibold">
                ISDE 2025
              </p>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Subsidie op Nieuwe Kozijnen
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-4">
              Bespaar tot wel €111 per m² met de ISDE-subsidie 2025 voor isolerend glas. 
              Verduurzaam de woning en profiteer van hogere subsidiebedragen.
            </p>
            <p className="text-base lg:text-lg text-primary-foreground/80">
              €555 miljoen beschikbaar voor verduurzaming tot 2030
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
                Alles over de ISDE-subsidie
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Bekijk deze officiële uitlegvideo over de Investeringssubsidie Duurzame Energie
              </p>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/tkndoEGUMkU"
                  title="ISDE Subsidie uitleg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-10 mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Wat is de ISDE-subsidie?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                De Investeringssubsidie Duurzame Energie en Energiebesparing (ISDE) is een 
                landelijke regeling van de Rijksoverheid. Deze subsidie helpt woningeigenaren 
                om energiebesparende verbouwingen betaalbaar te maken. Denk aan het plaatsen 
                van isolerende kozijnen, deuren, of andere maatregelen die het energieverbruik 
                verlagen.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Voor 2025 heeft de overheid maar liefst €555 miljoen gereserveerd voor deze 
                regeling. De subsidie is beschikbaar tot minimaal 2030, wat langetermijnzekerheid 
                biedt voor verduurzamingsplannen.
              </p>
            </div>

            {/* Voordelen Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Hogere bedragen in 2025</h3>
                    <p className="text-gray-600">
                      De subsidiebedragen zijn flink verhoogd. Tot €111 per m² voor triple 
                      glas en €25 per m² voor HR++ glas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Lagere drempel</h3>
                    <p className="text-gray-600">
                      Minimale glasoppervlakte verlaagd van 8 naar 3 m². Ook kleinere 
                      ramen en deuren komen in aanmerking.
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
                    <h3 className="font-bold text-lg mb-2">Dubbele subsidie mogelijk</h3>
                    <p className="text-gray-600">
                      Bij combinatie van meerdere isolatiemaatregelen verdubbelt het 
                      subsidiebedrag per vierkante meter.
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
                    <h3 className="font-bold text-lg mb-2">Twee keer aanvragen</h3>
                    <p className="text-gray-600">
                      Binnen 24 maanden mag er twee keer subsidie worden aangevraagd 
                      voor glasisolatie.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subsidiebedragen Tabel */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-lg p-8 lg:p-10 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Euro className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold">Subsidiebedragen 2025</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Per 1 januari 2025 zijn de subsidiebedragen verhoogd vergeleken met 2024. 
                Dit maakt verduurzamen aantrekkelijker dan ooit.
              </p>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-green-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Maatregel</th>
                        <th className="px-6 py-4 text-left font-semibold">2025</th>
                        <th className="px-6 py-4 text-left font-semibold">2024</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">Triple glas</td>
                        <td className="px-6 py-4 text-green-600 font-bold">€111 per m²</td>
                        <td className="px-6 py-4 text-gray-500">€65,50 per m²</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">HR++ glas</td>
                        <td className="px-6 py-4 text-green-600 font-bold">€25 per m²</td>
                        <td className="px-6 py-4 text-gray-500">€23 per m²</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">HR++ glas (monumenten)</td>
                        <td className="px-6 py-4 text-green-600 font-bold">€46 per m²</td>
                        <td className="px-6 py-4 text-gray-500">€42,50 per m²</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <p className="text-sm font-semibold text-blue-900 mb-2">💡 Extra voordeel</p>
                <p className="text-gray-700">
                  Bij het combineren van twee of meer isolatiemaatregelen verdubbelt het 
                  subsidiebedrag per vierkante meter automatisch.
                </p>
              </div>
            </div>

            {/* Belangrijke wijzigingen */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8 lg:p-10 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold">Belangrijke wijzigingen 2025</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-blue-900">
                    Twee keer subsidie aanvragen voor glas
                  </h3>
                  <p className="text-gray-700">
                    Binnen een periode van 24 maanden is het nu mogelijk om tweemaal subsidie 
                    aan te vragen voor glasisolatie. Perfect voor wie de woning gefaseerd wil 
                    verduurzamen.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-blue-900">
                    Lagere minimale oppervlakte
                  </h3>
                  <p className="text-gray-700">
                    De minimumeis is verlaagd van 8 m² naar slechts 3 m². Hierdoor komen ook 
                    kleinere woningen, schuifpuien en voordeuren in aanmerking voor subsidie.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-3 text-blue-900">
                    Ook voor kozijnpanelen en deuren
                  </h3>
                  <p className="text-gray-700">
                    Niet alleen glas, maar ook isolerende kozijnpanelen en deuren vallen onder 
                    de subsidieregeling voor glasisolatie.
                  </p>
                </div>
              </div>
            </div>

            {/* Voorwaarden */}
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-10 mb-12">
              <h2 className="text-2xl font-bold mb-6">Voorwaarden voor ISDE-subsidie</h2>
              <p className="text-gray-700 mb-6">
                Om in aanmerking te komen voor de ISDE-subsidie moet er worden voldaan aan 
                de volgende voorwaarden:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Eigenaar-bewoner zijn van de woning
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Installatie door een erkend en gecertificeerd bedrijf laten uitvoeren
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    De maatregel moet plaatsvinden binnen de bestaande thermische schil
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Isolatiewaarden moeten voldoen aan de RVO-eisen
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Subsidieaanvraag indienen binnen 12 maanden na uitvoering
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Minimaal 3 m² glasoppervlakte (verlaagd in 2025)
                  </span>
                </li>
              </ul>
            </div>

            {/* RVO Link CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 lg:p-12 text-white mb-8">
              <div className="text-center mb-8">
                <FileText className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Meer informatie en aanvragen
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
                  Voor de meest actuele informatie en het aanvragen van de ISDE-subsidie 
                  kunt u terecht op de officiële website van de Rijksdienst voor Ondernemend Nederland (RVO).
                </p>
                <a
                  href="https://www.rvo.nl/subsidies-financiering/isde/isde-wat-wijzigt-er-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-700 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <ExternalLink className="w-5 h-5" />
                  Bezoek RVO.nl
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Offerte CTA Section */}
            <div className="bg-gradient-to-r from-primary to-primary/90 rounded-lg shadow-lg p-8 lg:p-10 text-center text-primary-foreground">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Klaar om te verduurzamen?
              </h2>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Vraag vrijblijvend een offerte aan voor nieuwe kozijnen en ontvang direct advies over de ISDE-subsidie
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

