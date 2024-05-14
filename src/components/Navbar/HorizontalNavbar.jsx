import React from 'react';
import './Navbar.css';
import Navbarlogo from '../assets/Navbar-Logo.png'
import NavbarAvatar from '../assets/Navbar-Avatar.png'

const HorizontalNavbar = () => {
  return (
    <div className='horizontal-navbar'>
      <img src={Navbarlogo} className='navbar-logo' alt="Navbar-Logo"/>
      <img src={NavbarAvatar} alt="Navbar-Avatar"/>
    </div>
  )
}

export default HorizontalNavbar
