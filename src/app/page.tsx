import { HeroHome } from "./components/hero-home"
import MainSection from "./components/home-main-section"
import ServicesSection from "./components/services-section"

export const revalidate = 10

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroHome />
      <section className="container mx-auto px-5">
        <ServicesSection />
        <MainSection />
       
      </section>
    </main>
  )
}
