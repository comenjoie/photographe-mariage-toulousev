import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { RevealText } from '@/components/ui/RevealText'

export const metadata: Metadata = {
  title: 'Photographe Mariage Côte Basque — Biarritz & Pays Basque · Yakastudio',
  description:
    'Photographe de mariage sur la Côte Basque. Reportages élégants à Biarritz, Saint-Jean-de-Luz et Bayonne. Lumière océane, émotions authentiques.',
  keywords: [
    'photographe mariage côte basque',
    'photographe mariage biarritz',
    'photographe mariage pays basque',
    'photographe mariage saint-jean-de-luz',
    'photographe mariage bayonne',
    'mariage côte basque',
  ],
  alternates: {
    canonical: 'https://www.photographe-mariage-toulouse.com/photographe-mariage-cote-basque',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.photographe-mariage-toulouse.com' },
    { '@type': 'ListItem', position: 2, name: 'Photographe Mariage Côte Basque', item: 'https://www.photographe-mariage-toulouse.com/photographe-mariage-cote-basque' },
  ],
}

export default function PageCoteBasque() {
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
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=2000&q=90&auto=format&fit=crop"
          alt="Mariage sur la Côte Basque — Yakastudio"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
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
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(245,240,232,0.6)' }} aria-current="page">Côte Basque</li>
            </ol>
          </nav>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold-light)', marginBottom: '1rem' }}>
            Biarritz · Saint-Jean-de-Luz · Bayonne
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
            Photographe de mariage sur la Côte Basque
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
            <RevealText delay={150}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* TODO: remplacer par photos Yakastudio */}
                <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: '2px', overflow: 'hidden' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=85&auto=format&fit=crop"
                    alt="Couple de mariés sur la plage de Biarritz au coucher du soleil"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: '2px', overflow: 'hidden' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&q=85&auto=format&fit=crop"
                    alt="Cérémonie de mariage élégante sur la Côte Basque"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </RevealText>

            <RevealText>
              <div className="prose-luxury">
                <h2>La lumière de l'Atlantique, magnifiée</h2>
                <p>
                  La Côte Basque possède une lumière singulière — celle de l'Atlantique, changeante et dramatique, qui transforme chaque coucher de soleil en tableau impressionniste. Yannick Blaser, photographe de mariage basé à Toulouse, se déplace régulièrement sur la Côte Basque et a développé une connaissance intime de cette lumière océane.
                </p>
                <h3>Biarritz, Saint-Jean-de-Luz et les plus beaux lieux de mariage</h3>
                <p>
                  De l'Hôtel du Palais de Biarritz aux villas Belle Époque de Saint-Jean-de-Luz, en passant par les fermes basques de l'intérieur des terres ou les domaines face à l'océan — le Pays Basque offre un catalogue de lieux de mariage exceptionnels, chacun avec son caractère propre.
                </p>
                <h3>Un mariage aux accents basques</h3>
                <p>
                  L'identité basque est forte et belle. Les maisons à colombages rouge et blanc, les pelotes, les txapelas, les tables généreuses — Yakastudio capture l'authenticité culturelle de vos célébrations avec le même soin que l'esthétique formelle de la cérémonie.
                </p>
                <h3>Le reportage en extérieur sur la côte</h3>
                <p>
                  Les plages de la Grande Plage, de la Milady ou d'Hendaye au coucher du soleil offrent des décors naturels époustouflants. Yannick maîtrise la photographie en lumière naturelle difficile — contre-jour sur l'océan, lumière rasante au crépuscule — pour des images qui ont la profondeur de l'art.
                </p>
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
            Votre mariage sur la Côte Basque, immortalisé
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(245,240,232,0.6)', maxWidth: '44ch', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Discutons de votre projet et vérifions nos disponibilités pour votre date.
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
