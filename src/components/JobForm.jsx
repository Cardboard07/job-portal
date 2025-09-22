import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useApp } from '../store.jsx'

const TYPES = ['Full-time', 'Part-time', 'Contract']

export default function JobForm() {
  const nav = useNavigate()
  const { createJob, updateJob, customJobs, addToast } = useApp()
  const [params] = useSearchParams()
  const editId = params.get('id')
  const editing = Boolean(editId)
  const existing = editing ? customJobs.find(j => j.id === editId) : null

  const [form, setForm] = useState({
    title: '', company: '', location: '', type: 'Full-time', salary: '', description: '', postedAt: new Date().toISOString()
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (existing) setForm({
      title: existing.title || '',
      company: existing.company || '',
      location: existing.location || '',
      type: existing.type || 'Full-time',
      salary: existing.salary || '',
      description: existing.description || '',
      postedAt: existing.postedAt || new Date().toISOString(),
    })
  }, [existing])

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.title.trim()) e.title = 'Required'
    if (!form.company.trim()) e.company = 'Required'
    if (!form.location.trim()) e.location = 'Required'
    if (!form.type) e.type = 'Required'
    if (!form.description.trim()) e.description = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    if (editing) {
      updateJob(editId, form)
      nav('/my-listings')
    } else {
      const id = createJob(form)
      nav('/')
    }
  }

  return (
    <form className="job-form" onSubmit={onSubmit}>
      <div className="field">
        <label>Job Title *</label>
        <input name="title" value={form.title} onChange={onChange} />
        {errors.title && <span className="error-text">{errors.title}</span>}
      </div>
      <div className="field">
        <label>Company *</label>
        <input name="company" value={form.company} onChange={onChange} />
        {errors.company && <span className="error-text">{errors.company}</span>}
      </div>
      <div className="field">
        <label>Location *</label>
        <input name="location" value={form.location} onChange={onChange} />
        {errors.location && <span className="error-text">{errors.location}</span>}
      </div>
      <div className="field">
        <label>Job Type *</label>
        <select name="type" value={form.type} onChange={onChange}>
          {TYPES.map(t => <option key={t}>{t}</option>)}
        </select>
        {errors.type && <span className="error-text">{errors.type}</span>}
      </div>
      <div className="field">
        <label>Salary</label>
        <input name="salary" value={form.salary} onChange={onChange} placeholder="e.g. $100k – $130k" />
      </div>
      <div className="field">
        <label>Posted Date</label>
        <input name="postedAt" value={form.postedAt} onChange={onChange} />
      </div>
      <div className="field">
        <label>Description *</label>
        <textarea name="description" rows={8} value={form.description} onChange={onChange} />
        {errors.description && <span className="error-text">{errors.description}</span>}
      </div>
      <div className="form-actions">
        <button type="button" className="btn ghost" onClick={() => nav('/')}>Cancel</button>
        <button type="submit" className="btn">{editing ? 'Save Changes' : 'Publish Job'}</button>
      </div>
    </form>
  )
}
