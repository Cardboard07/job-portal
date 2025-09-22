import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <nav className="links" aria-label="Footer">
          <a href="#" onClick={e => e.preventDefault()}>About</a>
          <a href="#" onClick={e => e.preventDefault()}>Terms</a>
          <a href="#" onClick={e => e.preventDefault()}>Contact</a>
        </nav>
        <span className="copy">© {new Date().getFullYear()} Job Portal</span>
      </div>
    </footer>
  )
}
