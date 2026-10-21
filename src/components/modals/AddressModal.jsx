import React, { useState } from 'react'

export function AddressModal({ isOpen, onClose, currentAddress, onSave }) {
  const [street, setStreet] = useState(currentAddress.street || 'Fairlands, Salem')
  const [detail, setDetail] = useState(
    currentAddress.detail || 'No. 42, 5th Cross, Fairlands, Salem, Tamil Nadu 636016'
  )

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ street, detail })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 animate-fadeIn">
      <div className="w-full max-w-sm bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl transform transition-all animate-slideUp">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-coffee-dark font-sora">Edit Delivery Address</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-coffee-grey mb-1">
              Street / Area Name
            </label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-coffee-border rounded-xl text-sm font-semibold text-coffee-dark focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-coffee-grey mb-1">
              Full Address Details
            </label>
            <textarea
              rows={3}
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-coffee-border rounded-xl text-sm text-coffee-dark focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              required
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border border-coffee-border text-coffee-dark rounded-xl font-semibold text-sm hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-brand text-white rounded-xl font-semibold text-sm hover:bg-brand-hover shadow-sm"
            >
              Save Address
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
