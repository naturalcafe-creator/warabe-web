import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* 背景の装飾 */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(192,57,43,0.06) 0%, transparent 70%)',
        }}
      />

      {/* 404 大文字 */}
      <p
        className="text-[120px] md:text-[180px] font-black leading-none text-[#1a1a1a] select-none"
        style={{ fontFamily: 'var(--font-noto-serif)' }}
      >
        404
      </p>

      {/* 区切り */}
      <div className="w-16 h-px bg-[#c0392b]/50 my-8" />

      {/* 小見出し */}
      <p
        className="text-xs tracking-[0.5em] text-[#c0392b] mb-4"
        style={{ fontFamily: 'var(--font-noto-serif)' }}
      >
        PAGE NOT FOUND
      </p>

      {/* 本文 */}
      <p
        className="text-base text-[#ccc] mb-2 leading-loose"
        style={{ fontFamily: 'var(--font-noto-serif)' }}
      >
        お探しのページは見つかりませんでした。
      </p>
      <p
        className="text-sm text-[#666] mb-12 max-w-xs"
        style={{ fontFamily: 'var(--font-noto-serif)' }}
      >
        URLが変更されたか、削除された可能性があります。
      </p>

      {/* ボタン群 */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-block px-10 py-4 bg-[#c0392b] text-[#f0ede8] text-sm tracking-[0.2em] font-bold hover:bg-[#e74c3c] transition-colors"
          style={{
            fontFamily: 'var(--font-noto-serif)',
            clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
          }}
        >
          トップページへ
        </Link>
        <Link
          href="/menu"
          className="inline-block px-10 py-4 border border-[#c0392b] text-[#c0392b] text-sm tracking-[0.2em] font-bold hover:bg-[#c0392b]/10 transition-colors"
          style={{ fontFamily: 'var(--font-noto-serif)' }}
        >
          メニューを見る
        </Link>
      </div>
    </div>
  )
}
