'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const pos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const rafId = useRef<number>(0)

  useEffect(() => {
    // タッチデバイスはスキップ
    if (!window.matchMedia('(pointer: fine)').matches) return

    document.body.style.cursor = 'none'
    setActive(true)

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      const el = document.elementFromPoint(e.clientX, e.clientY)
      setIsPointer(!!el?.closest('a, button, [role="button"]'))
    }

    const animate = () => {
      // リングは少し遅れて追従（慣性）
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px)`
      }
      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId.current = requestAnimationFrame(animate)

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  if (!active) return null

  return (
    <>
      {/* ドット（即追従） */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none w-1.5 h-1.5 rounded-full bg-[#c0392b]"
        style={{
          transition: isPointer ? 'transform 0.05s, width 0.2s, height 0.2s' : 'none',
          width: isPointer ? '10px' : '6px',
          height: isPointer ? '10px' : '6px',
        }}
      />
      {/* リング（遅れて追従） */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[99998] pointer-events-none w-8 h-8 rounded-full border border-[#c0392b]/50"
        style={{
          transition: 'width 0.2s, height 0.2s, border-color 0.2s, opacity 0.2s',
          width: isPointer ? '44px' : '32px',
          height: isPointer ? '44px' : '32px',
          borderColor: isPointer ? 'rgba(192,57,43,0.8)' : 'rgba(192,57,43,0.4)',
        }}
      />
    </>
  )
}
