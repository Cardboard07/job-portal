import React from 'react'
import { useApp } from '../store.jsx'

const categories = [
  { id: 'all', name: 'All Jobs', icon: '📋', count: 0 },
  { id: 'Full-time', name: 'Full Time', icon: '💼', count: 0 },
  { id: 'Part-time', name: 'Part Time', icon: '⏰', count: 0 },
  { id: 'Contract', name: 'Contract', icon: '📝', count: 0 },
  { id: 'Remote', name: 'Remote', icon: '🏠', count: 0 },
  { id: 'Internship', name: 'Internship', icon: '🎓', count: 0 }
]

export function JobCategories() {
  const { jobs, setFilterType } = useApp()

  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return jobs.length
    return jobs.filter(job => job.type === categoryId).length
  }

  const handleCategoryClick = (categoryId) => {
    if (categoryId === 'all') {
      setFilterType('All')
    } else {
      setFilterType(categoryId)
    }
  }

  return (
    <section className="job-categories">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Browse by Category</h2>
          <p className="section-subtitle">
            Find jobs that match your skills and preferences
          </p>
        </div>
        <div className="categories-grid">
          {categories.map(category => (
            <button
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
              <span className="category-count">
                {getCategoryCount(category.id)} jobs
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
