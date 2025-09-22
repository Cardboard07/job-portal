import React from 'react'
import SearchInput from './SearchInput.jsx'

export default function HeroSearch(){
  return (
    <section className="hero hero-centered">
      <div className="container hero-center-wrap">
        <h1 className="hero-title">Your <span className="gradient-text">Ultimate Job</span><br/>Search Companion</h1>
        <p className="hero-subtitle">Find your dream job from thousands of postings across industries.</p>
        <div className="hero-search">
          <SearchInput />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    </section>
  )
}
