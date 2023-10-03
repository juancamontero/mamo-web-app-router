// import { getServicesData } from "@/lib/services-data"
import ServiceCard from "./service-card"

import { getServicesMeta } from "@/lib/services-data"

export default async function ServicesSection() {
  const services = await getServicesMeta()
 
  if (!services) return <p>Lo sentimos, los servicios no están disponibles</p>
  return (
    <>
      <section className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:gap-4 my-8">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </section>
    </>
  )
}
