import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../store.jsx'
import { relativeTime } from '../utils/format.js'

function JobRow({ job }) {
  const nav = useNavigate()
  return (
    <div className="job-row card" onClick={() => nav(`/job/${encodeURIComponent(job.id)}`)}>
      <div className="job-row-left">
        <div className="job-logo" aria-hidden>🧩</div>
        <div className="job-row-info">
          <h3 className="job-row-title">{job.title}</h3>
          <div className="job-row-meta">
            <span className="chip">{job.company}</span>
            <span className="chip">{job.location}</span>
            <span className="chip">{job.type}</span>
          </div>
        </div>
      </div>
      <div className="job-row-right">
        <span className="posted chip ghost">{relativeTime(job.postedAt)}</span>
        <button className="btn ghost" onClick={(e) => { e.stopPropagation(); nav(`/job/${encodeURIComponent(job.id)}`) }}>View Job</button>
      </div>
    </div>
  )
}

export default function LatestJobsList(){
  const { visibleJobs } = useApp()
  return (
    <section className="latest-jobs">
      <div className="section-header inline">
        <h2 className="section-title">Latest Jobs</h2>
        <span className="muted">{visibleJobs.length} Result Found</span>
      </div>
      <div className="job-list">
        {visibleJobs.slice(0, 12).map(j => <JobRow key={j.id} job={j} />)}
      </div>
      <div className="see-all">
        <a className="btn" href="#jobs">See All Jobs</a>
      </div>
    </section>
  )
}
