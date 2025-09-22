import React from 'react'
import { useApp } from '../store.jsx'
import JobGrid from '../components/JobGrid.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function MyJobs() {
  const { appliedIds, jobs, withdrawApplication } = useApp()
  const appliedJobs = jobs.filter(j => appliedIds.includes(j.id))

  return (
    <section>
      <header className="page-header">
        <h2>My Jobs</h2>
        <p className="muted">Jobs you have applied to. You can withdraw your application.</p>
      </header>

      {appliedJobs.length === 0 ? (
        <EmptyState title="No applications yet" message="Find jobs on the home page and apply." />
      ) : (
        <div className="grid">
          {appliedJobs.map(job => (
            <div key={job.id} className="card job-card">
              <div className="job-card-head">
                <div className="left">
                  <h3 className="title">{job.title}</h3>
                  <div className="meta">
                    <span className="company">{job.company}</span>
                    <span className="dot">•</span>
                    <span className="location">{job.location}</span>
                    <span className="dot">•</span>
                    <span className="type">{job.type}</span>
                  </div>
                </div>
                <div className="right">
                  <button className="btn danger" onClick={() => withdrawApplication(job.id)}>- Withdraw</button>
                </div>
              </div>
              <p className="desc one-line">{job.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
