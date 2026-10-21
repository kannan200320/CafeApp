import React, { useState } from 'react'

export function NoteModal({ isOpen, onClose, currentNote, onSave }) {
  const [note, setNote] = useState(currentNote || '')

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(note)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
      <div className="w-full max-w-sm bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-coffee-dark font-sora">Add Delivery Note</h3>
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
              Instructions for Barista / Courier
            </label>
            <textarea
              rows={4}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g. Please leave at front door, extra napkins, less ice..."
              className="w-full px-4 py-3 bg-gray-50 border border-coffee-border rounded-xl text-sm text-coffee-dark placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
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
              Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
