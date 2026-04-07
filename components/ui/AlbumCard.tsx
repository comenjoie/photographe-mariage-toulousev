import Image from 'next/image'
import Link from 'next/link'

export interface Album {
  slug: string
  title: string
  location: string
  year: number
  coverSrc: string
  coverAlt: string
  tag?: string
}

interface AlbumCardProps {
  album: Album
}

export function AlbumCard({ album }: AlbumCardProps) {
  return (
    <Link
      href={`/portfolio/${album.slug}`}
      aria-label={`Voir l'album — ${album.title}`}
      style={{ display: 'block', position: 'relative', overflow: 'hidden', borderRadius: '2px' }}
    >
      <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
        <Image
          src={album.coverSrc}
          alt={album.coverAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover', transition: 'transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          className="album-card-img"
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(28,28,30,0)',
            transition: 'background 500ms ease',
          }}
          className="album-card-overlay"
        />
      </div>

      <div style={{ padding: '1.25rem 0 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'var(--color-anthracite)',
                lineHeight: 1.2,
                marginBottom: '0.35rem',
              }}
            >
              {album.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                color: 'var(--color-gold)',
                letterSpacing: '0.05em',
              }}
            >
              {album.location}
            </p>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '0.95rem',
              fontStyle: 'italic',
              color: 'rgba(28,28,30,0.35)',
              marginTop: '2px',
            }}
          >
            {album.year}
          </span>
        </div>
      </div>

      <style>{`
        a:hover .album-card-img {
          transform: scale(1.04);
        }
        a:hover .album-card-overlay {
          background: rgba(28,28,30,0.12) !important;
        }
      `}</style>
    </Link>
  )
}
