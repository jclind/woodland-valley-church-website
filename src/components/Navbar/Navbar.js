import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/woodland-valley-logo.png'
import { links } from '../../assets/data/links'
import Hamburger from 'hamburger-react'
import { useWindowSize } from '../../util/useWindowSize'

const NavLinkElement = ({ link, show, setShow }) => {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!show) {
      setExpanded(false)
    }
  }, [show])
  const handleOnClick = () => {
    setExpanded(!expanded)
  }

  return (
    <li>
      {link.subLinks ? (
        <button
          activeClassName='active-link'
          className='link'
          onClick={handleOnClick}
        >
          <span className='expand'>{expanded ? '-' : '+'}</span>
          {link.name}
        </button>
      ) : (
        <NavLink
          to={link.path}
          activeClassName='active-link'
          className='link'
          exact={true}
          onClick={() => setShow(false)}
        >
          {link.name}
        </NavLink>
      )}

      {link.subLinks ? (
        <ul className={expanded ? 'show' : null}>
          {link.subLinks.map((subLink, subIdx) => {
            return (
              <li key={subIdx}>
                <NavLink
                  to={subLink.path}
                  activeClassName='active-link'
                  className='link'
                  exact={true}
                  onClick={() => setShow(false)}
                >
                  {subLink.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      ) : null}
    </li>
  )
}

const Navbar = () => {
  const [show, setShow] = useState(false)
  const { width } = useWindowSize()

  useEffect(() => {
    if (width >= 992) {
      setShow(false)
    }
  }, [width])
  return (
    <nav>
      <NavLink
        to='/'
        className='logo'
        exact={true}
        onClick={() => setShow(false)}
      >
        <img src={logo} alt='logo' />
      </NavLink>
      <button
        className={show ? 'nav-btn show' : 'nav-btn'}
        onClick={() => {
          setShow(!show)
        }}
      >
        <Hamburger size={35} hideOutline={true} toggled={show} />
      </button>
      <div className={show ? 'links show-links' : 'links'}>
        <ul>
          <li className='nav-mobile-logo'>
            <NavLink
              to='/'
              className='logo'
              exact={true}
              onClick={() => setShow(false)}
            >
              <img src={logo} alt='logo' />
            </NavLink>
          </li>
          {links.map((link, idx) => {
            return (
              <NavLinkElement
                link={link}
                show={show}
                setShow={setShow}
                key={idx}
              />
            )
          })}
          <li>
            <NavLink
              to='/visit'
              activeClassName='active-link'
              className='link'
              exact={true}
              onClick={() => setShow(false)}
            >
              Visit
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>

    // <nav className='navbar'>
    //   <div className='nav-center'>
    //     <div className='nav-header'>
    //       <NavLink to='/' className='nav-logo'>
    //         <img src={logo} alt='Woodland Valley Logo' />
    //       </NavLink>
    //       <button
    //         className={show ? 'nav-btn show' : 'nav-btn'}
    //         onClick={() => {
    //           setShow(!show)
    //         }}
    //       >
    //         <Hamburger size={35} hideOutline={true} toggled={show} />
    //       </button>
    //     </div>
    //     <div className={show ? 'nav-links show-links' : 'nav-links'}>
    //       <NavLink
    //         to='/'
    //         className='mobile-logo'
    //         exact={true}
    //         onClick={() => setShow(false)}
    //       >
    //         <img src={logo} alt='Woodland Valley Logo' />
    //       </NavLink>
    //       {links.map((item, idx) => {
    //         return (
    //           <NavLink
    //             key={idx}
    //             to={item.path}
    //             exact={true}
    //             className='nav-link'
    //             activeClassName='active-link'
    //             onClick={() => setShow(false)}
    //           >
    //             {item.name}
    //           </NavLink>
    //         )
    //       })}
    //       <div className='nav-link visit-link'>
    //         <NavLink
    //           to='/visit'
    //           className='section-button'
    //           onClick={() => setShow(false)}
    //         >
    //           visit
    //         </NavLink>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className={show ? 'page-mask show' : 'page-mask'}
    //     onClick={() => {
    //       if (show) {
    //         setShow(false)
    //       }
    //     }}
    //   ></div>
    // </nav>
  )
}

export default Navbar
