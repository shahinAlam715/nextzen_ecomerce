import React, { useState } from 'react'
import nextzen from "../assets/zenlogo.png"
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from 'react-icons/fa6'

const Header = () => {

  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <img src={nextzen} alt="logo" />
      </div>

      {/* Nav Links */}
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/conntactt">Contact Us</Link></li>
      </ul>

      {/* Button */}
      <div className="nav-right">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>

        {/* Menu Icon */}
        <div className="bar" onClick={() => setOpen(!open)}>
          <FaBarsStaggered />
        </div>
      </div>

    </nav>
  )
}

export default Header