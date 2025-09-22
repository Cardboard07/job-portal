import React from 'react'

export default function ErrorState({ message = 'Something went wrong', onRetry }) {
  return (
    <div className="error">
      <h3>⚠️ Error</h3>
      <p className="muted">{message}</p>
      {onRetry && <button className="btn" onClick={onRetry}>Retry</button>}
    </div>
  )
}
