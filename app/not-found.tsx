import Link from 'next/link'

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-cream)',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div>
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '8rem',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--color-gold)',
            opacity: 0.3,
            lineHeight: 1,
            marginBottom: '1rem',
          }}
          aria-hidden="true"
        >
          404
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--color-anthracite)',
            marginBottom: '1rem',
          }}
        >
          Page introuvable
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(28,28,30,0.55)', maxWidth: '40ch', margin: '0 auto 2.5rem' }}>
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary">
            Retour à l'accueil
          </Link>
          <Link href="/portfolio" className="btn-secondary">
            Voir le portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
