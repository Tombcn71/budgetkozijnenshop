import { AIQuoteForm } from "@/components/ai-quote-form"

export function HeroAI() {
  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5691531/pexels-photo-5691531.jpeg"
          alt="Vakman installeert raamkozijnen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
              Nieuwe raamkozijnen met laagste prijs garantie.
            </h1>

            <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
              Vindt u een goedkopere offerte? Wij gaan eronder zodat u altijd de laagste prijs betaald.
            </p>

            <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
              Krijg direct een prijsindicatie en zie met AI hoe uw nieuwe kozijnen eruit gaan zien. Laagste prijs garantie!
            </p>

            <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
              <span>Kunststof</span>
              <span>|</span>
              <span>Hout</span>
              <span>|</span>
              <span>Aluminium</span>
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

