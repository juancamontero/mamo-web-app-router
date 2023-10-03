type Slide = {
  id: string
  title: string
  subTitle?: string
  paragraph?: string
  backgroundImage?: string
}

type ServiceMeta = {
  slug: string
  title: string
  description: string
  order: string
}

type Service = {
  meta: ServiceMeta
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: ReactElement<any, string | JSXElementConstructor<any>>
}
