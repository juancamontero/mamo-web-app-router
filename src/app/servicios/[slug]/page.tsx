import HeroService from "@/app/components/hero-service"
import { getServiceByFileName, getServicesMeta } from "@/lib/services-data"
import { notFound } from "next/navigation"

export const revalidate = 86400


type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const services = await getServicesMeta()

  if (!services) return []

  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params: { slug } }: Props) {
  const service = await getServiceByFileName(`${slug}.mdx`)

  if (!service)
    return {
      title: "Servicio no encontrado",
    }

  const { meta } = service
  return {
    title: meta.title,
    description: meta.description,
  }
}

export default async function ServicePage({ params: { slug } }: Props) {
  const service = await getServiceByFileName(`${slug}.mdx`)
  if (!service) notFound()
  const {meta, content} = service
  
  return (
    <>
      <HeroService service={meta} />
      <article className="p-4 md:p-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
        {content}
      </article>
    </>
  )
}
