import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

// * Definir directorio de los Slides
const homeSlidesDirectory = join(process.cwd(), "slides")

//* Obtener slugs de slides
export function getHomeSlidesIds() {
  return fs.readdirSync(homeSlidesDirectory)
}

//* Obtener la Data de todos los Slides
export function getHomeSlidesData() {
  const slidesIds = getHomeSlidesIds()

  const slidesData = slidesIds.map((id) => {
    const realId = id.replace(/\.md$/, "")
    const fullPath = join(homeSlidesDirectory, `${realId}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)
    const slide: Slide = {
      id: realId,
      title: data.title,
      subTitle: data.subTitle,
      paragraph: data.paragraph,
      backgroundImage: data.backgroundImage,
    }

    return slide
  })

  return slidesData.sort((a, b) => a.id < b.id ? 1 : -1)
}


