'use client'

import { useState, useEffect } from 'react'

export interface Testimonial {
  text: string
  author: string
  location: string
  rating: number
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }} aria-label={`Note : ${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? 'var(--color-gold)' : 'none'}
          stroke="var(--color-gold)"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [current, testimonials.length])

  const goTo = (index: number) => {
    if (isAnimating || index === current) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setIsAnimating(false)
    }, 300)
  }

  const t = testimonials[current]

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
      <div
        style={{
          transition: 'opacity 300ms ease, transform 300ms ease',
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating ? 'translateY(8px)' : 'translateY(0)',
        }}
        role="blockquote"
        aria-live="polite"
      >
        <StarRating rating={t.rating} />

        {/* Opening quote mark */}
        <span
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '5rem',
            lineHeight: 0.6,
            color: 'var(--color-gold)',
            opacity: 0.4,
            display: 'block',
            marginBottom: '0.75rem',
          }}
        >
          "
        </span>

        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            lineHeight: 1.55,
            color: 'var(--color-anthracite)',
            marginBottom: '2rem',
          }}
        >
          {t.text}
        </p>

        <div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-anthracite)',
            }}
          >
            {t.author}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              color: 'var(--color-gold)',
              marginTop: '0.25rem',
            }}
          >
            {t.location}
          </p>
        </div>
      </div>

      {/* Dots */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.6rem',
          marginTop: '2.5rem',
        }}
        role="tablist"
        aria-label="Témoignages"
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Témoignage ${i + 1}`}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? '28px' : '8px',
              height: '2px',
              borderRadius: '1px',
              backgroundColor: i === current ? 'var(--color-gold)' : 'rgba(184,150,108,0.3)',
              border: 'none',
              transition: 'width 400ms ease, background-color 400ms ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  )
}
