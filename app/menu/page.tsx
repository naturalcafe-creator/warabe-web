import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '../components/FadeIn'
import Marquee from '../components/Marquee'
import SpiceRankItem from '../components/SpiceRankItem'

export const metadata: Metadata = {
  title: 'メニュー | 鹿沼辛麺 童',
  description: '鹿沼のラーメン・辛麺専門店「童」のメニュー。無辛〜Lv.12の12段階。麺・スープ・辛さを自由に選べる。化学調味料不使用。お一人様大歓迎。',
}

const noodles = [
  {
    name: 'こんにゃく麺',
    tag: 'おすすめ',
    desc: '鹿沼産こんにゃくを練り込んだ特製麺。もちもちとした独特の食感で、カロリー控えめ。罪悪感なく楽しめます。',
  },
  {
    name: '中華麺',
    tag: '',
    desc: '地元製麺所の細麺。スープがしっかり絡んで、王道のラーメンの食感を楽しめます。',
  },
]

const soups = [
  {
    name: '元祖辛麺',
    tag: 'スタンダード',
    desc: '栃木しゃものひき肉を具材として練り込んだ、旨味たっぷりのスープ。4種の唐辛子と鹿沼ニラが生み出す九州伝承の味を鹿沼流に再構築。',
    surcharge: '',
  },
  {
    name: 'トマト辛麺',
    tag: 'まろやか',
    desc: 'トマトの酸味がスープに溶け込み、辛さがまろやかに。辛いものが少し苦手な方にも食べやすい、女性に人気のスープ。',
    surcharge: '＋¥80',
  },
  {
    name: '味噌辛麺',
    tag: '濃厚',
    desc: '麹由来の深みある味噌ベース。腸活効果も期待できる、体に優しくて濃厚な一杯。',
    surcharge: '＋¥80',
  },
]

const spiceRanks = [
  { rank: 0,  name: '町娘',   ruby: 'まちむすめ',   level: '無辛',  desc: '辛さゼロ。スープと麺本来の旨味だけを存分に楽しめる一杯。辛いものが苦手な方もぜひ。', color: '#f0ede8', highlight: true, price: '¥920' },
  { rank: 1,  name: '小童',   ruby: 'こわっぱ',     level: 'Lv.1',  desc: 'ほのかな辛味。初挑戦の方にもおすすめ。',                             color: '#f9e68a', price: '¥950' },
  { rank: 2,  name: '足軽',   ruby: 'あしがる',     level: 'Lv.2',  desc: '辛さが前面に出てくる。汗ばむ程度の刺激。',                           color: '#f9a825', price: '¥950' },
  { rank: 3,  name: '侍', ruby: 'さむらい',     level: 'Lv.3',  desc: '本格的な辛さ。辛い物好きが満足できるレベル。',                       color: '#fb8c00', price: '¥980' },
  { rank: 4,  name: '武士',   ruby: 'ぶし',         level: 'Lv.4',  desc: '強烈な辛さ。自信がある方向け。',                                     color: '#f4511e', price: '¥980' },
  { rank: 5,  name: '旗本',   ruby: 'はたもと',     level: 'Lv.5',  desc: '辛さが全身を駆け巡る。覚悟を持って挑め。',                           color: '#e53935', price: '¥1,000' },
  { rank: 6,  name: '家老',   ruby: 'かろう',       level: 'Lv.6',  desc: '激辛の域。半数以上が完食できない。',                                 color: '#c62828', price: '¥1,000' },
  { rank: 7,  name: '奉行',   ruby: 'ぶぎょう',     level: 'Lv.7',  desc: '上級者専用。唇が痺れる超激辛。',                                     color: '#b71c1c', price: '¥1,030' },
  { rank: 8,  name: '大名',   ruby: 'だいみょう',   level: 'Lv.8',  desc: '激辛王者の領域。涙なしには食べられない。',                           color: '#880e4f', price: '¥1,030' },
  { rank: 9,  name: '老中',   ruby: 'ろうじゅう',   level: 'Lv.9',  desc: '体制を仕切る辛さの重鎮。',                                           color: '#7b1fa2', price: '¥1,080' },
  { rank: 10, name: '将軍',   ruby: 'しょうぐん',   level: 'Lv.10', desc: '老中（Lv.9）を完食した者だけが挑戦できる昇格制。完食で大将軍へ、失敗すると老中に降格。', color: '#9c27b0', badge: '昇格制', price: '¥1,080' },
  { rank: 11, name: '大将軍', ruby: 'だいしょうぐん', level: 'Lv.11', desc: '将軍（Lv.10）を完食した者だけが挑戦できる。完食で天下人へ、失敗すると将軍に降格。',   color: '#ba68c8', badge: '昇格制', price: '¥1,130' },
  { rank: 12, name: '天下人', ruby: 'てんかびと',   level: 'Lv.12', desc: '大将軍（Lv.11）を完食した者だけが辿り着ける最高位。童の頂点に立つ者のみが到達できる境地。', color: '#ce93d8', badge: '最高位', price: '¥1,200' },
]

export default function MenuPage() {
  return (
    <>
      {/* ヘッダー */}
      <section className="pt-32 pb-16 px-6 text-center border-b border-[#1f1f1f]">
        <FadeIn>
          <p
            className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            MENU
          </p>
          <h1
            className="text-4xl md:text-5xl font-black text-[#f0ede8] tracking-wide mb-4"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            メニュー
          </h1>
          <p
            className="text-sm text-[#ddd] tracking-wider"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            すべて化学調味料不使用 ／ お一人様大歓迎
          </p>
        </FadeIn>
      </section>

      {/* マーキー */}
      <Marquee
        items={['こんにゃく麺', '中華麺', '元祖辛麺', 'トマト辛麺', '味噌辛麺', '化学調味料不使用', '無辛 〜 Lv.12', '栃木しゃも × 鹿沼ニラ', 'お一人様大歓迎']}
        duration={22}
      />

      {/* 無辛推し バナー */}
      <section className="py-12 px-6 bg-[#161616] border-b border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <FadeIn direction="right" className="text-center md:text-left md:flex-1">
            <p
              className="text-xs tracking-[0.4em] text-[#c0392b] mb-2"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              RECOMMEND FOR BEGINNERS
            </p>
            <h2
              className="text-2xl md:text-3xl font-black text-[#f0ede8] tracking-wide mb-3"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              辛くなくても、おいしい。
            </h2>
            <p
              className="text-sm text-[#ddd] leading-loose text-left"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              「辛いお店だから自分には無理かな」<br />——そう思っていませんか？<br />
              辛さゼロの<strong className="text-[#f0ede8]">「町娘（無辛）」</strong>は、栃木しゃもの旨味と鹿沼ニラの甘味だけを純粋に楽しめる、辛麺専門店とは思えないほど優しい一杯です。<br />
              辛いものが苦手な方、一人でふらっと立ち寄りたい方も、ぜひお気軽にどうぞ。
            </p>
          </FadeIn>
          <FadeIn direction="left" delay={100}>
            <div className="bg-[#0d0d0d] border border-[#f0ede8]/20 p-8 text-center shrink-0">
              <p
                className="text-xs tracking-[0.4em] text-[#f0ede8]/60 mb-2"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                辛さ 無辛
              </p>
              <p
                className="text-5xl font-black text-[#f0ede8] mb-1"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                町娘
              </p>
              <p
                className="text-xs text-[#bbb] tracking-wider"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                まちむすめ
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* カスタマイズセクション */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-10 md:mb-14">
            <p
              className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              CUSTOMIZE YOUR BOWL
            </p>
            <h2
              className="text-2xl md:text-3xl font-black text-[#f0ede8] tracking-wide mb-3"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              麺・スープ・辛さを選ぶ
            </h2>
            <p
              className="text-sm text-[#ddd]"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              3つの組み合わせで、あなただけの一杯に。
            </p>
          </FadeIn>

          {/* STEP 1: 麺 */}
          <div className="mb-14">
            <FadeIn className="flex items-center gap-4 mb-6">
              <span
                className="text-2xl font-black text-[#c0392b]"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                01
              </span>
              <h3
                className="text-xl font-bold text-[#f0ede8] tracking-wide"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                麺を選ぶ
              </h3>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-4">
              {noodles.map((n, i) => (
                <FadeIn key={n.name} delay={i * 100}>
                  <div
                    className="bg-[#161616] border border-[#2a2a2a] p-4 md:p-6 hover:border-[#c0392b]/40 transition-colors h-full"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <p
                        className="text-lg font-bold text-[#f0ede8]"
                        style={{ fontFamily: 'var(--font-noto-serif)' }}
                      >
                        {n.name}
                      </p>
                      {n.tag && (
                        <span
                          className="text-xs px-2 py-0.5 bg-[#c0392b] text-[#f0ede8] tracking-wider"
                          style={{ fontFamily: 'var(--font-noto-serif)' }}
                        >
                          {n.tag}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-sm text-[#ddd] leading-loose"
                      style={{ fontFamily: 'var(--font-noto-serif)' }}
                    >
                      {n.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* STEP 2: スープ */}
          <div className="mb-14">
            <FadeIn className="flex items-center gap-4 mb-6">
              <span
                className="text-2xl font-black text-[#c0392b]"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                02
              </span>
              <h3
                className="text-xl font-bold text-[#f0ede8] tracking-wide"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                スープを選ぶ
              </h3>
            </FadeIn>
            <div className="grid sm:grid-cols-3 gap-4">
              {soups.map((s, i) => (
                <FadeIn key={s.name} delay={i * 100}>
                  <div
                    className="bg-[#161616] border border-[#2a2a2a] p-4 md:p-6 hover:border-[#c0392b]/40 transition-colors h-full"
                  >
                    <div className="mb-1">
                      <span
                        className="text-xs text-[#c0392b] tracking-wider"
                        style={{ fontFamily: 'var(--font-noto-serif)' }}
                      >
                        {s.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <p
                        className="text-lg font-bold text-[#f0ede8]"
                        style={{ fontFamily: 'var(--font-noto-serif)' }}
                      >
                        {s.name}
                      </p>
                      {s.surcharge && (
                        <span
                          className="text-xs px-2 py-0.5 border border-[#c9a84c]/60 text-[#c9a84c] tracking-wider shrink-0"
                          style={{ fontFamily: 'var(--font-noto-serif)' }}
                        >
                          {s.surcharge}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-sm text-[#ddd] leading-loose"
                      style={{ fontFamily: 'var(--font-noto-serif)' }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* STEP 3: 辛さ */}
          <div>
            <FadeIn className="flex items-center gap-4 mb-6">
              <span
                className="text-2xl font-black text-[#c0392b]"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                03
              </span>
              <h3
                className="text-xl font-bold text-[#f0ede8] tracking-wide"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                辛さを選ぶ
              </h3>
            </FadeIn>
            <div className="space-y-2">
              {spiceRanks.map((r, i) => (
                <FadeIn key={r.rank} delay={i * 40}>
                  <SpiceRankItem color={r.color} highlight={r.highlight}>
                    <div className="w-14 text-right shrink-0">
                      <span
                        className="text-xs font-bold"
                        style={{ color: r.color, fontFamily: 'var(--font-noto-serif)' }}
                      >
                        {r.level}
                      </span>
                    </div>
                    <div className="w-px h-8 shrink-0" style={{ background: `${r.color}40` }} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span
                          className="text-lg font-bold"
                          style={{ color: r.color, fontFamily: 'var(--font-noto-serif)' }}
                        >
                          {r.name}
                        </span>
                        <span
                          className="text-xs text-[#888]"
                          style={{ fontFamily: 'var(--font-noto-serif)' }}
                        >
                          {r.ruby}
                        </span>
                        {r.highlight && (
                          <span
                            className="text-xs px-2 py-0.5 border border-[#f0ede8]/40 text-[#f0ede8] tracking-wider whitespace-nowrap"
                            style={{ fontFamily: 'var(--font-noto-serif)' }}
                          >
                            辛さゼロ・お子様にも
                          </span>
                        )}
                        {r.badge && (
                          <span
                            className="text-xs px-2 py-0.5 border border-[#c0392b] text-[#c0392b] tracking-wider"
                            style={{ fontFamily: 'var(--font-noto-serif)' }}
                          >
                            {r.badge}
                          </span>
                        )}
                      </div>
                      <p
                        className="text-sm text-[#aaa] mt-1 hidden sm:block"
                        style={{ fontFamily: 'var(--font-noto-serif)' }}
                      >
                        {r.desc}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span
                        className="text-sm font-bold text-[#c9a84c]"
                        style={{ fontFamily: 'var(--font-noto-serif)' }}
                      >
                        {r.price}
                      </span>
                    </div>
                  </SpiceRankItem>
                </FadeIn>
              ))}
            </div>
            <p
              className="text-sm text-[#999] text-center mt-4"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              ※ 将軍（Lv.10）以上は昇格制。老中（Lv.9）から完食した方が順番に次の段階へ挑戦できます。完食で昇格・失敗すると一つ降格。スープまで飲み干して完食が条件です。
            </p>
          </div>
        </div>
      </section>

      {/* サイドメニュー */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a] border-y border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-10 text-center">
            <p className="text-xs tracking-[0.5em] text-[#c0392b] mb-3" style={{ fontFamily: 'var(--font-noto-serif)' }}>SIDE MENU</p>
            <h2 className="text-3xl font-black text-[#f0ede8] tracking-wide" style={{ fontFamily: 'var(--font-noto-serif)' }}>サイドメニュー</h2>
          </FadeIn>
          <div className="space-y-3 mb-12">
            {[
              { name: '新鹿沼シウマイ', price: '¥480', desc: 'こんにゃく入りのもちもち皮×玉ねぎの旨味。お腹いっぱいでも食べられる軽さ。辛麺との相性抜群。' },
              { name: '串シウマイ', price: '¥350', desc: 'テイクアウト限定！カウンターにてご提供。' },
              { name: 'ごはん食べ放題', price: '¥150', desc: 'スープにドボンして〆まで楽しめる。食べ放題なので遠慮なくどうぞ。' },
              { name: '激辛チャレンジ「鳳凰」', price: '完食→無料 ／ 時間切れ→¥2,500', desc: '制限時間15分。スープまで飲み干して完食が条件。誰でも挑戦できます。', link: '/challenge' },
            ].map((item, i) => (
              <FadeIn key={item.name} delay={i * 60}>
                {'link' in item ? (
                  <Link href={item.link!} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-[#161616] border border-[#c0392b]/30 px-6 py-4 hover:border-[#c0392b] transition-colors">
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#f0ede8] mb-1" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.name}</p>
                      <p className="text-xs md:text-sm text-[#ddd] leading-relaxed" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.desc}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <p className="text-sm font-bold text-[#c9a84c]" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.price}</p>
                      <span className="text-xs text-[#c0392b] tracking-wider" style={{ fontFamily: 'var(--font-noto-serif)' }}>詳細 →</span>
                    </div>
                  </Link>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-[#161616] border border-[#1f1f1f] px-6 py-4">
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#f0ede8] mb-1" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.name}</p>
                      <p className="text-xs md:text-sm text-[#ddd] leading-relaxed" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.desc}</p>
                    </div>
                    <p className="text-sm font-bold text-[#c9a84c] shrink-0" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.price}</p>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>

          {/* トッピング */}
          <FadeIn>
            <p className="text-xs tracking-[0.5em] text-[#c0392b] mb-6 text-center" style={{ fontFamily: 'var(--font-noto-serif)' }}>TOPPING</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: '麺大盛り', price: '＋¥100' },
                { name: 'チーズ', price: '＋¥80' },
              ].map((t) => (
                <div key={t.name} className="flex justify-between items-center bg-[#161616] border border-[#1f1f1f] px-5 py-3">
                  <p className="text-base text-[#f0ede8]" style={{ fontFamily: 'var(--font-noto-serif)' }}>{t.name}</p>
                  <p className="text-sm font-bold text-[#c9a84c]" style={{ fontFamily: 'var(--font-noto-serif)' }}>{t.price}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <p className="text-sm text-[#999] text-center mt-8" style={{ fontFamily: 'var(--font-noto-serif)' }}>
            ※ 価格は税込。メニュー・価格は予告なく変更する場合があります。
          </p>
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

          <FadeIn delay={100} className="mt-10">
            <div className="bg-[#161616] border border-[#1f1f1f] px-6 py-5">
              <p className="text-sm text-[#ddd] leading-loose" style={{ fontFamily: 'var(--font-noto-serif)' }}>
                辛麺とは、ひき肉・唐辛子・にら・ニンニク・卵などでスープを作り、こんにゃく麺を使用した九州発祥のラーメンです。これらの食材を鹿沼でアップデートした「鹿沼辛麺 童（わらべ）」をお楽しみください。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 食材こだわり */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a] border-y border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-10 md:mb-14">
            <p className="text-xs tracking-[0.5em] text-[#c0392b] mb-3" style={{ fontFamily: 'var(--font-noto-serif)' }}>INGREDIENTS</p>
            <h2 className="text-2xl font-black text-[#f0ede8] tracking-wide" style={{ fontFamily: 'var(--font-noto-serif)' }}>食材へのこだわり</h2>
          </FadeIn>
          <div>
            {[
              { name: '栃木しゃも',     origin: '鹿沼産',     desc: 'ひき肉を練り込んで具材として使用。食べごたえのある旨味の源泉。' },
              { name: '鹿沼ニラ',       origin: '鹿沼産',     desc: 'まろやかな甘味が辛さの角を取り、スープ全体をまとめ上げる。' },
              { name: 'こんにゃく麺',   origin: '鹿沼産',     desc: '鹿沼産こんにゃくを練り込んだ特製麺。もちもちの食感で罪悪感ゼロ。' },
              { name: '4種の唐辛子',   origin: '独自ブレンド', desc: '多層的な刺激を生む独自配合。辛さの奥に旨味がある。' },
              { name: '鹿沼産のたまご', origin: '鹿沼産',     desc: '地元の新鮮なたまごをスープに溶き込み、まろやかさをプラス。' },
              { name: '本醸造醤油',     origin: '熊本産',     desc: '九州伝承の醤油が深みとコクを加え、スープに骨格を与える。' },
              { name: '自家製麹',       origin: '自家製',     desc: '醤油麹と塩麹を自家製で仕込む。発酵の旨味がスープに奥行きをもたらす。' },
            ].map((item, i) => (
              <FadeIn key={item.name} delay={i * 60}>
                <div className="flex gap-6 md:gap-10 items-start border-b border-[#1f1f1f] py-6 md:py-8 group hover:border-[#c0392b]/30 transition-colors cursor-default">
                  <span
                    className="text-5xl md:text-6xl font-black text-[#c0392b]/15 group-hover:text-[#c0392b]/35 transition-colors shrink-0 leading-none"
                    style={{ fontFamily: 'var(--font-noto-serif)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <p className="text-2xl md:text-3xl font-black text-[#f0ede8]" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.name}</p>
                      <span className="text-xs tracking-wider text-[#c0392b]" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.origin}</span>
                    </div>
                    <p className="text-sm text-[#888] leading-relaxed" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#c0392b]/5 border-y border-[#c0392b]/20 text-center">
        <FadeIn>
          <p
            className="text-base text-[#f0ede8] mb-6"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            最高の辛さに挑む準備はできたか
          </p>
          <Link
            href="/challenge"
            className="inline-block px-10 py-4 bg-[#c0392b] text-[#f0ede8] text-sm tracking-[0.2em] font-bold hover:bg-[#e74c3c] transition-colors"
            style={{
              fontFamily: 'var(--font-noto-serif)',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
          >
            鳳凰チャレンジへ
          </Link>
        </FadeIn>
      </section>
    </>
  )
}
