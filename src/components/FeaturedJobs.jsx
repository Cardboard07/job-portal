import React from 'react'
import { useApp } from '../store.jsx'
import JobCard from './JobCard.jsx'

export function FeaturedJobs() {
  const { visibleJobs } = useApp()
  const featuredJobs = visibleJobs.slice(0, 6) // Show first 6 jobs as featured

  return (
    <section id="jobs" className="featured-jobs">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Opportunities</h2>
          <p className="section-subtitle">
            Discover the latest and most exciting career opportunities
          </p>
        </div>
        {featuredJobs.length > 0 ? (
          <div className="featured-grid">
            {featuredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="no-featured">
            <p>No featured jobs available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}
