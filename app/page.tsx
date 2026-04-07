import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GalleryGrid, type GalleryImage } from '@/components/ui/GalleryGrid'
import { TestimonialCarousel, type Testimonial } from '@/components/ui/TestimonialCarousel'
import { DestinationCard } from '@/components/ui/DestinationCard'
import { RevealText } from '@/components/ui/RevealText'

export const metadata: Metadata = {
  title: 'Photographe Mariage Toulouse — Yakastudio',
  description:
    'Photographe de mariage à Toulouse. Reportages haut de gamme dans les Pyrénées et sur la Côte Basque. Esthétique lumineuse et intemporelle.',
  alternates: {
    canonical: 'https://www.photographe-mariage-toulouse.com',
  },
}

// TODO: remplacer par photos Yakastudio
const heroImage = 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=2000&q=90&auto=format&fit=crop'

// TODO: remplacer par photos Yakastudio
const galleryImages: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop', alt: 'Couple de mariés dans la lumière dorée de Toulouse', width: 800, height: 1067 },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&auto=format&fit=crop', alt: 'Cérémonie de mariage en plein air au coucher du soleil', width: 800, height: 534 },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&auto=format&fit=crop', alt: 'Détails de robe de mariée et alliances', width: 800, height: 1067 },
  { src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80&auto=format&fit=crop', alt: 'Regard complice entre les mariés', width: 800, height: 1067 },
  { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80&auto=format&fit=crop', alt: 'Mariage en montagne dans les Pyrénées', width: 800, height: 534 },
  { src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&q=80&auto=format&fit=crop', alt: 'Séance couple en nature, ambiance bohème', width: 800, height: 1067 },
  { src: 'https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=800&q=80&auto=format&fit=crop', alt: 'Premier regard des mariés à l\'autel', width: 800, height: 534 },
  { src: 'https://images.unsplash.com/photo-1554879932-23a5d0eb3c38?w=800&q=80&auto=format&fit=crop', alt: 'Bouquet de mariage fleurs blanches naturelles', width: 800, height: 1067 },
]

const testimonials: Testimonial[] = [
  {
    text: "Yannick a su capturer des instants que nous n'aurions jamais pu voir autrement. Chaque photo raconte notre histoire avec une sensibilité et un regard artistique incomparables.",
    author: 'Sophie & Thomas',
    location: 'Mariage à Toulouse, Château de Villeneuve',
    rating: 5,
  },
  {
    text: "Une expérience hors du temps. Discret, à l'écoute, et doté d'un œil absolument exceptionnel. Nos photos de mariage dans les Pyrénées sont tout simplement magnifiques.",
    author: 'Amélie & Romain',
    location: 'Mariage en montagne, Ariège',
    rating: 5,
  },
  {
    text: "Nous cherchions quelqu'un qui sache capturer l'émotion sans la mettre en scène. Yannick a exactement ce regard rare. Nos photos sont intemporelles.",
    author: 'Marie & Julien',
    location: 'Mariage sur la Côte Basque',
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
      <section
        aria-label="Introduction"
        style={{
          position: 'relative',
          height: '100dvh',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <Image
          src={heroImage}
          alt="Photographe de mariage à Toulouse — Yakastudio"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        {/* Dark overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(28,28,30,0.25) 0%, rgba(28,28,30,0.5) 100%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            padding: '0 clamp(1.25rem, 5vw, 3rem)',
            maxWidth: '900px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-light)',
              marginBottom: '1.5rem',
              animation: 'fadeIn 1s ease 0.2s both',
            }}
          >
            Toulouse · Pyrénées · Côte Basque
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--color-cream)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
              animation: 'fadeIn 1s ease 0.4s both',
            }}
          >
            Chaque mariage
            <br />
            mérite un regard
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(245,240,232,0.8)',
              maxWidth: '50ch',
              margin: '0 auto 3rem',
              lineHeight: 1.65,
              animation: 'fadeIn 1s ease 0.6s both',
            }}
          >
            Photographe de mariage à Toulouse, Yannick Blaser capture l'essence de votre histoire avec une esthétique lumineuse et intemporelle.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'fadeIn 1s ease 0.8s both',
            }}
          >
            <Link href="/portfolio" className="btn-primary">
              Découvrir mon travail
            </Link>
            <Link href="/contact" className="btn-ghost">
              Prendre contact
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            animation: 'fadeIn 1s ease 1.2s both',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.5)',
            }}
          >
            Défiler
          </span>
          <div
            style={{
              width: '1px',
              height: '50px',
              backgroundColor: 'var(--color-gold)',
              opacity: 0.6,
              animation: 'shimmer 2s ease-in-out infinite',
            }}
          />
        </div>
      </section>

      {/* ─── 2. MANIFESTE ────────────────────────────────────────────── */}
      <section
        className="section-padding"
        aria-label="Le regard de Yakastudio"
        style={{ backgroundColor: 'var(--color-cream)' }}
      >
        <div className="container-content">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(3rem, 6vw, 6rem)',
              alignItems: 'center',
            }}
          >
            {/* Quote */}
            <RevealText>
              <blockquote>
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    lineHeight: 1.2,
                    color: 'var(--color-anthracite)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  "La photographie, c'est l'art de figer l'imperceptible — ce souffle entre deux regards."
                </p>
              </blockquote>
            </RevealText>

            {/* Text */}
            <RevealText delay={150}>
              <div>
                <span className="gold-separator gold-separator--left" style={{ marginBottom: '2rem' }} />
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    marginBottom: '1.5rem',
                    marginTop: '2rem',
                  }}
                >
                  Le manifeste
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    color: 'rgba(28,28,30,0.75)',
                    marginBottom: '1.5rem',
                  }}
                >
                  Yakastudio n'est pas un prestataire. C'est un regard. Celui de Yannick Blaser, photographe de mariage à Toulouse, qui croit profondément que les plus belles photos ne se fabriquent pas — elles se trouvent.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    color: 'rgba(28,28,30,0.75)',
                    marginBottom: '2.5rem',
                  }}
                >
                  Chaque mariage est unique. Chaque lumière est différente. Chaque histoire mérite d'être racontée avec justesse et sensibilité.
                </p>
                <Link href="/a-propos" className="btn-secondary">
                  Découvrir l'approche
                </Link>
              </div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* ─── 3. GALERIE SÉLECTIONNÉE ─────────────────────────────────── */}
      <section
        className="section-padding"
        aria-label="Sélection de reportages"
        style={{ backgroundColor: 'var(--color-mist)' }}
      >
        <div className="container-wide">
          <RevealText>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 4rem)' }}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  marginBottom: '1rem',
                }}
              >
                Sélection
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--color-anthracite)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.015em',
                }}
              >
                Instants de grâce
              </h2>
            </div>
          </RevealText>

          <GalleryGrid images={galleryImages} columns={3} />

          <RevealText>
            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <Link href="/portfolio" className="btn-primary">
                Voir tout le portfolio
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ─── 4. DESTINATIONS ─────────────────────────────────────────── */}
      <section
        className="section-padding"
        aria-label="Destinations de mariage"
        style={{ backgroundColor: 'var(--color-cream)' }}
      >
        <div className="container-content">
          <RevealText>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 4rem)' }}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  marginBottom: '1rem',
                }}
              >
                Destinations
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--color-anthracite)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.015em',
                  marginBottom: '1rem',
                }}
              >
                Trois territoires, un même regard
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  color: 'rgba(28,28,30,0.6)',
                  maxWidth: '50ch',
                  margin: '0 auto',
                }}
              >
                Basé à Toulouse, disponible dans toute la France et à l'international.
              </p>
            </div>
          </RevealText>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {/* TODO: remplacer par photos Yakastudio */}
            <RevealText delay={0}>
              <DestinationCard
                title="Toulouse & Occitanie"
                subtitle="Territoire principal"
                href="/photographe-mariage-toulouse"
                imageSrc="https://images.unsplash.com/photo-1558642891-54be180ea339?w=800&q=80&auto=format&fit=crop"
                imageAlt="Mariage à Toulouse, Capitole"
              />
            </RevealText>
            <RevealText delay={100}>
              <DestinationCard
                title="Les Pyrénées"
                subtitle="Nature & authenticité"
                href="/photographe-mariage-pyrenees"
                imageSrc="https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80&auto=format&fit=crop"
                imageAlt="Mariage en montagne dans les Pyrénées"
              />
            </RevealText>
            <RevealText delay={200}>
              <DestinationCard
                title="Côte Basque"
                subtitle="Lumière & océan"
                href="/photographe-mariage-cote-basque"
                imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop"
                imageAlt="Mariage sur la Côte Basque, Biarritz"
              />
            </RevealText>
          </div>
        </div>
      </section>

      {/* ─── 5. TÉMOIGNAGES ──────────────────────────────────────────── */}
      <section
        className="section-padding"
        aria-label="Témoignages de mariés"
        style={{ backgroundColor: 'var(--color-mist)' }}
      >
        <div className="container-content">
          <RevealText>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 4rem)' }}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  marginBottom: '1rem',
                }}
              >
                Témoignages
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--color-anthracite)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.015em',
                }}
              >
                Ce qu'ils en disent
              </h2>
            </div>
          </RevealText>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ─── 6. CTA FINAL ────────────────────────────────────────────── */}
      <section
        aria-label="Réserver votre date"
        style={{
          backgroundColor: 'var(--color-anthracite)',
          padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 5vw, 3rem)',
          textAlign: 'center',
        }}
      >
        <RevealText>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: '1.5rem',
              }}
            >
              Disponibilités 2025 · 2026
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--color-cream)',
                lineHeight: 1.1,
                letterSpacing: '-0.015em',
                marginBottom: '1.5rem',
              }}
            >
              Votre histoire mérite
              <br />
              d'être racontée
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                color: 'rgba(245,240,232,0.6)',
                maxWidth: '48ch',
                margin: '0 auto 3rem',
                lineHeight: 1.7,
              }}
            >
              Prenons le temps d'une conversation. Parlez-nous de votre projet, nous vous répondons sous 48 heures.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ backgroundColor: 'var(--color-gold)', borderColor: 'var(--color-gold)', color: 'var(--color-white)' }}>
                Réserver votre date
              </Link>
              <Link href="/offres" className="btn-ghost">
                Voir les offres
              </Link>
            </div>
          </div>
        </RevealText>
      </section>
    </>
  )
}
