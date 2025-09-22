import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppProvider, useApp } from './store.jsx'
import Landing from './pages/Landing.jsx'
import PostJob from './pages/PostJob.jsx'
import MyListings from './pages/MyListings.jsx'
import MyJobs from './pages/MyJobs.jsx'
import JobDetail from './pages/JobDetail.jsx'
import Header from './components/Header.jsx'
import Toast from './components/Toast.jsx'
import Footer from './components/Footer.jsx'

function AppShell() {
  const { toasts } = useApp()

  return (
    <div className="app-shell">
      <Header />
      <main className="container" role="main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/post" element={<PostJob />} />
          <Route path="/my-listings" element={<MyListings />} />
          <Route path="/my-jobs" element={<MyJobs />} />
          <Route path="/job/:id" element={<JobDetail />} />
        </Routes>
      </main>
      <Footer />

      <div className="toast-region" aria-live="polite" aria-atomic="true">
        {toasts.map(t => (
          <Toast key={t.id} kind={t.kind} message={t.message} id={t.id} />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  )
}
