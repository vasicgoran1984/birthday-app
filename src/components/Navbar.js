import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo-copy2.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="c" className='logo'/>
        </Link>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar