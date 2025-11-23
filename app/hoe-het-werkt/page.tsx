import { Metadata } from "next"
import Link from "next/link"
import { 
  Search, 
  Share2, 
  Calculator, 
  MessageSquare, 
  CalendarCheck, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Users,
  Home
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Hoe het werkt | Budget Kozijnenshop",
  description: "Ontdek hoe Budget Kozijnenshop werkt: van online prijsberekening tot professionele plaatsing van uw nieuwe kozijnen.",
}

export default function HoeHetWerktPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Van Online Berekening tot Plaatsing
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90">
              Budget Kozijnenshop maakt het verkrijgen van nieuwe kozijnen simpel, 
              transparant en tegen de beste prijs. Ontdek hoe wij werken.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work - Platform Explanation */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8 lg:p-10">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Wat wij doen voor kozijnbedrijven
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Budget Kozijnenshop is een marketingplatform dat gekwalificeerde leads 
                genereert voor kozijnbedrijven. Wij zorgen voor de marketing, de website 
                en brengen klanten bij u. U doet waar u goed in bent: kozijnen verkopen 
                en plaatsen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center">
                  <Share2 className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                  <h3 className="font-bold mb-2">Wij doen de Marketing</h3>
                  <p className="text-sm text-gray-600">
                    Social media, Google Ads en SEO - wij zorgen voor bezoekers
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-3 text-green-600" />
                  <h3 className="font-bold mb-2">Gekwalificeerde Leads</h3>
                  <p className="text-sm text-gray-600">
                    Mensen die actief op zoek zijn naar nieuwe kozijnen
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                  <h3 className="font-bold mb-2">No Cure, No Pay</h3>
                  <p className="text-sm text-gray-600">
                    Alleen betalen bij succesvolle verkoop. Geen risico.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Funnel - Step by Step */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
              Uw Reis naar Nieuwe Kozijnen
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              In 5 eenvoudige stappen van interesse naar perfecte kozijnen
            </p>

            {/* Step 1 */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
                    <div className="flex items-center gap-3 mb-4">
                      <Search className="w-8 h-8 text-blue-600" />
                      <h3 className="text-2xl font-bold">Ontdekking via Marketing</h3>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Huiseigenaren vinden Budget Kozijnenshop via social media (Facebook, Instagram), 
                      Google Ads of organische zoekresultaten. Onze gerichte campagnes richten zich op 
                      mensen die op zoek zijn naar nieuwe kozijnen tegen de beste prijs.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Social Media
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Google Ads
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        SEO
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-6">
                <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
                    <div className="flex items-center gap-3 mb-4">
                      <Calculator className="w-8 h-8 text-green-600" />
                      <h3 className="text-2xl font-bold">Interesse & Contact</h3>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Bezoekers kunnen eenvoudig een foto uploaden van hun ramen en een 
                      indicatie krijgen van de mogelijkheden. Via de website kunnen ze direct 
                      contact opnemen voor een vrijblijvende offerte. Dit zorgt voor warme, 
                      gekwalificeerde leads voor onze partner kozijnbedrijven.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-900 mb-2">
                        💡 Voor kozijnbedrijven:
                      </p>
                      <p className="text-sm text-gray-700">
                        Wij genereren de leads via marketing en bezoekers die actief op zoek 
                        zijn naar nieuwe kozijnen. Geen koude acquisitie meer nodig.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-6">
                <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-purple-500">
                    <div className="flex items-center gap-3 mb-4">
                      <MessageSquare className="w-8 h-8 text-purple-600" />
                      <h3 className="text-2xl font-bold">Gratis Adviesgesprek (Optioneel)</h3>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Geïnteresseerde klanten kunnen een gratis adviesgesprek plannen via Calendly. 
                      In dit gesprek bespreken we wensen, mogelijkheden, subsidies en financiering. 
                      Dit is een laagdrempelig moment om vragen te stellen en vertrouwen verder op te bouwen.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Bespreking van wensen en budget</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Uitleg over ISDE-subsidie mogelijkheden</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Informatie over financieringsopties</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-6">
                <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-orange-500">
                    <div className="flex items-center gap-3 mb-4">
                      <CalendarCheck className="w-8 h-8 text-orange-600" />
                      <h3 className="text-2xl font-bold">Gratis Inmeetafspraak</h3>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Na het adviesgesprek (of direct vanuit de website) plannen we een gratis 
                      inmeetafspraak. Een ervaren specialist van één van onze partnerbedrijven 
                      komt langs om nauwkeurig op te meten en alle details te bespreken. Volledig 
                      vrijblijvend en zonder verplichtingen.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-orange-50 rounded-lg p-4">
                        <p className="font-semibold text-orange-900 mb-1">Wat gebeurt er?</p>
                        <p className="text-sm text-gray-700">
                          Professionele opmeting, advies op locatie en bespreking van alle opties
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-4">
                        <p className="font-semibold text-orange-900 mb-1">Kosten?</p>
                        <p className="text-sm text-gray-700">
                          Volledig gratis en geheel vrijblijvend. Geen verborgen kosten.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-6">
                <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
              </div>
            </div>

            {/* Step 5 */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-teal-500">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-8 h-8 text-teal-600" />
                      <h3 className="text-2xl font-bold">Exacte Offerte & Plaatsing</h3>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Op basis van de inmeting ontvangt de klant een gedetailleerde, transparante 
                      offerte. Geen verrassingen, alleen heldere prijzen inclusief montage. Bij 
                      akkoord plannen we de plaatsing in overleg. Onze partnerbedrijven zorgen voor 
                      vakkundige montage en perfecte afwerking.
                    </p>
                    <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-6 mt-4">
                      <h4 className="font-bold text-teal-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Wat is inbegrepen:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Premium kozijnen</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Professionele montage</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Afvoer oude kozijnen</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">10 jaar garantie</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Voor Kozijnbedrijven Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg shadow-xl p-8 lg:p-12 text-white">
              <h2 className="text-3xl font-bold text-center mb-4">
                Voor Kozijnbedrijven: No Cure, No Pay
              </h2>
              <p className="text-center text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Wij nemen het risico. U betaalt alleen bij een succesvolle verkoop.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 lg:p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Wat wij voor u doen:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Marketing & Advertenties</h4>
                      <p className="text-sm text-white/90">
                        Facebook, Instagram, Google Ads - wij investeren in de campagnes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Website & Platform</h4>
                      <p className="text-sm text-white/90">
                        Professionele website met AI-tool voor klantbinding
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Lead Generatie</h4>
                      <p className="text-sm text-white/90">
                        Warme leads van mensen actief op zoek naar kozijnen
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Eerste Contact & Planning</h4>
                      <p className="text-sm text-white/90">
                        Wij regelen de eerste afspraken en inmeetmomenten
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-400/20 border-2 border-yellow-300/50 rounded-lg p-6 text-center">
                <p className="text-xl font-bold mb-2">💰 U betaalt alleen bij verkoop</p>
                <p className="text-white/90">
                  Geen maandelijkse kosten, geen setup fees, geen risico. 
                  Alleen een percentage bij succesvolle plaatsing.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-gradient-to-r from-primary to-primary/90 rounded-lg shadow-xl p-8 lg:p-12 text-white">
              <h2 className="text-3xl font-bold text-center mb-8">
                Voor Huiseigenaren
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold mb-2">Transparant</h3>
                  <p className="text-sm text-white/90">
                    Direct inzicht in mogelijkheden. Geen verborgen kosten.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold mb-2">Persoonlijk</h3>
                  <p className="text-sm text-white/90">
                    Vakkundig advies en begeleiding door het hele proces.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold mb-2">Betrouwbaar</h3>
                  <p className="text-sm text-white/90">
                    Samenwerking met gecertificeerde, ervaren installateurs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-10 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Klaar om te starten?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Begin vandaag nog met het berekenen van uw nieuwe kozijnen
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
              >
                Bereken Direct Uw Prijs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

