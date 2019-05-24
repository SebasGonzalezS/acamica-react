import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/">
            <p className="navbar-item">Home</p>
          </Link>
          <Link to="/about">
            <p className="navbar-item">About</p>
          </Link>
          <Link to="/shop">
            <p className="navbar-item">Shop</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
