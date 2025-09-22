import React from 'react'
import { useApp } from '../store.jsx'

export default function SidebarFilters() {
  const { jobs, filterType, setFilterType } = useApp()

  const counts = {
    All: jobs.length,
    'Full-time': jobs.filter(j => j.type === 'Full-time').length,
    'Part-time': jobs.filter(j => j.type === 'Part-time').length,
    Contract: jobs.filter(j => j.type === 'Contract').length,
    Internship: jobs.filter(j => j.type === 'Internship').length,
    Remote: jobs.filter(j => (j.location || '').toLowerCase().includes('remote')).length,
  }

  const types = ['All', 'Full-time', 'Part-time', 'Contract', 'Internship', 'Remote']

  return (
    <aside className="sidebar">
      <div className="card sidebar-card">
        <h3 className="sidebar-title">Job Type</h3>
        <div className="sidebar-list">
          {types.map(t => (
            <button
              key={t}
              className={`sidebar-item ${filterType === t ? 'active' : ''}`}
              onClick={() => setFilterType(t === 'Remote' ? 'All' : t)}
            >
              <span>{t}</span>
              <span className="badge">{counts[t] ?? 0}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
