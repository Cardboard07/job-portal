import React from 'react'
import { useApp } from '../store.jsx'

export default function RoleSwitcher() {
  const { role, setRole } = useApp()
  return (
    <div className="role-switch" role="group" aria-label="Role selector">
      <button
        className={role === 'seeker' ? 'active' : ''}
        onClick={() => setRole('seeker')}
        aria-pressed={role === 'seeker'}
      >Seeker</button>
      <button
        className={role === 'recruiter' ? 'active' : ''}
        onClick={() => setRole('recruiter')}
        aria-pressed={role === 'recruiter'}
      >Recruiter</button>
    </div>
  )
}
