import { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Voor Kozijnbedrijven | Budget Kozijnenshop",
  description: "Samenwerken met Budget Kozijnenshop? Ontdek onze samenwerkingsmogelijkheden voor kozijnbedrijven.",
}

export default function BedrijvenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Samenwerken met Budget Kozijnenshop
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8">
              Ben je een kozijnbedrijf en op zoek naar een betrouwbare partner? 
              Ontdek onze samenwerkingsmogelijkheden en groei samen met ons.
            </p>
          </div>
        </div>
      </section>

      {/* Typeform Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center">
                Aanmelden als partner
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Vul het formulier in en wij nemen contact met je op om de mogelijkheden te bespreken
              </p>
              
              {/* Typeform Embed */}
              <div 
                data-tf-widget="URUImQIp"
                data-tf-iframe-props="title=Bedrijven Offerte Formulier"
                data-tf-medium="snippet"
                style={{ width: '100%', height: '600px' }}
              ></div>
            </div>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-bold mb-2">Sterke samenwerking</h3>
                <p className="text-sm text-gray-600">
                  Samen staan we sterker in de markt
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="font-bold mb-2">Groei samen</h3>
                <p className="text-sm text-gray-600">
                  Profiteer van onze expertise en netwerk
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="font-bold mb-2">Professioneel</h3>
                <p className="text-sm text-gray-600">
                  Betrouwbare partner voor jouw bedrijf
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typeform Embed Script */}
      <Script 
        src="//embed.typeform.com/next/embed.js"
        strategy="lazyOnload"
      />
    </div>
  )
}

