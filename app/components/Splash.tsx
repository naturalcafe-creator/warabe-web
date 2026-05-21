'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Splash() {
  const [visible, setVisible] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // セッション内で1回だけ表示
    if (sessionStorage.getItem('splashShown')) return

    setVisible(true)

    const fadeTimer = setTimeout(() => setFading(true), 1600)
    const hideTimer = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('splashShown', '1')
    }, 2400)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[999999] bg-[#0d0d0d] flex items-center justify-center"
      style={{
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.8s ease-out',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      {/* ノイズ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.05,
        }}
      />

      {/* コンテンツ */}
      <div className="relative text-center">
        <div
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? 'scale(0.96)' : 'scale(1)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <Image
            src="/logo2.png"
            alt="鹿沼辛麺 童"
            width={120}
            height={120}
            className="object-contain mx-auto mb-5"
            style={{ height: 'auto' }}
            priority
          />
          <p
            className="text-[10px] tracking-[0.6em] text-[#c0392b]"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            KANUMA SPICY RAMEN
          </p>
        </div>
      </div>
    </div>
  )
}
