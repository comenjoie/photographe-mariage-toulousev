'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/photographe-mariage-toulouse', label: 'À Toulouse' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/offres', label: 'Offres' },
  { href: '/blog', label: 'Journal' },
]

export function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHomepage = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isDark = isHomepage && !scrolled && !menuOpen

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background-color 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94), backdrop-filter 500ms ease',
        backgroundColor: scrolled || menuOpen
          ? 'rgba(245, 240, 232, 0.95)'
          : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid rgba(184,150,108,0.15)' : 'none',
      }}
    >
      <div className="container-wide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <Link
          href="/"
          aria-label="Yakastudio — Accueil"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.4rem',
            fontWeight: 400,
            letterSpacing: '0.05em',
            color: isDark ? 'var(--color-cream)' : 'var(--color-anthracite)',
            transition: 'color 400ms ease',
          }}
        >
          Yakastudio
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navigation principale" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-link"
              aria-current={pathname === href ? 'page' : undefined}
              style={{
                color: isDark ? 'rgba(245,240,232,0.85)' : 'var(--color-anthracite)',
                display: 'none',
              }}
              // Show on lg+
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '0.6rem 1.5rem',
              border: `1px solid ${isDark ? 'rgba(245,240,232,0.4)' : 'rgba(184,150,108,0.5)'}`,
              color: isDark ? 'var(--color-cream)' : 'var(--color-anthracite)',
              transition: 'border-color 400ms ease, background-color 400ms ease, color 400ms ease',
              display: 'none',
            }}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop nav — CSS driven */}
        <style>{`
          @media (min-width: 1024px) {
            header nav a { display: inline-flex !important; }
          }
          @media (max-width: 1023px) {
            header nav { display: none; }
          }
        `}</style>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '8px',
            background: 'none',
            border: 'none',
            cursor: 'none',
          }}
          className="lg:hidden"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '1px',
                backgroundColor: isDark ? 'var(--color-cream)' : 'var(--color-anthracite)',
                transition: 'transform 300ms ease, opacity 300ms ease',
                transform: menuOpen
                  ? i === 0 ? 'translateY(6px) rotate(45deg)' : i === 2 ? 'translateY(-6px) rotate(-45deg)' : 'scaleX(0)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed',
          inset: 0,
          top: '72px',
          backgroundColor: 'var(--color-cream)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 400ms ease',
          zIndex: 999,
        }}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 7vw, 3.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--color-anthracite)',
              letterSpacing: '-0.01em',
            }}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn-primary"
          style={{ marginTop: '1rem' }}
        >
          Prendre contact
        </Link>
      </div>
    </header>
  )
}
