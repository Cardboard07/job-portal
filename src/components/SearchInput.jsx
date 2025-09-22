import React, { useEffect, useState } from 'react'
import { useApp } from '../store.jsx'
import useDebounce from '../hooks/useDebounce.js'

export default function SearchInput() {
  const { setSearch } = useApp()
  const [local, setLocal] = useState('')
  const debounced = useDebounce(local, 250)

  useEffect(() => { setSearch(debounced) }, [debounced])

  return (
    <div className="search">
      <input
        value={local}
        onChange={e => setLocal(e.target.value)}
        placeholder="Search by title or company"
        aria-label="Search jobs"
      />
    </div>
  )
}
