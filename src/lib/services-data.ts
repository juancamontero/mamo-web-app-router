import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

// * Definir directorio de los servicios
const servicesDirectory = join(process.cwd(), "servicios")

//* Obtener slugs de slides
export function getServicesSlugs() {
  return fs.readdirSync(servicesDirectory)
}

//* Obtener la Data de todos los servicios
export function getServicesData() {
  const servicesSlugs = getServicesSlugs()

  const servicesData = servicesSlugs.map((slug) => {
    const realSlug = slug.replace(/\.md$/, "")
    const fullPath = join(servicesDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)
    const service: Service = {
      slug: realSlug,
      title: data.title,
      description: data.description,
      order: data.order,
    }

    return service
  })

  return servicesData.sort((a, b) => (a.order > b.order ? 1 : -1))
}

//* Obtener la Data de un los servicios

export function getServiceDataBySlug(slug: string) {
  const fullPath = join(servicesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data } = matter(fileContents)
  const service: Service = {
    slug,
    title: data.title,
    description: data.description,
    order: data.order,
  }

  return service
}
