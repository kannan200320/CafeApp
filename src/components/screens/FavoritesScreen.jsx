import React from 'react'
import { StatusBar } from '../common/StatusBar'
import { BottomNavBar } from '../common/BottomNavBar'
import { StarIcon, PlusIcon, HeartIcon } from '../common/Icons'
import { COFFEE_ITEMS } from '../../data/coffeeData'

export function FavoritesScreen({
  favorites,
  onToggleFavorite,
  onSelectCoffee,
  onAddToCart,
  activeTab = 'favorites',
  onTabChange,
}) {
  const favoriteItems = COFFEE_ITEMS.filter((item) => favorites.includes(item.id))

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
              Favorites
            </h1>
            <p className="text-[12px] text-coffee-grey mt-0.5">
              {favoriteItems.length} {favoriteItems.length === 1 ? 'coffee' : 'coffees'} saved
            </p>
          </div>

          <div className="w-10 h-10 rounded-2xl bg-brand-light flex items-center justify-center text-brand">
            <HeartIcon className="w-5 h-5 text-brand" filled={true} />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 py-5 flex-1">
        {favoriteItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {favoriteItems.map((coffee) => (
              <div
                key={coffee.id}
                onClick={() => onSelectCoffee(coffee)}
                className="group bg-white rounded-2xl p-1.5 pb-3 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer border border-gray-100 flex flex-col justify-between relative"
              >
                {/* Product Image and Rating Badge */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src = '/images/caffe-mocha.png'
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Rating Badge */}
                  <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1">
                    <StarIcon className="w-3 h-3" />
                    <span className="text-[10px] font-bold text-white">{coffee.rating}</span>
                  </div>

                  {/* Unfavorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onToggleFavorite(coffee.id)
                    }}
                    className="absolute top-2 left-2 w-7 h-7 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-red-500 hover:scale-110 active:scale-90 transition cursor-pointer"
                    title="Remove from favorites"
                  >
                    <HeartIcon className="w-4 h-4 text-red-500" filled={true} />
                  </button>
                </div>

                {/* Title & Subtitle */}
                <div className="mt-3 px-1.5">
                  <h3 className="text-[15px] font-bold text-coffee-dark truncate font-sora">
                    {coffee.name}
                  </h3>
                  <p className="text-[12px] text-coffee-grey truncate mt-0.5 font-normal">
                    {coffee.subtitle}
                  </p>
                </div>

                {/* Price & Plus Button */}
                <div className="mt-3 px-1.5 flex items-center justify-between">
                  <span className="text-[17px] font-bold text-coffee-dark font-sora">
                    $ {coffee.price.toFixed(2)}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onAddToCart(coffee)
                    }}
                    className="w-8 h-8 rounded-xl bg-brand hover:bg-brand-hover active:scale-90 text-white flex items-center justify-center transition shadow-xs cursor-pointer"
                    title="Add to order"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-brand mb-3">
              <HeartIcon className="w-8 h-8 text-brand" filled={false} />
            </div>
            <h3 className="text-[16px] font-bold text-coffee-dark">No favorites yet</h3>
            <p className="text-[13px] text-coffee-grey max-w-[240px] mt-1">
              Tap the heart icon on any coffee to save your favorite drinks here.
            </p>
            <button
              onClick={() => onTabChange('home')}
              className="mt-5 px-6 py-2.5 bg-brand hover:bg-brand-hover text-white text-xs font-bold rounded-xl transition shadow-xs cursor-pointer"
            >
              Browse Coffees
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  )
}
