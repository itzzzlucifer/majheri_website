import React from 'react'

function NavBar() {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <img className="navbar-logo" id="navbar-logo"src="/assets/majheri_logo_light.svg" alt="" />
        </div>
        <div className="navbar-right">
            <span className="nav-items" id="nav-item2">Home</span>
            <span className="nav-items" id="nav-item3">About</span>
            <span className="nav-items" id="nav-item4">Gallery</span>
            <span className="nav-items" id="nav-item5">Contacts</span>
        </div>
    </nav>
  )
}

export default NavBar;