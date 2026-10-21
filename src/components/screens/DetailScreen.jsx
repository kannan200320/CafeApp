import React, { useState } from 'react'
import { StatusBar } from '../common/StatusBar'
import {
  ChevronLeft,
  HeartIcon,
  StarIcon,
  DeliveryBikeIcon,
  CoffeeBeanIcon,
  MilkIcon,
} from '../common/Icons'
import { SIZE_OPTIONS } from '../../data/coffeeData'

export function DetailScreen({
  coffee,
  onBack,
  onBuyNow,
  isFavorite,
  onToggleFavorite,
}) {
  const [selectedSize, setSelectedSize] = useState('M')
  const [isExpanded, setIsExpanded] = useState(false)

  // Calculate price based on selected size
  const activeMultiplier =
    SIZE_OPTIONS.find((s) => s.id === selectedSize)?.priceMultiplier || 1
  const calculatedPrice = (coffee.price * activeMultiplier).toFixed(2)

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col justify-between font-sora select-none pb-28">
      {/* Scrollable Main Content */}
      <div className="px-6 pb-6 flex-1">
        {/* Top iOS Status Bar */}
        <div className="-mx-6">
          <StatusBar theme="dark" />
        </div>

        {/* Navigation Bar */}
        <div className="flex items-center justify-between py-2">
          <button
            onClick={onBack}
            className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-coffee-dark hover:bg-gray-100 transition active:scale-95 cursor-pointer"
            title="Back to home"
          >
            <ChevronLeft className="w-6 h-6 text-coffee-dark" />
          </button>

          <h2 className="text-[18px] font-bold text-coffee-dark">Detail</h2>

          <button
            onClick={() => onToggleFavorite(coffee.id)}
            className="w-10 h-10 -mr-2 rounded-full flex items-center justify-center hover:bg-gray-100 transition active:scale-95 cursor-pointer"
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <HeartIcon
              className="w-6 h-6"
              filled={isFavorite}
            />
          </button>
        </div>

        {/* Large Coffee Hero Image (Exact Caffe Mocha) */}
        <div className="mt-2 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xs bg-gray-100">
          <img
            src={coffee?.image || '/images/caffe-mocha.png'}
            alt={coffee.name}
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = '/images/caffe-mocha.png'
            }}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Title, Subtitle, Feature Badges & Rating */}
        <div className="mt-5">
          <div className="flex items-start justify-between">
            {/* Title & Type */}
            <div>
              <h1 className="text-[20px] font-bold text-coffee-dark tracking-tight">
                {coffee.name}
              </h1>
              <p className="text-[12px] text-coffee-grey mt-0.5 font-normal">
                {coffee.type || 'Ice/Hot'}
              </p>
            </div>

            {/* 3 Feature Badges */}
            <div className="flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand"
                title="Express Delivery"
              >
                <DeliveryBikeIcon className="w-5 h-5 text-brand" />
              </div>
              <div
                className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand"
                title="100% Arabica Quality"
              >
                <CoffeeBeanIcon className="w-5 h-5 text-brand" />
              </div>
              <div
                className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand"
                title="Fresh Steamed Milk"
              >
                <MilkIcon className="w-5 h-5 text-brand" />
              </div>
            </div>
          </div>

          {/* Star Rating & Review Count */}
          <div className="flex items-center gap-1.5 mt-3">
            <StarIcon className="w-4 h-4" />
            <span className="text-[16px] font-bold text-coffee-dark">
              {coffee.rating}
            </span>
            <span className="text-[12px] text-coffee-grey font-normal ml-0.5">
              ({coffee.reviewsCount || 230})
            </span>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="my-5 border-b border-coffee-border" />

        {/* Description Section */}
        <div>
          <h3 className="text-[16px] font-bold text-coffee-dark">Description</h3>
          <p className="text-[13px] leading-[22px] text-coffee-grey mt-2">
            {isExpanded ? coffee.fullDescription : coffee.description}{' '}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-brand font-semibold hover:underline inline cursor-pointer ml-1"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </p>
        </div>

        {/* Size Selection Section */}
        <div className="mt-5">
          <h3 className="text-[16px] font-bold text-coffee-dark">Size</h3>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {SIZE_OPTIONS.map((size) => {
              const isSelected = selectedSize === size.id
              return (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`py-3 rounded-xl text-[14px] font-semibold transition-all duration-200 cursor-pointer text-center ${
                    isSelected
                      ? 'bg-brand-peach border border-brand text-brand shadow-xs'
                      : 'bg-white border border-coffee-border text-coffee-dark hover:border-gray-300'
                  }`}
                >
                  {size.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Docked Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 w-full max-w-[430px] mx-auto bg-white border-t border-gray-100 rounded-t-[24px] shadow-[0_-8px_24px_rgba(0,0,0,0.06)] px-6 pt-4 pb-2 z-30">
        <div className="flex items-center justify-between gap-5">
          {/* Price Column */}
          <div className="shrink-0">
            <span className="text-[12px] text-coffee-grey block font-normal">Price</span>
            <span className="text-[18px] font-bold text-brand block mt-0.5">
              $ {calculatedPrice}
            </span>
          </div>

          {/* Buy Now Button */}
          <button
            onClick={() => onBuyNow(coffee, selectedSize, calculatedPrice)}
            className="flex-1 py-4 bg-brand hover:bg-brand-hover active:scale-[0.98] text-white font-semibold text-[16px] rounded-2xl shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center tracking-wide"
          >
            Buy Now
          </button>
        </div>

        {/* Bottom iOS Home Indicator */}
        <div className="w-36 h-1 bg-black rounded-full mx-auto mt-3 mb-1" />
      </div>
    </div>
  )
}
