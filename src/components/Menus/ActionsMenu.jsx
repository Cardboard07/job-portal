import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ActionsMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const nav = useNavigate()

  useEffect(() => {
    const onDoc = (e) => { if (!ref.current?.contains(e.target)) setOpen(false) }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <div className="actions" ref={ref}>
      <button className="icon-btn" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
        ⋯
      </button>
      {open && (
        <div role="menu" className="menu">
          <button role="menuitem" onClick={() => { setOpen(false); nav('/post') }}>Post a Job</button>
          <button role="menuitem" onClick={() => { setOpen(false); nav('/my-listings') }}>View My Listings</button>
          <button role="menuitem" onClick={() => { setOpen(false); nav('/my-jobs') }}>My Jobs</button>
        </div>
      )}
    </div>
  )
}
