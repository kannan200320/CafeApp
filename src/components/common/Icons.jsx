import React from 'react'

export function SignalIcon({ className = 'w-4 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 17 12" fill="currentColor">
      <rect x="0" y="8.5" width="3" height="3.5" rx="0.8" />
      <rect x="4.5" y="6" width="3" height="6" rx="0.8" />
      <rect x="9" y="3" width="3" height="9" rx="0.8" />
      <rect x="13.5" y="0" width="3" height="12" rx="0.8" />
    </svg>
  )
}

export function WifiIcon({ className = 'w-4 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <path d="M1 2.5C4.8 0.5 11.2 0.5 15 2.5" />
      <path d="M3.5 5.5C6 4 10 4 12.5 5.5" />
      <path d="M6 8.5C7.2 7.8 8.8 7.8 10 8.5" />
      <circle cx="8" cy="11" r="0.8" fill="currentColor" />
    </svg>
  )
}

export function BatteryIcon({ className = 'w-6 h-3' }) {
  return (
    <svg className={className} viewBox="0 0 25 12" fill="none">
      <rect x="1" y="1" width="20" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="3" width="13" height="6" rx="1.5" fill="currentColor" />
      <path d="M23 4C23.6 4.4 24 5.1 24 6C24 6.9 23.6 7.6 23 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function ChevronDown({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export function ChevronRight({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export function ChevronLeft({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

export function SearchIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

// Exact Filter icon from Figma (Two sliders: top slider has dot on right, bottom slider has dot on left)
export function FilterIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      {/* Top line with circle knob on right */}
      <line x1="4" y1="8" x2="14" y2="8" />
      <circle cx="17.5" cy="8" r="2.5" fill="currentColor" stroke="none" />
      {/* Bottom line with circle knob on left */}
      <circle cx="6.5" cy="16" r="2.5" fill="currentColor" stroke="none" />
      <line x1="10" y1="16" x2="20" y2="16" />
    </svg>
  )
}

export function StarIcon({ className = 'w-3.5 h-3.5', filled = true }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? '#FBBE21' : 'none'}
      stroke="#FBBE21"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

/* ================= EXACT FIGMA BOTTOM NAVIGATION ICONS ================= */

// 1. Home Icon (Filled silhouette with arch roof and door cut-out as in Figma)
export function HomeNavIcon({ className = 'w-6 h-6', active = true }) {
  if (active) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M3 10.18C3 9.61 3.25 9.07 3.67 8.69L10.87 2.3C11.52 1.73 12.48 1.73 13.13 2.3L20.33 8.69C20.75 9.07 21 9.61 21 10.18V20C21 20.55 20.55 21 20 21H15V15C15 14.45 14.55 14 14 14H10C9.45 14 9 14.45 9 15V21H4C3.45 21 3 20.55 3 20V10.18Z"
          fill="#C67C4E"
        />
      </svg>
    )
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#8D8D8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.18L12 2.5L21 10.18V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V10.18Z" />
    </svg>
  )
}

// 2. Heart / Favorite Nav Icon (Clean rounded outline in #8D8D8D)
export function HeartNavIcon({ className = 'w-6 h-6', active = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={active ? '#C67C4E' : 'none'}
      stroke={active ? '#C67C4E' : '#8D8D8D'}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z" />
    </svg>
  )
}

// 3. Shopping Bag Nav Icon (Curved top handle loop & modern handbag outline)
export function BagNavIcon({ className = 'w-6 h-6', active = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={active ? '#C67C4E' : 'none'}
      stroke={active ? '#C67C4E' : '#8D8D8D'}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 7.5V6.5C8.5 4.57 10.07 3 12 3C13.93 3 15.5 4.57 15.5 6.5V7.5" />
      <path d="M4 8.5C4 7.67 4.67 7 5.5 7H18.5C19.33 7 20 7.67 20 8.5L20.8 17.5C20.9 18.6 20.02 19.5 18.92 19.5H5.08C3.98 19.5 3.1 18.6 3.2 17.5L4 8.5Z" />
      <path d="M10 11.5C10 12.6 10.9 13.5 12 13.5C13.1 13.5 14 12.6 14 11.5" />
    </svg>
  )
}

// 4. Notification / Bell Nav Icon (Clean notification bell outline)
export function BellNavIcon({ className = 'w-6 h-6', active = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={active ? '#C67C4E' : 'none'}
      stroke={active ? '#C67C4E' : '#8D8D8D'}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C10.9 2 10 2.9 10 4C7.8 4.5 6 6.5 6 9V14.5L4.5 16.5C4.1 17 4.4 17.8 5.1 17.8H18.9C19.6 17.8 19.9 17 19.5 16.5L18 14.5V9C18 6.5 16.2 4.5 14 4C14 2.9 13.1 2 12 2Z" />
      <path d="M10 19C10.5 19.6 11.2 20 12 20C12.8 20 13.5 19.6 14 19" />
    </svg>
  )
}

/* ================= OTHER SCREEN ICONS ================= */

export function HeartIcon({ className = 'w-5 h-5', filled = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? '#ED5151' : 'none'}
      stroke={filled ? '#ED5151' : 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

export function DeliveryBikeIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="18.5" cy="17.5" r="3.5" />
      <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M12 17.5V14l-3-3 4-3 3 3h3" />
      <path d="M5.5 14h3" />
      <rect x="2" y="8" width="5" height="4" rx="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CoffeeBeanIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="12" rx="8" ry="6" transform="rotate(-30 12 12)" />
      <path d="M7.5 15.5C9 13 15 11 16.5 8.5" />
    </svg>
  )
}

export function MilkIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3h8l1 3H7l1-3z" />
      <rect x="6" y="6" width="12" height="15" rx="2" />
      <path d="M10 11h4" />
      <path d="M12 9v4" />
    </svg>
  )
}

export function EditIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  )
}

export function NoteIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

export function DiscountBadgeIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15 5 19.5 5 20.5 9.5 23 12 20.5 14.5 19.5 19 15 19 12 22 9 19 4.5 19 3.5 14.5 1 12 3.5 9.5 4.5 5 9 5 12 2" />
      <line x1="9" y1="15" x2="15" y2="9" />
      <circle cx="9.5" cy="9.5" r="1" fill="currentColor" />
      <circle cx="14.5" cy="14.5" r="1" fill="currentColor" />
    </svg>
  )
}

export function WalletIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="15" rx="3" />
      <path d="M2 9h20" />
      <circle cx="17" cy="14.5" r="1.5" fill="currentColor" />
    </svg>
  )
}

export function PlusIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

export function MinusIcon({ className = 'w-3 h-3' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}
