import type { BlogPost } from '@/types/blog'

// Static blog registry — add new posts here
// In a production setup, this could be replaced by a CMS API call (Sanity, Contentful, etc.)
const postSlugs = [
  'photographe-mariage-toulouse-comment-choisir-2025',
]

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await Promise.all(
    postSlugs.map(async (slug) => {
      const mod = await import(`@/content/blog/${slug}`)
      return (mod.default ?? mod) as BlogPost
    })
  )
  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!postSlugs.includes(slug)) return null
  try {
    const mod = await import(`@/content/blog/${slug}`)
    return (mod.default ?? mod) as BlogPost
  } catch {
    return null
  }
}

export function getAllSlugs(): string[] {
  return postSlugs
}
