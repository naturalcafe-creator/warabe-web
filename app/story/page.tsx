import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '../components/FadeIn'
import Marquee from '../components/Marquee'

export const metadata: Metadata = {
  title: 'ストーリー | 鹿沼辛麺 童',
  description: '熊本出身・26歳の今村暖が、なぜ縁もゆかりもない鹿沼で辛麺専門店を開いたのか。養鶏修行、地域食材との出会い、銀座コーヒー開業——すべては一杯の辛麺に繋がっていた。',
}

const timeline = [
  {
    year: '熊本',
    label: '原点',
    desc: '小さい頃から辛口が食卓に並ぶ家庭で育った。九州は辛くて美味しい料理がたくさんあった。辛さの先に旨味がある、ということを子供の頃から身体で知っていた。',
  },
  {
    year: '宮崎',
    label: '修行',
    desc: '地鶏開発の事業で養鶏家のもとで鶏を育てる日々。食材が命を経由して食卓に来ることを、全身で理解した。食材への感謝はだれよりも強くなった。栃木しゃもへの着眼はここから生まれた。',
  },
  {
    year: '2023',
    label: '鹿沼へ移住',
    desc: '祖業であるこんにゃく原料商社を継ぐために鹿沼へ。移住して気づいた。鹿沼には誇れる食材がたくさんある。なのに、魅力を伝える手段がなかった。',
  },
  {
    year: '2024',
    label: '銀座コーヒー開業',
    desc: '未経験・知り合いゼロで挑んだコーヒーショップ。開店2週間で約500名来店。「地元の素材を正直に語る」だけで人が集まることを、自分の手で証明した。',
  },
  {
    year: '2025',
    label: '来店1万人突破',
    desc: 'メディア掲載30社以上。銀座・末広エリアに人が戻り始めた。「鹿沼、面白いじゃないか」という声が聞こえ始めた。',
  },
  {
    year: '2026',
    label: '童オープン',
    desc: '満を持して、辛麺だ。鹿沼ニラ、こんにゃく麺、栃木しゃも——すべてここにある。銀座コーヒーで学んだすべてを、一杯に込める。',
  },
]

export default function StoryPage() {
  return (
    <>
      {/* ヘッダー */}
      <section className="pt-32 pb-16 px-6 text-center border-b border-[#1f1f1f]">
        <FadeIn>
          <p
            className="text-xs tracking-[0.5em] text-[#c0392b] mb-3"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            STORY
          </p>
          <h1
            className="text-4xl md:text-5xl font-black text-[#f0ede8] tracking-wide mb-4"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            なぜ、鹿沼で<br className="sm:hidden" />辛麺なのか
          </h1>
          <p
            className="text-sm text-[#888]"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            熊本育ちの26歳が、縁もゆかりもない鹿沼に来た理由
          </p>
        </FadeIn>
      </section>

      {/* マーキー */}
      <Marquee
        items={['鹿沼から日本を熱くする', 'OUR STORY', '地域循環型', '鹿沼産こんにゃく', '栃木しゃも', '銀座コーヒー', '26歳の挑戦', '末広町から始まる熱狂']}
        duration={20}
      />

      {/* オープニング */}
      <section className="py-14 md:py-24 px-6">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <p
            className="text-base md:text-lg text-[#f0ede8] leading-loose tracking-wide font-bold mb-6"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            2023年。熊本から、鹿沼へ。<br />
            知り合いは、ゼロだった。
          </p>
          <div className="w-16 h-px bg-[#c0392b] mx-auto my-8" />
          <p
            className="text-sm text-[#ddd] leading-loose"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            その2年後、この街に年間1万人を呼ぶとは——<br />
            本人も、誰も、想像していなかった。
          </p>
        </FadeIn>
      </section>

      {/* 代表プロフィール */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a] border-y border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <FadeIn direction="right">
              <p
                className="text-xs tracking-[0.5em] text-[#c0392b] mb-4"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                FOUNDER
              </p>
              <h2
                className="text-xl font-black text-[#f0ede8] tracking-wide mb-2"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                今村 暖
              </h2>
              <p
                className="text-xs tracking-[0.3em] text-[#888] mb-8"
                style={{ fontFamily: 'var(--font-noto-serif)' }}
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
                    <span className="text-xs text-[#c0392b] w-12 shrink-0" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.label}</span>
                    <span className="text-sm text-[#ccc]" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={100}>
              <div className="space-y-6">
                <p className="text-sm text-[#ddd] leading-loose" style={{ fontFamily: 'var(--font-noto-serif)' }}>
                  九州で育ち、宮崎の養鶏家に弟子入りしたとき、「命と食べ物」の距離の近さを知った。鶏を育て、食べる。食の記憶はすべて、誰かの仕事でできていた。
                </p>
                <p className="text-sm text-[#ddd] leading-loose" style={{ fontFamily: 'var(--font-noto-serif)' }}>
                  2024年、移住後すぐ、未経験・知り合いゼロで銀座コーヒーを開いた。開店2週間で約500名が来店。その後1年半で来店1万人、メディア掲載30社以上——地元の素材を正直に語ることで、人は必ず動くと証明できた。
                </p>
                <p className="text-sm text-[#ddd] leading-loose" style={{ fontFamily: 'var(--font-noto-serif)' }}>
                  次の一手が、辛麺だ。鹿沼ニラ、こんにゃく麺、栃木しゃも。全部ここにある。食べるたびに地域に還る、そういう一杯をずっと作りたかった。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 引用ブロック */}
      <section className="py-16 md:py-24 px-6 border-b border-[#1f1f1f]">
        <FadeIn className="max-w-2xl mx-auto">
          <div className="border-l-2 border-[#c0392b] pl-8">
            <p
              className="text-lg md:text-2xl font-black text-[#f0ede8] leading-loose mb-6"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              「鹿沼には素晴らしい素材があるのに、<br className="md:hidden" />それらの魅力を伝えられていない。」
            </p>
            <p
              className="text-xs text-[#888] tracking-wider"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              今村 暖 / 代表
            </p>
          </div>
        </FadeIn>
      </section>

      {/* タイムライン */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-xs tracking-[0.5em] text-[#c0392b] mb-3" style={{ fontFamily: 'var(--font-noto-serif)' }}>TIMELINE</p>
            <h2 className="text-2xl font-black text-[#f0ede8] tracking-wide" style={{ fontFamily: 'var(--font-noto-serif)' }}>道のり</h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-[#1f1f1f]" />
            {timeline.map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex gap-8 mb-12 relative">
                  <div className="w-16 shrink-0 text-right">
                    <span className="text-xs font-bold text-[#c0392b]" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.year}</span>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[#c0392b] -translate-x-1" />
                    <p className="text-sm font-bold text-[#f0ede8] mb-2" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.label}</p>
                    <p className="text-sm text-[#aaa] leading-loose" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 地域循環コンセプト */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a] border-y border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="text-xs tracking-[0.5em] text-[#c0392b] mb-3" style={{ fontFamily: 'var(--font-noto-serif)' }}>PHILOSOPHY</p>
            <h2 className="text-2xl md:text-3xl font-black text-[#f0ede8] tracking-wide mb-4" style={{ fontFamily: 'var(--font-noto-serif)' }}>鹿沼で消費し、鹿沼に還す</h2>
            <p className="text-sm text-[#888] max-w-lg mx-auto leading-loose" style={{ fontFamily: 'var(--font-noto-serif)' }}>
              食べ物を食べることは、その土地の農業に投票することだと思っている。
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { step: '仕入れ', desc: '鹿沼市内の農家・製麺所から直接仕入れ。食材の顔が見える関係だけで作る。' },
              { step: '製造', desc: '地元製麺所と中華麺を共同開発。鹿沼産こんにゃくを練り込んだ唯一の麺。' },
              { step: '還元', desc: '売上は地域内に循環する。一杯食べるたびに、鹿沼の農業が続いていく。' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-[#161616] border border-[#1f1f1f] p-6 h-full">
                  <p className="text-xs tracking-[0.3em] text-[#c0392b] mb-3" style={{ fontFamily: 'var(--font-noto-serif)' }}>0{i + 1}</p>
                  <p className="text-lg font-bold text-[#f0ede8] mb-3" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.step}</p>
                  <p className="text-sm text-[#aaa] leading-relaxed" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <p className="text-sm text-[#ccc] leading-loose max-w-xl mx-auto text-center" style={{ fontFamily: 'var(--font-noto-serif)' }}>
              当社のこんにゃく原料事業と直結した<br className="md:hidden" />一貫サプライチェーン。<br />
              「童」の一杯は、<br className="md:hidden" />鹿沼の農業・製造・飲食をつなぐ循環の装置。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ロードマップ */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-xs tracking-[0.5em] text-[#c0392b] mb-3" style={{ fontFamily: 'var(--font-noto-serif)' }}>ROADMAP</p>
            <h2 className="text-2xl font-black text-[#f0ede8] tracking-wide" style={{ fontFamily: 'var(--font-noto-serif)' }}>鹿沼を"東の辛麺の聖地"へ</h2>
          </FadeIn>

          <div className="space-y-4">
            {/* 第1陣 — NOW */}
            <FadeIn delay={0}>
              <div className="border border-[#c0392b]/40 bg-[#c0392b]/5 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-[#c0392b]" style={{ fontFamily: 'var(--font-noto-serif)' }}>第1陣</span>
                  <span className="text-xs text-[#c0392b] border border-[#c0392b] px-2 py-0.5" style={{ fontFamily: 'var(--font-noto-serif)' }}>NOW</span>
                </div>
                <p className="text-lg font-black text-[#f0ede8] mb-1" style={{ fontFamily: 'var(--font-noto-serif)' }}>ポップアップ出店</p>
                <p className="text-sm text-[#c0392b] mb-6 tracking-wider" style={{ fontFamily: 'var(--font-noto-serif)' }}>2026年6月27日（土）</p>
                <div className="grid grid-cols-3 gap-4 border-t border-[#c0392b]/20 pt-5">
                  <div>
                    <p className="text-xs text-[#666] mb-1" style={{ fontFamily: 'var(--font-noto-serif)' }}>場所</p>
                    <p className="text-sm text-[#f0ede8] font-bold leading-snug" style={{ fontFamily: 'var(--font-noto-serif)' }}>大衆酒場<br />くりたろう</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#666] mb-1" style={{ fontFamily: 'var(--font-noto-serif)' }}>時間</p>
                    <p className="text-sm text-[#f0ede8] font-bold" style={{ fontFamily: 'var(--font-noto-serif)' }}>11:00<br />〜14:00</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#666] mb-1" style={{ fontFamily: 'var(--font-noto-serif)' }}>数量</p>
                    <p className="text-sm text-[#f0ede8] font-bold" style={{ fontFamily: 'var(--font-noto-serif)' }}>限定<br />40食</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 第2陣以降 */}
            {[
              { phase: '第2陣', title: '童　本店オープン', desc: '鹿沼・末広に新しい熱狂を生む' },
              { phase: '第3陣', title: 'EC・お土産展開', desc: '鹿沼産こんにゃく麺／ニラ／栃木しゃもを全国へ' },
              { phase: '第4陣', title: '新鹿沼駅前店オープン', desc: '鹿沼の玄関口に出店、まちの顔へ' },
              { phase: '第5陣', title: '3店舗目 or FC展開', desc: '鹿沼を"東の辛麺の聖地"に' },
            ].map((item, i) => (
              <FadeIn key={item.phase} delay={(i + 1) * 60}>
                <div className="flex gap-4 p-5 border border-[#1f1f1f] bg-[#161616]">
                  <span className="text-xs w-12 shrink-0 mt-0.5 text-[#777]" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.phase}</span>
                  <div>
                    <p className="text-sm font-bold mb-1 text-[#ddd]" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.title}</p>
                    <p className="text-xs text-[#888]" style={{ fontFamily: 'var(--font-noto-serif)' }}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center border-t border-[#1f1f1f]">
        <FadeIn>
          <p
            className="text-sm text-[#888] mb-8 leading-loose"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            この物語の続きは、食べてみてわかる。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="inline-block px-10 py-4 bg-[#c0392b] text-[#f0ede8] text-xs tracking-[0.3em] font-bold hover:bg-[#e74c3c] transition-colors"
              style={{ fontFamily: 'var(--font-noto-serif)', clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
            >
              メニューを見る
            </Link>
            <Link
              href="/access"
              className="inline-block px-10 py-4 border border-[#c0392b] text-[#c0392b] text-xs tracking-[0.3em] font-bold hover:bg-[#c0392b]/10 transition-colors"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              アクセス
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
