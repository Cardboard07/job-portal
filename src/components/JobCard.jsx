import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../store.jsx'
import { relativeTime } from '../utils/format.js'
import Tag from './Tag.jsx'
import KebabMenu from './KebabMenu.jsx'

export default function JobCard({ job }) {
  const nav = useNavigate()
  const { role, appliedIds, applyToJob, withdrawApplication, newSessionIds, deleteJob } = useApp()
  const isApplied = appliedIds.includes(job.id)
  const isCustom = job.source === 'custom'
  const isNew = newSessionIds.has(job.id)

  const goDetail = () => nav(`/job/${encodeURIComponent(job.id)}`)

  return (
    <div className="card job-card" onClick={goDetail}>
      <div className="job-card-head">
        <div className="left">
          <h3 className="title">{job.title}</h3>
          <div className="meta">
            <span className="company">{job.company}</span>
            <span className="dot">•</span>
            <span className="location">{job.location}</span>
            <span className="dot">•</span>
            <span className="type">{job.type}</span>
            {job.salary && (<><span className="dot">•</span><span className="salary">{job.salary}</span></>)}
          </div>
        </div>
        <div className="right">
          {isNew && <Tag>New</Tag>}
          {isCustom && role === 'recruiter' && (
            <div className="hover-show" onClick={(e) => e.stopPropagation()}>
              <KebabMenu items={[
                { label: 'Edit', onSelect: () => nav(`/post?id=${encodeURIComponent(job.id)}`) },
                { label: 'Delete', onSelect: () => deleteJob(job.id) },
              ]} />
            </div>
          )}
        </div>
      </div>
      <p className="desc one-line">{job.description}</p>
      <div className="job-card-foot">
        <span className="posted">{relativeTime(job.postedAt)}</span>
        {role === 'seeker' && (
          <div className="actions" onClick={(e) => e.stopPropagation()}>
            {!isApplied ? (
              <button className="btn" onClick={() => applyToJob(job.id)}>Apply</button>
            ) : (
              <button className="btn ghost" disabled>Applied</button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
