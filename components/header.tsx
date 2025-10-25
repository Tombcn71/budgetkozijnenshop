"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-1.5 lg:gap-2 hover:opacity-80 transition-opacity">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 lg:w-7 lg:h-7"
            >
              <path 
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
                fill="currentColor"
                className="text-primary"
              />
            </svg>
            <span className="font-bold text-base lg:text-2xl text-foreground">Budget</span>
            <span className="font-normal text-base lg:text-2xl text-foreground">Kozijnenshop</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="#diensten"
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
            >
              Diensten
              <ChevronDown className="w-4 h-4 text-primary" />
            </a>
            <a
              href="#werkwijze"
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors font-medium"
            >
              Werkwijze
            </a>
            <a
              href="#contact"
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4 lg:gap-6">
            <a
              href="#mijn-offertes"
              className="hidden sm:inline-block text-sm lg:text-base text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Mijn Offertes
            </a>
            <a
              href="#help"
              className="hidden sm:inline-block text-sm lg:text-base text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Help
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm lg:text-base" asChild>
              <a 
                href="" 
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== 'undefined' && (window as any).Calendly) {
                    (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/tbvanreijn'});
                  }
                  return false;
                }}
              >
                <span className="sm:hidden">Gratis Advies</span>
                <span className="hidden sm:inline">Gratis Adviesgesprek</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
