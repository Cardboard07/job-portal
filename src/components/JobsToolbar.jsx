import React from 'react'
import { useApp } from '../store.jsx'

export default function JobsToolbar({ count }) {
  const { filterType, setFilterType, sortDir, setSortDir } = useApp()
  return (
    <div className="toolbar">
      <div className="left">
        <label>
          <span className="label">Job Type</span>
          <select value={filterType} onChange={e => setFilterType(e.target.value)}>
            <option>All</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>
        </label>
        <label>
          <span className="label">Sort</span>
          <select value={sortDir} onChange={e => setSortDir(e.target.value)}>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </label>
      </div>
      <div className="right">
        <span className="muted">{count} results</span>
      </div>
    </div>
  )
}
