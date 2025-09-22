import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyState({ title = 'No results', message = 'Try adjusting your search or filters.', onReset }) {
  return (
    <div className="empty">
      <h3>{title}</h3>
      <p className="muted">{message}</p>
      {onReset && <button className="btn" onClick={onReset}>Reset filters</button>}
      {!onReset && (
        <p className="muted" style={{ marginTop: 8 }}>
          <Link to="/">Back to home</Link>
        </p>
      )}
    </div>
  )
}
