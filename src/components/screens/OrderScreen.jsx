import React, { useState } from 'react'
import { StatusBar } from '../common/StatusBar'
import {
  ChevronLeft,
  EditIcon,
  NoteIcon,
  MinusIcon,
  PlusIcon,
  DiscountBadgeIcon,
  ChevronRight,
  WalletIcon,
  ChevronDown,
} from '../common/Icons'
import { AddressModal } from '../modals/AddressModal'
import { NoteModal } from '../modals/NoteModal'
import { PaymentModal } from '../modals/PaymentModal'
import { TrackingModal } from './TrackingModal'

export function OrderScreen({
  coffee,
  orderConfig = { size: 'M', unitPrice: 4.53, quantity: 1 },
  onBack,
  onHome,
  onProceedToTracking,
}) {
  const [orderType, setOrderType] = useState('deliver') // 'deliver' | 'pickup'
  const [quantity, setQuantity] = useState(orderConfig.quantity || 1)
  const [address, setAddress] = useState({
    street: 'Fairlands, Salem',
    detail: 'No. 42, 5th Cross, Fairlands, Salem, Tamil Nadu 636016',
  })
  const [note, setNote] = useState('')
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false)
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [isTrackingOpen, setIsTrackingOpen] = useState(false)
  const [discountApplied, setDiscountApplied] = useState(true)

  const [paymentMethod, setPaymentMethod] = useState({
    id: 'wallet',
    name: 'Cash/Wallet',
    balance: '$ 5.53',
  })

  const unitPrice = parseFloat(orderConfig.unitPrice || coffee?.price || 4.53)
  const subtotal = unitPrice * quantity
  const originalDeliveryFee = 2.0
  const deliveryFee = orderType === 'pickup' ? 0.0 : (discountApplied ? 1.0 : 2.0)
  const total = subtotal + deliveryFee

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col justify-between font-sora select-none pb-36">
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
            title="Back"
          >
            <ChevronLeft className="w-6 h-6 text-coffee-dark" />
          </button>

          <h2 className="text-[18px] font-bold text-coffee-dark">Order</h2>

          <div className="w-10" />
        </div>

        {/* Deliver / Pick Up Toggle Switcher */}
        <div className="mt-2 bg-coffee-lightgrey p-1 rounded-xl flex items-center">
          <button
            onClick={() => setOrderType('deliver')}
            className={`flex-1 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-200 cursor-pointer text-center ${
              orderType === 'deliver'
                ? 'bg-brand text-white shadow-sm'
                : 'text-coffee-dark hover:text-black'
            }`}
          >
            Deliver
          </button>
          <button
            onClick={() => setOrderType('pickup')}
            className={`flex-1 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-200 cursor-pointer text-center ${
              orderType === 'pickup'
                ? 'bg-brand text-white shadow-sm'
                : 'text-coffee-dark hover:text-black'
            }`}
          >
            Pick Up
          </button>
        </div>

        {/* Delivery / Pickup Address Section */}
        <div className="mt-6">
          <h3 className="text-[16px] font-bold text-coffee-dark">
            {orderType === 'deliver' ? 'Delivery Address' : 'Pick Up Store'}
          </h3>

          <div className="mt-2">
            <h4 className="text-[14px] font-bold text-coffee-dark">
              {orderType === 'deliver' ? address.street : 'Salem Coffee Roastery & Cafe'}
            </h4>
            <p className="text-[12px] text-coffee-grey mt-0.5 leading-relaxed">
              {orderType === 'deliver'
                ? address.detail
                : 'No. 12, Saradha College Road, Fairlands, Salem, Tamil Nadu (Open 07:00 - 22:00)'}
            </p>
          </div>

          {/* Action buttons row */}
          {orderType === 'deliver' && (
            <div className="flex items-center gap-2.5 mt-3">
              <button
                onClick={() => setIsAddressModalOpen(true)}
                className="px-3 py-1.5 bg-white border border-[#D8D8D8] hover:border-gray-400 rounded-full text-[12px] font-medium text-coffee-dark flex items-center gap-1.5 transition active:scale-95 cursor-pointer"
              >
                <EditIcon className="w-3.5 h-3.5 text-coffee-dark" />
                <span>Edit Address</span>
              </button>

              <button
                onClick={() => setIsNoteModalOpen(true)}
                className="px-3 py-1.5 bg-white border border-[#D8D8D8] hover:border-gray-400 rounded-full text-[12px] font-medium text-coffee-dark flex items-center gap-1.5 transition active:scale-95 cursor-pointer"
              >
                <NoteIcon className="w-3.5 h-3.5 text-coffee-dark" />
                <span>{note ? 'Edit Note' : 'Add Note'}</span>
              </button>
            </div>
          )}

          {/* Note preview if present */}
          {note && (
            <div className="mt-2.5 px-3 py-2 bg-brand-peach/60 rounded-xl text-xs text-brand border border-brand/20 flex items-center justify-between">
              <span className="truncate">Note: {note}</span>
              <button
                onClick={() => setNote('')}
                className="text-gray-400 hover:text-coffee-dark font-bold ml-2 cursor-pointer"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="my-5 border-b border-coffee-border" />

        {/* Order Item Card with Stepper (Exact Caffe Mocha Thumbnail) */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <img
              src={coffee?.image || '/images/caffe-mocha.png'}
              alt={coffee?.name || 'Coffee'}
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = '/images/caffe-mocha.png'
              }}
              className="w-14 h-14 rounded-xl object-cover bg-gray-100 shrink-0"
            />
            <div>
              <h4 className="text-[14px] font-bold text-coffee-dark">
                {coffee?.name || 'Caffe Mocha'}
              </h4>
              <p className="text-[12px] text-coffee-grey mt-0.5">
                {coffee?.subtitle || 'Deep Foam'} ({orderConfig.size || 'M'})
              </p>
            </div>
          </div>

          {/* Stepper Controls: [-] 1 [+] */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              disabled={quantity <= 1}
              className={`w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center transition active:scale-90 ${
                quantity <= 1 ? 'opacity-40 cursor-not-allowed' : 'hover:border-coffee-dark cursor-pointer'
              }`}
            >
              <MinusIcon className="w-3 h-3 text-coffee-dark" />
            </button>

            <span className="text-[14px] font-bold text-coffee-dark w-4 text-center">
              {quantity}
            </span>

            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-7 h-7 rounded-full border border-gray-300 hover:border-coffee-dark flex items-center justify-center transition active:scale-90 cursor-pointer"
            >
              <PlusIcon className="w-3.5 h-3.5 text-coffee-dark" />
            </button>
          </div>
        </div>

        {/* 1 Discount is Applies Banner Card */}
        <div
          onClick={() => setDiscountApplied(!discountApplied)}
          className="mt-6 border border-coffee-border rounded-2xl p-4 flex items-center justify-between bg-white shadow-xs hover:border-brand/50 transition cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-brand-light flex items-center justify-center text-brand">
              <DiscountBadgeIcon className="w-5 h-5 text-brand" />
            </div>
            <span className="text-[14px] font-bold text-coffee-dark">
              {discountApplied ? '1 Discount is Applies' : 'Apply Discount Code'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-coffee-dark">
            {discountApplied && (
              <span className="text-xs font-semibold text-brand">-$ 1.00</span>
            )}
            <ChevronRight className="w-4 h-4 text-coffee-dark stroke-[2.5]" />
          </div>
        </div>

        {/* Payment Summary Section */}
        <div className="mt-6">
          <h3 className="text-[16px] font-bold text-coffee-dark mb-3">
            Payment Summary
          </h3>

          <div className="space-y-2.5">
            {/* Price Row */}
            <div className="flex items-center justify-between text-[14px]">
              <span className="text-coffee-dark font-normal">Price</span>
              <span className="font-bold text-coffee-dark">$ {subtotal.toFixed(2)}</span>
            </div>

            {/* Delivery Fee Row */}
            <div className="flex items-center justify-between text-[14px]">
              <span className="text-coffee-dark font-normal">Delivery Fee</span>
              <div className="flex items-center gap-2">
                {orderType === 'deliver' ? (
                  discountApplied ? (
                    <>
                      <span className="text-coffee-grey line-through text-[13px]">
                        $ {originalDeliveryFee.toFixed(1)}
                      </span>
                      <span className="font-bold text-coffee-dark">
                        $ {deliveryFee.toFixed(1)}
                      </span>
                    </>
                  ) : (
                    <span className="font-bold text-coffee-dark">
                      $ {originalDeliveryFee.toFixed(1)}
                    </span>
                  )
                ) : (
                  <span className="font-bold text-green-600">FREE</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Docked Bottom Bar / Checkout Area */}
      <div className="fixed bottom-0 inset-x-0 w-full max-w-[430px] mx-auto bg-white border-t border-gray-100 rounded-t-[24px] shadow-[0_-8px_24px_rgba(0,0,0,0.06)] px-6 pt-3 pb-2 z-30">
        {/* Payment Method Selector Dropdown */}
        <div
          onClick={() => setIsPaymentModalOpen(true)}
          className="flex items-center justify-between py-2 cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-brand-light flex items-center justify-center text-brand">
              <WalletIcon className="w-5 h-5 text-brand" />
            </div>

            <div>
              <div className="text-[13px] font-bold text-coffee-dark leading-tight">
                {paymentMethod.name}
              </div>
              <div className="text-[12px] font-bold text-brand leading-tight">
                {paymentMethod.balance}
              </div>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition">
            <ChevronDown className="w-4 h-4 text-coffee-dark stroke-[2.5]" />
          </div>
        </div>

        {/* Order Call to Action Button */}
        <button
          onClick={() => {
            if (onProceedToTracking) {
              onProceedToTracking()
            } else {
              setIsTrackingOpen(true)
            }
          }}
          className="w-full mt-2 py-4 bg-brand hover:bg-brand-hover active:scale-[0.98] text-white font-semibold text-[16px] rounded-2xl shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center tracking-wide"
        >
          Order • $ {total.toFixed(2)}
        </button>

        {/* Bottom iOS Home Indicator */}
        <div className="w-36 h-1 bg-black rounded-full mx-auto mt-4 mb-2" />
      </div>

      {/* Address Edit Modal */}
      <AddressModal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        currentAddress={address}
        onSave={(newAddr) => setAddress(newAddr)}
      />

      {/* Note Edit Modal */}
      <NoteModal
        isOpen={isNoteModalOpen}
        onClose={() => setIsNoteModalOpen(false)}
        currentNote={note}
        onSave={(newNote) => setNote(newNote)}
      />

      {/* Payment Selection Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        selectedMethod={paymentMethod}
        onSelect={(method) => setPaymentMethod(method)}
      />

      {/* Order Tracking & Confirmation Modal */}
      <TrackingModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
        orderItem={coffee}
        address={address}
        totalAmount={total}
        onHome={onHome}
      />
    </div>
  )
}
