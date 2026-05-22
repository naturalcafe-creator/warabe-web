import type { Metadata } from 'next'
import FadeIn from '../components/FadeIn'
import Marquee from '../components/Marquee'

export const metadata: Metadata = {
  title: '採用情報 | 鹿沼辛麺 童',
  description: '鹿沼辛麺 童の採用情報。新しいチームメンバーを募集しています。インスタグラムDMにてご応募ください。',
}

export default function RecruitPage() {
  return (
    <>
      {/* ヘッダー */}
      <section className="pt-32 pb-16 px-6 text-center border-b border-[#1f1f1f]">
        <FadeIn>
          <p
            className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            RECRUIT
          </p>
          <h1
            className="text-4xl md:text-5xl font-black text-[#f0ede8] tracking-wide mb-4"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            採用情報
          </h1>
          <p
            className="text-sm text-[#ddd]"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            チームメンバー募集中
          </p>
        </FadeIn>
      </section>

      {/* マーキー */}
      <Marquee
        items={['新しいチームメンバーを募集', 'RECRUIT', 'Instagram DM にてご応募', '鹿沼を盛り上げる仲間へ', '地域循環型飲食', '鹿沼から日本を熱くする']}
        duration={20}
      />

      {/* メッセージ */}
      <section className="py-14 md:py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p
              className="text-xs tracking-[0.5em] text-[#c0392b] mb-4"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              MESSAGE
            </p>
            <p
              className="text-xl md:text-2xl font-black text-[#f0ede8] leading-loose tracking-wide mb-8"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              鹿沼を熱くする仲間を<br />探しています。
            </p>
            <div className="w-16 h-px bg-[#c0392b] mx-auto mb-8" />
            <p
              className="text-sm text-[#ddd] leading-loose mb-2"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              地域循環型の辛麺専門店として、鹿沼の農家・製麺所と手を組みながら地域に根ざした飲食を作っています。
            </p>
            <p
              className="text-sm text-[#ddd] leading-loose"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              一緒に鹿沼を盛り上げてくれる方のご応募をお待ちしています。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 応募方法 */}
      <section className="py-14 md:py-24 px-6 bg-[#0a0a0a] border-y border-[#1f1f1f]">
        <div className="max-w-2xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p
              className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              HOW TO APPLY
            </p>
            <h2
              className="text-2xl font-black text-[#f0ede8] tracking-wide"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              応募方法
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="bg-[#161616] border border-[#1f1f1f] p-6 md:p-10 mb-8">
              <p
                className="text-sm text-[#ddd] leading-loose mb-6"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                インスタグラムのDMにてお待ちしております。<br />
                下記４点をご記入の上ご連絡ください。<br />
                メッセージのやり取り後、面談日程を確定させていただきます。
              </p>

              <ul className="space-y-4">
                {[
                  'お名前',
                  '生年月日',
                  '連絡先',
                  'なぜ童に興味を持ったか',
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span
                      className="text-[#c0392b] text-xs mt-0.5 shrink-0"
                      style={{ fontFamily: 'var(--font-noto-serif)' }}
                    >
                      0{i + 1}
                    </span>
                    <p
                      className="text-sm text-[#f0ede8] font-bold"
                      style={{ fontFamily: 'var(--font-noto-serif)' }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Instagramリンク */}
          <FadeIn delay={200} className="text-center">
            <p
              className="text-xs text-[#888] mb-4"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              応募・お問い合わせはこちら
            </p>
            <a
              href="https://www.instagram.com/warabe_kanuma_karamen/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#c0392b] text-[#f0ede8] text-xs tracking-[0.3em] font-bold hover:bg-[#e74c3c] transition-colors"
              style={{
                fontFamily: 'var(--font-noto-serif)',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
            >
              Instagram DMで応募する
            </a>
            <p
              className="text-xs text-[#666] mt-4"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              @warabe_kanuma_karamen
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
