'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function PageTransition() {
  const pathname = usePathname()
  const overlayRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      // Fade out on initial load
      const overlay = overlayRef.current
      if (!overlay) return
      overlay.style.opacity = '1'
      requestAnimationFrame(() => {
        overlay.style.transition = 'opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        overlay.style.opacity = '0'
        setTimeout(() => {
          overlay.style.pointerEvents = 'none'
        }, 600)
      })
      return
    }

    // Subsequent navigations: flash in then out
    const overlay = overlayRef.current
    if (!overlay) return
    overlay.style.transition = 'none'
    overlay.style.opacity = '1'
    overlay.style.pointerEvents = 'all'

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.style.transition = 'opacity 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        overlay.style.opacity = '0'
        setTimeout(() => {
          overlay.style.pointerEvents = 'none'
        }, 500)
      })
    })
  }, [pathname])

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#F5F0E8',
        zIndex: 9998,
        opacity: 1,
        pointerEvents: 'all',
      }}
    />
  )
}
