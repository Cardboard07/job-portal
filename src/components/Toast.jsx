import React from 'react'

export default function Toast({ id, message, kind = 'success' }) {
  const colors = {
    success: 'var(--green-400)',
    error: 'var(--red-400)',
    info: 'var(--blue-400)'
  }
  return (
    <div className="toast" role="status" style={{ borderLeftColor: colors[kind] }}>
      <span>{message}</span>
    </div>
  )
}
