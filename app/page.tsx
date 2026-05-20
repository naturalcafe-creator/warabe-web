import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    num: '01',
    title: '高い中毒性',
    sub: 'ADDICTIVE FLAVOR',
    desc: '4種の唐辛子による多層的な刺激と、栃木しゃも鶏ガラの圧倒的旨味。鹿沼ニラが角を取り、一口目から最後まで箸が止まらない。',
  },
  {
    num: '02',
    title: '罪悪感ゼロ',
    sub: 'GUILT FREE',
    desc: '鹿沼産こんにゃくを練り込んだ特製もちもち麺、麹の腸活スープ、化学調味料不使用。食べるほど体が喜ぶ一杯。',
  },
  {
    num: '03',
    title: '地域循環型',
    sub: 'LOCAL CIRCULATION',
    desc: '鹿沼の農家から直接仕入れ、地元製麺所と共同開発。一杯食べるたびに鹿沼経済が回る。消費し、還す。',
  },
]

const ranks = [
  { name: '町娘', level: '無辛', color: '#f0ede8' },
  { name: '小童', level: 'Lv.1', color: '#f9a825' },
  { name: '若武者', level: 'Lv.3', color: '#fb8c00' },
  { name: '侍', level: 'Lv.5', color: '#e53935' },
  { name: '将軍', level: 'Lv.8', color: '#b71c1c' },
  { name: '天下統一', level: 'Lv.12', color: '#7b1fa2' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
        {/* 背景グリッド */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(#c0392b 1px, transparent 1px), linear-gradient(90deg, #c0392b 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* 赤い縦ライン装飾 */}
        <div className="absolute left-12 top-0 bottom-0 w-px bg-[#c0392b]/20 hidden lg:block" />
        <div className="absolute right-12 top-0 bottom-0 w-px bg-[#c0392b]/20 hidden lg:block" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pb-40">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo2.png"
              alt="鹿沼辛麺 童 わらべ"
              width={260}
              height={260}
              className="object-contain"
              style={{
                height: 'clamp(180px, 30vw, 260px)',
                width: 'auto',
              }}
              priority
            />
          </div>

          <div className="w-16 h-px bg-[#c0392b] mx-auto mb-10" />

          <p
            className="text-sm md:text-lg text-[#ccc] leading-loose tracking-wider mb-12 max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            鹿沼・末広から始まる、熱狂の一杯。<br />
            栃木しゃも × 鹿沼ニラ × こんにゃく麺。<br />
            化学調味料不使用。無辛〜12段階。<br />
            お一人様大歓迎。
          </p>

          <div className="flex flex-col gap-4 items-center w-full max-w-xs mx-auto">
            <Link
              href="/menu"
              className="block w-full text-center py-4 bg-[#c0392b] text-[#f0ede8] text-sm tracking-[0.2em] font-bold hover:bg-[#e74c3c] transition-colors"
              style={{ fontFamily: 'var(--font-noto-sans)' }}
            >
              メニューを見る
            </Link>
            <Link
              href="/challenge"
              className="block w-full text-center py-4 border border-[#c0392b] text-[#c0392b] text-sm tracking-[0.2em] font-bold hover:bg-[#c0392b]/10 transition-colors"
              style={{ fontFamily: 'var(--font-noto-sans)' }}
            >
              鳳凰チャレンジ
            </Link>
          </div>
        </div>

        {/* スクロール矢印 */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.3em] text-[#666]" style={{ fontFamily: 'var(--font-noto-sans)' }}>
            SCROLL
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#c0392b] to-transparent" />
        </div>
      </section>

      {/* ── 3つの独自価値 ── */}
      <section className="py-14 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p
              className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
              style={{ fontFamily: 'var(--font-noto-sans)' }}
            >
              CONCEPT
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-[#f0ede8] tracking-wide"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              童が届ける3つの価値
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.num}
                className="bg-[#161616] border border-[#1f1f1f] p-5 md:p-8 hover:border-[#c0392b]/40 transition-colors"
              >
                <p
                  className="text-5xl font-black text-[#c0392b]/60 mb-4"
                  style={{ fontFamily: 'var(--font-noto-serif)' }}
                >
                  {f.num}
                </p>
                <p
                  className="text-xs tracking-[0.3em] text-[#c0392b] mb-2"
                  style={{ fontFamily: 'var(--font-noto-sans)' }}
                >
                  {f.sub}
                </p>
                <h3
                  className="text-xl font-bold text-[#f0ede8] mb-4 tracking-wide"
                  style={{ fontFamily: 'var(--font-noto-serif)' }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm text-[#ddd] leading-loose"
                  style={{ fontFamily: 'var(--font-noto-sans)' }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ストーリー導線 ── */}
      <section className="py-14 md:py-24 px-6 bg-[#0a0a0a] border-y border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-1/2">
              <p
                className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                OUR STORY
              </p>
              <h2
                className="text-3xl md:text-4xl font-black text-[#f0ede8] tracking-wide mb-6"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                鹿沼から、<br />日本を熱くする。
              </h2>
              <p
                className="text-sm text-[#ddd] leading-loose mb-6 md:mb-8"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                26歳の代表が鹿沼に惚れ込み、地域の農家・製麺所と手を組んで生まれた一杯。
                食べるたびに地域にお金が還る、循環型の辛麺を目指しています。
              </p>
              <Link
                href="/story"
                className="text-xs tracking-[0.3em] text-[#c0392b] border-b border-[#c0392b]/40 pb-1 hover:border-[#c0392b] transition-colors"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                ストーリーを読む →
              </Link>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {[
                { num: '2026', unit: '年', label: '鹿沼・末広に創業' },
                { num: '4', unit: '種', label: '唐辛子のブレンド' },
                { num: '12', unit: '段階', label: '辛さの選択肢' },
                { num: '0', unit: '使用', label: '化学調味料' },
              ].map((item) => (
                <div key={item.label} className="bg-[#161616] border border-[#1f1f1f] p-6 text-center">
                  <p
                    className="text-4xl font-black text-[#f0ede8] leading-none"
                    style={{ fontFamily: 'var(--font-noto-serif)' }}
                  >
                    {item.num}
                    <span className="text-base text-[#c0392b] ml-1">{item.unit}</span>
                  </p>
                  <p
                    className="text-xs text-[#888] mt-2 tracking-wider"
                    style={{ fontFamily: 'var(--font-noto-sans)' }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 辛さ階級プレビュー ── */}
      <section className="py-14 md:py-24 px-6 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-1/2">
              <p
                className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                SPICE RANK
              </p>
              <h2
                className="text-3xl md:text-4xl font-black text-[#f0ede8] tracking-wide mb-6"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                12段階の辛さ
              </h2>
              <p
                className="text-sm text-[#ddd] leading-loose mb-6 md:mb-8"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                「町娘（無辛）」から「天下統一（Lv.12）」まで。
                あなたの器量を試せ。将軍以上は完食必須の出世システム。
              </p>
              <Link
                href="/menu"
                className="text-xs tracking-[0.3em] text-[#c0392b] border-b border-[#c0392b]/40 pb-1 hover:border-[#c0392b] transition-colors"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                全メニューを見る →
              </Link>
            </div>

            <div className="md:w-1/2 grid grid-cols-3 gap-3 w-full">
              {ranks.map((r) => (
                <div
                  key={r.name}
                  className="bg-[#161616] border border-[#1f1f1f] p-4 text-center"
                >
                  <p
                    className="text-sm font-bold tracking-wider mb-2"
                    style={{
                      fontFamily: 'var(--font-noto-sans)',
                      color: r.color,
                    }}
                  >
                    {r.level}
                  </p>
                  <p
                    className="text-base font-bold text-[#f0ede8]"
                    style={{ fontFamily: 'var(--font-noto-serif)' }}
                  >
                    {r.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 鳳凰チャレンジ CTA ── */}
      <section className="py-14 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            CHALLENGE
          </p>
          <h2
            className="text-4xl md:text-6xl font-black text-[#f0ede8] tracking-wide mb-6"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            鳳凰
          </h2>
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <p
                className="text-3xl font-black text-[#c9a84c]"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                無料
              </p>
              <p
                className="text-xs text-[#ddd] mt-1 tracking-wider"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                完食した場合
              </p>
            </div>
          </div>
          <p
            className="text-sm text-[#ddd] leading-loose mb-8 md:mb-10"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            誰でも挑戦可能。鹿沼・末広の激辛チャレンジ。<br />
            果たして、あなたは地獄の炎に勝てるか。
          </p>
          <Link
            href="/challenge"
            className="inline-block px-12 py-5 bg-[#c0392b] text-[#f0ede8] text-xs tracking-[0.3em] font-bold hover:bg-[#e74c3c] transition-colors"
            style={{
              fontFamily: 'var(--font-noto-sans)',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
          >
            チャレンジ詳細を見る
          </Link>
        </div>
      </section>

      {/* ── アクセス導線 ── */}
      <section className="py-14 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            LOCATION
          </p>
          <h2
            className="text-2xl font-black text-[#f0ede8] tracking-wide mb-4"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            鹿沼市 末広町
          </h2>
          <p
            className="text-sm text-[#ccc] mb-8"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            洋菓子店エトワール跡地。姉妹店「銀座コーヒー」より徒歩1分。
          </p>
          <Link
            href="/access"
            className="text-xs tracking-[0.3em] text-[#c0392b] border-b border-[#c0392b]/40 pb-1 hover:border-[#c0392b] transition-colors"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            アクセスを確認する →
          </Link>
        </div>
      </section>
    </>
  )
}
