import React from 'react'
import nextzen from "../assets/zenlogo.png"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
     <nav className="navbar">
      <div className="logo">NextZen</div>

      <ul className="nav-links">
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/conntactt">
        <li>Shop</li>
        </Link>
        <Link to="/about">
        <li>About</li>
        </Link>
         <Link to="/courses">
        <li>Contact</li>
         </Link>
      </ul>
         <Link to="/login">
      <button className="btn">Login</button>
         </Link>
    </nav>
    </>
    
  )
}

export default Header