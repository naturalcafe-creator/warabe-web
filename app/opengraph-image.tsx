import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const runtime = 'nodejs'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  // ロゴ画像を読み込んで base64 データURLに変換
  const logoData = await readFile(
    join(process.cwd(), 'public/logo-og.jpg')
  )
  const logoBase64 = logoData.toString('base64')
  const logoSrc = `data:image/jpeg;base64,${logoBase64}`

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
          {/* ロゴ画像 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt=""
            width={380}
            height={380}
            style={{ objectFit: 'contain', marginBottom: '8px' }}
          />

          {/* キャッチコピー */}
          <p
            style={{
              fontSize: '40px',
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
