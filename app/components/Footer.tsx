import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#0a0a0a] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <div>
            <Image
              src="/logo2.png"
              alt="鹿沼辛麺 童 わらべ"
              width={100}
              height={100}
              className="object-contain"
              style={{ height: '100px', width: 'auto' }}
            />
          </div>

          <nav className="flex flex-col gap-3">
            {[
              { href: '/', label: 'TOP' },
              { href: '/menu', label: 'MENU' },
              { href: '/challenge', label: 'CHALLENGE' },
              { href: '/story', label: 'STORY' },
              { href: '/access', label: 'ACCESS' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs tracking-[0.2em] text-[#888] hover:text-[#f0ede8] transition-colors"
                style={{ fontFamily: 'var(--font-noto-sans)' }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div
            className="text-xs text-[#aaa] space-y-2 leading-relaxed"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            <p>〒322-0083 栃木県鹿沼市末広町１９１６−１</p>
            <p>WARABASE 1F（洋菓子店エトワール跡地）</p>
            <p>姉妹店：銀座コーヒー（徒歩1分）</p>
            <a
              href="https://www.instagram.com/warabe_kanuma_karamen/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#c0392b] hover:text-[#e74c3c] transition-colors"
            >
              Instagram：@warabe_kanuma_karamen
            </a>
            <p>運営：合同会社ネイチャーディストリクト</p>
          </div>
        </div>

        <div className="border-t border-[#1f1f1f] pt-6 text-center">
          <p
            className="text-xs tracking-widest text-[#666]"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            © 2026 鹿沼辛麺 童 / The Nature District LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
