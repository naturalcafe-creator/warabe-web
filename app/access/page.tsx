import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '../components/FadeIn'
import Marquee from '../components/Marquee'

export const metadata: Metadata = {
  title: 'アクセス | 鹿沼辛麺 童',
  description: '鹿沼辛麺 童の所在地・営業時間・アクセス情報。栃木県鹿沼市末広町WARABASE 1F。',
}

const info: { label: string; value: string; pending?: boolean; link?: string }[] = [
  { label: '店名', value: '鹿沼辛麺 童（かぬまからめん わらべ）' },
  { label: '住所', value: '〒322-0083 栃木県鹿沼市末広町１９１６−１ WARABASE 1F（洋菓子店エトワール跡地）' },
  { label: '営業時間', value: '昼 11:30〜14:30（14:00 LO）\n夜 17:00〜21:00（20:30 LO）', pending: true },
  { label: '定休日', value: '火曜', pending: true },
  { label: '席数', value: 'カウンター・テーブル・個室' },
  { label: '駐車場', value: 'お店隣に約10台（無料）' },
  { label: 'テイクアウト', value: '串シウマイ等　カウンターにて提供' },
  { label: '姉妹店', value: '銀座コーヒー（徒歩1分）', link: 'https://www.ginzacoffee.net/' },
  { label: '運営', value: '合同会社ネイチャーディストリクト' },
]

export default function AccessPage() {
  return (
    <>
      {/* ヘッダー */}
      <section className="pt-32 pb-16 px-6 text-center border-b border-[#1f1f1f]">
        <FadeIn>
          <p
            className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            ACCESS
          </p>
          <h1
            className="text-4xl md:text-5xl font-black text-[#f0ede8] tracking-wide mb-4"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            アクセス
          </h1>
          <p
            className="text-sm text-[#ddd]"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            栃木県鹿沼市 末広町
          </p>
        </FadeIn>
      </section>

      {/* マーキー */}
      <Marquee
        items={['鹿沼市末広町', 'WARABASE 1F', '無料駐車場10台', '東武新鹿沼駅 徒歩15分', '銀座コーヒーより徒歩1分', '洋菓子店エトワール跡地', '栃木県鹿沼市']}
        duration={22}
      />

      {/* マップエリア */}
      <section className="py-8 md:py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="w-full h-80 bg-[#161616] border border-[#1f1f1f] flex items-center justify-center mb-4">
              <div className="text-center">
                <p
                  className="text-sm text-[#ddd] mb-4"
                  style={{ fontFamily: 'var(--font-noto-serif)' }}
                >
                  〒322-0083 栃木県鹿沼市末広町１９１６−１<br />
                  WARABASE 1F
                </p>
                <a
                  href="https://maps.app.goo.gl/7YrU8LNrC1XjU3Cw7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border border-[#c0392b] text-[#c0392b] text-xs tracking-[0.2em] hover:bg-[#c0392b]/10 transition-colors"
                  style={{ fontFamily: 'var(--font-noto-serif)' }}
                >
                  Google マップで開く →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 店舗情報 */}
      <section className="py-8 md:py-12 px-6 bg-[#0a0a0a] border-y border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p
              className="text-xs tracking-[0.5em] text-[#c0392b] mb-8"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              SHOP INFO
            </p>
          </FadeIn>
          <div className="space-y-5">
            {info.map((item, i) => (
              <FadeIn key={item.label} delay={i * 40}>
                <div
                  className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-[#1a1a1a] pb-5"
                >
                  <span
                    className="text-sm text-[#c0392b] w-28 shrink-0"
                    style={{ fontFamily: 'var(--font-noto-serif)' }}
                  >
                    {item.label}
                  </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#ddd] hover:text-[#f0ede8] transition-colors underline underline-offset-4"
                      style={{ fontFamily: 'var(--font-noto-serif)' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="flex flex-col gap-1">
                      {item.pending && (
                        <span
                          className="inline-block w-fit text-xs px-2 py-0.5 border border-[#c0392b]/50 text-[#c0392b] tracking-wider mb-1"
                          style={{ fontFamily: 'var(--font-noto-serif)' }}
                        >
                          仮
                        </span>
                      )}
                      <span
                        className="text-sm text-[#ddd] whitespace-pre-line"
                        style={{ fontFamily: 'var(--font-noto-serif)' }}
                      >
                        {item.value}
                      </span>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
            {/* Instagram リンク */}
            <FadeIn delay={info.length * 40}>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-[#1a1a1a] pb-5">
                <span
                  className="text-sm text-[#c0392b] w-28 shrink-0"
                  style={{ fontFamily: 'var(--font-noto-serif)' }}
                >
                  Instagram
                </span>
                <a
                  href="https://www.instagram.com/warabe_kanuma_karamen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#ddd] hover:text-[#f0ede8] transition-colors underline underline-offset-4"
                  style={{ fontFamily: 'var(--font-noto-serif)' }}
                >
                  @warabe_kanuma_karamen
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* アクセス方法 */}
      <section className="py-10 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p
              className="text-xs tracking-[0.5em] text-[#c0392b] mb-8"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              HOW TO GET THERE
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                method: '電車でお越しの場合',
                desc: '東武新鹿沼駅から徒歩15分。JR鹿沼駅から徒歩18分。',
              },
              {
                method: 'お車でお越しの場合',
                desc: 'お店隣に無料駐車場約10台あります。',
              },
              {
                method: '銀座コーヒーから',
                desc: '姉妹店「銀座コーヒー」から徒歩約1分。相互クーポンをご利用いただけます。',
                link: 'https://www.ginzacoffee.net/',
              },
              {
                method: '駐車場について',
                desc: 'お店隣に約10台分の無料駐車場があります。お気軽にお越しください。',
              },
            ].map((item, i) => (
              <FadeIn key={item.method} delay={i * 80}>
                <div className="bg-[#161616] border border-[#1f1f1f] p-6 h-full">
                  <p
                    className="text-sm font-bold text-[#f0ede8] mb-2"
                    style={{ fontFamily: 'var(--font-noto-serif)' }}
                  >
                    {item.method}
                  </p>
                  <p
                    className="text-sm text-[#ddd] leading-relaxed"
                    style={{ fontFamily: 'var(--font-noto-serif)' }}
                  >
                    {item.desc}
                  </p>
                  {'link' in item && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-xs text-[#c0392b] hover:text-[#e74c3c] transition-colors underline underline-offset-4"
                      style={{ fontFamily: 'var(--font-noto-serif)' }}
                    >
                      公式サイト →
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 焙煎所 */}
      <section className="py-10 md:py-16 px-6 border-y border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p
              className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              ROASTERY
            </p>
            <h2
              className="text-2xl font-black text-[#f0ede8] tracking-wide"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              焙煎所
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="bg-[#161616] border border-[#1f1f1f] p-6 md:p-10">
              <p
                className="text-sm text-[#ddd] leading-loose mb-6"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                お店の奥に、姉妹店「銀座コーヒー」の焙煎所を設けています。<br />
                客席からガラス張りで焙煎の様子が見える仕掛けになっており、
                タイミングが合えば、辛麺を食べながら焙煎士の仕事を間近に感じることができます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a
                  href="https://www.ginzacoffee.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 border border-[#c0392b] text-[#c0392b] text-xs tracking-[0.2em] font-bold hover:bg-[#c0392b]/10 transition-colors"
                  style={{ fontFamily: 'var(--font-noto-serif)' }}
                >
                  銀座コーヒー公式サイト →
                </a>
                <p
                  className="text-xs text-[#666]"
                  style={{ fontFamily: 'var(--font-noto-serif)' }}
                >
                  童より徒歩1分・鹿沼市銀座通り
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SNS誘導 */}
      <section className="py-10 md:py-16 px-6 bg-[#0a0a0a] border-t border-[#1f1f1f] text-center">
        <FadeIn>
          <p
            className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            INSTAGRAM
          </p>
          <p
            className="text-base text-[#ccc] mb-3"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            最新の営業情報はInstagramでご確認ください
          </p>
          <a
            href="https://www.instagram.com/warabe_kanuma_karamen/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg text-[#c0392b] hover:text-[#e74c3c] transition-colors mb-10 tracking-wider"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            @warabe_kanuma_karamen
          </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="inline-block px-10 py-4 bg-[#c0392b] text-[#f0ede8] text-sm tracking-[0.2em] font-bold hover:bg-[#e74c3c] transition-colors"
              style={{
                fontFamily: 'var(--font-noto-serif)',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
            >
              メニューを見る
            </Link>
            <Link
              href="/challenge"
              className="inline-block px-10 py-4 border border-[#c0392b] text-[#c0392b] text-sm tracking-[0.2em] font-bold hover:bg-[#c0392b]/10 transition-colors"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              鳳凰チャレンジ
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
