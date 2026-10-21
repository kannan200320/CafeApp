import React from 'react'
import { StatusBar } from '../common/StatusBar'

export function OnboardingScreen({ onGetStarted }) {
  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col justify-between overflow-hidden select-none font-sora pb-3">
      {/* Top iOS Status Bar */}
      <div className="relative z-30">
        <StatusBar theme="light" />
      </div>

      {/* Hero Visual Area with Exact Coffee Cup Image */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-start overflow-hidden">
        <div className="relative w-full h-[380px] sm:h-[420px] overflow-hidden -mt-6">
          <img
            src="/images/onboarding-hero.png"
            alt="Fall in Love with Coffee"
            className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
          />

          {/* Smooth black gradient fade at bottom to blend seamlessly into text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>

      {/* Bottom Content Area: Title, Subtitle, and Call-to-Action */}
      <div className="relative z-20 px-8 pb-3 flex flex-col items-center text-center -mt-8">
        {/* Main Headline */}
        <h1 className="text-[34px] leading-[44px] font-semibold text-white tracking-tight max-w-[320px]">
          Fall in Love with <br />
          Coffee in Blissful <br />
          Delight!
        </h1>

        {/* Subtitle description */}
        <p className="text-[14px] leading-[22px] text-[#A9A9A9] mt-3.5 max-w-[280px] font-normal">
          Welcome to our cozy coffee corner, where every cup is a delightful for you.
        </p>

        {/* Get Started Button */}
        <button
          onClick={onGetStarted}
          className="w-full mt-7 py-4 px-6 bg-brand hover:bg-brand-hover active:scale-[0.98] text-white font-semibold text-[16px] rounded-2xl shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center tracking-wide"
        >
          Get Started
        </button>

        {/* Bottom iOS Home Indicator */}
        <div className="w-36 h-1 bg-white/70 rounded-full mx-auto mt-6 mb-1" />
      </div>
    </div>
  )
}
