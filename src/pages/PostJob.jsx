import React from 'react'
import { useApp } from '../store.jsx'
import JobForm from '../components/JobForm.jsx'

export default function PostJob() {
  const { role } = useApp()
  return (
    <section>
      <header className="page-header">
        <h2>{role === 'recruiter' ? 'Post a Job' : 'Post a Job (Recruiter Mode)'}</h2>
        {role !== 'recruiter' && <p className="muted">You are in Seeker mode. Switch to Recruiter to see recruiter-only UI.</p>}
      </header>
      <JobForm />
    </section>
  )
}
