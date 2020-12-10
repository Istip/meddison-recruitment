import React from "react"
import "./Navbar.scss"
import logo from "../images/logo.png"

const Navbar = () => {
  const iconHome = <i className='fas fa-home'></i>
  const iconAboutUs = <i className='fas fa-user'></i>
  const iconJobs = <i className='fas fa-briefcase'></i>
  const iconContact = <i className='fas fa-phone-alt'></i>

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light text-center'>
      <a className='navbar-brand' href='/'>
        <img src={logo} alt='MEDDISON Recruitment' />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarColor03'
        aria-controls='navbarColor03'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <i className='fas fa-bars fa-x2'></i>
      </button>

      <div
        className='collapse navbar-collapse justify-content-end'
        id='navbarColor03'
      >
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <a className='nav-link oswald lead' href='/'>
              {iconHome} Főoldal
              <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link oswald lead' href='#rolunk'>
              {iconAboutUs} Rólunk
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link oswald lead' href='#munkak'>
              {iconJobs} Munkák
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link kapcsolat oswald lead' href='#kapcsolat'>
              {iconContact} Kapcsolat
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
