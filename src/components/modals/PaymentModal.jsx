import React from 'react'
import { WalletIcon } from '../common/Icons'

const PAYMENT_METHODS = [
  {
    id: 'wallet',
    name: 'Cash/Wallet',
    balance: '$ 5.53',
    icon: 'wallet',
    description: 'Antigravity In-App Coffee Balance',
  },
  {
    id: 'apple-pay',
    name: 'Apple Pay',
    balance: 'Default',
    icon: 'apple',
    description: 'Connected to Apple Wallet',
  },
  {
    id: 'card',
    name: 'Credit Card',
    balance: '•••• 4242',
    icon: 'card',
    description: 'Mastercard / Visa',
  },
  {
    id: 'cash',
    name: 'Cash on Delivery',
    balance: 'Pay on arrival',
    icon: 'cash',
    description: 'Exact change appreciated',
  },
]

export function PaymentModal({ isOpen, onClose, selectedMethod, onSelect }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
      <div className="w-full max-w-sm bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-coffee-dark font-sora">Payment Method</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
          >
            &times;
          </button>
        </div>

        <div className="space-y-3 mb-6">
          {PAYMENT_METHODS.map((method) => {
            const isSelected = selectedMethod.id === method.id
            return (
              <button
                key={method.id}
                type="button"
                onClick={() => {
                  onSelect(method)
                  onClose()
                }}
                className={`w-full flex items-center justify-between p-3.5 rounded-2xl border transition text-left ${
                  isSelected
                    ? 'border-brand bg-brand-peach'
                    : 'border-coffee-border bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected
                        ? 'bg-brand text-white'
                        : 'bg-gray-100 text-coffee-dark'
                    }`}
                  >
                    <WalletIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-coffee-dark">{method.name}</div>
                    <div className="text-xs text-coffee-grey">{method.description}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-bold text-brand">{method.balance}</div>
                  <div
                    className={`w-4 h-4 rounded-full border mt-1 ml-auto flex items-center justify-center ${
                      isSelected
                        ? 'border-brand bg-brand'
                        : 'border-gray-300'
                    }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
