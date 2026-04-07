'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  href?: string
  tag?: string
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

interface GalleryGridProps {
  images: GalleryImage[]
  tags?: string[]
  columns?: 2 | 3
}

export function GalleryGrid({ images, tags, columns = 3 }: GalleryGridProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag ? images.filter((img) => img.tag === activeTag) : images

  return (
    <div>
      {/* Tag filters */}
      {tags && tags.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          <button
            onClick={() => setActiveTag(null)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '0.5rem 1.25rem',
              border: `1px solid ${activeTag === null ? 'var(--color-gold)' : 'rgba(28,28,30,0.2)'}`,
              backgroundColor: activeTag === null ? 'var(--color-gold)' : 'transparent',
              color: activeTag === null ? 'var(--color-white)' : 'var(--color-anthracite)',
              transition: 'all 300ms ease',
            }}
          >
            Tous
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.5rem 1.25rem',
                border: `1px solid ${activeTag === tag ? 'var(--color-gold)' : 'rgba(28,28,30,0.2)'}`,
                backgroundColor: activeTag === tag ? 'var(--color-gold)' : 'transparent',
                color: activeTag === tag ? 'var(--color-white)' : 'var(--color-anthracite)',
                transition: 'all 300ms ease',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Masonry grid */}
      <div
        style={{
          columns: columns,
          columnGap: '1rem',
        }}
      >
        <style>{`
          @media (max-width: 767px) {
            .gallery-masonry { columns: 1 !important; }
          }
          @media (min-width: 768px) and (max-width: 1023px) {
            .gallery-masonry { columns: 2 !important; }
          }
        `}</style>
        <div className="gallery-masonry" style={{ columns, columnGap: '1rem' }}>
          {filtered.map((image, index) => {
            const inner = (
              <div
                className="gallery-item"
                style={{
                  breakInside: 'avoid',
                  marginBottom: '1rem',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div className="overlay" aria-hidden="true">
                  <span className="overlay-numeral">{ROMAN[index % ROMAN.length]}</span>
                </div>
              </div>
            )

            return image.href ? (
              <Link key={index} href={image.href} aria-label={image.alt}>
                {inner}
              </Link>
            ) : (
              <div key={index}>{inner}</div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
