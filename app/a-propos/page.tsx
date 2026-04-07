import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { RevealText } from '@/components/ui/RevealText'

export const metadata: Metadata = {
  title: 'À propos — Yannick Blaser, photographe de mariage à Toulouse',
  description:
    'Découvrez Yannick Blaser, photographe de mariage basé à Toulouse. Son histoire, son regard, sa philosophie du reportage de mariage haut de gamme.',
  alternates: {
    canonical: 'https://www.photographe-mariage-toulouse.com/a-propos',
  },
}

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: 'calc(72px + clamp(4rem, 8vw, 7rem))',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
          backgroundColor: 'var(--color-cream)',
        }}
      >
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
              <div style={{ position: 'relative', borderRadius: '2px', overflow: 'hidden', aspectRatio: '3/4' }}>
                {/* TODO: remplacer par photo de Yannick Blaser */}
                <Image
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=85&auto=format&fit=crop"
                  alt="Yannick Blaser, photographe de mariage à Toulouse — portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </RevealText>

            <RevealText delay={150}>
              <div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
                  À propos
                </p>
                <h1
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: 'var(--color-anthracite)',
                    lineHeight: 1.05,
                    marginBottom: '2rem',
                  }}
                >
                  Yannick Blaser
                </h1>
                <span className="gold-separator gold-separator--left" style={{ marginBottom: '2rem' }} />
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(28,28,30,0.72)', marginBottom: '1.25rem', marginTop: '2rem' }}>
                  Je suis Yannick Blaser, photographe de mariage basé à Toulouse. Depuis plus de dix ans, j'accompagne des couples exigeants qui souhaitent des souvenirs qui transcendent le simple souvenir.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(28,28,30,0.72)', marginBottom: '1.25rem' }}>
                  Mon approche est simple : je disparais dans le décor pour mieux capter la réalité. Pas de mise en scène, pas de poses dictées. Juste la vie qui s'écoule, sublimée par la lumière.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(28,28,30,0.72)', marginBottom: '2.5rem' }}>
                  Yakastudio, c'est la conviction que chaque mariage mérite un regard unique — et que les plus belles photos ne se fabriquent pas, elles se trouvent.
                </p>
                <Link href="/contact" className="btn-primary">
                  Discuter de votre projet
                </Link>
              </div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-mist)' }}>
        <div className="container-content">
          <RevealText>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>
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
                La philosophie Yakastudio
              </h2>
            </div>
          </RevealText>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem' }}>
            {[
              {
                title: 'L'invisible présence',
                text: 'Le photographe idéal, c'est celui dont on oublie la présence. Yannick travaille en discrétion totale pour que vous et vos proches soyez pleinement dans l'instant.',
              },
              {
                title: 'La lumière naturelle',
                text: 'Pas de flash sur le dancefloor. Yannick maîtrise la photographie en lumière naturelle et en lumière ambiante — une signature lumineuse chaude, jamais froide ni artificielle.',
              },
              {
                title: 'L'émotion avant l'esthétique',
                text: 'Une larme, un éclat de rire, une main qui trembles. L'émotion prime toujours sur la composition parfaite. C'est ce qui rend une photo intemporelle.',
              },
              {
                title: 'La cohérence du récit',
                text: 'Un reportage de mariage, c'est une histoire complète, du matin des préparatifs au dernier slow. Chaque image est pensée dans sa cohérence narrative.',
              },
            ].map((item, i) => (
              <RevealText key={i} delay={i * 100}>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                      fontWeight: 400,
                      fontStyle: 'italic',
                      color: 'var(--color-anthracite)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-gold)', marginBottom: '1rem' }} />
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(28,28,30,0.65)' }}>
                    {item.text}
                  </p>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { number: '+10', label: 'années d'expérience' },
              { number: '+300', label: 'mariages photographiés' },
              { number: '3', label: 'territoires de prédilection' },
              { number: '100%', label: 'disponibilité & écoute' },
            ].map((item, i) => (
              <RevealText key={i} delay={i * 80}>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(3rem, 6vw, 5rem)',
                      fontWeight: 300,
                      fontStyle: 'italic',
                      color: 'var(--color-gold)',
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.number}
                  </p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(28,28,30,0.55)', letterSpacing: '0.05em' }}>
                    {item.label}
                  </p>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
