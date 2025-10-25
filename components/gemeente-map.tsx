"use client"

interface GemeenteMapProps {
  gemeenteNaam: string
  postcodes: string
}

export function GemeenteMap({ gemeenteNaam, postcodes }: GemeenteMapProps) {
  // Speciale mapping voor gemeentes die Google Maps niet goed vindt
  const locationMap: Record<string, string> = {
    "Albrandswaard": "Poortugaal, Nederland",
    "Leidschendam-Voorburg": "Leidschendam, Nederland",
    "Midden-Delfland": "Schipluiden, Nederland",
    "Pijnacker-Nootdorp": "Pijnacker, Nederland",
    "Goeree-Overflakkee": "Middelharnis, Nederland",
    "Voorne aan Zee": "Rockanje, Nederland",
    "Capelle aan den IJssel": "Capelle aan den IJssel, Nederland",
    "Krimpen aan den IJssel": "Krimpen aan den IJssel, Nederland",
  }

  // Gebruik de mapping of de gemeente naam zelf
  const searchLocation = locationMap[gemeenteNaam] || `${gemeenteNaam}, Nederland`
  const encodedGemeente = encodeURIComponent(searchLocation)

  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path 
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
                  fill="currentColor"
                  className="text-primary"
                />
              </svg>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Actief in {gemeenteNaam}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wij kennen {gemeenteNaam} als onze broekzak en werken in het hele gebied. Lokale kennis gecombineerd met professionele service.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg border border-border bg-white">
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedGemeente}&zoom=12`}
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              📍 Werkgebied: {gemeenteNaam} • Postcodes: {postcodes}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

