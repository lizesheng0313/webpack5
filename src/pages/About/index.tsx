import React, { lazy } from 'react'

const AboutDetails = lazy(() => import('./details'))

const About: React.FC = () => {
  return (
    <div>
      <h1>About</h1>
      <AboutDetails />
    </div>
  )
}

export default About
