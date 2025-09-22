import React from 'react'
import { useApp } from '../store.jsx'
import Loader from '../components/Loader.jsx'
import ErrorState from '../components/ErrorState.jsx'
import HeroSearch from '../components/HeroSearch.jsx'
import SponsorStrip from '../components/SponsorStrip.jsx'
import SidebarFilters from '../components/SidebarFilters.jsx'
import LatestJobsList from '../components/LatestJobsList.jsx'

export default function Landing() {
  try {
    const { loading, error, reload } = useApp()

    if (loading) return <Loader />
    if (error) return <ErrorState message={error} onRetry={reload} />

    return (
      <div>
        <HeroSearch />
        <SponsorStrip />
        <section className="layout-two-col">
          <div className="container layout-grid">
            <SidebarFilters />
            <LatestJobsList />
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.error('Landing component error:', error)
    return <div style={{padding: '20px', color: 'red'}}>Landing Error: {error.message}</div>
  }
}
