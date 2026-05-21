import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '../components/FadeIn'
import Marquee from '../components/Marquee'

export const metadata: Metadata = {
  title: '鳳凰チャレンジ・新童宿 | 鹿沼辛麺 童',
  description: '完食で無料、失敗で¥3,000。激辛チャレンジ「鳳凰」と階級制度「新童宿」の詳細。',
}

const allRanks = [
  { name: '町娘', ruby: 'まちむすめ', level: '無辛', desc: '旅のはじまり。辛さを知らぬ者の出発点。' },
  { name: '小童', ruby: 'こわっぱ', level: 'Lv.1', desc: '少しだけ辛さに触れた新入り。' },
  { name: '若武者', ruby: 'わかむしゃ', level: 'Lv.2', desc: '辛さに立ち向かう意志を持つ者。' },
  { name: '武者', ruby: 'むしゃ', level: 'Lv.3', desc: '辛さを恐れぬ者。' },
  { name: '侍', ruby: 'さむらい', level: 'Lv.4', desc: '一定の辛さを制した猛者。' },
  { name: '剣士', ruby: 'けんし', level: 'Lv.5', desc: '鍛え上げられた辛さへの耐性。' },
  { name: '忍者', ruby: 'にんじゃ', level: 'Lv.6', desc: '影で辛さと戦い続ける者。' },
  { name: '大名', ruby: 'だいみょう', level: 'Lv.7', desc: '領地を持つ辛さの支配者。' },
  { name: '老中', ruby: 'ろうじゅう', level: 'Lv.8', desc: '体制を仕切る辛さの重鎮。' },
  { name: '将軍', ruby: 'しょうぐん', level: 'Lv.9〜10', desc: '天下に号令を発する者。完食必須。', special: true },
  { name: '大将軍', ruby: 'だいしょうぐん', level: 'Lv.11', desc: '将軍を超えた者。完食必須。', special: true },
  { name: '天下統一', ruby: 'てんかとういつ', level: 'Lv.12', desc: '童の頂点。辛さの絶対王者。すべてを制した者のみが辿り着く境地。', special: true, top: true },
]

export default function ChallengePage() {
  return (
    <>
      {/* ヘッダー */}
      <section className="pt-32 pb-16 px-6 text-center border-b border-[#1f1f1f]">
        <FadeIn>
          <p className="text-xs tracking-[0.5em] text-[#c0392b] mb-3" style={{ fontFamily: 'var(--font-noto-sans)' }}>CHALLENGE & RANKING</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#f0ede8] tracking-wide" style={{ fontFamily: 'var(--font-noto-serif)' }}>炎に、挑め。</h1>
        </FadeIn>
      </section>

      {/* マーキー */}
      <Marquee
        items={['炎に、挑め。', 'CHALLENGE THE FLAME', '完食で無料', '制限時間20分', '誰でも挑戦可能', '鳳凰', 'スープまで飲み干せ', '激辛チャレンジ']}
        duration={16}
      />

      {/* 鳳凰チャレンジ */}
      <section className="py-14 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-xs tracking-[0.5em] text-[#c0392b] mb-4" style={{ fontFamily: 'var(--font-noto-sans)' }}>SPECIAL CHALLENGE</p>
            <h2 className="text-6xl md:text-8xl font-black text-[#f0ede8] tracking-wide mb-2" style={{ fontFamily: 'var(--font-noto-serif)', animation: 'flicker 3.5s ease-in-out infinite' }}>鳳凰</h2>
            <p className="text-xs tracking-[0.3em] text-[#bbb]" style={{ fontFamily: 'var(--font-noto-sans)' }}>ほうおう</p>
          </FadeIn>

          {/* 結果表示 */}
          <div className="grid grid-cols-2 gap-4 mb-10 md:mb-12">
            <FadeIn delay={0}>
              <div className="bg-[#161616] border border-[#c9a84c]/30 p-4 md:p-8 text-center h-full">
                <p className="text-xs tracking-[0.1em] md:tracking-[0.3em] text-[#ddd] mb-3 md:mb-4" style={{ fontFamily: 'var(--font-noto-sans)' }}>完食した場合</p>
                <p className="text-4xl md:text-5xl font-black text-[#c9a84c]" style={{ fontFamily: 'var(--font-noto-serif)' }}>無料</p>
                <p className="text-xs text-[#bbb] mt-2 md:mt-3" style={{ fontFamily: 'var(--font-noto-sans)' }}>全額返金</p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="bg-[#161616] border border-[#c0392b]/30 p-4 md:p-8 text-center h-full">
                <p className="text-xs tracking-[0.1em] md:tracking-[0.3em] text-[#ddd] mb-3 md:mb-4" style={{ fontFamily: 'var(--font-noto-sans)' }}>未完食の場合</p>
                <p className="text-xl md:text-3xl font-black text-[#c0392b]" style={{ fontFamily: 'var(--font-noto-serif)' }}>通常料金</p>
                <p className="text-xs text-[#bbb] mt-2 md:mt-3" style={{ fontFamily: 'var(--font-noto-sans)' }}>¥2,500</p>
              </div>
            </FadeIn>
          </div>

          {/* ルール */}
          <FadeIn>
            <div className="bg-[#161616] border border-[#1f1f1f] p-5 md:p-8 mb-10 md:mb-12">
              <h3 className="text-xs tracking-[0.4em] text-[#c0392b] mb-6" style={{ fontFamily: 'var(--font-noto-sans)' }}>RULES</h3>
              <ul className="space-y-4">
                {[
                  '誰でも挑戦可能（年齢・性別問わず）',
                  '制限時間は20分',
                  'スープまで飲み干して完食が条件',
                  '水・ドリンクは自由に飲んでOK',
                  'チャレンジの様子を撮影・投稿していただけます',
                  '体調不良の方・飲食アレルギーがある方はご遠慮ください',
                ].map((rule, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-[#c0392b] text-xs mt-0.5 shrink-0" style={{ fontFamily: 'var(--font-noto-sans)' }}>0{i + 1}</span>
                    <p className="text-sm text-[#ccc] leading-relaxed" style={{ fontFamily: 'var(--font-noto-sans)' }}>{rule}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="text-xs text-[#777] text-center leading-relaxed" style={{ fontFamily: 'var(--font-noto-sans)' }}>
              ※ 鳳凰は激辛商品です。体調に不安がある方、妊娠中・授乳中の方、お子様はご遠慮ください。<br />
              体調が悪化した場合はスタッフにお申し付けください。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 新童宿 階級制度 */}
      <section className="py-14 md:py-24 px-6 bg-[#0a0a0a] border-y border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-10 md:mb-16">
            <p className="text-xs tracking-[0.5em] text-[#c0392b] mb-3" style={{ fontFamily: 'var(--font-noto-sans)' }}>RANKING SYSTEM</p>
            <h2 className="text-4xl font-black text-[#f0ede8] tracking-wide mb-4" style={{ fontFamily: 'var(--font-noto-serif)' }}>新童宿</h2>
            <p className="text-xs tracking-[0.3em] text-[#bbb] mb-6" style={{ fontFamily: 'var(--font-noto-sans)' }}>しんわらべじゅく</p>
            <p className="text-xs md:text-sm text-[#ddd] leading-loose max-w-xl mx-auto" style={{ fontFamily: 'var(--font-noto-sans)' }}>
              鹿沼はかつて例幣使街道の宿場町として、人々が休息し活力を得た土地。
              そのコンセプトを現代に翻訳した、挑戦者が集う出世システム。
            </p>
          </FadeIn>

          <div className="space-y-2">
            {allRanks.map((r, i) => (
              <FadeIn key={r.name} delay={i * 40}>
                <div className={`flex items-center gap-4 px-6 py-4 border transition-colors ${
                  r.top ? 'bg-[#4a148c]/10 border-[#7b1fa2]/40 hover:border-[#7b1fa2]'
                  : r.special ? 'bg-[#c0392b]/5 border-[#c0392b]/20 hover:border-[#c0392b]/50'
                  : 'bg-[#161616] border-[#1f1f1f] hover:border-[#333]'
                }`}>
                  <div className="w-7 text-center shrink-0">
                    <span className="text-sm text-[#555]" style={{ fontFamily: 'var(--font-noto-sans)' }}>{i + 1}</span>
                  </div>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`text-xl font-bold ${r.top ? 'text-[#ce93d8]' : r.special ? 'text-[#c0392b]' : 'text-[#f0ede8]'}`} style={{ fontFamily: 'var(--font-noto-serif)' }}>{r.name}</span>
                      <span className="text-xs text-[#777] tracking-wider" style={{ fontFamily: 'var(--font-noto-sans)' }}>{r.ruby}</span>
                      <span className="text-sm font-bold text-[#c0392b]" style={{ fontFamily: 'var(--font-noto-sans)' }}>{r.level}</span>
                    </div>
                    <p className="text-sm text-[#bbb] sm:ml-auto" style={{ fontFamily: 'var(--font-noto-sans)' }}>{r.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200} className="mt-10">
            <div className="bg-[#161616] border border-[#1f1f1f] p-6">
              <p className="text-xs tracking-[0.4em] text-[#c0392b] mb-4" style={{ fontFamily: 'var(--font-noto-sans)' }}>ABOUT THE SYSTEM</p>
              <ul className="space-y-3">
                {[
                  '辛さレベルを順番に制覇していくことで昇格',
                  '将軍・大将軍・天下統一は完食が必須。失敗すると降格',
                  '天下統一達成者は「童の殿堂」に名が刻まれる（予定）',
                ].map((text, i) => (
                  <li key={i} className="text-sm text-[#ddd] flex gap-3" style={{ fontFamily: 'var(--font-noto-sans)' }}>
                    <span className="text-[#c0392b] shrink-0">—</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <FadeIn>
          <p className="text-sm text-[#f0ede8] mb-6" style={{ fontFamily: 'var(--font-noto-serif)' }}>まずはメニューから始めよう</p>
          <Link href="/menu" className="inline-block px-10 py-4 bg-[#c0392b] text-[#f0ede8] text-xs tracking-[0.3em] font-bold hover:bg-[#e74c3c] transition-colors" style={{ fontFamily: 'var(--font-noto-sans)', clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}>
            メニューを見る
          </Link>
        </FadeIn>
      </section>
    </>
  )
}
