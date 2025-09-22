import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../store.jsx'
import Modal from '../components/Modal.jsx'
import { relativeTime } from '../utils/format.js'

export default function MyListings() {
  const { customJobs, deleteJob } = useApp()
  const nav = useNavigate()
  const [confirmId, setConfirmId] = useState(null)

  return (
    <section>
      <header className="page-header">
        <h2>My Job Listings</h2>
        <button className="btn" onClick={() => nav('/post')}>Post a Job</button>
      </header>

      {customJobs.length === 0 ? (
        <div className="empty">
          <h3>No listings yet</h3>
          <p className="muted">Create your first listing to start receiving applications.</p>
          <button className="btn" onClick={() => nav('/post')}>Create Listing</button>
        </div>
      ) : (
        <div className="table">
          <div className="table-row head">
            <div>Title</div>
            <div>Company</div>
            <div>Type</div>
            <div>Posted</div>
            <div>Status</div>
            <div></div>
          </div>
          {customJobs.map(j => (
            <div key={j.id} className="table-row">
              <div className="ellipsis">{j.title}</div>
              <div className="ellipsis">{j.company}</div>
              <div>{j.type}</div>
              <div>{relativeTime(j.postedAt)}</div>
              <div>Live</div>
              <div className="actions">
                <button className="btn ghost" onClick={() => nav(`/post?id=${encodeURIComponent(j.id)}`)}>Edit</button>
                <button className="btn danger" onClick={() => setConfirmId(j.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal
        open={!!confirmId}
        title="Delete listing?"
        onClose={() => setConfirmId(null)}
        onConfirm={() => { deleteJob(confirmId); setConfirmId(null) }}
        confirmText="Delete"
      >
        <p>Are you sure you want to delete this job? This action cannot be undone.</p>
      </Modal>
    </section>
  )
}
