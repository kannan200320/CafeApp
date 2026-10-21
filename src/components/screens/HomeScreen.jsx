import React, { useState } from 'react'
import { StatusBar } from '../common/StatusBar'
import { BottomNavBar } from '../common/BottomNavBar'
import {
  SearchIcon,
  FilterIcon,
  ChevronDown,
  StarIcon,
  PlusIcon,
} from '../common/Icons'
import { CATEGORIES, COFFEE_ITEMS } from '../../data/coffeeData'

export function HomeScreen({
  onSelectCoffee,
  onAddToCart,
  cartCount,
  onTabChange,
}) {
  const [selectedCategory, setSelectedCategory] = useState('All Coffee')
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('Salem, Tamil Nadu')
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [addedItemFeedback, setAddedItemFeedback] = useState(null)

  const locations = [
    'Salem, Tamil Nadu',
    'Coimbatore, Tamil Nadu',
    'Chennai, Tamil Nadu',
    'Bengaluru, Karnataka',
  ]

  // Filter coffees by category & search query
  const filteredCoffees = COFFEE_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All Coffee' || item.category === selectedCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleQuickAdd = (e, coffee) => {
    e.stopPropagation()
    onAddToCart(coffee)
    setAddedItemFeedback(coffee.id)
    setTimeout(() => setAddedItemFeedback(null), 1000)
  }

  return (
    <div className="relative w-full min-h-screen bg-[#F9F9F9] flex flex-col justify-between font-sora select-none pb-28">
      {/* ================= TOP DARK HEADER ================= */}
      <div className="bg-gradient-to-b from-[#131313] via-[#202020] to-[#313131] px-6 pt-1 pb-20 relative">
        {/* iOS Status Bar */}
        <div className="-mx-6">
          <StatusBar theme="light" />
        </div>

        {/* Location Section */}
        <div className="mt-3 relative">
          <span className="text-[12px] text-[#A2A2A2] block font-normal">Location</span>
          <button
            onClick={() => setIsLocationOpen(!isLocationOpen)}
            className="flex items-center gap-1.5 text-white text-[14px] font-semibold mt-0.5 hover:text-gray-200 transition cursor-pointer"
          >
            <span>{location}</span>
            <ChevronDown className="w-3.5 h-3.5 text-white stroke-[2.5]" />
          </button>

          {/* Location dropdown */}
          {isLocationOpen && (
            <div className="absolute top-12 left-0 z-40 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 w-52 overflow-hidden animate-fadeIn">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    setLocation(loc)
                    setIsLocationOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center justify-between cursor-pointer ${
                    loc === location
                      ? 'bg-brand-peach text-brand'
                      : 'text-coffee-dark hover:bg-gray-50'
                  }`}
                >
                  {loc}
                  {loc === location && <span className="text-brand">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Bar & Filter Button */}
        <div className="mt-5 flex items-center gap-3">
          {/* Search Input Box */}
          <div className="flex-1 bg-coffee-input hover:bg-[#333333] transition-colors rounded-2xl px-4 py-3.5 flex items-center gap-2.5 border border-transparent focus-within:border-brand/50">
            <SearchIcon className="w-5 h-5 text-white stroke-[2]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coffee"
              className="bg-transparent w-full text-[14px] text-white placeholder-[#989898] focus:outline-none font-normal"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-gray-400 hover:text-white text-xs px-1 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Action Button */}
          <button
            onClick={() => setSelectedCategory('All Coffee')}
            title="Filter Coffee"
            className="w-[52px] h-[52px] rounded-2xl bg-brand hover:bg-brand-hover active:scale-95 text-white flex items-center justify-center transition shadow-sm shrink-0 cursor-pointer"
          >
            <FilterIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* ================= BODY CONTENT AREA ================= */}
      <div className="px-6 -mt-16 flex-1">
        {/* Exact Figma Promo Banner Card */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:opacity-95 transition">
          <img
            src="/images/promo-banner.png"
            alt="Buy one get one FREE Promo"
            className="w-full h-auto object-cover rounded-2xl block"
          />
        </div>

        {/* Categories Horizontal Tabs */}
        <div className="mt-6 flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-[14px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-brand text-white shadow-xs'
                    : 'bg-coffee-lightgrey hover:bg-gray-200 text-coffee-dark'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Coffee Grid (2 Columns) */}
        <div className="mt-5 grid grid-cols-2 gap-4">
          {filteredCoffees.map((coffee) => (
            <div
              key={coffee.id}
              onClick={() => onSelectCoffee(coffee)}
              className="group bg-white rounded-2xl p-1.5 pb-3 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer border border-gray-100 flex flex-col justify-between"
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

                {/* Rating Badge (top right, dark translucent) */}
                <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1">
                  <StarIcon className="w-3 h-3" />
                  <span className="text-[10px] font-bold text-white">{coffee.rating}</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mt-3 px-1.5">
                <h3 className="text-[16px] font-bold text-coffee-dark truncate font-sora">
                  {coffee.name}
                </h3>
                <p className="text-[12px] text-coffee-grey truncate mt-0.5 font-normal">
                  {coffee.subtitle}
                </p>
              </div>

              {/* Price & Plus Button */}
              <div className="mt-3 px-1.5 flex items-center justify-between">
                <span className="text-[18px] font-bold text-coffee-dark font-sora">
                  $ {coffee.price.toFixed(2)}
                </span>

                <button
                  onClick={(e) => handleQuickAdd(e, coffee)}
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    addedItemFeedback === coffee.id
                      ? 'bg-emerald-600 text-white scale-110'
                      : 'bg-brand hover:bg-brand-hover text-white active:scale-90 shadow-xs'
                  }`}
                  title="Add to order"
                >
                  {addedItemFeedback === coffee.id ? '✓' : <PlusIcon className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredCoffees.length === 0 && (
          <div className="text-center py-10">
            <p className="text-sm font-semibold text-coffee-grey">No coffees found for "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All Coffee')
              }}
              className="mt-2 text-xs font-bold text-brand hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* ================= FIXED BOTTOM NAVIGATION BAR ================= */}
      <BottomNavBar activeTab="home" onTabChange={onTabChange} />
    </div>
  )
}
