import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from '@/components/ui/ContactForm'
import { RevealText } from '@/components/ui/RevealText'

export const metadata: Metadata = {
  title: 'Contacter Yakastudio · Photographe Toulouse',
  description:
    'Réservez votre photographe de mariage à Toulouse. Formulaire de contact, disponibilités et tarifs sur demande. Réponse sous 48 heures.',
  alternates: {
    canonical: 'https://www.photographe-mariage-toulouse.com/contact',
  },
}

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact — Yakastudio',
  url: 'https://www.photographe-mariage-toulouse.com/contact',
  description: 'Prenez contact avec Yannick Blaser, photographe de mariage à Toulouse.',
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }} />

      <section
        style={{
          paddingTop: 'calc(72px + clamp(4rem, 8vw, 7rem))',
          paddingBottom: 'clamp(5rem, 10vw, 9rem)',
          backgroundColor: 'var(--color-cream)',
        }}
      >
        <div className="container-content">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(3rem, 7vw, 7rem)',
              alignItems: 'start',
            }}
          >
            {/* Left column — info */}
            <RevealText>
              <div style={{ position: 'sticky', top: '120px' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
                  Contact
                </p>
                <h1
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: 'var(--color-anthracite)',
                    lineHeight: 1.05,
                    marginBottom: '1.5rem',
                  }}
                >
                  Parlons de votre mariage
                </h1>
                <span className="gold-separator gold-separator--left" style={{ marginBottom: '2rem' }} />
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(28,28,30,0.65)', marginBottom: '0.75rem', marginTop: '2rem' }}>
                  Remplissez le formulaire et Yannick vous répondra sous 48 heures avec ses disponibilités et un devis personnalisé.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(28,28,30,0.65)', marginBottom: '3rem' }}>
                  Si vous préférez un échange direct, appelez-nous ou écrivez par e-mail.
                </p>

                {/* Contact details */}
                <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(28,28,30,0.4)', marginBottom: '0.25rem' }}>
                      Téléphone
                    </p>
                    <a
                      href="tel:+33600000000"
                      style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--color-anthracite)', transition: 'color 300ms ease' }}
                    >
                      +33 (0)6 00 00 00 00
                    </a>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(28,28,30,0.4)', marginBottom: '0.25rem' }}>
                      E-mail
                    </p>
                    <a
                      href="mailto:contact@photographe-mariage-toulouse.com"
                      style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--color-anthracite)', transition: 'color 300ms ease', wordBreak: 'break-word' }}
                    >
                      contact@photographe-mariage-toulouse.com
                    </a>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(28,28,30,0.4)', marginBottom: '0.25rem' }}>
                      Basé à
                    </p>
                    <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--color-anthracite)' }}>
                      Toulouse, Occitanie — France
                    </p>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(28,28,30,0.4)', marginBottom: '0.25rem' }}>
                      Instagram
                    </p>
                    <a
                      href="https://www.instagram.com/yakastudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--color-anthracite)', transition: 'color 300ms ease' }}
                    >
                      @yakastudio
                    </a>
                  </div>
                </address>

                {/* Reassurances */}
                <div
                  style={{
                    padding: '1.5rem',
                    backgroundColor: 'var(--color-mist)',
                    borderLeft: '2px solid var(--color-gold)',
                    borderRadius: '0 2px 2px 0',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', lineHeight: 1.65, color: 'rgba(28,28,30,0.65)' }}>
                    ✦ Réponse garantie sous 48 heures<br />
                    ✦ Devis gratuit et sans engagement<br />
                    ✦ Rencontre possible à Toulouse ou en visio
                  </p>
                </div>
              </div>
            </RevealText>

            {/* Right column — form */}
            <RevealText delay={150}>
              <ContactForm />
            </RevealText>
          </div>
        </div>
      </section>
    </>
  )
}
