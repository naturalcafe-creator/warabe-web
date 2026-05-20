import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ストーリー | 鹿沼辛麺 童',
  description: '熊本出身・26歳の代表が、なぜ鹿沼で辛麺専門店を開いたのか。地域循環型ビジネスの思想と起業ストーリー。',
}

const timeline = [
  { year: '熊本', label: '出身', desc: '九州の食文化で育つ。辛麺との出会い。' },
  { year: '宮崎', label: '修行', desc: '養鶏家のもとで修行。命と向き合う経験。栃木しゃもへの着眼点。' },
  { year: '2023', label: '鹿沼へ移住', desc: '鹿沼産こんにゃく原料の専門商社を継承する立場として移住。「鹿沼の人がニラとこんにゃくを忘れているのでは」という問題意識。' },
  { year: '2024', label: '銀座コーヒー開業', desc: '未経験・知り合いゼロから独学で開業。開店2週間で約500名来店。' },
  { year: '2025', label: '来店1万人突破', desc: 'メディア掲載30社以上。銀座・末広エリアに人が集まるようになった。' },
  { year: '2026', label: '童オープン', desc: '銀座コーヒーで培った"人が集まる仕掛け"の第2弾。こんにゃく事業×飲食の直結。' },
]

export default function StoryPage() {
  return (
    <>
      {/* ヘッダー */}
      <section className="pt-32 pb-16 px-6 text-center border-b border-[#1f1f1f]">
        <p
          className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
          style={{ fontFamily: 'var(--font-noto-sans)' }}
        >
          STORY
        </p>
        <h1
          className="text-4xl md:text-5xl font-black text-[#f0ede8] tracking-wide"
          style={{ fontFamily: 'var(--font-noto-serif)' }}
        >
          なぜ、鹿沼で<br className="sm:hidden" />辛麺なのか
        </h1>
      </section>

      {/* メインコピー */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <p
            className="text-base md:text-xl text-[#f0ede8] leading-loose tracking-wider text-center"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            鹿沼の人がニラとこんにゃくを<br />
            忘れているのではないか。
          </p>
          <div className="w-16 h-px bg-[#c0392b] mx-auto my-10" />
          <p
            className="text-sm text-[#ddd] leading-loose text-center"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            この一つの問いが、「童」の始まりだった。
          </p>
        </div>
      </section>

      {/* 代表プロフィール */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a] border-y border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <p
                className="text-xs tracking-[0.5em] text-[#c0392b] mb-4"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                FOUNDER
              </p>
              <h2
                className="text-3xl font-black text-[#f0ede8] tracking-wide mb-2"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                今村 暖
              </h2>
              <p
                className="text-xs tracking-[0.3em] text-[#888] mb-8"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                いまむら だん / 代表
              </p>

              <div className="space-y-4">
                {[
                  { label: '出身', value: '熊本県' },
                  { label: '現在', value: '栃木県鹿沼市在住' },
                  { label: '年齢', value: '26歳（2026年時点）' },
                  { label: '法人', value: '合同会社ネイチャーディストリクト 代表' },
                  { label: '事業', value: '銀座コーヒー / 鹿沼辛麺 童 / こんにゃく原料商社' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 border-b border-[#1f1f1f] pb-3">
                    <span
                      className="text-xs text-[#c0392b] w-12 shrink-0"
                      style={{ fontFamily: 'var(--font-noto-sans)' }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-sm text-[#ccc]"
                      style={{ fontFamily: 'var(--font-noto-sans)' }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <p
                className="text-sm text-[#ddd] leading-loose"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                熊本出身。宮崎の養鶏家のもとで修行を経て、2023年に栃木県鹿沼市へ移住。
                当社の祖業である鹿沼産こんにゃく原料の専門商社を継承する立場として鹿沼に根を張る。
              </p>
              <p
                className="text-sm text-[#ddd] leading-loose"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                2024年に未経験・知り合いゼロの状態から「銀座コーヒー」を独学で開業。
                開店2週間で約500名が来店、その後約1年半で来店1万人を突破。
                メディア掲載30社以上を記録し、銀座・末広エリアに人が戻ってきた。
              </p>
              <p
                className="text-sm text-[#ddd] leading-loose"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                「鹿沼で消費し、鹿沼に還す」。その思想を一杯の辛麺に集約した第2弾が「童（わらべ）」だ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* タイムライン */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
              style={{ fontFamily: 'var(--font-noto-sans)' }}
            >
              TIMELINE
            </p>
            <h2
              className="text-2xl font-black text-[#f0ede8] tracking-wide"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              道のり
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-[#1f1f1f]" />

            {timeline.map((item, i) => (
              <div key={i} className="flex gap-8 mb-10 relative">
                <div className="w-16 shrink-0 text-right">
                  <span
                    className="text-xs font-bold text-[#c0392b]"
                    style={{ fontFamily: 'var(--font-noto-sans)' }}
                  >
                    {item.year}
                  </span>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[#c0392b] -translate-x-1" />
                  <p
                    className="text-sm font-bold text-[#f0ede8] mb-2"
                    style={{ fontFamily: 'var(--font-noto-serif)' }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs text-[#ccc] leading-relaxed"
                    style={{ fontFamily: 'var(--font-noto-sans)' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 地域循環コンセプト */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a] border-y border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            PHILOSOPHY
          </p>
          <h2
            className="text-2xl md:text-3xl font-black text-[#f0ede8] tracking-wide mb-10"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            鹿沼で消費し、鹿沼に還す
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { step: '仕入れ', desc: '鹿沼市内の農家から直接仕入れ。地産地消を最大化。' },
              { step: '製造', desc: '地元製麺所とこんにゃくシウマイ皮を共同開発。' },
              { step: '還元', desc: '売上の地域内還流で鹿沼経済へリターン。' },
            ].map((item, i) => (
              <div key={i} className="bg-[#161616] border border-[#1f1f1f] p-6">
                <p
                  className="text-xs tracking-[0.3em] text-[#c0392b] mb-3"
                  style={{ fontFamily: 'var(--font-noto-sans)' }}
                >
                  0{i + 1}
                </p>
                <p
                  className="text-lg font-bold text-[#f0ede8] mb-3"
                  style={{ fontFamily: 'var(--font-noto-serif)' }}
                >
                  {item.step}
                </p>
                <p
                  className="text-xs text-[#ccc] leading-relaxed"
                  style={{ fontFamily: 'var(--font-noto-sans)' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-sm text-[#ccc] leading-loose max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            当社の祖業であるこんにゃく原料事業と直結した一貫サプライチェーンで、
            「童」の一杯は鹿沼の農業・製造・飲食を繋ぐ循環装置になる。
          </p>
        </div>
      </section>

      {/* ロードマップ */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
              style={{ fontFamily: 'var(--font-noto-sans)' }}
            >
              ROADMAP
            </p>
            <h2
              className="text-2xl font-black text-[#f0ede8] tracking-wide"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              鹿沼を"東の辛麺の聖地"へ
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { phase: '第1陣', title: 'ポップアップ出店', desc: '地域の反応確認・味の調整', done: true },
              { phase: '第2陣', title: '童　本店オープン', desc: '鹿沼・末広に新しい熱狂を生む', current: true },
              { phase: '第3陣', title: 'EC・お土産展開', desc: '鹿沼産こんにゃく麺／ニラ／栃木しゃもを全国へ', done: false },
              { phase: '第4陣', title: '新鹿沼駅前店オープン', desc: '鹿沼の玄関口に出店、まちの顔へ', done: false },
              { phase: '第5陣', title: '3店舗目 or FC展開', desc: '鹿沼を"東の辛麺の聖地"に', done: false },
            ].map((item) => (
              <div
                key={item.phase}
                className={`flex gap-4 p-5 border ${
                  item.current
                    ? 'border-[#c0392b]/40 bg-[#c0392b]/5'
                    : item.done
                    ? 'border-[#2a2a2a] bg-[#161616] opacity-60'
                    : 'border-[#1f1f1f] bg-[#161616]'
                }`}
              >
                <span
                  className={`text-xs w-12 shrink-0 mt-0.5 ${item.current ? 'text-[#c0392b]' : 'text-[#777]'}`}
                  style={{ fontFamily: 'var(--font-noto-sans)' }}
                >
                  {item.phase}
                </span>
                <div>
                  <p
                    className={`text-sm font-bold mb-1 ${item.current ? 'text-[#f0ede8]' : 'text-[#ddd]'}`}
                    style={{ fontFamily: 'var(--font-noto-serif)' }}
                  >
                    {item.title}
                    {item.current && (
                      <span
                        className="ml-3 text-xs text-[#c0392b] border border-[#c0392b] px-2 py-0.5 align-middle"
                        style={{ fontFamily: 'var(--font-noto-sans)' }}
                      >
                        NOW
                      </span>
                    )}
                  </p>
                  <p
                    className="text-xs text-[#888]"
                    style={{ fontFamily: 'var(--font-noto-sans)' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center border-t border-[#1f1f1f]">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/menu"
            className="inline-block px-10 py-4 bg-[#c0392b] text-[#f0ede8] text-xs tracking-[0.3em] font-bold hover:bg-[#e74c3c] transition-colors"
            style={{
              fontFamily: 'var(--font-noto-sans)',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
          >
            メニューを見る
          </Link>
          <Link
            href="/access"
            className="inline-block px-10 py-4 border border-[#c0392b] text-[#c0392b] text-xs tracking-[0.3em] font-bold hover:bg-[#c0392b]/10 transition-colors"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            アクセス
          </Link>
        </div>
      </section>
    </>
  )
}
