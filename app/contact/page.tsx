import { Metadata } from "next"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact | Budget Kozijnenshop",
  description: "Neem contact met ons op voor een vrijblijvende offerte op nieuwe kozijnen. Vul het formulier in en wij nemen zo snel mogelijk contact met u op.",
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


