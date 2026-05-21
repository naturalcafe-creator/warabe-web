'use client'

import { useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  strength?: number
}

export default function MagneticButton({ children, className = '', strength = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    setPos({ x, y })
  }

  const onMouseLeave = () => {
    setPos({ x: 0, y: 0 })
    setActive(false)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: active
          ? 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)'
          : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      {children}
    </div>
  )
}
