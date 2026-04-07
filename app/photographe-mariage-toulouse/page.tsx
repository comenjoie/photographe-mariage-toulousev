import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { RevealText } from '@/components/ui/RevealText'

export const metadata: Metadata = {
  title: 'Photographe Mariage Toulouse · Yakastudio',
  description:
    'Capturez votre mariage à Toulouse avec un photographe expert en reportage naturel et luxe. Disponibilités 2025-2026. Devis gratuit.',
  keywords: [
    'photographe mariage toulouse',
    'photographe mariage haute-garonne',
    'reportage photo mariage toulouse',
    'photographe mariage naturel toulouse',
    'photographe mariage château toulouse',
    'photographe mariage luxe toulouse',
  ],
  alternates: {
    canonical: 'https://www.photographe-mariage-toulouse.com/photographe-mariage-toulouse',
  },
  openGraph: {
    title: 'Photographe Mariage Toulouse · Yakastudio',
    description: 'Capturez votre mariage à Toulouse avec un photographe expert en reportage naturel et luxe.',
    url: 'https://www.photographe-mariage-toulouse.com/photographe-mariage-toulouse',
  },
}

const faqItems = [
  {
    question: 'Combien coûte un photographe de mariage à Toulouse ?',
    answer:
      'Le tarif d'un photographe de mariage à Toulouse varie généralement entre 1 500 € et 5 000 € pour une prestation complète. Chez Yakastudio, nos offres débutent à 2 500 € pour un reportage de demi-journée et incluent une galerie en haute résolution, une séance engagement offerte et un accompagnement personnalisé.',
  },
  {
    question: 'Combien de temps à l'avance dois-je réserver mon photographe de mariage ?',
    answer:
      'Nous recommandons de réserver votre photographe de mariage à Toulouse au minimum 12 à 18 mois avant la date du mariage. Les samedis de mai à septembre sont les dates les plus prisées et se réservent souvent plus d'un an à l'avance.',
  },
  {
    question: 'Yannick Blaser intervient-il en dehors de Toulouse ?',
    answer:
      'Oui, Yakastudio est basé à Toulouse mais intervient dans toute l'Occitanie, les Pyrénées, la Côte Basque et partout en France. Les déplacements à l'international sont également possibles pour les mariages de destination.',
  },
  {
    question: 'Combien de photos recevrons-nous après le mariage ?',
    answer:
      'Pour une journée complète, vous recevrez entre 400 et 600 images retouchées, livrées dans une galerie privée en ligne sous 4 à 6 semaines. Chaque photo est post-traitée individuellement pour assurer une cohérence esthétique.',
  },
  {
    question: 'Est-ce possible de faire une séance engagement avant le mariage ?',
    answer:
      'Absolument. La séance engagement (save the date) est incluse dans nos offres principales. Elle permet de créer un lien de confiance avant le grand jour, de tester votre aisance devant l'objectif et de tester différents lieux à Toulouse ou dans les environs.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.photographe-mariage-toulouse.com' },
    { '@type': 'ListItem', position: 2, name: 'Photographe Mariage Toulouse', item: 'https://www.photographe-mariage-toulouse.com/photographe-mariage-toulouse' },
  ],
}

export default function PageToulouse() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'calc(72px + clamp(5rem, 10vw, 9rem))',
          paddingBottom: 'clamp(5rem, 10vw, 9rem)',
          backgroundColor: 'var(--color-cream)',
          overflow: 'hidden',
        }}
      >
        {/* Background accent */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '45%',
            height: '100%',
            zIndex: 0,
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85&auto=format&fit=crop"
            alt=""
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, var(--color-cream) 0%, transparent 60%)',
            }}
          />
        </div>

        <div className="container-content" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" style={{ marginBottom: '2rem' }}>
            <ol style={{ listStyle: 'none', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <li>
                <Link href="/" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-gold)' }}>
                  Accueil
                </Link>
              </li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(28,28,30,0.35)' }} aria-hidden="true">/</li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(28,28,30,0.55)' }} aria-current="page">
                Photographe mariage Toulouse
              </li>
            </ol>
          </nav>

          <RevealText>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: '1.25rem',
              }}
            >
              Toulouse · Haute-Garonne · Occitanie
            </p>
          </RevealText>

          <RevealText delay={100}>
            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.75rem, 6vw, 5.5rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--color-anthracite)',
                maxWidth: '14ch',
                marginBottom: '2rem',
              }}
            >
              Photographe de mariage à Toulouse
            </h1>
          </RevealText>

          <RevealText delay={200}>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                lineHeight: 1.75,
                color: 'rgba(28,28,30,0.7)',
                maxWidth: '52ch',
                marginBottom: '3rem',
              }}
            >
              Yannick Blaser, photographe de mariage basé à Toulouse, accompagne les couples qui souhaitent un reportage haut de gamme, naturel et émotionnel. Un regard unique sur votre plus beau jour.
            </p>
          </RevealText>

          <RevealText delay={300}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">
                Demander un devis gratuit
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                Voir le portfolio
              </Link>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ─── SECTION 1 — INTRODUCTION ──────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-mist)' }}>
        <div className="container-content">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(3rem, 6vw, 6rem)',
              alignItems: 'center',
            }}
          >
            <RevealText>
              <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: '2px', overflow: 'hidden' }}>
                {/* TODO: remplacer par photo Yakastudio */}
                <Image
                  src="https://images.unsplash.com/photo-1554879932-23a5d0eb3c38?w=900&q=85&auto=format&fit=crop"
                  alt="Yannick Blaser, photographe de mariage à Toulouse"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </RevealText>

            <RevealText delay={150}>
              <div>
                <span className="gold-separator gold-separator--left" style={{ marginBottom: '2rem' }} />
                <h2
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: 'var(--color-anthracite)',
                    lineHeight: 1.15,
                    marginBottom: '1.5rem',
                    marginTop: '2rem',
                  }}
                >
                  Un photographe de mariage à Toulouse qui vous ressemble
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(28,28,30,0.7)', marginBottom: '1.25rem' }}>
                  À Toulouse, la vie est belle. Les ciels rosés sur la Garonne, les châteaux en briques roses de la Haute-Garonne, les lumières dorées d'octobre sur les vignobles d'Occitanie — Yannick Blaser connaît chaque recoin de ce territoire et sait le faire vibrer dans ses photos.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(28,28,30,0.7)', marginBottom: '1.25rem' }}>
                  Son approche : être présent sans être intrusif. Observer, anticiper, et capturer. Jamais de poses figées, jamais de mise en scène artificielle. Juste la réalité de votre amour, sublimée par la lumière et l'instant.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(28,28,30,0.7)' }}>
                  Depuis plus de 10 ans, Yakastudio accompagne des couples exigeants qui souhaitent des souvenirs de mariage à Toulouse qui traversent le temps.
                </p>
              </div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2 — POURQUOI CHOISIR ─────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-content">
          <RevealText>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
                Pourquoi Yakastudio
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--color-anthracite)',
                  lineHeight: 1.15,
                }}
              >
                Ce qui rend chaque reportage unique
              </h2>
            </div>
          </RevealText>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {[
              {
                icon: '◈',
                title: 'Reportage naturel et documentaire',
                text: 'Pas de poses artificielles. Yakastudio documente vos émotions avec authenticité, comme un ami photographe invisible qui connaît tous vos recoins.',
              },
              {
                icon: '◈',
                title: 'Esthétique lumineuse & intemporelle',
                text: 'Une signature lumineuse et douce, des couleurs fidèles et chaudes qui s'admirent encore dans vingt ans. Pas de filtres à la mode, juste la vérité de l'instant.',
              },
              {
                icon: '◈',
                title: 'Connaissance du territoire toulousain',
                text: 'Toulouse et sa région ne recèlent aucun secret pour Yannick. Chaque lumière, chaque château, chaque heure dorée sur la Garonne est connue et anticipée.',
              },
              {
                icon: '◈',
                title: 'Accompagnement personnalisé',
                text: 'De la première rencontre à la livraison de votre galerie, vous êtes accompagnés à chaque étape. Une relation de confiance, pas un service standardisé.',
              },
            ].map((item, i) => (
              <RevealText key={i} delay={i * 100}>
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.75rem',
                      color: 'var(--color-gold)',
                      marginBottom: '1.25rem',
                    }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                      fontWeight: 400,
                      color: 'var(--color-anthracite)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(28,28,30,0.65)' }}>
                    {item.text}
                  </p>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3 — LIEUX À TOULOUSE ─────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-mist)' }}>
        <div className="container-content">
          <RevealText>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--color-anthracite)',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
              }}
            >
              Les plus beaux lieux de mariage à Toulouse et en Haute-Garonne
            </h2>
          </RevealText>
          <RevealText delay={100}>
            <div className="prose-luxury">
              <p>
                La Haute-Garonne regorge de cadres exceptionnels pour un mariage. Des domaines viticoles de Fronton aux châteaux haut de gamme du Lauragais, en passant par les bastides médiévales et les domaines contemporains aux portes de la Ville Rose — chaque lieu a son caractère, et Yannick Blaser sait en tirer le meilleur parti photographique.
              </p>
              <h3>Les châteaux et domaines incontournables</h3>
              <p>
                Parmi les lieux de mariage les plus photographiés à Toulouse et dans la région : le Château de Lavaur, le Domaine de Roquelongue, le Château de Pécaut, ou encore les magnifiques mas de la Montagne Noire. Chacun offre une lumière particulière selon la saison et l'heure.
              </p>
              <h3>Mariages en ville : Toulouse, la Ville Rose</h3>
              <p>
                Pour les couples qui souhaitent un mariage urbain, Toulouse offre des décors architecturaux uniques : la Place du Capitole, les bords de Garonne au coucher du soleil, le quartier Saint-Aubin ou les hôtels particuliers du centre historique. La brique rose toulousaine crée une palette de couleurs naturellement lumineuse, idéale pour un reportage photographique haut de gamme.
              </p>
              <h3>Séances save the date à Toulouse</h3>
              <p>
                La séance engagement permet de briser la glace avant le grand jour. Yannick propose des séances dans les Jardins des Plantes, sur les rives de la Garonne, dans les allées fleuries de l'Île du Ramier ou dans les vignobles de Fronton. L'objectif : vous mettre à l'aise et créer des images naturelles qui racontent déjà votre histoire.
              </p>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ─── SECTION 4 — PROCESS ───────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-content">
          <RevealText>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
                Déroulement
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--color-anthracite)',
                  lineHeight: 1.15,
                }}
              >
                Comment nous travaillons ensemble
              </h2>
            </div>
          </RevealText>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '700px', margin: '0 auto' }}>
            {[
              { step: '01', title: 'La première rencontre', text: 'Un appel ou une rencontre autour d'un café pour faire connaissance, comprendre votre vision et vérifier notre compatibilité. C'est gratuit et sans engagement.' },
              { step: '02', title: 'La réservation', text: 'Un contrat clair, un acompte de 30 % et une date bloquée dans notre agenda. Votre mariage est sécurisé.' },
              { step: '03', title: 'La séance engagement', text: 'Incluse dans nos offres principales, elle vous permet de vous familiariser avec l'objectif dans un cadre détendu à Toulouse ou aux environs.' },
              { step: '04', title: 'Le grand jour', text: 'Yannick arrive en avance, reste discret et attentif. Il anticipe chaque moment et capture l'authenticité de votre journée.' },
              { step: '05', title: 'La galerie', text: 'Sous 4 à 6 semaines, vous recevez votre galerie privée de 400 à 600 photos retouchées, disponibles en téléchargement haute résolution.' },
            ].map((item, i) => (
              <RevealText key={i} delay={i * 80}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: '2rem',
                    paddingBottom: '2.5rem',
                    borderBottom: i < 4 ? '1px solid rgba(184,150,108,0.15)' : 'none',
                    paddingTop: i > 0 ? '2.5rem' : '0',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '2.5rem',
                        fontWeight: 300,
                        fontStyle: 'italic',
                        color: 'var(--color-gold)',
                        opacity: 0.5,
                      }}
                    >
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                        fontWeight: 400,
                        color: 'var(--color-anthracite)',
                        marginBottom: '0.6rem',
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(28,28,30,0.65)' }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5 — FAQ ───────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-mist)' }}>
        <div className="container-content">
          <RevealText>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 4rem)' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
                FAQ
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--color-anthracite)',
                  lineHeight: 1.15,
                }}
              >
                Questions fréquentes
              </h2>
            </div>
          </RevealText>

          <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqItems.map((item, i) => (
              <RevealText key={i} delay={i * 60}>
                <details
                  style={{
                    borderBottom: '1px solid rgba(184,150,108,0.2)',
                    paddingBottom: '0',
                  }}
                >
                  <summary
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
                      fontWeight: 400,
                      color: 'var(--color-anthracite)',
                      padding: '1.5rem 0',
                      listStyle: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    {item.question}
                    <span
                      style={{ color: 'var(--color-gold)', fontSize: '1.25rem', flexShrink: 0 }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      lineHeight: 1.75,
                      color: 'rgba(28,28,30,0.7)',
                      paddingBottom: '1.5rem',
                    }}
                  >
                    {item.answer}
                  </p>
                </details>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: 'var(--color-anthracite)',
          padding: 'clamp(5rem, 10vw, 8rem) clamp(1.25rem, 5vw, 3rem)',
          textAlign: 'center',
        }}
      >
        <RevealText>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--color-cream)',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              Votre mariage à Toulouse mérite ce regard
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(245,240,232,0.6)', maxWidth: '44ch', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Vérifiez nos disponibilités pour votre date et obtenez un devis personnalisé en 48 heures.
            </p>
            <Link href="/contact" className="btn-primary" style={{ backgroundColor: 'var(--color-gold)', borderColor: 'var(--color-gold)', color: 'var(--color-white)' }}>
              Demander un devis gratuit
            </Link>
          </div>
        </RevealText>
      </section>
    </>
  )
}
