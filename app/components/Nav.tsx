'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'TOP' },
  { href: '/menu', label: 'MENU' },
  { href: '/challenge', label: 'CHALLENGE' },
  { href: '/story', label: 'STORY' },
  { href: '/access', label: 'ACCESS' },
  { href: '/recruit', label: 'RECRUIT' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* オープン告知バー */}
      <div className="bg-[#c0392b] text-center py-1.5">
        <p
          className="text-xs tracking-[0.3em] text-[#f0ede8] font-bold"
          style={{ fontFamily: 'var(--font-noto-sans)' }}
        >
          2026年9月中旬 GRAND OPEN
        </p>
      </div>
    <div className="bg-[#0d0d0d]/90 backdrop-blur-sm border-b border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo2.png"
            alt="鹿沼辛麺 童 わらべ"
            width={44}
            height={44}
            className="object-contain"
            style={{ height: '44px', width: 'auto' }}
            priority
          />
          <span
            className="text-sm tracking-[0.15em] text-[#c0392b] font-bold hidden sm:block"
            style={{ fontFamily: 'var(--font-noto-sans)' }}
          >
            鹿沼辛麺専門店
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-xs tracking-[0.2em] transition-colors ${
                pathname === l.href
                  ? 'text-[#c0392b]'
                  : 'text-[#aaa] hover:text-[#f0ede8]'
              }`}
              style={{ fontFamily: 'var(--font-noto-sans)' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="メニューを開く"
        >
          <span
            className={`block w-6 h-px bg-[#f0ede8] transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-[#f0ede8] transition-all ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-[#f0ede8] transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-[#1f1f1f] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-[0.2em] ${
                pathname === l.href ? 'text-[#c0392b]' : 'text-[#aaa]'
              }`}
              style={{ fontFamily: 'var(--font-noto-sans)' }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
