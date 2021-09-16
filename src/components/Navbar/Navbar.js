import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/woodland-valley-logo.png'
const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='Woodland Valley Logo' />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
