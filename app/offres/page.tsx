import type { Metadata } from 'next'
import Link from 'next/link'
import { RevealText } from '@/components/ui/RevealText'

export const metadata: Metadata = {
  title: 'Offres & Tarifs — Photographe Mariage Toulouse · Yakastudio',
  description:
    'Découvrez les offres de Yakastudio pour votre reportage de mariage à Toulouse. Tarifs transparents, prestations sur mesure, devis gratuit.',
  alternates: {
    canonical: 'https://www.photographe-mariage-toulouse.com/offres',
  },
}

const offers = [
  {
    name: 'Essentiel',
    tagline: 'L'essentiel de votre journée',
    duration: 'Demi-journée (6 heures)',
    price: 'À partir de 2 500 €',
    features: [
      'Reportage de 6 heures continues',
      '250 à 350 photos retouchées',
      'Galerie privée en ligne (haute résolution)',
      'Téléchargement illimité',
      'Livraison sous 4 semaines',
    ],
    highlight: false,
    cta: 'Demander un devis',
  },
  {
    name: 'Signature',
    tagline: 'Le reportage complet, du matin au soir',
    duration: 'Journée complète (10–12 heures)',
    price: 'À partir de 3 800 €',
    features: [
      'Reportage journée complète (préparatifs → soirée)',
      '400 à 600 photos retouchées',
      'Séance engagement incluse (save the date)',
      'Galerie privée en ligne (haute résolution)',
      'Téléchargement illimité',
      'Livraison sous 6 semaines',
      'Consultation pré-mariage personnalisée',
    ],
    highlight: true,
    cta: 'Réserver cette offre',
  },
  {
    name: 'Prestige',
    tagline: 'L'expérience ultime, sur mesure',
    duration: 'Multi-jours sur mesure',
    price: 'Sur devis',
    features: [
      'Reportage multi-jours (répétition, J-1, jour J, J+1)',
      'Nombre de photos illimité',
      'Séance engagement incluse',
      'Album photo artisanal (optionnel)',
      'Couverture internationale',
      'Livraison express disponible',
      'Accompagnement complet & dédié',
    ],
    highlight: false,
    cta: 'Discuter du projet',
  },
]

export default function OffresPage() {
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
              Tarifs & Offres
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
              Des offres à votre mesure
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(28,28,30,0.6)', maxWidth: '52ch', margin: '0 auto' }}>
              Chaque mariage est unique. Ces offres sont des points de départ — nous adaptons chaque prestation à votre projet et votre budget.
            </p>
          </RevealText>
        </div>
      </section>

      {/* Offers */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-mist)', paddingTop: '0' }}>
        <div className="container-content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            {offers.map((offer, i) => (
              <RevealText key={offer.name} delay={i * 100}>
                <div
                  style={{
                    padding: 'clamp(2rem, 4vw, 3rem)',
                    backgroundColor: offer.highlight ? 'var(--color-anthracite)' : 'var(--color-cream)',
                    border: offer.highlight ? 'none' : '1px solid rgba(184,150,108,0.2)',
                    borderRadius: '2px',
                    position: 'relative',
                  }}
                >
                  {offer.highlight && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-14px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'var(--color-gold)',
                        color: 'var(--color-white)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        padding: '0.3rem 1rem',
                        borderRadius: '1px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Le plus choisi
                    </span>
                  )}

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: offer.highlight ? 'var(--color-gold)' : 'var(--color-gold)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {offer.name}
                  </p>
                  <h2
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                      fontWeight: 400,
                      fontStyle: 'italic',
                      color: offer.highlight ? 'var(--color-cream)' : 'var(--color-anthracite)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {offer.tagline}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      color: offer.highlight ? 'rgba(245,240,232,0.5)' : 'rgba(28,28,30,0.45)',
                      marginBottom: '2rem',
                    }}
                  >
                    {offer.duration}
                  </p>

                  <div
                    style={{
                      height: '1px',
                      backgroundColor: offer.highlight ? 'rgba(184,150,108,0.2)' : 'rgba(184,150,108,0.2)',
                      marginBottom: '2rem',
                    }}
                  />

                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      fontWeight: 300,
                      fontStyle: 'italic',
                      color: offer.highlight ? 'var(--color-cream)' : 'var(--color-anthracite)',
                      marginBottom: '2rem',
                    }}
                  >
                    {offer.price}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                    {offer.features.map((feature) => (
                      <li
                        key={feature}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9rem',
                          color: offer.highlight ? 'rgba(245,240,232,0.75)' : 'rgba(28,28,30,0.65)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.6rem',
                        }}
                      >
                        <span style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true">◆</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={offer.highlight ? 'btn-primary' : 'btn-secondary'}
                    style={offer.highlight ? { backgroundColor: 'var(--color-gold)', borderColor: 'var(--color-gold)', color: 'var(--color-white)', display: 'block', textAlign: 'center' } : { display: 'block', textAlign: 'center' }}
                  >
                    {offer.cta}
                  </Link>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-content" style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <RevealText>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--color-anthracite)',
                marginBottom: '1.25rem',
              }}
            >
              Ces tarifs sont indicatifs
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.75, color: 'rgba(28,28,30,0.65)', marginBottom: '2.5rem' }}>
              Chaque mariage est différent. Les déplacements, la durée exacte, les options supplémentaires (album photo artisanal, second photographe, vidéo) sont discutés lors de notre première rencontre. Un devis personnalisé vous est envoyé sous 48 heures.
            </p>
            <Link href="/contact" className="btn-primary">
              Obtenir un devis gratuit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </RevealText>
        </div>
      </section>
    </>
  )
}
