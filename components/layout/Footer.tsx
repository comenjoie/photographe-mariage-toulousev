import Link from 'next/link'

const footerNav = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/photographe-mariage-toulouse', label: 'Toulouse' },
  { href: '/photographe-mariage-pyrenees', label: 'Pyrénées' },
  { href: '/photographe-mariage-cote-basque', label: 'Côte Basque' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/offres', label: 'Offres' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
]

const legalNav = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/politique-confidentialite', label: 'Confidentialité' },
]

export function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: 'var(--color-anthracite)',
        color: 'rgba(245,240,232,0.7)',
        padding: '80px 0 40px',
      }}
    >
      <div className="container-content">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link
              href="/"
              aria-label="Yakastudio — Accueil"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.75rem',
                fontWeight: 400,
                letterSpacing: '0.05em',
                color: 'var(--color-cream)',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              Yakastudio
            </Link>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                maxWidth: '28ch',
                color: 'rgba(245,240,232,0.55)',
              }}
            >
              Photographe de mariage à Toulouse. Reportages haut de gamme en Occitanie, dans les Pyrénées et sur la Côte Basque.
            </p>

            <a
              href="https://www.instagram.com/yakastudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yakastudio sur Instagram"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1.5rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                transition: 'color 300ms ease',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              @yakastudio
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: '1.25rem',
              }}
            >
              Navigation
            </p>
            <nav aria-label="Navigation pied de page">
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {footerNav.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        color: 'rgba(245,240,232,0.65)',
                        transition: 'color 300ms ease',
                      }}
                      className="hover:text-cream"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: '1.25rem',
              }}
            >
              Contact
            </p>
            <address
              style={{
                fontStyle: 'normal',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <a
                href="tel:+33600000000"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  color: 'rgba(245,240,232,0.65)',
                  transition: 'color 300ms ease',
                }}
              >
                +33 (0)6 00 00 00 00
              </a>
              <a
                href="mailto:contact@photographe-mariage-toulouse.com"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: 'rgba(245,240,232,0.65)',
                  transition: 'color 300ms ease',
                }}
              >
                contact@photographe-mariage-toulouse.com
              </a>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(245,240,232,0.45)' }}>
                Toulouse, Occitanie — France
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(184,150,108,0.15)', marginBottom: '2rem' }} />

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(245,240,232,0.35)' }}>
            © {new Date().getFullYear()} Yakastudio — Yannick Blaser. Tous droits réservés.
            {' '}SIRET : 000 000 000 00000
          </p>
          <nav aria-label="Liens légaux">
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem' }}>
              {legalNav.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      color: 'rgba(245,240,232,0.35)',
                      transition: 'color 300ms ease',
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
