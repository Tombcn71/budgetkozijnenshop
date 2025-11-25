import { Metadata } from "next"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact | Budget Kozijnenshop",
  description: "Heeft u een vraag over kozijnen? Stuur ons een bericht via het contactformulier. Vrijblijvende offerte direct online berekenen.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <Header />
      <Contact />
      <Footer />
    </main>
  )
}


