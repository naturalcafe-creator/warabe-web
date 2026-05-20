import type { Metadata } from 'next'
import { Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

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
    description: '路地裏から始まる、鹿沼の「熱狂」。',
    locale: 'ja_JP',
    type: 'website',
  },
  verification: {
    google: 'npm2V423iwqqzV3ZaKF7JudBH82G-V4tqI4OAqK-AdA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSerif.variable} ${notoSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-PRLMM9F5ZX" />
    </html>
  )
}
