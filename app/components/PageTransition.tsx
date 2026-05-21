'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const timer = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.45s ease-out, transform 0.45s ease-out',
      }}
    >
      {children}
    </div>
  )
}
