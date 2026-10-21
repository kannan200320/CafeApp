import React from 'react'
import { SignalIcon, WifiIcon, BatteryIcon } from './Icons'

export function StatusBar({ theme = 'light' }) {
  const isDark = theme === 'dark' // dark means dark icons/text on light bg

  return (
    <div
      className={`w-full flex items-center justify-between px-7 pt-3 pb-1 select-none z-30 transition-colors ${
        isDark ? 'text-black' : 'text-white'
      }`}
    >
      {/* Time */}
      <span className="text-[15px] font-semibold tracking-tight font-sora">
        9:41
      </span>

      {/* Status Icons */}
      <div className="flex items-center space-x-1.5">
        <SignalIcon className="w-4 h-3.5" />
        <WifiIcon className="w-4 h-3.5" />
        <BatteryIcon className="w-6 h-3" />
      </div>
    </div>
  )
}
