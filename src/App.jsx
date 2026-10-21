import React, { useState, useEffect } from 'react'
import { COFFEE_ITEMS } from './data/coffeeData'
import { OnboardingScreen } from './components/screens/OnboardingScreen'
import { HomeScreen } from './components/screens/HomeScreen'
import { DetailScreen } from './components/screens/DetailScreen'
import { OrderScreen } from './components/screens/OrderScreen'
import { DeliveryTrackingScreen } from './components/screens/DeliveryTrackingScreen'
import { FavoritesScreen } from './components/screens/FavoritesScreen'
import { NotificationsScreen } from './components/screens/NotificationsScreen'

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('onboarding') // Starts with onboarding
  const [selectedCoffee, setSelectedCoffee] = useState(COFFEE_ITEMS[0])
  const [orderConfig, setOrderConfig] = useState({
    size: 'M',
    unitPrice: 4.53,
    quantity: 1,
  })

  const [cart, setCart] = useState([
    {
      coffee: COFFEE_ITEMS[0],
      size: 'M',
      unitPrice: 4.53,
      quantity: 1,
    },
  ])

  const [favorites, setFavorites] = useState(['caffe-mocha'])
  const [toastMessage, setToastMessage] = useState(null)

  // Scroll to top cleanly whenever screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [currentScreen])

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 2000)
  }

  // Handle adding item to cart
  const handleAddToCart = (coffee, size = 'M', unitPrice = null) => {
    const price = unitPrice ? parseFloat(unitPrice) : coffee.price
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.coffee.id === coffee.id && item.size === size
      )
      if (existing) {
        return prev.map((item) =>
          item.coffee.id === coffee.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { coffee, size, unitPrice: price, quantity: 1 }]
    })
    showToast(`Added ${coffee.name} to order`)
  }

  // Handle direct "Buy Now" from Detail screen
  const handleBuyNow = (coffee, size, unitPrice) => {
    setSelectedCoffee(coffee)
    setOrderConfig({
      size,
      unitPrice: parseFloat(unitPrice),
      quantity: 1,
    })
    setCurrentScreen('order')
  }

  // Toggle favorite
  const handleToggleFavorite = (coffeeId) => {
    setFavorites((prev) => {
      if (prev.includes(coffeeId)) {
        showToast('Removed from favorites')
        return prev.filter((id) => id !== coffeeId)
      } else {
        showToast('Saved to favorites')
        return [...prev, coffeeId]
      }
    })
  }

  const handleSelectCoffee = (coffee) => {
    setSelectedCoffee(coffee)
    setCurrentScreen('detail')
  }

  const handleTabChange = (tab) => {
    if (tab === 'order') {
      setSelectedCoffee(cart[0]?.coffee || COFFEE_ITEMS[0])
      setOrderConfig({
        size: cart[0]?.size || 'M',
        unitPrice: cart[0]?.unitPrice || 4.53,
        quantity: cart[0]?.quantity || 1,
      })
    }
    setCurrentScreen(tab)
  }

  const cartTotalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0)

  return (
    <div className="w-full min-h-screen bg-[#F0F0F2] flex justify-center font-sora selection:bg-brand selection:text-white">
      {/* Main Mobile App Container */}
      <main className="w-full max-w-[430px] min-h-screen bg-white relative flex flex-col shadow-xl overflow-x-hidden">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed top-12 left-1/2 -translate-x-1/2 z-50 bg-black/85 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg animate-fadeIn border border-white/10 pointer-events-none">
            {toastMessage}
          </div>
        )}

        {/* Screen View with Smooth Entry Animation */}
        <div key={currentScreen} className="page-enter flex-1 flex flex-col">
          {/* 1. Onboarding Screen */}
          {currentScreen === 'onboarding' && (
            <OnboardingScreen
              onGetStarted={() => setCurrentScreen('home')}
            />
          )}

          {/* 2. Home Screen (Tab: home) */}
          {currentScreen === 'home' && (
            <HomeScreen
              onSelectCoffee={handleSelectCoffee}
              onAddToCart={(coffee) => handleAddToCart(coffee, 'M')}
              cartCount={cartTotalItems}
              onTabChange={handleTabChange}
            />
          )}

          {/* 3. Favorites Screen (Tab: favorites) */}
          {currentScreen === 'favorites' && (
            <FavoritesScreen
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onSelectCoffee={handleSelectCoffee}
              onAddToCart={(coffee) => handleAddToCart(coffee, 'M')}
              activeTab="favorites"
              onTabChange={handleTabChange}
            />
          )}

          {/* 4. Notifications Screen (Tab: notifications) */}
          {currentScreen === 'notifications' && (
            <NotificationsScreen
              activeTab="notifications"
              onTabChange={handleTabChange}
            />
          )}

          {/* 5. Detail Screen */}
          {currentScreen === 'detail' && (
            <DetailScreen
              coffee={selectedCoffee}
              onBack={() => setCurrentScreen('home')}
              onBuyNow={handleBuyNow}
              isFavorite={favorites.includes(selectedCoffee.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          )}

          {/* 6. Order Screen (Tab: order) */}
          {currentScreen === 'order' && (
            <OrderScreen
              coffee={selectedCoffee}
              orderConfig={orderConfig}
              onBack={() => setCurrentScreen('home')}
              onHome={() => setCurrentScreen('home')}
              onProceedToTracking={() => setCurrentScreen('tracking')}
            />
          )}

          {/* 7. Delivery Tracking Screen */}
          {currentScreen === 'tracking' && (
            <DeliveryTrackingScreen
              onBack={() => setCurrentScreen('home')}
            />
          )}
        </div>
      </main>
    </div>
  )
}
