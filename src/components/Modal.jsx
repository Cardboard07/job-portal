import React, { useEffect } from 'react'

export default function Modal({ open, title = 'Confirm', children, onClose, onConfirm, confirmText = 'Confirm' }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <h3>{title}</h3>
        </header>
        <div className="modal-body">
          {children}
        </div>
        <footer className="modal-footer">
          <button className="btn ghost" onClick={onClose}>Cancel</button>
          <button className="btn danger" onClick={onConfirm}>{confirmText}</button>
        </footer>
      </div>
    </div>
  )
}
