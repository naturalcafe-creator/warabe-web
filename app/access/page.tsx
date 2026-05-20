import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'アクセス | 鹿沼辛麺 童',
  description: '鹿沼辛麺 童の所在地・営業時間・アクセス情報。栃木県鹿沼市末広町WARABASE 1F。',
}

const info: { label: string; value: string; pending?: boolean }[] = [
  { label: '店名', value: '鹿沼辛麺 童（かぬまからめん わらべ）' },
  { label: '住所', value: '〒322-0083 栃木県鹿沼市末広町１９１６−１ WARABASE 1F（洋菓子店エトワール跡地）' },
  { label: '営業時間', value: '準備中', pending: true },
  { label: '定休日', value: '準備中', pending: true },
  { label: '席数', value: 'カウンター・テーブル・個室' },
  { label: '駐車場', value: 'お店隣に約10台（無料）' },
  { label: 'テイクアウト', value: '串シウマイ等　カウンターにて提供' },
  { label: '姉妹店', value: '銀座コーヒー（徒歩1分）' },
  { label: '運営', value: '合同会社ネイチャーディストリクト' },
]

export default function AccessPage() {
  return (
    <>
      {/* ヘッダー */}
      <section className="pt-32 pb-16 px-6 text-center border-b border-[#1f1f1f]">
        <p
          className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
          style={{ fontFamily: 'var(--font-noto-sans)' }}
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
          style={{ fontFamily: 'var(--font-noto-sans)' }}
        >
          栃木県鹿沼市 末広町
        </p>
      </section>

      {/* マップエリア */}
      <section className="py-8 md:py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="w-full h-80 bg-[#161616] border border-[#1f1f1f] flex items-center justify-center mb-4">
            <div className="text-center">
              <p
                className="text-sm text-[#ddd] mb-4"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                〒322-0083 栃木県鹿沼市末広町１９１６−１<br />
                WARABASE 1F
              </p>
              <a
                href="https://maps.app.goo.gl/7YrU8LNrC1XjU3Cw7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-[#c0392b] text-[#c0392b] text-xs tracking-[0.2em] hover:bg-[#c0392b]/10 transition-colors"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                Google マップで開く →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 店舗情報 */}
      <section className="py-8 md:py-12 px-6 bg-[#0a0a0a] border-y border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs tracking-[0.5em] text-[#c0392b] mb-8"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            SHOP INFO
          </p>
          <div className="space-y-5">
            {info.map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-[#1a1a1a] pb-5"
              >
                <span
                  className="text-sm text-[#c0392b] w-28 shrink-0"
                  style={{ fontFamily: 'var(--font-noto-sans)' }}
                >
                  {item.label}
                </span>
                <span
                  className={`text-sm ${item.pending ? 'text-[#555] italic' : 'text-[#ddd]'}`}
                  style={{ fontFamily: 'var(--font-noto-sans)' }}
                >
                  {item.value}
                </span>
              </div>
            ))}
            {/* Instagram リンク */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-[#1a1a1a] pb-5">
              <span
                className="text-sm text-[#c0392b] w-28 shrink-0"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                Instagram
              </span>
              <a
                href="https://www.instagram.com/warabe_kanuma_karamen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#c0392b] hover:text-[#e74c3c] transition-colors underline underline-offset-4"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                @warabe_kanuma_karamen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* アクセス方法 */}
      <section className="py-10 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs tracking-[0.5em] text-[#c0392b] mb-8"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            HOW TO GET THERE
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: '🚃',
                method: '電車でお越しの場合',
                desc: '東武新鹿沼駅から徒歩15分。JR鹿沼駅から徒歩18分。',
              },
              {
                icon: '🚗',
                method: 'お車でお越しの場合',
                desc: 'お店隣に無料駐車場約10台あります。',
              },
              {
                icon: '☕',
                method: '銀座コーヒーから',
                desc: '姉妹店「銀座コーヒー」から徒歩約1分。相互クーポンをご利用いただけます。',
              },
              {
                icon: '🅿️',
                method: '駐車場について',
                desc: 'お店隣に約10台分の無料駐車場があります。お気軽にお越しください。',
              },
            ].map((item) => (
              <div key={item.method} className="bg-[#161616] border border-[#1f1f1f] p-6">
                <p className="text-2xl mb-3">{item.icon}</p>
                <p
                  className="text-sm font-bold text-[#f0ede8] mb-2"
                  style={{ fontFamily: 'var(--font-noto-serif)' }}
                >
                  {item.method}
                </p>
                <p
                  className="text-sm text-[#ddd] leading-relaxed"
                  style={{ fontFamily: 'var(--font-noto-sans)' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SNS誘導 */}
      <section className="py-10 md:py-16 px-6 bg-[#0a0a0a] border-t border-[#1f1f1f] text-center">
        <p
          className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
          style={{ fontFamily: 'var(--font-noto-sans)' }}
        >
          INSTAGRAM
        </p>
        <p
          className="text-base text-[#ccc] mb-3"
          style={{ fontFamily: 'var(--font-noto-sans)' }}
        >
          最新の営業情報はInstagramでご確認ください
        </p>
        <a
          href="https://www.instagram.com/warabe_kanuma_karamen/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-lg text-[#c0392b] hover:text-[#e74c3c] transition-colors mb-10 tracking-wider"
          style={{ fontFamily: 'var(--font-noto-sans)' }}
        >
          @warabe_kanuma_karamen
        </a>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/menu"
            className="inline-block px-10 py-4 bg-[#c0392b] text-[#f0ede8] text-sm tracking-[0.2em] font-bold hover:bg-[#e74c3c] transition-colors"
            style={{
              fontFamily: 'var(--font-noto-sans)',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
          >
            メニューを見る
          </Link>
          <Link
            href="/challenge"
            className="inline-block px-10 py-4 border border-[#c0392b] text-[#c0392b] text-sm tracking-[0.2em] font-bold hover:bg-[#c0392b]/10 transition-colors"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            鳳凰チャレンジ
          </Link>
        </div>
      </section>
    </>
  )
}
