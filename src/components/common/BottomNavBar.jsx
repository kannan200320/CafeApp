import React from 'react'
import {
  HomeNavIcon,
  HeartNavIcon,
  BagNavIcon,
  BellNavIcon,
} from './Icons'

export function BottomNavBar({ activeTab, onTabChange }) {
  return (
    <div className="fixed bottom-0 inset-x-0 w-full max-w-[430px] mx-auto bg-white rounded-t-[24px] shadow-[0_-8px_24px_rgba(0,0,0,0.06)] px-7 pt-4 pb-2 z-30 border-t border-gray-100 font-sora select-none">
      <div className="flex items-center justify-between">
        {/* 1. Home Nav Item */}
        <button
          onClick={() => onTabChange('home')}
          className="flex flex-col items-center justify-center w-12 cursor-pointer group"
          title="Home"
        >
          <HomeNavIcon className="w-6 h-6" active={activeTab === 'home'} />
          {activeTab === 'home' ? (
            <span className="w-2.5 h-1 bg-brand rounded-full mt-1.5" />
          ) : (
            <span className="w-2.5 h-1 bg-transparent rounded-full mt-1.5" />
          )}
        </button>

        {/* 2. Heart / Wishlist Nav Item */}
        <button
          onClick={() => onTabChange('favorites')}
          className="flex flex-col items-center justify-center w-12 cursor-pointer group"
          title="Favorites"
        >
          <HeartNavIcon className="w-6 h-6" active={activeTab === 'favorites'} />
          {activeTab === 'favorites' ? (
            <span className="w-2.5 h-1 bg-brand rounded-full mt-1.5" />
          ) : (
            <span className="w-2.5 h-1 bg-transparent rounded-full mt-1.5" />
          )}
        </button>

        {/* 3. Shopping Bag / Order Nav Item */}
        <button
          onClick={() => onTabChange('order')}
          className="flex flex-col items-center justify-center w-12 cursor-pointer group"
          title="Order"
        >
          <BagNavIcon className="w-6 h-6" active={activeTab === 'order'} />
          {activeTab === 'order' ? (
            <span className="w-2.5 h-1 bg-brand rounded-full mt-1.5" />
          ) : (
            <span className="w-2.5 h-1 bg-transparent rounded-full mt-1.5" />
          )}
        </button>

        {/* 4. Notification / Bell Nav Item */}
        <button
          onClick={() => onTabChange('notifications')}
          className="flex flex-col items-center justify-center w-12 cursor-pointer group"
          title="Notifications"
        >
          <BellNavIcon className="w-6 h-6" active={activeTab === 'notifications'} />
          {activeTab === 'notifications' ? (
            <span className="w-2.5 h-1 bg-brand rounded-full mt-1.5" />
          ) : (
            <span className="w-2.5 h-1 bg-transparent rounded-full mt-1.5" />
          )}
        </button>
      </div>

      {/* iOS Home Indicator Bar */}
      <div className="w-36 h-1 bg-black rounded-full mx-auto mt-4 mb-2" />
    </div>
  )
}
