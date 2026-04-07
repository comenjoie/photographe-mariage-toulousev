import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { RevealText } from '@/components/ui/RevealText'

export const metadata: Metadata = {
  title: 'Journal — Conseils & inspirations mariage · Yakastudio',
  description:
    'Le journal de Yakastudio : conseils pour choisir votre photographe de mariage à Toulouse, inspirations, tendances et récits de mariages.',
  alternates: {
    canonical: 'https://www.photographe-mariage-toulouse.com/blog',
  },
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: 'calc(72px + clamp(4rem, 8vw, 7rem))',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)',
          backgroundColor: 'var(--color-cream)',
          textAlign: 'center',
        }}
      >
        <div className="container-content">
          <RevealText>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
              Journal
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--color-anthracite)',
                lineHeight: 1.05,
                marginBottom: '1.5rem',
              }}
            >
              Conseils & inspirations
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(28,28,30,0.6)', maxWidth: '52ch', margin: '0 auto' }}>
              Tout ce que vous devez savoir pour préparer votre reportage de mariage — guides, inspirations et récits de mariages en Occitanie.
            </p>
          </RevealText>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)', paddingTop: '0' }}>
        <div className="container-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {posts.map((post, i) => (
              <RevealText key={post.slug} delay={i * 80}>
                <article>
                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`Lire l'article : ${post.title}`}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem', alignItems: 'center' }}
                  >
                    {/* Cover image */}
                    <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: '2px', overflow: 'hidden' }}>
                      <Image
                        src={post.coverImage}
                        alt={post.coverAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover', transition: 'transform 700ms cubic-bezier(0.25,0.46,0.45,0.94)' }}
                        className="blog-card-img"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                        <time
                          dateTime={post.publishedAt}
                          style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--color-gold)', letterSpacing: '0.05em' }}
                        >
                          {new Date(post.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </time>
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(28,28,30,0.35)' }}>
                          {post.readingTime} min de lecture
                        </span>
                      </div>
                      <h2
                        style={{
                          fontFamily: 'var(--font-cormorant)',
                          fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                          fontWeight: 400,
                          fontStyle: 'italic',
                          color: 'var(--color-anthracite)',
                          lineHeight: 1.15,
                          marginBottom: '1rem',
                        }}
                      >
                        {post.title}
                      </h2>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(28,28,30,0.6)', marginBottom: '1.5rem' }}>
                        {post.excerpt}
                      </p>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.78rem',
                          fontWeight: 500,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--color-gold)',
                        }}
                      >
                        Lire l'article
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </article>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        a:hover .blog-card-img {
          transform: scale(1.04);
        }
      `}</style>
    </>
  )
}
