import type { Metadata } from 'next'
import Link from 'next/link'
import { AlbumCard, type Album } from '@/components/ui/AlbumCard'
import { RevealText } from '@/components/ui/RevealText'

export const metadata: Metadata = {
  title: 'Portfolio Mariage · Yakastudio Toulouse',
  description:
    'Découvrez les reportages photo de mariages à Toulouse, dans les Pyrénées et sur la Côte Basque. Chaque histoire, unique.',
  alternates: {
    canonical: 'https://www.photographe-mariage-toulouse.com/portfolio',
  },
}

// TODO: remplacer par albums réels Yakastudio
const albums: Album[] = [
  {
    slug: 'sophie-thomas-chateau-villeneuve',
    title: 'Sophie & Thomas',
    location: 'Château de Villeneuve, Toulouse',
    year: 2024,
    coverSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop',
    coverAlt: 'Mariage de Sophie et Thomas au Château de Villeneuve à Toulouse',
    tag: 'Toulouse',
  },
  {
    slug: 'amelie-romain-ariege',
    title: 'Amélie & Romain',
    location: 'Vallée de l'Ariège, Pyrénées',
    year: 2024,
    coverSrc: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80&auto=format&fit=crop',
    coverAlt: 'Mariage d'Amélie et Romain dans la vallée de l'Ariège',
    tag: 'Pyrénées',
  },
  {
    slug: 'marie-julien-biarritz',
    title: 'Marie & Julien',
    location: 'Biarritz, Côte Basque',
    year: 2024,
    coverSrc: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&auto=format&fit=crop',
    coverAlt: 'Mariage de Marie et Julien à Biarritz',
    tag: 'Côte Basque',
  },
  {
    slug: 'claire-antoine-toulouse',
    title: 'Claire & Antoine',
    location: 'Domaine du Lac, Haute-Garonne',
    year: 2023,
    coverSrc: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&auto=format&fit=crop',
    coverAlt: 'Mariage de Claire et Antoine dans la Haute-Garonne',
    tag: 'Toulouse',
  },
  {
    slug: 'lea-marc-saint-jean-de-luz',
    title: 'Léa & Marc',
    location: 'Saint-Jean-de-Luz, Pays Basque',
    year: 2023,
    coverSrc: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80&auto=format&fit=crop',
    coverAlt: 'Mariage de Léa et Marc à Saint-Jean-de-Luz',
    tag: 'Côte Basque',
  },
  {
    slug: 'camille-pierre-pyrenees',
    title: 'Camille & Pierre',
    location: 'Hautes-Pyrénées, montagne',
    year: 2023,
    coverSrc: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&q=80&auto=format&fit=crop',
    coverAlt: 'Mariage de Camille et Pierre dans les Hautes-Pyrénées',
    tag: 'Pyrénées',
  },
]

const tags = ['Toulouse', 'Pyrénées', 'Côte Basque']

export default function PortfolioPage() {
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
              Portfolio
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
              Histoires de mariages
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(28,28,30,0.6)', maxWidth: '48ch', margin: '0 auto' }}>
              Toulouse, Pyrénées, Côte Basque — chaque reportage est une histoire unique, racontée avec sensibilité et grâce.
            </p>
          </RevealText>
        </div>
      </section>

      {/* Albums grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)', paddingTop: '0' }}>
        <div className="container-content">
          {/* Tag filter placeholder — client filter handled by component */}
          <RevealText>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
              {['Tous', ...tags].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '0.5rem 1.25rem',
                    border: `1px solid ${tag === 'Tous' ? 'var(--color-gold)' : 'rgba(28,28,30,0.2)'}`,
                    backgroundColor: tag === 'Tous' ? 'var(--color-gold)' : 'transparent',
                    color: tag === 'Tous' ? 'var(--color-white)' : 'var(--color-anthracite)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </RevealText>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {albums.map((album, i) => (
              <RevealText key={album.slug} delay={i * 80}>
                <AlbumCard album={album} />
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: 'var(--color-anthracite)',
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 3rem)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--color-cream)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Votre mariage dans ce portfolio ?
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(245,240,232,0.6)', maxWidth: '42ch', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Découvrez nos disponibilités et commençons à écrire votre histoire ensemble.
          </p>
          <Link href="/contact" className="btn-primary" style={{ backgroundColor: 'var(--color-gold)', borderColor: 'var(--color-gold)', color: 'var(--color-white)' }}>
            Réserver votre date
          </Link>
        </div>
      </section>
    </>
  )
}
