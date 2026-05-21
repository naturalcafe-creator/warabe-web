'use client'

const ITEMS = [
  '鹿沼辛麺 童',
  'KANUMA SPICY RAMEN',
  '炎に、挑め。',
  'CHALLENGE THE FLAME',
  '栃木しゃも × 鹿沼ニラ',
  '化学調味料不使用',
  '無辛 〜 Lv.12',
  'LOCAL CIRCULATION',
]

export default function Marquee() {
  const content = ITEMS.map((item, i) => (
    <span key={i} className="text-xs tracking-[0.25em] text-[#444]" style={{ fontFamily: 'var(--font-noto-sans)' }}>
      {item}
      <span className="mx-6 md:mx-10 text-[#c0392b]/60">—</span>
    </span>
  ))

  return (
    <div className="overflow-hidden border-y border-[#1a1a1a] bg-[#080808] py-4 select-none">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee 18s linear infinite' }}
      >
        <div className="flex shrink-0">{content}</div>
        <div className="flex shrink-0" aria-hidden="true">{content}</div>
      </div>
    </div>
  )
}
