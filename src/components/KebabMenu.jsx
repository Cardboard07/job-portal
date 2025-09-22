import React, { useEffect, useRef, useState } from 'react'

export default function KebabMenu({ items = [] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onDoc = (e) => { if (!ref.current?.contains(e.target)) setOpen(false) }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <div className="kebab" ref={ref}>
      <button className="icon-btn" onClick={() => setOpen(o => !o)} aria-haspopup="menu" aria-expanded={open}>
        ⋮
      </button>
      {open && (
        <div className="menu" role="menu">
          {items.map((it, i) => (
            <button key={i} role="menuitem" onClick={() => { setOpen(false); it.onSelect?.() }}>
              {it.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
