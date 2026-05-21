'use client'

import { useState } from 'react'

type Props = {
  color: string
  highlight?: boolean
  children: React.ReactNode
}

export default function SpiceRankItem({ color, highlight, children }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={hovered ? {
        boxShadow: `inset 3px 0 0 ${color}, 0 0 18px ${color}25`,
        borderColor: `${color}55`,
      } : {}}
      className={`flex items-center gap-4 px-6 py-4 border transition-all duration-300 cursor-default ${
        highlight
          ? 'bg-[#f0ede8]/5 border-[#f0ede8]/20'
          : 'bg-[#161616] border-[#1f1f1f]'
      }`}
    >
      {children}
    </div>
  )
}
