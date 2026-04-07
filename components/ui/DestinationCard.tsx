import Image from 'next/image'
import Link from 'next/link'

interface DestinationCardProps {
  title: string
  subtitle: string
  href: string
  imageSrc: string
  imageAlt: string
}

export function DestinationCard({ title, subtitle, href, imageSrc, imageAlt }: DestinationCardProps) {
  return (
    <Link
      href={href}
      aria-label={`Voir les mariages — ${title}`}
      style={{
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '2px',
        aspectRatio: '3/4',
      }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: 'cover', transition: 'transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
        className="destination-card-img"
      />

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(28,28,30,0.85) 0%, rgba(28,28,30,0.15) 60%, transparent 100%)',
          transition: 'background 600ms ease',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
          }}
        >
          {subtitle}
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--color-cream)',
            lineHeight: 1.15,
          }}
        >
          {title}
        </h3>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.78rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.65)',
            marginTop: '0.5rem',
            transition: 'color 300ms ease',
          }}
        >
          Découvrir
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <style>{`
        a:hover .destination-card-img {
          transform: scale(1.05);
        }
      `}</style>
    </Link>
  )
}
