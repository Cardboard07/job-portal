import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { fetchJobs } from './utils/api.js'
import { STORAGE_KEYS, readJSON, writeJSON } from './utils/storage.js'
import { normalizeJob } from './utils/format.js'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [role, setRole] = useState(() => readJSON(STORAGE_KEYS.userRole) || 'seeker')
  const [search, setSearch] = useState('')
  const [jobs, setJobs] = useState([])
  const [customJobs, setCustomJobs] = useState(() => readJSON(STORAGE_KEYS.jobsCustom) || [])
  const [appliedIds, setAppliedIds] = useState(() => readJSON(STORAGE_KEYS.appliedIds) || [])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filterType, setFilterType] = useState('All')
  const [sortDir, setSortDir] = useState('Newest')
  const [toasts, setToasts] = useState([])

  // Sync role and lists to localStorage
  useEffect(() => writeJSON(STORAGE_KEYS.userRole, role), [role])
  useEffect(() => writeJSON(STORAGE_KEYS.jobsCustom, customJobs), [customJobs])
  useEffect(() => writeJSON(STORAGE_KEYS.appliedIds, appliedIds), [appliedIds])

  // Load jobs from API and merge with custom jobs
  const loadJobs = async () => {
    setLoading(true)
    setError(null)
    try {
      const remoteJobs = await fetchJobs()
      const normalizedRemote = remoteJobs.map(normalizeJob)
      const normalizedCustom = customJobs.map(job => ({
        ...normalizeJob(job),
        source: 'custom',
        isNew: false
      }))
      setJobs([...normalizedCustom, ...normalizedRemote])
    } catch (err) {
      console.error('Failed to load jobs:', err)
      setError('Failed to load jobs. Using local data only.')
      const normalizedCustom = customJobs.map(job => ({
        ...normalizeJob(job),
        source: 'custom',
        isNew: false
      }))
      setJobs(normalizedCustom)
    } finally {
      setLoading(false)
    }
  }

  // Initial load
  useEffect(() => {
    loadJobs()
  }, [])

  // Update jobs when customJobs changes
  useEffect(() => {
    const normalizedCustom = customJobs.map(job => ({
      ...normalizeJob(job),
      source: 'custom',
      isNew: false
    }))
    const remoteJobs = jobs.filter(job => job.source !== 'custom')
    setJobs([...normalizedCustom, ...remoteJobs])
  }, [customJobs])

  // Filter and sort jobs
  const visibleJobs = useMemo(() => {
    let filtered = [...jobs]
    
    // Apply search filter
    if (search.trim()) {
      const query = search.toLowerCase().trim()
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query)
      )
    }
    
    // Apply job type filter
    if (filterType !== 'All') {
      filtered = filtered.filter(job => job.type === filterType)
    }
    
    // Apply sorting
    return filtered.sort((a, b) => {
      const dateA = new Date(a.postedAt).getTime()
      const dateB = new Date(b.postedAt).getTime()
      return sortDir === 'Newest' ? dateB - dateA : dateA - dateB
    })
  }, [jobs, search, filterType, sortDir])

  // Toast notifications
  const addToast = (message, type = 'info') => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id))
    }, 5000)
  }

  // Job actions
  const createJob = (jobData) => {
    const newJob = {
      ...jobData,
      id: `custom-${Date.now()}`,
      postedAt: new Date().toISOString(),
      source: 'custom',
      isNew: true
    }
    setCustomJobs(prev => [...prev, newJob])
    addToast('Job created successfully', 'success')
    return newJob.id
  }

  const updateJob = (id, updates) => {
    setCustomJobs(prev => 
      prev.map(job => job.id === id ? { ...job, ...updates } : job)
    )
    addToast('Job updated successfully', 'success')
  }

  const deleteJob = (id) => {
    setCustomJobs(prev => prev.filter(job => job.id !== id))
    addToast('Job deleted', 'info')
  }

  const applyToJob = (jobId) => {
    if (!appliedIds.includes(jobId)) {
      setAppliedIds(prev => [...prev, jobId])
      addToast('Application submitted!', 'success')
    }
  }

  const withdrawApplication = (jobId) => {
    setAppliedIds(prev => prev.filter(id => id !== jobId))
    addToast('Application withdrawn', 'info')
  }

  const reload = () => {
    loadJobs()
    addToast('Jobs refreshed', 'success')
  }

  const value = {
    role, setRole,
    search, setSearch,
    jobs, setJobs,
    customJobs, setCustomJobs,
    appliedIds, setAppliedIds,
    loading, error,
    filterType, setFilterType,
    sortDir, setSortDir,
    visibleJobs,
    toasts,
    addToast,
    createJob, updateJob, deleteJob,
    applyToJob, withdrawApplication,
    reload
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
