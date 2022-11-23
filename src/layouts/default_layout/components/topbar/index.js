import React, { useContext, useRef } from "react"
import { NavLink } from "react-router-dom"
import UserContext from "../../../../Utils/Context/UserContext"
import "./Topbar.css"

const TopBar = () => {
  const navButton = useRef(null)
  const linksContainerRef = useRef(null)

  const { isAuth } = useContext(UserContext)
  return (
    <>
      <nav className='navbar navbar-expand-md bg-white shadow-sm fixed-top'>
        <div className='container'>
          <NavLink className='navbar-brand ' to=''>
            <img
              src='https://motivitylabs.com/wp-content/uploads/elementor/thumbs/logo-prgkor4cuantgaya7ag8ef6zp2tvgjfpld4fltl3e4.png'
              className=''
              alt='Motivity'
            />
          </NavLink>
          <button
            ref={navButton}
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon bg-light'></span>
          </button>
          <div
            className='collapse navbar-collapse'
            id='navbarNavDropdown'
            ref={linksContainerRef}
          >
            {!isAuth && (
              <>
                <ul className='navbar-nav mx-auto'>
                  <li className='nav-item  mx-2'>
                    <NavLink className='nav-link text-dark fw-bold' to=''>
                      How it works
                    </NavLink>
                  </li>
                  <li className='nav-item mx-2'>
                    <NavLink className='nav-link text-dark fw-bold ' to=''>
                      Insurance Carriers
                    </NavLink>
                  </li>
                </ul>
                <div className='d-flex align-items-center'>
                  <div>
                    <a
                      style={{ color: "#EE6F1B" }}
                      href='/'
                      className='text-decoration-none fw-bold'
                    >
                      989-989-9898
                    </a>
                  </div>
                  <div className='dropdown mx-4'>
                    <button
                      className='btn dropdown-toggle fw-bold'
                      type='button'
                    >
                      Login
                    </button>
                    <ul className='dropdown-menu shadow'>
                      <li>
                        <NavLink className='dropdown-item' to='/doctorlogin'>
                          Doctor
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className=' dropdown-item' to='/patientlogin'>
                          Patient
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className=' dropdown-item ' to='/adminlogin'>
                          Admin
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default TopBar
