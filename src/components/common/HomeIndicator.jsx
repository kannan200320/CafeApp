import React from 'react'

export function HomeIndicator({ theme = 'light' }) {
  const isDark = theme === 'dark'
  return (
    <div className="w-full flex justify-center py-2 shrink-0 pointer-events-none">
      <div
        className={`w-36 h-1 rounded-full transition-colors duration-300 ${
          isDark ? 'bg-black/80' : 'bg-white/90'
        }`}
      />
    </div>
  )
}
