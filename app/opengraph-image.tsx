import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  // logo3.png（背景透過版ロゴ）を取得
  const logoData = await fetch(
    new URL('../public/logo3.png', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0d0d0d',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'serif',
        }}
      >
        {/* 上部赤ライン */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: '#c0392b',
            display: 'flex',
          }}
        />

        {/* 背景の赤いグロー */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '400px',
            background:
              'radial-gradient(ellipse, rgba(192,57,43,0.18) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* ロゴ画像 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoData as unknown as string}
          alt=""
          width={420}
          height={420}
          style={{ objectFit: 'contain' }}
        />

        {/* 下部キャッチコピー */}
        <p
          style={{
            fontSize: '44px',
            color: '#f0ede8',
            letterSpacing: '0.3em',
            margin: '24px 0 0 0',
            fontFamily: 'serif',
            fontWeight: '900',
          }}
        >
          鹿沼辛麺、誕生。
        </p>

        {/* 下部赤ライン */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: '#c0392b',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
