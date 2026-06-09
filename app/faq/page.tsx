import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '../components/FadeIn'

export const metadata: Metadata = {
  title: 'よくある質問 | 鹿沼辛麺 童',
  description: '鹿沼辛麺 童（わらべ）へのよくある質問。営業時間・駐車場・辛さの選び方・鳳凰チャレンジのルール・こんにゃく麺について。',
}

const faqs = [
  {
    category: 'お店について',
    items: [
      {
        q: '営業時間を教えてください。',
        a: '昼 11:30〜14:30（14:00 LO）、夜 17:00〜21:00（20:30 LO）です。定休日は火曜日です。※仮の営業時間です。最新情報はInstagram（@warabe_kanuma_karamen）でご確認ください。',
      },
      {
        q: '駐車場はありますか？',
        a: 'お店の隣に約10台分の無料駐車場がございます。お気軽にお車でお越しください。',
      },
      {
        q: '予約はできますか？',
        a: '現在、予約は受け付けておりません。当日のご来店をお待ちしております。',
      },
      {
        q: '場所はどこですか？',
        a: '栃木県鹿沼市末広町1916-1 WARABASE 1F（洋菓子店エトワール跡地）です。筑波銀行鹿沼支店さん向かいです。',
      },
      {
        q: 'テイクアウトはできますか？',
        a: '串シウマイ等をカウンターにてご提供しています。辛麺本体のテイクアウトは現在対応しておりません。',
      },
    ],
  },
  {
    category: 'メニュー・辛さについて',
    items: [
      {
        q: '辛さは選べますか？',
        a: '無辛（町娘）からLv.9（老中）まで、13段階の辛さを自由にお選びいただけます。Lv.10以上は昇格制となります。',
      },
      {
        q: '辛くないメニューはありますか？',
        a: 'はい。「町娘（無辛）」は辛さゼロのメニューです。お子様や辛いものが苦手な方にもお楽しみいただけます。',
      },
      {
        q: '特製中華麺とはどんな麺ですか？',
        a: '鹿沼産のこんにゃくを練り込んだ特製麺です。もちっとした食感が特徴で、スープとよく絡みます。通常の小麦麺と比べて血糖値の上昇が緩やかです。',
      },
      {
        q: '化学調味料は使っていますか？',
        a: '化学調味料（MSG）は一切使用しておりません。栃木しゃものスープと自家製麹・本醸造醤油の旨味で仕上げています。',
      },
      {
        q: 'アレルギーへの対応はできますか？',
        a: 'アレルギーについてはご来店の際にスタッフへご相談ください。完全な対応はお約束できかねますが、可能な限りご対応いたします。',
      },
      {
        q: 'スープの種類はありますか？',
        a: '元祖・トマト（＋¥80）・味噌（＋¥80）の3種類からお選びいただけます。',
      },
    ],
  },
  {
    category: '鳳凰チャレンジ・新童宿について',
    items: [
      {
        q: '鳳凰チャレンジとは何ですか？',
        a: '制限時間15分以内にスープまで飲み干して完食すると、料金が全額無料になる激辛チャレンジです。通常料金は¥3,000です。',
      },
      {
        q: '鳳凰チャレンジは誰でも挑戦できますか？',
        a: '年齢・性別問わず誰でも挑戦できます。ただし、体調不良の方・妊娠中・授乳中の方・お子様はご遠慮ください。',
      },
      {
        q: '新童宿（しんわらべじゅく）とはどんな制度ですか？',
        a: '辛さの段階に応じた出世システムです。町娘（無辛）〜老中（Lv.9）は自由に選べます。将軍（Lv.10）以上は昇格制で、老中を完食した方が次の段階へ挑戦できます。完食で昇格、失敗すると一つ降格します。',
      },
      {
        q: '天下人になると何かもらえますか？',
        a: '天下人（Lv.12）を達成された方は「童の殿堂」に名前が刻まれる予定です（詳細は開店後にお知らせします）。',
      },
    ],
  },
  {
    category: '姉妹店・焙煎所について',
    items: [
      {
        q: '銀座コーヒーとはどんなお店ですか？',
        a: '童より徒歩約1分の姉妹店です。鹿沼市銀座通りに位置するオーガニック専門のスペシャルティコーヒーのお店で、相互クーポン設置の予定です。',
      },
      {
        q: '焙煎所は見学できますか？',
        a: 'お店の奥にガラス張りの焙煎所があり、客席から焙煎の様子を見ることができます。タイミングが合えば、辛麺を食べながら焙煎士の仕事を間近に感じていただけます。',
      },
    ],
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    }))
  ),
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ヘッダー */}
      <section className="pt-32 pb-16 px-6 text-center border-b border-[#1f1f1f]">
        <FadeIn>
          <p
            className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            FAQ
          </p>
          <h1
            className="text-4xl md:text-5xl font-black text-[#f0ede8] tracking-wide mb-4"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            よくある質問
          </h1>
          <p
            className="text-sm text-[#ddd]"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            お気軽にご来店ください
          </p>
        </FadeIn>
      </section>

      {/* FAQ本文 */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {faqs.map((cat, ci) => (
            <FadeIn key={cat.category} delay={ci * 60}>
              {/* カテゴリ見出し */}
              <p
                className="text-xs tracking-[0.5em] text-[#c0392b] mb-8"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                {cat.category.toUpperCase().replace(/[^\x00-\x7F]/g, (c) => c)}
              </p>

              <div className="space-y-0">
                {cat.items.map((item, i) => (
                  <details
                    key={i}
                    className="group border-b border-[#1a1a1a]"
                  >
                    <summary
                      className="flex items-start gap-4 py-5 cursor-pointer list-none"
                      style={{ fontFamily: 'var(--font-noto-serif)' }}
                    >
                      <span className="text-[#c0392b] text-sm font-bold shrink-0 mt-0.5">Q</span>
                      <span className="text-sm text-[#f0ede8] leading-relaxed flex-1 pr-4">
                        {item.q}
                      </span>
                      {/* アコーディオン矢印 */}
                      <span
                        className="text-[#c0392b] text-xs shrink-0 mt-1 transition-transform duration-300 group-open:rotate-180"
                        style={{ display: 'inline-block' }}
                      >
                        ▼
                      </span>
                    </summary>
                    <div className="pb-5 flex gap-4">
                      <span className="text-[#888] text-sm font-bold shrink-0">A</span>
                      <p
                        className="text-sm text-[#bbb] leading-loose"
                        style={{ fontFamily: 'var(--font-noto-serif)' }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 px-6 bg-[#0a0a0a] border-t border-[#1f1f1f] text-center">
        <FadeIn>
          <p
            className="text-xs tracking-[0.5em] text-[#c0392b] mb-6"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            MORE INFO
          </p>
          <p
            className="text-sm text-[#ccc] mb-10 leading-loose"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            その他のご質問はInstagramのDM<br />またはご来店時にお気軽にどうぞ。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/access"
              className="inline-block px-10 py-4 bg-[#c0392b] text-[#f0ede8] text-sm tracking-[0.2em] font-bold hover:bg-[#e74c3c] transition-colors"
              style={{
                fontFamily: 'var(--font-noto-serif)',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
            >
              アクセスを見る
            </Link>
            <Link
              href="/menu"
              className="inline-block px-10 py-4 border border-[#c0392b] text-[#c0392b] text-sm tracking-[0.2em] font-bold hover:bg-[#c0392b]/10 transition-colors"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              メニューを見る
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
