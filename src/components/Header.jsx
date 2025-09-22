import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../store.jsx'
import SearchInput from './SearchInput.jsx'
import RoleSwitcher from './RoleSwitcher.jsx'
import ActionsMenu from './Menus/ActionsMenu.jsx'

export default function Header() {
  try {
    return (
      <header className="header">
        <div className="container header-inner">
          <div className="left">
            <Link to="/" className="logo" aria-label="Job Portal Home">
              <img 
                src="https://media.licdn.com/dms/image/D4D03AQHw3_6GcYxG9Q/profile-displayphoto-shrink_200_200/0/1669886245239?e=1723075200&v=beta&t=1mHj2w9vV1Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8" 
                alt="Logo"
                className="logo-img"
                style={{
                  height: '40px',
                  width: 'auto',
                  borderRadius: '50%',
                  border: '2px solid var(--accent)'
                }}
              />
            </Link>
          </div>
          <div className="header-actions">
            <RoleSwitcher />
            <ActionsMenu />
          </div>
        </div>
      </header>
    )
  } catch (error) {
    console.error('Header component error:', error)
    return <div style={{padding: '12px 0', background: 'var(--bg-elev)', borderBottom: '1px solid var(--border)'}}>Header Error: {error.message}</div>
  }
}
