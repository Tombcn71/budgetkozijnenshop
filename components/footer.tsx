import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-8">
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">Budget Kozijnenshop</h2>
            <p className="text-sm lg:text-base text-primary-foreground/80 leading-relaxed max-w-md">
              Uw betrouwbare partner voor nieuwe raamkozijnen tegen de laagste prijs. Direct een prijsindicatie met AI preview!
            </p>
          </div>

          {/* Gemeentes tijdelijk verborgen - komt later terug */}
          {/* <div>
            <h4 className="font-bold mb-4">Haaglanden</h4>
            <ul className="space-y-2 text-sm lg:text-base text-primary-foreground/80">
              <li>
                <Link href="/woningontruiming-den-haag" className="hover:text-primary-foreground transition-colors">
                  Den Haag
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-delft" className="hover:text-primary-foreground transition-colors">
                  Delft
                </Link>
              </li>
              <li>
                <Link
                  href="/woningontruiming-leidschendam-voorburg"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Leidschendam-Voorburg
                </Link>
              </li>
              <li>
                <Link
                  href="/woningontruiming-midden-delfland"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Midden-Delfland
                </Link>
              </li>
              <li>
                <Link
                  href="/woningontruiming-pijnacker-nootdorp"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Pijnacker-Nootdorp
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-rijswijk" className="hover:text-primary-foreground transition-colors">
                  Rijswijk
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-wassenaar" className="hover:text-primary-foreground transition-colors">
                  Wassenaar
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-westland" className="hover:text-primary-foreground transition-colors">
                  Westland
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-zoetermeer" className="hover:text-primary-foreground transition-colors">
                  Zoetermeer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Rijnmond</h4>
            <ul className="space-y-2 text-sm lg:text-base text-primary-foreground/80">
              <li>
                <Link href="/woningontruiming-rotterdam" className="hover:text-primary-foreground transition-colors">
                  Rotterdam
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-schiedam" className="hover:text-primary-foreground transition-colors">
                  Schiedam
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-vlaardingen" className="hover:text-primary-foreground transition-colors">
                  Vlaardingen
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-capelle-aan-den-ijssel" className="hover:text-primary-foreground transition-colors">
                  Capelle a/d IJssel
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-barendrecht" className="hover:text-primary-foreground transition-colors">
                  Barendrecht
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-ridderkerk" className="hover:text-primary-foreground transition-colors">
                  Ridderkerk
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-albrandswaard" className="hover:text-primary-foreground transition-colors">
                  Albrandswaard
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-lansingerland" className="hover:text-primary-foreground transition-colors">
                  Lansingerland
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-krimpen-aan-den-ijssel" className="hover:text-primary-foreground transition-colors">
                  Krimpen a/d IJssel
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-nissewaard" className="hover:text-primary-foreground transition-colors">
                  Nissewaard
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-maassluis" className="hover:text-primary-foreground transition-colors">
                  Maassluis
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-goeree-overflakkee" className="hover:text-primary-foreground transition-colors">
                  Goeree-Overflakkee
                </Link>
              </li>
              <li>
                <Link href="/woningontruiming-voorne-aan-zee" className="hover:text-primary-foreground transition-colors">
                  Voorne aan Zee
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-sm lg:text-base text-primary-foreground/80">
              <li>
                <Link href="/bedrijven" className="hover:text-primary-foreground transition-colors">
                  Voor Kozijnbedrijven
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm lg:text-base text-primary-foreground/80">
              <li>06 12 34 56 78</li>
              <li>info@budgetkozijnenshop.nl</li>
              <li>Ma-Za: 07:00 - 22:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Budget Kozijnenshop. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
