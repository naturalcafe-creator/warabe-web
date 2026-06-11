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
          background: '#0e0e0e',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'serif',
        }}
      >
        {/* 背景の赤いグロー */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(192,57,43,0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* 上部ライン */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: '80px',
            right: '80px',
            height: '1px',
            background: 'rgba(192,57,43,0.4)',
            display: 'flex',
          }}
        />

        {/* 下部ライン */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            right: '80px',
            height: '1px',
            background: 'rgba(192,57,43,0.4)',
            display: 'flex',
          }}
        />

        {/* 左側縦テキスト装飾 */}
        <div
          style={{
            position: 'absolute',
            left: '40px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          {'鹿沼辛麺　童'.split('').map((char, i) => (
            <span
              key={i}
              style={{
                fontSize: '11px',
                color: 'rgba(192,57,43,0.3)',
                letterSpacing: '0.2em',
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* 右側縦テキスト装飾 */}
        <div
          style={{
            position: 'absolute',
            right: '40px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          {'KARAMEN　WARABE'.split('').map((char, i) => (
            <span
              key={i}
              style={{
                fontSize: '11px',
                color: 'rgba(192,57,43,0.3)',
                letterSpacing: '0.2em',
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* メインコンテンツ */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0px',
          }}
        >
          {/* 小見出し */}
          <p
            style={{
              fontSize: '13px',
              letterSpacing: '0.5em',
              color: '#c0392b',
              margin: '0 0 28px 0',
              fontFamily: 'serif',
            }}
          >
            KANUMA KARAMEN
          </p>

          {/* 店名 童 */}
          <p
            style={{
              fontSize: '140px',
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
              fontSize: '15px',
              letterSpacing: '0.6em',
              color: '#888',
              margin: '12px 0 36px 0',
              fontFamily: 'serif',
            }}
          >
            わらべ
          </p>

          {/* 区切り線 */}
          <div
            style={{
              width: '200px',
              height: '1px',
              background: 'rgba(192,57,43,0.5)',
              margin: '0 0 36px 0',
              display: 'flex',
            }}
          />

          {/* タグライン */}
          <p
            style={{
              fontSize: '22px',
              color: '#ccc',
              margin: '0 0 12px 0',
              letterSpacing: '0.15em',
              fontFamily: 'serif',
            }}
          >
            栃木しゃも × 鹿沼ニラ × こんにゃく麺
          </p>

          {/* サブタグライン */}
          <p
            style={{
              fontSize: '15px',
              color: '#666',
              margin: '0',
              letterSpacing: '0.2em',
              fontFamily: 'serif',
            }}
          >
            栃木県鹿沼市 末広町 WARABASE 1F
          </p>
        </div>

        {/* 右下 辛さ情報 */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '4px',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              color: '#c0392b',
              letterSpacing: '0.3em',
              margin: '0',
              fontFamily: 'serif',
            }}
          >
            SPICE LEVEL
          </p>
          <p
            style={{
              fontSize: '20px',
              fontWeight: '900',
              color: '#f0ede8',
              margin: '0',
              letterSpacing: '0.1em',
              fontFamily: 'serif',
            }}
          >
            無辛 〜 Lv.12
          </p>
        </div>

        {/* 左下 化学調味料 */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '100px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              color: '#c0392b',
              letterSpacing: '0.3em',
              margin: '0',
              fontFamily: 'serif',
            }}
          >
            NO MSG
          </p>
          <p
            style={{
              fontSize: '20px',
              fontWeight: '900',
              color: '#f0ede8',
              margin: '0',
              letterSpacing: '0.05em',
              fontFamily: 'serif',
            }}
          >
            化学調味料不使用
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
