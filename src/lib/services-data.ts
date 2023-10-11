import { GIT_REPO_SERVICES_URL, GIT_REPO_URL } from "./constants"
import { compileMDX } from "next-mdx-remote/rsc"
import CustomImage from "../app/components/custom-image"

export async function getServiceByFileName(
  filename: string
): Promise<Service | undefined> {
  const res = await fetch(`${GIT_REPO_URL}/services/${filename}`, {
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
    description: string
    order: string
  }>({
    source: rawMDX,
    components: {
      CustomImage,
    },
    options: {
      parseFrontmatter: true,
    },
  })

  const slug = filename.replace(/\.mdx$/, "")

  const serviceObj: Service = {
    meta: {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      order: frontmatter.order,
    },
    content,
  }

  return serviceObj
}

export async function getServicesMeta(): Promise<ServiceMeta[] | undefined> {
  const res = await fetch(GIT_REPO_SERVICES_URL, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })

  if (!res.ok) return undefined

  const repoFileTree: FileTree = await res.json()

  // console.log(repoFileTree)

  const filesArray = repoFileTree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"))

  const services: ServiceMeta[] = []
  for (const file of filesArray) {
    const service = await getServiceByFileName(file)
    if (service) {
      const { meta } = service
      services.push(meta)
    }
  }

  return services.sort((a, b) => (a.order > b.order ? 1 : -1))
}
