import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { RevealText } from '@/components/ui/RevealText'

export const metadata: Metadata = {
  title: 'Photographe Mariage Pyrénées — Nature & Luxe · Yakastudio',
  description:
    "Mariages en montagne : châlets, lumière dorée et émotions vraies. Photographe mariage Pyrénées disponible toute l'année. Yakastudio.",
  keywords: [
    'photographe mariage pyrénées',
    'photographe mariage montagne',
    'mariage pyrénées',
    'photographe mariage ariège',
    'photographe mariage hautes-pyrénées',
    'photographe mariage nature luxe',
  ],
  alternates: {
    canonical: 'https://www.photographe-mariage-toulouse.com/photographe-mariage-pyrenees',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.photographe-mariage-toulouse.com' },
    { '@type': 'ListItem', position: 2, name: 'Photographe Mariage Pyrénées', item: 'https://www.photographe-mariage-toulouse.com/photographe-mariage-pyrenees' },
  ],
}

export default function PagePyrenees() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '80vh',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
          overflow: 'hidden',
        }}
      >
        {/* TODO: remplacer par photo Yakastudio */}
        <Image
          src="https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=2000&q=90&auto=format&fit=crop"
          alt="Mariage dans les Pyrénées — Yakastudio"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,28,30,0.75) 0%, rgba(28,28,30,0.1) 60%)' }}
        />
        <div className="container-content" style={{ position: 'relative', zIndex: 1 }}>
          <nav aria-label="Fil d'Ariane" style={{ marginBottom: '1.5rem' }}>
            <ol style={{ listStyle: 'none', display: 'flex', gap: '0.5rem' }}>
              <li><Link href="/" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(245,240,232,0.6)' }}>Accueil</Link></li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(245,240,232,0.3)' }} aria-hidden="true">/</li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(245,240,232,0.6)' }} aria-current="page">Pyrénées</li>
            </ol>
          </nav>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold-light)', marginBottom: '1rem' }}>
            Ariège · Hautes-Pyrénées · Pyrénées-Atlantiques
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--color-cream)',
              lineHeight: 1.05,
              maxWidth: '16ch',
              marginBottom: '2rem',
            }}
          >
            Photographe de mariage dans les Pyrénées
          </h1>
          <Link href="/contact" className="btn-primary">
            Réserver votre date
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-content">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(3rem, 6vw, 6rem)',
              alignItems: 'start',
            }}
          >
            <RevealText>
              <div className="prose-luxury">
                <h2>Un mariage en montagne, une lumière unique</h2>
                <p>
                  Les Pyrénées offrent un cadre naturel exceptionnel pour un mariage. La lumière y est différente — plus pure, plus contrastée, dorée à l'heure du couchant sur les crêtes enneigées ou les alpages fleuris. Yannick Blaser, photographe de mariage basé à Toulouse, connaît intimement ces paysages et sait en extraire la quintessence photographique.
                </p>
                <h3>Des décors naturels incomparables</h3>
                <p>
                  Des chalets rustiques chics de l'Ariège aux domaines de caractère des Hautes-Pyrénées, en passant par les panoramas grandioses du Pic du Midi ou la douceur des vallées de la Bigorre — chaque lieu raconte une histoire différente. Un mariage dans les Pyrénées, c'est l'alliance parfaite entre la nature brute et la sophistication.
                </p>
                <h3>Toutes les saisons, toutes les ambiances</h3>
                <p>
                  L'été, les prairies d'altitude se couvrent de fleurs sauvages. L'automne embrase les forêts de couleurs cuivrées. L'hiver offre le silence magique de la neige. Chaque saison des Pyrénées est une invitation à un mariage photographiquement exceptionnel.
                </p>
                <h3>Un reportage sur mesure</h3>
                <p>
                  Yakastudio adapte son approche à l'altitude et aux conditions lumineuses des Pyrénées. Équipement optimisé, anticipation des changements météorologiques, connaissance des heures dorées en montagne — chaque détail est pensé pour que vos photos soient exceptionnelles, quelles que soient les conditions.
                </p>
              </div>
            </RevealText>

            <RevealText delay={150}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* TODO: remplacer par photos Yakastudio */}
                <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: '2px', overflow: 'hidden' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&q=85&auto=format&fit=crop"
                    alt="Couple de mariés dans un paysage de montagne pyrénéen"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: '2px', overflow: 'hidden' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=900&q=85&auto=format&fit=crop"
                    alt="Cérémonie de mariage en plein air dans les Pyrénées"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </RevealText>
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
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--color-cream)',
              marginBottom: '1.25rem',
              lineHeight: 1.1,
            }}
          >
            Votre mariage en montagne, raconté avec grâce
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(245,240,232,0.6)', maxWidth: '44ch', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Vérifiez nos disponibilités pour votre date dans les Pyrénées.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ backgroundColor: 'var(--color-gold)', borderColor: 'var(--color-gold)', color: 'var(--color-white)' }}>
              Prendre contact
            </Link>
            <Link href="/portfolio" className="btn-ghost">
              Voir le portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
