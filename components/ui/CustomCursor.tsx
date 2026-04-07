'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [isHoveringImage, setIsHoveringImage] = useState(false)
  const [isHoveringLink, setIsHoveringLink] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }
      raf.current = requestAnimationFrame(animate)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isImg = target.closest('img, [data-cursor-image]') !== null
      const isLink = target.closest('a, button, [role="button"], [data-cursor-link]') !== null
      setIsHoveringImage(isImg)
      setIsHoveringLink(isLink && !isImg)
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHoveringImage ? '80px' : isHoveringLink ? '48px' : '32px',
          height: isHoveringImage ? '80px' : isHoveringLink ? '48px' : '32px',
          marginLeft: isHoveringImage ? '-40px' : isHoveringLink ? '-24px' : '-16px',
          marginTop: isHoveringImage ? '-40px' : isHoveringLink ? '-24px' : '-16px',
          borderRadius: '50%',
          border: `1px solid ${isHoveringImage ? 'rgba(184,150,108,0.9)' : 'rgba(184,150,108,0.5)'}`,
          backgroundColor: isHoveringImage ? 'rgba(184,150,108,0.12)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 10000,
          transition: 'width 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), height 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), margin 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 300ms ease, background-color 300ms ease',
          animation: isHoveringImage ? 'pulseGold 2s ease-in-out infinite' : 'none',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '5px',
          height: '5px',
          marginLeft: '-2.5px',
          marginTop: '-2.5px',
          borderRadius: '50%',
          backgroundColor: '#B8966C',
          pointerEvents: 'none',
          zIndex: 10001,
          transition: 'opacity 200ms ease',
          opacity: isHoveringImage ? 0 : 1,
        }}
      />
    </>
  )
}
