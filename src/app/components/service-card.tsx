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
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <IconActivity size={50} className="mb-4 text-accent-2" />
        <Link
          as={`/servicios/${slug}`}
          href="/servicios/[slug]"
          className="hover:underline"
        >
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-accent-2">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <Link
          as={`/servicios/${slug}`}
          href="/servicios/[slug]"
          className="inline-flex items-end text-blue-600 hover:underline"
        >
          Conoce más
        </Link>
      </div>
    </>
  )
}
