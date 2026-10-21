import React from 'react'
import { StatusBar } from '../common/StatusBar'
import { BottomNavBar } from '../common/BottomNavBar'
import { DiscountBadgeIcon, DeliveryBikeIcon, StarIcon, BellNavIcon } from '../common/Icons'

const NOTIFICATIONS = [
  {
    id: 1,
    title: 'Buy one get one FREE Promo',
    description: 'Special promo available today on all Espresso & Machiato beverages! Applied automatically at checkout.',
    time: 'Just now',
    type: 'promo',
  },
  {
    id: 2,
    title: 'Order Delivered Successfully',
    description: 'Your Caffe Mocha has been safely delivered to Fairlands, Salem by courier Brooklyn Simmons.',
    time: '1h ago',
    type: 'delivery',
  },
  {
    id: 3,
    title: 'Coffee Beans Restocked',
    description: 'Fresh 100% Arabica single-origin beans are now available for brewing in Salem, Tamil Nadu.',
    time: 'Yesterday',
    type: 'reward',
  },
]

export function NotificationsScreen({
  activeTab = 'notifications',
  onTabChange,
}) {
  return (
    <div className="relative w-full min-h-screen bg-[#F9F9F9] flex flex-col justify-between font-sora select-none pb-28">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-100 px-6 pt-1 pb-4">
        {/* iOS Status Bar */}
        <div className="-mx-6">
          <StatusBar theme="dark" />
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div>
            <h1 className="text-[22px] font-bold text-coffee-dark tracking-tight">
              Notifications
            </h1>
            <p className="text-[12px] text-coffee-grey mt-0.5">
              3 new updates today
            </p>
          </div>

          <div className="w-10 h-10 rounded-2xl bg-brand-light flex items-center justify-center text-brand">
            <BellNavIcon className="w-5 h-5 text-brand" active={true} />
          </div>
        </div>
      </div>

      {/* Main Notifications List */}
      <div className="px-6 py-5 flex-1 space-y-3">
        {NOTIFICATIONS.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex items-start gap-3.5 hover:border-brand/40 transition cursor-pointer"
          >
            {/* Icon Box */}
            <div className="w-11 h-11 rounded-2xl bg-brand-light text-brand flex items-center justify-center shrink-0 mt-0.5">
              {item.type === 'promo' && <DiscountBadgeIcon className="w-5 h-5 text-brand" />}
              {item.type === 'delivery' && <DeliveryBikeIcon className="w-5 h-5 text-brand" />}
              {item.type === 'reward' && <StarIcon className="w-5 h-5" />}
            </div>

            {/* Notification Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-[14px] font-bold text-coffee-dark leading-tight">
                  {item.title}
                </h3>
                <span className="text-[10px] text-coffee-grey font-medium">
                  {item.time}
                </span>
              </div>
              <p className="text-[12px] text-coffee-grey leading-relaxed mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  )
}
