import Image from "next/image"

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
              <h2 className="max-w-lg mb-6  text-lg font-light tracking-tight text-text-100 sm:text-3xl ">
                {subTitle}
              </h2>
              <p className="text-base text-text-200 md:text-xl">
                {paragraph}
              </p>
            </div>
          </div>
          <div className="relative">
          <Image
               
                src="/nanofortalecimiento.webp"
                height={650}
                width={650}
                alt="gráfica de crecimiento"
              />
          </div>
        </div>
      </div>
    </section>
  )
}
