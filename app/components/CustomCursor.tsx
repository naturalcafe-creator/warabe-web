'use client'

import { useEffect, useRef, useState } from 'react'

// ── 矢印SVG ─────────────────────────────────────────────────
// ホットスポット = 先端 (1, 1)
function ArrowSVG({ pointer }: { pointer: boolean }) {
  return (
    <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 矢印本体 */}
      <path
        d="M2 1 L2 22 L7.5 17 L12 26.5 L15 25 L10.5 15.5 L18.5 15.5 Z"
        fill={pointer ? '#c0392b' : '#ffffff'}
        stroke={pointer ? '#7f0000' : '#000000'}
        strokeWidth="1.2"
        strokeLinejoin="round"
        style={{ transition: 'fill 0.15s ease, stroke 0.15s ease' }}
      />
    </svg>
  )
}

// ── カーソル本体 ─────────────────────────────────────────────
export default function CustomCursor() {
  const arrowRef  = useRef<HTMLDivElement>(null)   // 矢印（即追従）
  const dotRef    = useRef<HTMLDivElement>(null)   // 遅延ドット
  const [active,    setActive]    = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  const pos     = useRef({ x: -300, y: -300 })
  const dotPos  = useRef({ x: -300, y: -300 })
  const rafId   = useRef<number>(0)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    document.body.style.cursor = 'none'
    setActive(true)

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      const el = document.elementFromPoint(e.clientX, e.clientY)
      setIsPointer(!!el?.closest('a, button, [role="button"], details > summary'))
    }

    const tick = () => {
      // 矢印：ホットスポット(2,1)を先端に合わせる
      if (arrowRef.current) {
        arrowRef.current.style.transform =
          `translate(${pos.current.x - 2}px, ${pos.current.y - 1}px)`
      }
      // ドット：慣性追従
      dotPos.current.x += (pos.current.x - dotPos.current.x) * 0.1
      dotPos.current.y += (pos.current.y - dotPos.current.y) * 0.1
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${dotPos.current.x - 2}px, ${dotPos.current.y - 2}px)`
      }
      rafId.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId.current = requestAnimationFrame(tick)

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  if (!active) return null

  return (
    <>
      {/* 矢印カーソル */}
      <div
        ref={arrowRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none"
        style={{
          filter: isPointer
            ? 'drop-shadow(0 0 6px rgba(192,57,43,0.6))'
            : 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))',
          transition: 'filter 0.2s ease',
        }}
      >
        <ArrowSVG pointer={isPointer} />
      </div>

      {/* 遅延ドット（ホバー時だけ表示） */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[99998] pointer-events-none rounded-full"
        style={{
          width: '4px',
          height: '4px',
          background: '#c0392b',
          opacity: isPointer ? 0 : 0.5,
          transition: 'opacity 0.2s ease',
        }}
      />
    </>
  )
}
