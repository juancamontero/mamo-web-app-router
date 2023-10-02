import { IconActivity } from "@tabler/icons-react"

type Props = {
  service: Service
}

export default function HeroService({ service }: Props) {
  const { title, description } = service

  return (
    <section className="bg-back-color">
      <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div>
              <IconActivity size={50} className="mb-4 text-accent-2" />
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6  text-3xl font-bold tracking-tight text-accent-2 sm:text-4xl sm:leading-none">
                {title}
              </h2>
              <p className="text-base text-accent-1 md:text-lg">
                {description}
              </p>
            </div>
          </div>
          <div className="relative">
            <svg
              className="absolute w-full text-accent-2"
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
              className="relative w-full text-success"
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
