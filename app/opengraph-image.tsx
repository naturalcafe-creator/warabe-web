import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
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

        {/* メインコンテンツ */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* 小見出し */}
          <p
            style={{
              fontSize: '20px',
              letterSpacing: '0.6em',
              color: '#c0392b',
              margin: '0 0 32px 0',
              fontFamily: 'serif',
              fontWeight: '900',
            }}
          >
            KANUMA KARAMEN
          </p>

          {/* 店名 童 */}
          <p
            style={{
              fontSize: '220px',
              fontWeight: '900',
              color: '#f0ede8',
              margin: '0',
              lineHeight: '1',
              fontFamily: 'serif',
              letterSpacing: '0.05em',
            }}
          >
            童
          </p>

          {/* ルビ */}
          <p
            style={{
              fontSize: '24px',
              letterSpacing: '0.8em',
              color: '#888',
              margin: '20px 0 36px 0',
              fontFamily: 'serif',
            }}
          >
            わらべ
          </p>

          {/* 区切り線 */}
          <div
            style={{
              width: '160px',
              height: '1px',
              background: 'rgba(192,57,43,0.6)',
              margin: '0 0 32px 0',
              display: 'flex',
            }}
          />

          {/* キャッチコピー */}
          <p
            style={{
              fontSize: '44px',
              color: '#f0ede8',
              letterSpacing: '0.3em',
              margin: '0',
              fontFamily: 'serif',
              fontWeight: '900',
            }}
          >
            鹿沼辛麺、誕生。
          </p>
        </div>

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
