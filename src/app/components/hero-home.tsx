import { getHomeSlidesData } from "@/lib/slides-data"

export function HeroHome() {
  const allHomeSlides = getHomeSlidesData()

  const { title, subTitle, paragraph } = allHomeSlides[0]

  return (
    <section className="bg-back-color text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[60vh] lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-accent-3 via-success to-accent-2 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            {paragraph}
          </p>
          <h3 className="text-accent-3 font-extrabold sm:text-5xl mt-1">
            {subTitle}
          </h3>
        </div>
      </div>
    </section>
  )
}
