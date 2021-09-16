import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/woodland-valley-logo.png'
import { links } from '../../assets/data/links'

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='Woodland Valley Logo' />
          </Link>
        </div>
        <div className={show ? 'nav-links show-links' : 'nav-links'}>
          {links.map((item, idx) => {
            return (
              <Link
                key={idx}
                to={item.path}
                className='nav-link'
                activeClassName='active-link'
                onClick={() => setShow(false)}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
