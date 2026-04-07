import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'
import { RevealText } from '@/components/ui/RevealText'

export const revalidate = 86400 // ISR — revalidate every 24 hours

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [{ url: post.coverImage, alt: post.coverAlt }],
    },
    alternates: {
      canonical: `https://www.photographe-mariage-toulouse.com/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      url: 'https://www.photographe-mariage-toulouse.com/a-propos',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Yakastudio',
      logo: { '@type': 'ImageObject', url: 'https://www.photographe-mariage-toulouse.com/logo.svg' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.photographe-mariage-toulouse.com/blog/${slug}`,
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.photographe-mariage-toulouse.com' },
      { '@type': 'ListItem', position: 2, name: 'Journal', item: 'https://www.photographe-mariage-toulouse.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.photographe-mariage-toulouse.com/blog/${slug}` },
    ],
  }

  // Convert simple markdown-like content to HTML sections
  const sections = post.content.split('---').map((s) => s.trim()).filter(Boolean)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section
        style={{
          paddingTop: 'calc(72px + clamp(3rem, 6vw, 5rem))',
          paddingBottom: 'clamp(3rem, 5vw, 4rem)',
          backgroundColor: 'var(--color-cream)',
        }}
      >
        <div className="container-content">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" style={{ marginBottom: '2rem' }}>
            <ol style={{ listStyle: 'none', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <li><Link href="/" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-gold)' }}>Accueil</Link></li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(28,28,30,0.35)' }} aria-hidden="true">/</li>
              <li><Link href="/blog" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-gold)' }}>Journal</Link></li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(28,28,30,0.35)' }} aria-hidden="true">/</li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(28,28,30,0.55)' }} aria-current="page">{post.title}</li>
            </ol>
          </nav>

          <RevealText>
            <div style={{ maxWidth: '760px' }}>
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <time
                  dateTime={post.publishedAt}
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-gold)' }}
                >
                  {new Date(post.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(28,28,30,0.35)' }}>
                  {post.readingTime} min de lecture
                </span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(28,28,30,0.35)' }}>
                  Par {post.author.name}
                </span>
              </div>
              <h1
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--color-anthracite)',
                  lineHeight: 1.05,
                  marginBottom: '1.5rem',
                }}
              >
                {post.title}
              </h1>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', lineHeight: 1.75, color: 'rgba(28,28,30,0.65)' }}>
                {post.excerpt}
              </p>
            </div>
          </RevealText>
        </div>
      </section>

      {/* Cover image */}
      <div style={{ position: 'relative', aspectRatio: '21/9', maxHeight: '600px', overflow: 'hidden' }}>
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Content */}
      <article style={{ backgroundColor: 'var(--color-cream)', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container-content">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr min(70ch, 100%) 1fr', gap: '0' }}>
            <div style={{ gridColumn: '2' }}>
              <RevealText>
                <div className="prose-luxury" dangerouslySetInnerHTML={{ __html: renderContent(sections.join('\n\n---\n\n')) }} />
              </RevealText>
            </div>
          </div>
        </div>
      </article>

      {/* CTA at bottom of article */}
      <section
        style={{
          borderTop: '1px solid rgba(184,150,108,0.15)',
          padding: 'clamp(3rem, 6vw, 5rem) 0',
          backgroundColor: 'var(--color-mist)',
        }}
      >
        <div className="container-content" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontStyle: 'italic', color: 'var(--color-anthracite)', marginBottom: '0.5rem' }}>
              Votre mariage à Toulouse mérite le meilleur regard.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(28,28,30,0.55)' }}>
              Vérifiez nos disponibilités pour 2025 et 2026.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">
              Demander un devis
            </Link>
            <Link href="/blog" className="btn-secondary">
              Retour au journal
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/**
 * Minimal markdown-to-HTML renderer for blog content.
 * Handles: ## H2, ### H3, **bold**, paragraphs, ---
 */
function renderContent(markdown: string): string {
  return markdown
    .split('\n')
    .map((line) => {
      if (line.startsWith('### ')) return `<h3>${escapeHtml(line.slice(4))}</h3>`
      if (line.startsWith('## ')) return `<h2>${escapeHtml(line.slice(3))}</h2>`
      if (line.trim() === '---') return '<hr style="border:none;border-top:1px solid rgba(184,150,108,0.2);margin:2rem 0">'
      if (line.trim() === '') return ''
      // Process bold **text**
      const processed = escapeHtml(line).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      return `<p>${processed}</p>`
    })
    .filter((line) => line !== '')
    .join('\n')
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
