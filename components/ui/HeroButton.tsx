'use client'

import React from 'react'

interface HeroButtonProps {
  title: string
  icon: React.ReactNode
  position: string
  handleClick?: () => void
  otherClasses?: string
}

export const HeroButton = ({ title, icon, position, handleClick, otherClasses }: HeroButtonProps) => {
  return (
    <button
      onClick={() => {
        console.log('clicked')
        handleClick && handleClick()
      }}
      className={`mt-5 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses} gap-4`}
    >
      {position === 'left' && icon}
      {title}
      {position === 'right' && icon}
    </button>
  )
}
