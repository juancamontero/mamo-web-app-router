import HeroService from "@/app/components/hero-service"
import { getServiceByFileName, getServicesMeta } from "@/lib/services-data"

export const revalidate = 0

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

  return {
    title: service.meta.title,
    description: service.meta.description,
  }
}

export default async function ServicePage({ params: { slug } }: Props) {
  const service = await getServiceByFileName(`${slug}.mdx`)
  if (!service) return <p>No se pudo cargar la información del servicio</p>
  return (
    <>
      <HeroService service={service.meta} />
    </>
  )
}
