import HeroService from "@/app/components/hero-service"
import { getServiceDataBySlug, getServicesData } from "@/lib/services-data"

type Params = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  const services: Service[] = getServicesData()

  return services.map((service) => ({
    slug: service.slug,
  }))
}

export function generateMetadata({ params: { slug } }: Params) {
  const service = getServiceDataBySlug(slug)

  if (!service)
    return {
      title: "Servicio no encontrado",
    }

  return {
    title: service.title,
    description: service.description,
  }
}

export default function ServicePage({ params: { slug } }: Params) {
  const service = getServiceDataBySlug(slug)
  return (
    <>
      <HeroService service={service} />
    </>
  )
}
