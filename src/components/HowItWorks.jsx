import React from 'react'

const steps = [
  {
    step: '01',
    title: 'Create Account',
    description: 'Sign up and choose whether you\'re a job seeker or recruiter',
    icon: '👤'
  },
  {
    step: '02',
    title: 'Post or Browse',
    description: 'Recruiters post jobs, job seekers browse and apply',
    icon: '🔍'
  },
  {
    step: '03',
    title: 'Get Hired',
    description: 'Connect with the right opportunities and start your journey',
    icon: '🚀'
  }
]

export function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Simple steps to find your next opportunity or hire great talent
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
