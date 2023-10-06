import { compileMDX } from "next-mdx-remote/rsc"
import { GIT_REPO_SLIDES_URL, GIT_REPO_URL } from "./constants"



export async function getSlideByFileName(
  filename: string
): Promise<Slide | undefined> {
  const res = await fetch(`${GIT_REPO_URL}/slides/${filename}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })

  if (!res.ok) return undefined

  const rawMDX = await res.text()
  if (rawMDX === "404: Not Found") return undefined

  const { frontmatter, content } = await compileMDX<{
    title: string
    subTitle: string
    paragraph: string
    backgroundImage?: string
  }>({
    source: rawMDX,
    options: {
      parseFrontmatter: true,
    },
  })

  const id = filename.replace(/\.mdx$/, "")

  const slideObj: Slide = {
    meta: {
      id,
      title: frontmatter.title,
      subTitle: frontmatter.subTitle,
      paragraph: frontmatter.paragraph,
      backgroundImage: frontmatter?.backgroundImage || undefined,
      
    },
    content,
  }

  return slideObj
}

export async function getSlidesMeta(): Promise<SlideMeta[] | undefined> {
  const res = await fetch(GIT_REPO_SLIDES_URL, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })

  if (!res.ok) return undefined

  const repoFileTree: FileTree = await res.json()

  const filesArray = repoFileTree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"))

  const slides: SlideMeta[] = []
  for (const file of filesArray) {
    const slide = await getSlideByFileName(file)
    if (slide) {
      const { meta } = slide
      slides.push(meta)
    }
  }

  return slides
}