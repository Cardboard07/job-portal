import React from 'react'
import JobCard from './JobCard.jsx'

export default function JobGrid({ jobs }) {
  return (
    <div className="grid">
      {jobs.map(j => <JobCard key={j.id} job={j} />)}
    </div>
  )
}
