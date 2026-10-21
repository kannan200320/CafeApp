import React, { useState } from 'react'

export function DeviceFrame({
  children,
  currentScreen,
  onScreenChange,
  screens = ['onboarding', 'home', 'detail', 'order'],
}) {
  const [isFrameEnabled, setIsFrameEnabled] = useState(true)

  const screenNames = {
    onboarding: '1. Onboarding',
    home: '2. Home',
    detail: '3. Detail',
    order: '4. Order',
  }

  return (
    <div className="min-h-screen bg-[#0E0E10] text-white flex flex-col items-center justify-start py-4 px-2 sm:px-4 font-sora">
      {/* Top Reviewer Toolbar */}
      <header className="w-full max-w-xl bg-[#1C1C1E] border border-neutral-800 rounded-2xl p-2.5 mb-3 shadow-xl flex flex-wrap items-center justify-between gap-2.5 text-xs z-50">
        {/* Title */}
        <div className="flex items-center gap-2 pl-1">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-neutral-200">
            Figma #421-1221
          </span>
        </div>

        {/* Quick Screen Switcher */}
        <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-xl border border-neutral-800">
          {screens.map((screen) => {
            const isActive = currentScreen === screen
            return (
              <button
                key={screen}
                onClick={() => onScreenChange(screen)}
                className={`px-2.5 py-1 rounded-lg font-semibold transition cursor-pointer text-[11px] ${
                  isActive
                    ? 'bg-brand text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {screenNames[screen] || screen}
              </button>
            )
          })}
        </div>

        {/* View Mode Toggle */}
        <button
          onClick={() => setIsFrameEnabled(!isFrameEnabled)}
          className="text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-xl text-[11px] font-medium transition cursor-pointer"
        >
          {isFrameEnabled ? '📱 Phone Bezel' : '🖥 Full View'}
        </button>
      </header>

      {/* Screen Frame Container */}
      <div className="w-full flex justify-center items-center">
        {isFrameEnabled ? (
          <div className="relative w-full max-w-[390px] h-[830px] bg-[#1a1a1c] rounded-[52px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-[4px] border-[#38383a] overflow-hidden flex flex-col transform-gpu">
            {/* Subtle top speaker slit in bezel (doesn't overlap screen) */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#252528] rounded-full z-30" />

            {/* Inner Mobile Screen */}
            <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-white flex flex-col shadow-inner">
              {children}
            </div>
          </div>
        ) : (
          <div className="relative w-full max-w-[420px] h-[844px] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-neutral-800">
            {children}
          </div>
        )}
      </div>

      <footer className="mt-3 text-center text-[11px] text-neutral-500">
        Pixel-perfect Figma design implementation • Interactive Mobile UI
      </footer>
    </div>
  )
}
