'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const translate = {
    up: visible ? 'translate-y-0' : 'translate-y-10',
    down: visible ? 'translate-y-0' : '-translate-y-10',
    left: visible ? 'translate-x-0' : 'translate-x-10',
    right: visible ? 'translate-x-0' : '-translate-x-10',
    none: '',
  }[direction]

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${translate} ${className}`}
    >
      {children}
    </div>
  )
}
