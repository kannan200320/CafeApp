import React from 'react'
import { StatusBar } from '../common/StatusBar'
import { ChevronLeft, DeliveryBikeIcon } from '../common/Icons'

export function DeliveryTrackingScreen({ onBack }) {
  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col justify-between font-sora select-none overflow-hidden">
      {/* ================= MAP AREA ================= */}
      <div className="relative w-full h-[58%] min-h-[440px] bg-[#F7F6F2] overflow-hidden">
        {/* SVG Street Map Background */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 430 480"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Map Land Background */}
          <rect width="430" height="480" fill="#F8F8F6" />

          {/* Building blocks & City Lots */}
          <rect x="20" y="20" width="80" height="90" rx="3" fill="#FFFFFF" stroke="#EDEDEA" strokeWidth="1" />
          <rect x="120" y="20" width="120" height="80" rx="3" fill="#FFFFFF" stroke="#EDEDEA" strokeWidth="1" />
          <rect x="260" y="10" width="80" height="90" rx="3" fill="#FFFFFF" stroke="#EDEDEA" strokeWidth="1" />
          <rect x="360" y="10" width="80" height="100" rx="3" fill="#FFFFFF" stroke="#EDEDEA" strokeWidth="1" />

          <rect x="10" y="140" width="100" height="90" rx="3" fill="#FFFFFF" stroke="#EDEDEA" strokeWidth="1" />
          <rect x="130" y="120" width="150" height="80" rx="3" fill="#FFFFFF" stroke="#EDEDEA" strokeWidth="1" />
          <rect x="300" y="120" width="120" height="70" rx="3" fill="#FFFFFF" stroke="#EDEDEA" strokeWidth="1" />

          <rect x="80" y="250" width="130" height="160" rx="3" fill="#FFFFFF" stroke="#EDEDEA" strokeWidth="1" />
          <rect x="230" y="220" width="100" height="120" rx="3" fill="#FFFFFF" stroke="#EDEDEA" strokeWidth="1" />
          <rect x="350" y="210" width="80" height="110" rx="3" fill="#FFFFFF" stroke="#EDEDEA" strokeWidth="1" />

          {/* Streets Grid */}
          {/* Vertical roads */}
          <path d="M 50 0 L 50 480" stroke="#F1F0EC" strokeWidth="20" fill="none" />
          <path d="M 110 0 L 110 480" stroke="#F1F0EC" strokeWidth="22" fill="none" />
          <path d="M 250 0 L 250 480" stroke="#F1F0EC" strokeWidth="22" fill="none" />
          <path d="M 310 0 L 310 480" stroke="#F4F3EF" strokeWidth="28" fill="none" />
          <path d="M 390 0 L 390 480" stroke="#F1F0EC" strokeWidth="18" fill="none" />

          {/* Horizontal roads */}
          <path d="M 0 50 L 430 50" stroke="#F1F0EC" strokeWidth="18" fill="none" />
          <path d="M 0 115 L 430 115" stroke="#F1F0EC" strokeWidth="20" fill="none" />
          <path d="M 0 215 L 430 215" stroke="#F1F0EC" strokeWidth="22" fill="none" />
          <path d="M 0 350 L 430 350" stroke="#F1F0EC" strokeWidth="20" fill="none" />

          {/* Street Name Labels (Matching Screenshot) */}
          <text x="0" y="42" fill="#999793" fontSize="12" fontFamily="Sora, sans-serif" fontWeight="500">rd St</text>
          <text x="145" y="45" fill="#999793" fontSize="12" fontFamily="Sora, sans-serif" fontWeight="500">96th St</text>
          <text x="130" y="105" fill="#999793" fontSize="11" fontFamily="Sora, sans-serif" fontWeight="500">95th St</text>
          <text x="375" y="138" fill="#999793" fontSize="11" fontFamily="Sora, sans-serif" fontWeight="500">2nd Ave</text>
          <text x="370" y="295" fill="#999793" fontSize="11" fontFamily="Sora, sans-serif" fontWeight="500">3rd Ave</text>

          <text x="115" y="245" fill="#999793" fontSize="11" fontFamily="Sora, sans-serif" fontWeight="500">86th Street</text>
          <text x="228" y="340" fill="#999793" fontSize="11" fontFamily="Sora, sans-serif" fontWeight="500">86th St</text>

          {/* POI Label */}
          <text x="110" y="290" fill="#999793" fontSize="11" fontFamily="Sora, sans-serif" fontWeight="500" textAnchor="middle">
            <tspan x="135" dy="0">Nirmala</tspan>
            <tspan x="135" dy="14">Girls HSS</tspan>
          </text>

          {/* Rotated Street Labels */}
          <text x="60" y="70" fill="#999793" fontSize="11" fontFamily="Sora, sans-serif" fontWeight="500" transform="rotate(90 60,70)">
            Lin
          </text>
          <text x="105" y="75" fill="#999793" fontSize="11" fontFamily="Sora, sans-serif" fontWeight="500" transform="rotate(90 105,75)">
            97th St
          </text>
          <text x="18" y="370" fill="#999793" fontSize="11" fontFamily="Sora, sans-serif" fontWeight="500" transform="rotate(-90 18,370)">
            Kamarajar Salai
          </text>
          <text x="88" y="310" fill="#999793" fontSize="11" fontFamily="Sora, sans-serif" fontWeight="500" transform="rotate(-90 88,310)">
            88th Street
          </text>
          <text x="42" y="400" fill="#999793" fontSize="11" fontFamily="Sora, sans-serif" fontWeight="500" transform="rotate(-90 42,400)">
            85th Street
          </text>
          <text x="252" y="385" fill="#999793" fontSize="11" fontFamily="Sora, sans-serif" fontWeight="500" transform="rotate(90 252,385)">
            19th Avenue
          </text>
          <text x="288" y="360" fill="#999793" fontSize="11" fontFamily="Sora, sans-serif" fontWeight="500" transform="rotate(90 288,360)">
            Jawaharlal Nehru Road
          </text>
          <text x="185" y="420" fill="#999793" fontSize="11" fontFamily="Sora, sans-serif" fontWeight="500" transform="rotate(90 185,420)">
            18th
          </text>

          {/* ================= ROUTE PATH (TERRACOTTA BROWN #C67C4E) ================= */}
          <path
            d="M 290 270 L 290 145 L 138 152 L 138 175 L 110 175 L 110 200 L 92 200"
            stroke="#C67C4E"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* ================= DESTINATION PIN ================= */}
          <g transform="translate(80, 175)">
            {/* Soft Pin Shadow */}
            <ellipse cx="12" cy="24" rx="6" ry="2.5" fill="#C67C4E" opacity="0.25" />
            {/* Pin Body */}
            <path
              d="M12 2C7.58 2 4 5.58 4 10C4 15.5 12 23 12 23S20 15.5 20 10C20 5.58 16.42 2 12 2Z"
              fill="#C67C4E"
            />
            {/* White dot in center */}
            <circle cx="12" cy="10" r="3.5" fill="#FFFFFF" />
          </g>
        </svg>

        {/* Courier Scooter Marker Badge on the route */}
        <div
          className="absolute z-20 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: '67.5%', top: '56%' }}
        >
          <div className="w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-brand">
            <DeliveryBikeIcon className="w-5 h-5 text-brand" />
          </div>
        </div>

        {/* Top iOS Status Bar (dark text on light map) */}
        <div className="relative z-30">
          <StatusBar theme="dark" />
        </div>

        {/* Top Floating Buttons: Back Arrow & GPS Target */}
        <div className="relative z-30 px-6 pt-1 flex items-center justify-between">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="w-11 h-11 rounded-2xl bg-[#EDEDED]/90 hover:bg-white text-coffee-dark shadow-xs flex items-center justify-center transition active:scale-95 cursor-pointer backdrop-blur-sm"
            title="Back to order"
          >
            <ChevronLeft className="w-6 h-6 text-coffee-dark" />
          </button>

          {/* GPS Target / Crosshair Button */}
          <button
            onClick={() => alert('Centering on current courier location')}
            className="w-11 h-11 rounded-2xl bg-white text-coffee-dark shadow-sm flex items-center justify-center transition active:scale-95 cursor-pointer border border-gray-100"
            title="Locate Courier"
          >
            <svg
              className="w-5 h-5 text-coffee-dark"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="7" />
              <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
              <line x1="12" y1="2" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="22" />
              <line x1="2" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="22" y2="12" />
            </svg>
          </button>
        </div>
      </div>

      {/* ================= BOTTOM SHEET ================= */}
      <div className="relative z-30 bg-white rounded-t-[32px] shadow-[0_-12px_32px_rgba(0,0,0,0.06)] px-6 pt-3 pb-3 flex-1 flex flex-col justify-between -mt-6">
        {/* Drag handle pill */}
        <div className="w-12 h-1 bg-[#E0E0E0] rounded-full mx-auto" />

        {/* ETA & Address */}
        <div className="text-center mt-3">
          <h2 className="text-[20px] font-bold text-coffee-dark tracking-tight">
            10 minutes left
          </h2>
          <p className="text-[13px] text-coffee-grey mt-1">
            Delivery to <span className="font-bold text-coffee-dark">Fairlands, Salem</span>
          </p>
        </div>

        {/* 4 Segment Progress Bar (3 Green, 1 Grey) */}
        <div className="grid grid-cols-4 gap-2 mt-4 px-1">
          <div className="h-1 bg-[#2BB673] rounded-full" />
          <div className="h-1 bg-[#2BB673] rounded-full" />
          <div className="h-1 bg-[#2BB673] rounded-full" />
          <div className="h-1 bg-[#EDEDED] rounded-full" />
        </div>

        {/* Status Card: "Delivered your order" */}
        <div className="mt-4 border border-gray-200/80 rounded-2xl p-3.5 flex items-center gap-3.5 bg-white shadow-xs">
          {/* Scooter Icon Box */}
          <div className="w-14 h-14 rounded-2xl border border-gray-100 bg-white shadow-xs flex items-center justify-center shrink-0 text-brand">
            <DeliveryBikeIcon className="w-7 h-7 text-brand" />
          </div>

          {/* Text Info */}
          <div>
            <h3 className="text-[15px] font-bold text-coffee-dark leading-tight">
              Delivered your order
            </h3>
            <p className="text-[12px] text-coffee-grey leading-relaxed mt-1">
              We will deliver your goods to you in the shortes possible time.
            </p>
          </div>
        </div>

        {/* Courier Profile Card */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            {/* Courier Photo */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
              alt="Brooklyn Simmons"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="%23C67C4E"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>'
              }}
              className="w-14 h-14 rounded-2xl object-cover bg-gray-100 shrink-0"
            />

            <div>
              <h4 className="text-[16px] font-bold text-coffee-dark leading-tight">
                Brooklyn Simmons
              </h4>
              <p className="text-[12px] text-coffee-grey mt-0.5">
                Personal Courier
              </p>
            </div>
          </div>

          {/* Call Courier Action Button */}
          <button
            onClick={() => alert('Calling Brooklyn Simmons (+62 812-4455-6677)...')}
            className="w-14 h-14 rounded-2xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-coffee-dark transition active:scale-95 cursor-pointer shadow-xs"
            title="Call Brooklyn Simmons"
          >
            <svg
              className="w-6 h-6 text-coffee-dark"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </button>
        </div>

        {/* iOS Home Indicator Bar */}
        <div className="w-36 h-1 bg-black rounded-full mx-auto mt-6 mb-2" />
      </div>
    </div>
  )
}
