export function HowItWorks() {
  return (
    <section id="werkwijze" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Hoe Het Werkt
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            In 3 eenvoudige stappen naar uw nieuwe raamkozijnen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-6xl lg:text-7xl font-bold text-primary mb-4">01</div>
            <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">Prijs & Preview</h3>
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
              Upload foto's en kies uw voorkeuren. Onze AI berekent direct de prijs en laat zien hoe uw nieuwe kozijnen eruit gaan zien.
            </p>
          </div>

          <div className="text-center">
            <div className="text-6xl lg:text-7xl font-bold text-primary mb-4">02</div>
            <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">Offerte bevestigen</h3>
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
              Tevreden met de preview en prijs? Kies een plaatsingsdatum die u uitkomt.
            </p>
          </div>

          <div className="text-center">
            <div className="text-6xl lg:text-7xl font-bold text-primary mb-4">03</div>
            <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">Plaatsing</h3>
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
              Ons professionele team plaatst uw nieuwe kozijnen vakkundig en zorgt voor een perfecte afwerking.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  )
}
