import React, { useState, useEffect } from 'react'
import { DeliveryBikeIcon, ChevronLeft } from '../common/Icons'

export function TrackingModal({ isOpen, onClose, orderItem, address, totalAmount, onHome }) {
  const [progress, setProgress] = useState(45)

  useEffect(() => {
    if (isOpen) {
      const timer = setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + 5 : prev))
      }, 3000)
      return () => clearInterval(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
      <div className="w-full max-w-[430px] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-coffee-border">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-coffee-dark"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-base font-bold text-coffee-dark font-sora">Delivery Tracking</h2>
          <div className="w-10" />
        </div>

        {/* Map simulation */}
        <div className="relative h-48 bg-[#E9E5DD] flex items-center justify-center overflow-hidden">
          {/* Simulated Map lines */}
          <div className="absolute inset-0 opacity-40">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="50" x2="400" y2="80" stroke="#FFFFFF" strokeWidth="12" />
              <line x1="100" y1="0" x2="160" y2="200" stroke="#FFFFFF" strokeWidth="16" />
              <line x1="280" y1="20" x2="220" y2="200" stroke="#FFFFFF" strokeWidth="10" />
              <path d="M 60 140 Q 180 80 320 130" stroke="#C67C4E" strokeWidth="4" strokeDasharray="6,6" fill="none" />
            </svg>
          </div>

          {/* Courier marker */}
          <div className="relative z-10 flex flex-col items-center animate-bounce">
            <div className="w-12 h-12 rounded-full bg-brand text-white shadow-xl flex items-center justify-center border-2 border-white">
              <DeliveryBikeIcon className="w-6 h-6" />
            </div>
            <span className="bg-coffee-dark text-white text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 shadow">
              10 mins away
            </span>
          </div>

          {/* Destination pin */}
          <div className="absolute right-12 bottom-6 flex flex-col items-center">
            <div className="w-7 h-7 rounded-full bg-coffee-dark text-white flex items-center justify-center border-2 border-white shadow">
              <span className="text-xs">📍</span>
            </div>
          </div>
        </div>

        {/* Tracking Details */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* ETA Card */}
          <div className="text-center">
            <span className="text-xs font-semibold text-brand tracking-wider uppercase">
              Order on the way
            </span>
            <h3 className="text-2xl font-extrabold text-coffee-dark mt-1">
              10 - 15 minutes
            </h3>
            <p className="text-xs text-coffee-grey mt-0.5">
              Delivering to <span className="font-semibold text-coffee-dark">{address.street}</span>
            </p>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-brand h-2 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Stepper info */}
          <div className="bg-brand-peach/60 rounded-2xl p-4 border border-brand/20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center shrink-0">
              <DeliveryBikeIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-coffee-dark">Delivered by Courier</div>
              <div className="text-[11px] text-coffee-grey">
                Your hot {orderItem?.name || 'Coffee'} is neatly packed in thermal bag.
              </div>
            </div>
          </div>

          {/* Courier Contact Card */}
          <div className="flex items-center justify-between border border-coffee-border rounded-2xl p-3.5">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="Courier"
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div>
                <h4 className="text-sm font-bold text-coffee-dark">Johan Daud</h4>
                <p className="text-xs text-coffee-grey">Personal Courier</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => alert('Calling courier Johan Daud (+62 812-3456-7890)...')}
                className="w-10 h-10 rounded-xl border border-coffee-border flex items-center justify-center text-coffee-dark hover:bg-gray-50 active:scale-95 transition"
                title="Call Courier"
              >
                📞
              </button>
              <button
                onClick={() => alert('Opening chat with courier...')}
                className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center hover:bg-brand-hover active:scale-95 transition shadow-sm"
                title="Message Courier"
              >
                💬
              </button>
            </div>
          </div>

          {/* Action button */}
          <button
            onClick={() => {
              onClose()
              onHome()
            }}
            className="w-full py-4 bg-brand text-white rounded-2xl font-bold text-sm hover:bg-brand-hover active:scale-98 transition shadow-md"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
