export const STORAGE_KEYS = {
  userRole: 'jp_userRole',
  jobsCustom: 'jp_jobs_custom',
  appliedIds: 'jp_applied_job_ids',
}

export function readJSON(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

export function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    // ignore quota errors in demo
  }
}
