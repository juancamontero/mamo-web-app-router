import { getSlidesMeta } from "@/lib/slides-data"

export async function HeroHome() {
  const homeSlides = await getSlidesMeta()

  if (!homeSlides) {
    return <p>No fue posible cargar los slides</p>
  }
  const slide = homeSlides[0]
  const { title, subTitle, paragraph } = slide

  return (
    <section className="bg-bg-100">
      <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl">
              {title}
            </h1>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6  text-lg font-light tracking-tight text-text-100 sm:text-3xl sm:leading-none">
                {subTitle}
              </h2>
              <p className="text-base text-text-200 md:text-lg">
                {paragraph}
              </p>
            </div>
          </div>
          <div className="relative">
            <svg
              className="absolute w-full text-accent-200"
              fill="currentColor"
              viewBox="0 0 600 392"
            >
              <rect x="0" y="211" width="75" height="181" rx="8" />
              <rect x="525" y="260" width="75" height="132" rx="8" />
              <rect x="105" y="83" width="75" height="309" rx="8" />
              <rect x="210" y="155" width="75" height="237" rx="8" />
              <rect x="420" y="129" width="75" height="263" rx="8" />
              <rect x="315" y="0" width="75" height="392" rx="8" />
            </svg>
            <svg
              className="relative w-full text-primary-100"
              fill="currentColor"
              viewBox="0 0 600 392"
            >
              <rect x="0" y="311" width="75" height="81" rx="8" />
              <rect x="525" y="351" width="75" height="41" rx="8" />
              <rect x="105" y="176" width="75" height="216" rx="8" />
              <rect x="210" y="237" width="75" height="155" rx="8" />
              <rect x="420" y="205" width="75" height="187" rx="8" />
              <rect x="315" y="83" width="75" height="309" rx="8" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
