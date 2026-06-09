'use client'

// ── アイコン ────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.19 6.19l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function HammerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 12-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9" />
      <path d="M17.64 15 22 10.64" />
      <path d="m20.91 11.7-1.25-1.25c.16-.51.23-1.03.21-1.57-.06-2.54-2.1-4.58-4.64-4.64a5 5 0 0 0-3.6 1.39L13 8l3 3 1.5-1.5" />
    </svg>
  )
}

// ── バー本体 ─────────────────────────────────────────

const actions = [
  {
    key: 'phone',
    icon: <PhoneIcon />,
    label: '準備中',
    sub: null,
    href: null as string | null,
    disabled: true,
  },
  {
    key: 'map',
    icon: <MapPinIcon />,
    label: 'Google マップ',
    sub: null,
    href: 'https://maps.app.goo.gl/tuBxLdcgQsWLxEzz6',
    disabled: false,
  },
  {
    key: 'instagram',
    icon: <InstagramIcon />,
    label: '公式 Instagram',
    sub: null,
    href: 'https://www.instagram.com/warabe_kanuma_karamen/',
    disabled: false,
  },
  {
    key: 'construction',
    icon: <HammerIcon />,
    label: 'お店作り',
    sub: null,
    href: 'https://www.instagram.com/dan_ima_mura/',
    disabled: false,
  },
]

export default function MobileActionBar() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[9000] md:hidden"
      style={{
        background: 'rgba(10, 10, 10, 0.96)',
        borderTop: '1px solid #1f1f1f',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="grid grid-cols-4">
        {actions.map((action) => {
          const inner = (
            <div className="flex flex-col items-center justify-center gap-1 py-3 px-1">
              <span
                className={`transition-colors duration-200 ${
                  action.disabled ? 'text-[#444]' : 'text-[#888] active:text-[#c0392b]'
                }`}
              >
                {action.icon}
              </span>
              <span
                className={`text-[9px] tracking-wider leading-none text-center ${
                  action.disabled ? 'text-[#444]' : 'text-[#666]'
                }`}
                style={{ fontFamily: 'var(--font-noto-serif)' }}
              >
                {action.label}
              </span>
              {action.sub && (
                <span
                  className="text-[8px] text-[#3a3a3a] leading-none"
                  style={{ fontFamily: 'var(--font-noto-serif)' }}
                >
                  {action.sub}
                </span>
              )}
            </div>
          )

          if (action.disabled || !action.href) {
            return (
              <div key={action.key} className="flex items-center justify-center cursor-default">
                {inner}
              </div>
            )
          }

          return (
            <a
              key={action.key}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              {inner}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
