'use client'

import { useEffect, useState } from 'react'

export default function PopupBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('popup-627-dismissed')
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  function dismiss() {
    sessionStorage.setItem('popup-627-dismissed', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-6"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-sm border border-[#c0392b]/50 bg-[#0d0d0d] p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 閉じるボタン */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-[#555] hover:text-[#f0ede8] transition-colors"
          aria-label="閉じる"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* ヘッダー */}
        <p className="text-xs tracking-[0.5em] text-[#c0392b] mb-4" style={{ fontFamily: 'var(--font-noto-serif)' }}>
          POPUP EVENT
        </p>
        <p className="text-xl font-black text-[#f0ede8] mb-1" style={{ fontFamily: 'var(--font-noto-serif)' }}>
          ポップアップ出店
        </p>
        <p className="text-sm text-[#c0392b] mb-6 tracking-wider" style={{ fontFamily: 'var(--font-noto-serif)' }}>
          2026年6月27日（土）
        </p>

        {/* 詳細 */}
        <div className="grid grid-cols-3 gap-4 border-t border-[#c0392b]/20 pt-5">
          <div>
            <p className="text-xs text-[#555] mb-1" style={{ fontFamily: 'var(--font-noto-serif)' }}>場所</p>
            <p className="text-sm text-[#f0ede8] font-bold leading-snug" style={{ fontFamily: 'var(--font-noto-serif)' }}>
              大衆酒場<br />くりたろう
            </p>
          </div>
          <div>
            <p className="text-xs text-[#555] mb-1" style={{ fontFamily: 'var(--font-noto-serif)' }}>時間</p>
            <p className="text-sm text-[#f0ede8] font-bold" style={{ fontFamily: 'var(--font-noto-serif)' }}>
              11:00<br />〜14:00
            </p>
          </div>
          <div>
            <p className="text-xs text-[#555] mb-1" style={{ fontFamily: 'var(--font-noto-serif)' }}>数量</p>
            <p className="text-sm text-[#f0ede8] font-bold" style={{ fontFamily: 'var(--font-noto-serif)' }}>
              限定<br />40食
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
