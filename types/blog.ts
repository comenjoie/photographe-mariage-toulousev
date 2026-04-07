export interface BlogAuthor {
  name: string
  role: string
  avatar?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  coverAlt: string
  publishedAt: string
  updatedAt: string
  author: BlogAuthor
  readingTime: number
  content: string
  tags?: string[]
}
