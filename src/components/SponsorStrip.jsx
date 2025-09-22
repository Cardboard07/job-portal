import React from 'react'

const logos = [
  'Microsoft','Allianc','bidlet.com','eophomo','Dropbox','amazon'
]

export default function SponsorStrip(){
  return (
    <section className="sponsor-strip">
      <div className="container">
        <div className="sponsor-track">
          {logos.map((name, i) => (
            <div key={i} className="sponsor-item">
              <div className="sponsor-dot" />
              <span className="sponsor-text">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
