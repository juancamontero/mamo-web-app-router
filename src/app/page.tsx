// import Image from "next/image"

import { HeroHome } from "./components/hero-home"
import ServicesSection from "./components/services-section"

// import { getHomeSlidesSlugs } from "@/lib/slides-data"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroHome />
      <section className="container mx-auto px-5">
        <ServicesSection />
      </section>
    </main>
  )
}
