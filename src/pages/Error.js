import { Link } from 'react-router-dom'
import React from 'react'

const Error = () => {
  return (
    <section className='section'>
      <h2>404</h2>
    <p>Page not found</p>
    <Link to="/" className="btn">Back Home</Link>
    </section>
    
  )
}

export default Error