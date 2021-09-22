import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/woodland-valley-logo.png'
import { links } from '../../assets/data/links'
import Hamburger from 'hamburger-react'

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <NavLink to='/' className='nav-logo'>
            <img src={logo} alt='Woodland Valley Logo' />
          </NavLink>
          <button
            className={show ? 'nav-btn show' : 'nav-btn'}
            onClick={() => {
              setShow(!show)
            }}
          >
            <Hamburger size={35} hideOutline={true} toggled={show} />
          </button>
        </div>
        <div className={show ? 'nav-links show-links' : 'nav-links'}>
          <NavLink
            to='/'
            className='mobile-logo'
            exact={true}
            onClick={() => setShow(false)}
          >
            <img src={logo} alt='Woodland Valley Logo' />
          </NavLink>
          {links.map((item, idx) => {
            return (
              <NavLink
                key={idx}
                to={item.path}
                exact={true}
                className='nav-link'
                activeClassName='active-link'
                onClick={() => setShow(false)}
              >
                {item.name}
              </NavLink>
            )
          })}
          <div className='nav-link visit-link'>
            <NavLink
              to='/visit'
              className='section-button'
              onClick={() => setShow(false)}
            >
              visit
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={show ? 'page-mask show' : 'page-mask'}
        onClick={() => {
          if (show) {
            setShow(false)
          }
        }}
      ></div>
    </nav>
  )
}

export default Navbar
