import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '../components/FadeIn'
import Marquee from '../components/Marquee'

export const metadata: Metadata = {
  title: 'ポップアップ出店 6/27（土）| 鹿沼辛麺 童',
  description: '2026年6月27日（土）11:00〜14:00、大衆酒場くりたろうにて鹿沼辛麺 童（わらべ）の第一陣ポップアップ出店。限定40食。もちもち麺×3種のスープ×無辛〜Lv.12の辛さから選べる。',
}

const soups = [
  { name: '元祖辛麺', tag: 'スタンダード', desc: '栃木しゃものひき肉を具材として練り込んだ、旨味たっぷりのスープ。4種の唐辛子と鹿沼ニラが生み出す九州伝承の味を鹿沼流に再構築。', surcharge: '' },
  { name: 'トマト辛麺', tag: 'まろやか', desc: 'トマトの「酸味」と「辛さ」が溶け合う絶妙な味わい。リコピンたっぷりのヘルシーなトマ辛は女性に大人気。チーズトッピングがおすすめ！', surcharge: '＋¥80' },
  { name: '味噌辛麺', tag: 'コク', desc: '麹由来の深みある味噌ベース。腸活効果も期待できる、体に優しくてコクのある一杯。', surcharge: '＋¥80' },
]

const spiceRanks = [
  { rank: 0,  name: '町娘',   ruby: 'まちむすめ',   level: '無辛',  desc: '辛さゼロ。お子様にもおすすめ。',                         price: '¥970' },
  { rank: 1,  name: '小童',   ruby: 'こわっぱ',     level: 'Lv.1',  desc: '優しい辛さ。辛さの入り口。',                             price: '¥1,000' },
  { rank: 2,  name: '足軽',   ruby: 'あしがる',     level: 'Lv.2',  desc: 'ピリッと程度の刺激。日常の辛さ。',                       price: '¥1,000' },
  { rank: 3,  name: '侍',     ruby: 'さむらい',     level: 'Lv.3',  desc: '中辛の入り口。じんわり辛くなる。',                       price: '¥1,030' },
  { rank: 4,  name: '武士',   ruby: 'ぶし',         level: 'Lv.4',  desc: '中辛。額に汗がにじむレベル。',                           price: '¥1,030' },
  { rank: 5,  name: '旗本',   ruby: 'はたもと',     level: 'Lv.5',  desc: 'しっかり辛い。普段から辛口を選ぶ方向け。',               price: '¥1,050' },
  { rank: 6,  name: '家老',   ruby: 'かろう',       level: 'Lv.6',  desc: '中辛の頂点。ここからが本気の辛さ。',                     price: '¥1,050' },
  { rank: 7,  name: '奉行',   ruby: 'ぶぎょう',     level: 'Lv.7',  desc: '本格的な辛さ。辛い物好きが満足できる。',                 price: '¥1,080' },
  { rank: 8,  name: '大名',   ruby: 'だいみょう',   level: 'Lv.8',  desc: '激辛入門。汗が止まらない。',                             price: '¥1,080' },
  { rank: 9,  name: '老中',   ruby: 'ろうじゅう',   level: 'Lv.9',  desc: '激辛。覚悟を持って挑め。自由に選べる最後の段階。',       price: '¥1,130' },
  { rank: 10, name: '将軍',   ruby: 'しょうぐん',   level: 'Lv.10', desc: '超激辛。',                                               price: '¥1,200', badge: '昇格制' },
  { rank: 11, name: '大将軍', ruby: 'だいしょうぐん', level: 'Lv.11', desc: '極辛。',                                               price: '¥1,350', badge: '昇格制' },
  { rank: 12, name: '天下人', ruby: 'てんかびと',   level: 'Lv.12', desc: '童の頂点。',                                             price: '¥1,500', badge: '最高位' },
]

const sides = [
  { name: 'ご飯食べ放題',     price: '¥150', desc: 'スープにドボンして楽しめる。' },
  { name: '麺大盛り',         price: '＋¥100', desc: '満腹派にどうぞ。' },
  { name: 'チーズトッピング', price: '＋¥80', desc: 'まろやかさが加わって辛さに深みを。' },
  { name: '白いチャイぷりん', price: '¥280', desc: '銀座コーヒーの人気メニューがぷりんに。' },
]

export default function Popup627Page() {
  return (
    <>
      {/* ヘッダー */}
      <section className="pt-32 pb-12 px-6 text-center border-b border-[#1f1f1f]">
        <FadeIn>
          <p className="text-xs tracking-[0.5em] text-[#c0392b] mb-4" style={{ fontFamily: 'var(--font-noto-serif)' }}>
            POPUP EVENT — 第一陣
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-[#f0ede8] tracking-wide mb-4" style={{ fontFamily: 'var(--font-noto-serif)' }}>
            6.27<span className="text-2xl md:text-3xl ml-3 text-[#888]">SAT</span>
          </h1>
          <p className="text-sm text-[#bbb] tracking-wider" style={{ fontFamily: 'var(--font-noto-serif)' }}>
            わらべの、第一陣始まる。
          </p>
        </FadeIn>
      </section>

      {/* マーキー */}
      <Marquee
        items={['第一波 完売御礼', '第二波 7月末予定', '大衆酒場 くりたろう', '無辛〜Lv.12', 'もちもち麺']}
        duration={22}
      />

      {/* 完売御礼 */}
      <section className="py-12 md:py-16 px-6 bg-[#0a0a0a] border-b border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="bg-[#161616] border border-[#c0392b]/30 p-6 md:p-10 text-center">
              <p className="text-xs tracking-[0.4em] text-[#c0392b] mb-4" style={{ fontFamily: 'var(--font-noto-serif)' }}>
                第一陣／第一波 完売御礼
              </p>
              <p className="text-lg md:text-xl font-black text-[#f0ede8] leading-loose mb-4" style={{ fontFamily: 'var(--font-noto-serif)' }}>
                ご来店ありがとうございました。
              </p>
              <p className="text-sm text-[#ddd] leading-loose mb-2" style={{ fontFamily: 'var(--font-noto-serif)' }}>
                第二波は7月末を予定（調整中）。
              </p>
              <p className="text-xs text-[#888]" style={{ fontFamily: 'var(--font-noto-serif)' }}>
                詳細は公式Instagramにて。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* メニュー注文の流れ */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-10 md:mb-14">
            <p className="text-xs tracking-[0.5em] text-[#c0392b] mb-3" style={{ fontFamily: 'var(--font-noto-serif)' }}>HOW TO ORDER</p>
            <h2 className="text-3xl font-black text-[#f0ede8] tracking-wide" style={{ fontFamily: 'var(--font-noto-serif)' }}>
              スープと辛さを選ぶ
            </h2>
            <p className="text-xs text-[#888] mt-3" style={{ fontFamily: 'var(--font-noto-serif)' }}>
              ※ 麺は「もちもち麺」のみのご提供となります
            </p>
          </FadeIn>

          {/* STEP 1: スープ */}
          <FadeIn className="mb-12">
            <div className="mb-6">
              <p className="text-xs tracking-[0.3em] text-[#c0392b] mb-1" style={{ fontFamily: 'var(--font-noto-serif)' }}>STEP 1</p>
              <h3 className="text-2xl font-black text-[#f0ede8]" style={{ fontFamily: 'var(--font-noto-serif)' }}>スープを選ぶ</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {soups.map((soup, i) => (
                <FadeIn key={soup.name} delay={i * 80}>
                  <div className="bg-[#161616] border border-[#1f1f1f] p-5 h-full hover:border-[#c0392b]/40 transition-colors">
                    <div className="flex items-baseline justify-between mb-3">
                      <p className="text-base font-bold text-[#f0ede8]" style={{ fontFamily: 'var(--font-noto-serif)' }}>{soup.name}</p>
                      {soup.surcharge && <p className="text-xs text-[#c9a84c] font-bold" style={{ fontFamily: 'var(--font-noto-serif)' }}>{soup.surcharge}</p>}
                    </div>
                    <p className="text-xs tracking-wider text-[#c0392b] mb-3" style={{ fontFamily: 'var(--font-noto-serif)' }}>{soup.tag}</p>
                    <p className="text-xs text-[#bbb] leading-relaxed" style={{ fontFamily: 'var(--font-noto-serif)' }}>{soup.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* STEP 2: 辛さ */}
          <FadeIn>
            <div className="mb-6">
              <p className="text-xs tracking-[0.3em] text-[#c0392b] mb-1" style={{ fontFamily: 'var(--font-noto-serif)' }}>STEP 2</p>
              <h3 className="text-2xl font-black text-[#f0ede8]" style={{ fontFamily: 'var(--font-noto-serif)' }}>辛さを選ぶ</h3>
              <p className="text-xs text-[#888] mt-2" style={{ fontFamily: 'var(--font-noto-serif)' }}>無辛から最高位「天下人」まで、全13段階。価格は元祖辛麺の場合</p>
            </div>
            <div className="space-y-2">
              {spiceRanks.map((r, i) => (
                <FadeIn key={r.rank} delay={i * 30}>
                  <div className={`flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 border transition-colors ${
                    r.badge === '最高位' ? 'bg-[#4a148c]/10 border-[#7b1fa2]/40'
                    : r.badge ? 'bg-[#c0392b]/5 border-[#c0392b]/20'
                    : 'bg-[#161616] border-[#1f1f1f]'
                  }`}>
                    <div className="w-7 text-center shrink-0">
                      <span className="text-xs text-[#555]" style={{ fontFamily: 'var(--font-noto-serif)' }}>{r.rank}</span>
                    </div>
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                        <span className="text-base md:text-lg font-bold text-[#f0ede8]" style={{ fontFamily: 'var(--font-noto-serif)' }}>{r.name}</span>
                        <span className="text-[10px] md:text-xs text-[#777]" style={{ fontFamily: 'var(--font-noto-serif)' }}>{r.ruby}</span>
                        <span className="text-xs font-bold text-[#c0392b]" style={{ fontFamily: 'var(--font-noto-serif)' }}>{r.level}</span>
                        {r.badge && <span className="text-[10px] text-[#c0392b] border border-[#c0392b] px-1.5 py-0.5" style={{ fontFamily: 'var(--font-noto-serif)' }}>{r.badge}</span>}
                      </div>
                      <p className="text-xs text-[#888] sm:flex-1" style={{ fontFamily: 'var(--font-noto-serif)' }}>{r.desc}</p>
                    </div>
                    <p className="text-sm font-bold text-[#c9a84c] shrink-0" style={{ fontFamily: 'var(--font-noto-serif)' }}>{r.price}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* サイドメニュー */}
      <section className="py-14 md:py-20 px-6 bg-[#0a0a0a] border-y border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="text-xs tracking-[0.5em] text-[#c0392b] mb-3" style={{ fontFamily: 'var(--font-noto-serif)' }}>SIDE MENU</p>
            <h2 className="text-3xl font-black text-[#f0ede8] tracking-wide" style={{ fontFamily: 'var(--font-noto-serif)' }}>サイドメニュー</h2>
          </FadeIn>
          <div className="space-y-3">
            {sides.map((item, i) => (
              <FadeIn key={item.name} delay={i * 60}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 bg-[#161616] border border-[#1f1f1f] px-6 py-4">
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#f0ede8] mb-1" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.name}</p>
                    <p className="text-xs text-[#bbb] leading-relaxed" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.desc}</p>
                  </div>
                  <p className="text-sm font-bold text-[#c9a84c] shrink-0" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.price}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめの食べ方 */}
      <section className="py-12 md:py-20 px-6 border-b border-[#1f1f1f]">
        <div className="max-w-2xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-xs tracking-[0.5em] text-[#c0392b] mb-3" style={{ fontFamily: 'var(--font-noto-serif)' }}>HOW TO EAT</p>
            <h2 className="text-3xl font-black text-[#f0ede8] tracking-wide mb-4" style={{ fontFamily: 'var(--font-noto-serif)' }}>おすすめの食べ方</h2>
            <div className="w-12 h-px bg-[#c0392b] mx-auto" />
          </FadeIn>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#1f1f1f]" />
            {[
              { title: 'まずはスープをひとくち', sub: '深い旨味をそのまま感じてください' },
              { title: '麺を食べる', sub: 'このとき具は食べすぎないのがコツ！' },
              { title: '味変！柚子胡椒をプラス', sub: '机の上の柚子胡椒を入れると絶品' },
              { title: '麺を食べ終えたら…', sub: 'ご飯をスープにドボン！' },
              { title: 'ここでチーズをトッピング', sub: 'とろけるチーズが絶妙にマッチ' },
              { title: '一滴も残さず完食！', sub: '心も体もととのいます' },
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="flex gap-6 mb-8 relative">
                  <div className="w-16 shrink-0 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#c0392b] flex items-center justify-center z-10">
                      <span className="text-xs font-black text-[#f0ede8]" style={{ fontFamily: 'var(--font-noto-serif)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <div className="pb-2">
                    <p className="text-base font-bold text-[#f0ede8] mb-1" style={{ fontFamily: 'var(--font-noto-serif)' }}>
                      {step.title}
                    </p>
                    <p className="text-sm text-[#888]" style={{ fontFamily: 'var(--font-noto-serif)' }}>
                      {step.sub}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="bg-[#0d0d0d] border border-[#1f1f1f] p-6 md:p-8">
              <p className="text-xs tracking-[0.4em] text-[#c0392b] mb-5" style={{ fontFamily: 'var(--font-noto-serif)' }}>NOTICE</p>
              <ul className="space-y-3">
                {[
                  '限定40食、売切れ次第終了となります。お早めにお越しください。',
                  '今回のポップアップは「もちもち麺」のみのご提供です。中華麺は本店オープン時に解禁予定。',
                  '体調不良の方・アレルギーがある方はスタッフへお申し付けください。',
                  '最新情報は公式 Instagram にて随時発信中。',
                ].map((t, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#c0392b] text-xs mt-0.5 shrink-0" style={{ fontFamily: 'var(--font-noto-serif)' }}>—</span>
                    <p className="text-xs text-[#bbb] leading-relaxed" style={{ fontFamily: 'var(--font-noto-serif)' }}>{t}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center border-t border-[#1f1f1f]">
        <FadeIn>
          <p className="text-sm text-[#ddd] mb-6 leading-loose" style={{ fontFamily: 'var(--font-noto-serif)' }}>
            本店は2026年10月初旬グランドオープン。<br />
            まずは6月27日、第一陣にお会いしましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/warabe_kanuma_karamen/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#c0392b] text-[#f0ede8] text-xs tracking-[0.3em] font-bold hover:bg-[#e74c3c] transition-colors"
              style={{ fontFamily: 'var(--font-noto-serif)', clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
            >
              公式Instagramで最新情報
            </a>
            <Link
              href="/menu"
              className="inline-block px-10 py-4 border border-[#c0392b] text-[#c0392b] text-xs tracking-[0.3em] font-bold hover:bg-[#c0392b]/10 transition-colors"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              本店のフルメニュー
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
