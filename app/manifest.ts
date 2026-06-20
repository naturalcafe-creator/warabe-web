import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '鹿沼辛麺 童（わらべ）',
    short_name: '童わらべ',
    description: '栃木県鹿沼市のラーメン・辛麺専門店。栃木しゃも×鹿沼ニラ×もちもち麺。無辛〜Lv.12の12段階。',
    start_url: '/',
    display: 'standalone',
    background_color: '#0e0e0e',
    theme_color: '#c0392b',
    orientation: 'portrait',
    lang: 'ja',
    categories: ['food', 'lifestyle'],
    icons: [
      {
        src: '/logo2.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/logo2.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'メニュー',
        url: '/menu',
        description: '辛麺メニューを見る',
      },
      {
        name: 'アクセス',
        url: '/access',
        description: '店舗へのアクセス',
      },
      {
        name: '鳳凰チャレンジ',
        url: '/challenge',
        description: '激辛チャレンジ情報',
      },
    ],
  }
}
