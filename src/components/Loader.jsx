import React from 'react'

export default function Loader({ label = 'Loading…' }) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="spinner" aria-hidden>⏳</span>
      <span>{label}</span>
    </div>
  )
}
