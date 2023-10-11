import Link from "next/link"

import { IconActivity } from "@tabler/icons-react"

type Props = {
  service: ServiceMeta
}

export default function ServiceCard({ service }: Props) {
  // const accentColor = theme('colors.accent-1');

  const { title, description, slug } = service

  return (
    <>
      <div className="max-w-sm p-6 bg-gradient-to-br from-bg-100 via-bg-200  to-bg-100  rounded-lg shadow">
        <IconActivity size={50} className="mb-4 text-primary-100" />
        <Link
          as={`/servicios/${slug}`}
          href="/servicios/[slug]"
        >
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-primary-200 hover:underline">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-text-200">
          {description}
        </p>
        <Link
          as={`/servicios/${slug}`}
          href="/servicios/[slug]"
          className="inline-flex items-end text-accent-100 hover:underline"
        >
          Conoce más
        </Link>
      </div>
    </>
  )
}
