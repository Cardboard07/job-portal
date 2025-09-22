import React from 'react'
import { useApp } from '../store.jsx'

export function HeroSection() {
  const { jobs, customJobs } = useApp()
  const totalJobs = jobs.length + customJobs.length

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Find Your Dream Job or <span className="gradient-text">Hire Top Talent</span>
          </h1>
          <p className="hero-subtitle">
            Connect with thousands of opportunities. Whether you're looking for your next career move
            or seeking exceptional candidates, we've got you covered.
          </p>
          <div className="hero-actions">
            <a href="/post" className="btn btn-primary">Post a Job</a>
            <a href="#jobs" className="btn btn-secondary">Browse Jobs</a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">{totalJobs.toLocaleString()}+</div>
            <div className="stat-label">Active Jobs</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Companies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Job Seekers</div>
          </div>
        </div>
      </div>
    </section>
  )
}
