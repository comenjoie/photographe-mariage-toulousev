import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { GalleryGrid, type GalleryImage } from '@/components/ui/GalleryGrid'
import { RevealText } from '@/components/ui/RevealText'

// TODO: replace with real Yakastudio album data (from CMS or /content folder)
const albums: Record<string, {
  title: string
  location: string
  year: number
  description: string
  images: GalleryImage[]
}> = {
  'sophie-thomas-chateau-villeneuve': {
    title: 'Sophie & Thomas',
    location: 'Château de Villeneuve, Toulouse',
    year: 2024,
    description: "Un mariage d'une élégance rare au Château de Villeneuve, aux portes de Toulouse. Lumière de fin d'après-midi sur la brique rose, émotion et authenticité à chaque instant.",
    images: [
      { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85&auto=format&fit=crop', alt: "Les mariés Sophie et Thomas s'embrassent sous un arbre en fleurs", width: 1200, height: 1600 },
      { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=85&auto=format&fit=crop', alt: 'Cérémonie de mariage dans le parc du château au coucher du soleil', width: 1200, height: 800 },
      { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=85&auto=format&fit=crop', alt: 'Détails des alliances en or sur les pétales de rose', width: 1200, height: 1600 },
      { src: 'https://images.unsplash.com/photo-1554879932-23a5d0eb3c38?w=1200&q=85&auto=format&fit=crop', alt: 'Bouquet de la mariée en fleurs blanches et feuillages', width: 1200, height: 1600 },
      { src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=85&auto=format&fit=crop', alt: 'Regard complice et sourire entre Sophie et Thomas', width: 1200, height: 1600 },
      { src: 'https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=1200&q=85&auto=format&fit=crop', alt: "Vue d'ensemble de la salle de réception du château", width: 1200, height: 800 },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(albums).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const album = albums[slug]
  if (!album) return {}
  return {
    title: `${album.title} — ${album.location}`,
    description: album.description,
    openGraph: {
      title: `${album.title} — Yakastudio`,
      description: album.description,
      images: [{ url: album.images[0]?.src ?? '', alt: album.images[0]?.alt ?? '' }],
    },
  }
}

const imageGalleryJsonLd = (album: (typeof albums)[string]) => ({
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: album.title,
  description: album.description,
  image: album.images.map((img) => img.src),
})

export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const album = albums[slug]
  if (!album) notFound()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGalleryJsonLd(album)) }} />

      {/* Header */}
      <section
        style={{
          paddingTop: 'calc(72px + clamp(4rem, 8vw, 7rem))',
          paddingBottom: 'clamp(3rem, 5vw, 4rem)',
          backgroundColor: 'var(--color-cream)',
        }}
      >
        <div className="container-content">
          <nav aria-label="Fil d'Ariane" style={{ marginBottom: '2rem' }}>
            <ol style={{ listStyle: 'none', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <li><Link href="/" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-gold)' }}>Accueil</Link></li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(28,28,30,0.35)' }} aria-hidden="true">/</li>
              <li><Link href="/portfolio" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-gold)' }}>Portfolio</Link></li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(28,28,30,0.35)' }} aria-hidden="true">/</li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(28,28,30,0.55)' }} aria-current="page">{album.title}</li>
            </ol>
          </nav>
          <RevealText>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>
              {album.location} · {album.year}
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
              {album.title}
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(28,28,30,0.65)', maxWidth: '60ch', lineHeight: 1.75 }}>
              {album.description}
            </p>
          </RevealText>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ backgroundColor: 'var(--color-cream)', paddingBottom: 'var(--space-section)' }}>
        <div className="container-wide">
          <GalleryGrid images={album.images} columns={3} />
        </div>
      </section>

      {/* Navigation between albums */}
      <section
        style={{
          borderTop: '1px solid rgba(184,150,108,0.15)',
          padding: 'clamp(3rem, 6vw, 5rem) 0',
          backgroundColor: 'var(--color-cream)',
        }}
      >
        <div className="container-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            href="/portfolio"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-anthracite)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Retour au portfolio
          </Link>
          <Link href="/contact" className="btn-primary">
            Réserver votre date
          </Link>
        </div>
      </section>
    </>
  )
}
