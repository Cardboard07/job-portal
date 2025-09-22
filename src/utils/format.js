export function normalizeJob(j) {
  if (!j) return j
  return {
    id: j.id ?? `id_${Math.random().toString(36).slice(2)}`,
    title: j.title || 'Untitled',
    company: j.company || 'Company',
    type: j.employment_type || 'Full-time',
    location: j.location || 'Remote',
    postedAt: j.created_at ? new Date(j.created_at).toISOString() : new Date().toISOString(),
    description: j.description || 'No description provided.',
    salary: j.salary_from && j.salary_to ? `${j.salary_from} - ${j.salary_to}` : '',
    source: j.source || 'api',
  }
}

export function relativeTime(iso) {
  const d = new Date(iso)
  const diff = Date.now() - d.getTime()
  const sec = Math.floor(diff / 1000)
  if (sec < 60) return `${sec}s ago`
  const min = Math.floor(sec / 60)
  if (min < 60) return `${min}m ago`
  const hr = Math.floor(min / 60)
  if (hr < 24) return `${hr}h ago`
  const day = Math.floor(hr / 24)
  if (day < 30) return `${day}d ago`
  const mon = Math.floor(day / 30)
  if (mon < 12) return `${mon}mo ago`
  const yr = Math.floor(mon / 12)
  return `${yr}y ago`
}
