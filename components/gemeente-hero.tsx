import { AIQuoteForm } from "@/components/ai-quote-form"

interface GemeenteHeroProps {
  gemeenteNaam: string
  subtitle: string
}

export function GemeenteHero({ gemeenteNaam, subtitle }: GemeenteHeroProps) {
  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/professional-movers-carrying-boxes-in-modern-home.jpg"
          alt={`Professionele woningontruiming ${gemeenteNaam}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
              Woningontruiming {gemeenteNaam}, met laagste prijs garantie.
            </h1>

            <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
              Vindt u een goedkopere offerte? Wij gaan eronder zodat u altijd de laagste prijs betaald.
            </p>

            <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
              {subtitle}
            </p>

            <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
              <span>Bezemschoon opleveren</span>
              <span>|</span>
              <span>Na overlijden</span>
              <span>|</span>
              <span>Spoedontruiming</span>
            </div>
          </div>

          <div>
            <AIQuoteForm />
          </div>
        </div>
      </div>
    </section>
  )
}
