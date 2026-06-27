'use client'

import { useEffect, useState } from 'react'

export default function PopupBanner() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('popup-2nd-wave-dismissed')
    if (!dismissed) {
      const timer = setTimeout(() => {
        setVisible(true)
        requestAnimationFrame(() => setMounted(true))
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [])

  function dismiss() {
    setMounted(false)
    setTimeout(() => {
      sessionStorage.setItem('popup-2nd-wave-dismissed', '1')
      setVisible(false)
    }, 300)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-6"
      style={{
        background: `rgba(0,0,0,${mounted ? '0.8' : '0'})`,
        backdropFilter: 'blur(6px)',
        transition: 'background 0.3s ease',
      }}
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-md overflow-hidden"
        style={{
          transform: mounted ? 'translateY(0)' : 'translateY(40px)',
          opacity: mounted ? 1 : 0,
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 赤ライン */}
        <div className="h-1 bg-[#c0392b] w-full" />

        <div className="bg-[#0a0a0a] px-7 pt-7 pb-6">

          {/* 閉じる */}
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 text-[#888] hover:text-[#f0ede8] transition-colors p-1"
            aria-label="閉じる"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* ラベル */}
          <p className="text-sm tracking-[0.2em] text-[#c0392b] font-bold mb-5" style={{ fontFamily: 'var(--font-noto-serif)' }}>
            第一陣／第一波 完売御礼
          </p>

          {/* メインコピー */}
          <p
            className="text-3xl font-black text-[#f0ede8] leading-snug mb-5"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            第二波、<br />調整中。
          </p>

          {/* 詳細 */}
          <div className="border-t border-[#2a2a2a] pt-5 space-y-4 mb-6">
            <div className="flex justify-between items-baseline">
              <p className="text-sm text-[#888]" style={{ fontFamily: 'var(--font-noto-serif)' }}>次回</p>
              <p className="text-sm text-[#f0ede8] font-bold" style={{ fontFamily: 'var(--font-noto-serif)' }}>7月末予定</p>
            </div>
            <div className="flex justify-between items-baseline">
              <p className="text-sm text-[#888]" style={{ fontFamily: 'var(--font-noto-serif)' }}>場所</p>
              <p className="text-sm text-[#f0ede8] font-bold" style={{ fontFamily: 'var(--font-noto-serif)' }}>大衆酒場 くりたろう</p>
            </div>
          </div>

          {/* Instagram CTA */}
          <a
            href="https://www.instagram.com/warabe_kanuma_karamen/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 border border-[#ffffff]/10 text-[#888] text-xs tracking-[0.2em] hover:border-[#ffffff]/25 hover:text-[#ccc] transition-colors"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
            onClick={dismiss}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
            最新情報はInstagramで
          </a>
        </div>
      </div>
    </div>
  )
}
