import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useApp } from '../store.jsx'
import { relativeTime } from '../utils/format.js'

export default function JobDetail() {
  const { id } = useParams()
  const nav = useNavigate()
  const { jobs, role, appliedIds, applyToJob, withdrawApplication, deleteJob } = useApp()
  const job = jobs.find(j => String(j.id) === String(id))

  if (!job) {
    return (
      <section>
        <h2>Job not found</h2>
        <p className="muted">This job may have been removed or the link is invalid.</p>
        <button className="btn" onClick={() => nav(-1)}>Go Back</button>
      </section>
    )
  }

  const isApplied = appliedIds.includes(job.id)
  const isCustom = job.source === 'custom'

  return (
    <section className="job-detail">
      <button className="link" onClick={() => nav(-1)}>&larr; Back</button>
      <header className="job-detail-head">
        <div>
          <h2>{job.title}</h2>
          <div className="meta">
            <span>{job.company}</span>
            <span className="dot">•</span>
            <span>{job.location}</span>
            <span className="dot">•</span>
            <span>{job.type}</span>
            {job.salary && (<><span className="dot">•</span><span>{job.salary}</span></>)}
          </div>
          <div className="muted" style={{ marginTop: 4 }}>Posted {relativeTime(job.postedAt)}</div>
        </div>
        <div className="actions">
          {role === 'seeker' && (
            !isApplied ? (
              <button className="btn" onClick={() => applyToJob(job.id)}>Apply</button>
            ) : (
              <>
                <button className="btn ghost" disabled>Applied</button>
                <button className="btn danger" onClick={() => withdrawApplication(job.id)}>Withdraw</button>
              </>
            )
          )}
          {role === 'recruiter' && isCustom && (
            <>
              <button className="btn ghost" onClick={() => nav(`/post?id=${encodeURIComponent(job.id)}`)}>Edit</button>
              <button className="btn danger" onClick={() => { deleteJob(job.id); nav('/') }}>Delete</button>
            </>
          )}
        </div>
      </header>
      <article className="job-detail-body">
        {String(job.description || '').split(/\n+/).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>
    </section>
  )
}
