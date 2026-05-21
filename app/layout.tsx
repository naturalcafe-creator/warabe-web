import type { Metadata } from 'next'
import { Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'

const notoSerif = Noto_Serif_JP({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '鹿沼辛麺 童（わらべ）| 栃木・鹿沼の地域循環型辛麺専門店',
  description:
    '栃木しゃも×鹿沼ニラ×鹿沼産こんにゃく麺。化学調味料不使用の辛麺12段階。鹿沼市銀座通りに誕生した地域循環型辛麺専門店「童（わらべ）」',
  openGraph: {
    title: '鹿沼辛麺 童（わらべ）',
    description: '鹿沼・末広から始まる、熱狂の一杯。',
    locale: 'ja_JP',
    type: 'website',
  },
  verification: {
    google: 'npm2V423iwqqzV3ZaKF7JudBH82G-V4tqI4OAqK-AdA',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: '鹿沼辛麺 童（わらべ）',
  url: 'https://warabe-kanuma.com',
  description: '栃木しゃも×鹿沼ニラ×鹿沼産こんにゃく麺。化学調味料不使用の辛麺12段階。鹿沼市末広町の地域循環型辛麺専門店。',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '末広町1916-1 WARABASE 1F',
    addressLocality: '鹿沼市',
    addressRegion: '栃木県',
    postalCode: '322-0083',
    addressCountry: 'JP',
  },
  servesCuisine: ['辛麺', '日本料理'],
  priceRange: '¥¥',
  menu: 'https://warabe-kanuma.com/menu',
  sameAs: ['https://www.instagram.com/warabe_kanuma'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSerif.variable} ${notoSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* ノイズ・グレインテクスチャ */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            pointerEvents: 'none',
            opacity: 0.028,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />
        <ScrollProgress />
        <CustomCursor />
        {/* 縦書き装飾テキスト（XL以上のみ） */}
        <div className="fixed left-3 top-1/2 -translate-y-1/2 z-50 pointer-events-none hidden xl:block select-none">
          <p
            className="text-[9px] tracking-[0.9em] text-[#c0392b]/20"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontFamily: 'var(--font-noto-sans)' }}
          >
            鹿沼辛麺　童　わらべ
          </p>
        </div>
        <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 pointer-events-none hidden xl:block select-none">
          <p
            className="text-[9px] tracking-[0.9em] text-[#c0392b]/20"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontFamily: 'var(--font-noto-sans)' }}
          >
            KANUMA　KARAMEN　WARABE
          </p>
        </div>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-PRLMM9F5ZX" />
    </html>
  )
}
