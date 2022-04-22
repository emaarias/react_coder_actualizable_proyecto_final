import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import Widget from '../widget/widget'
import logo from './logo_clothes_white.png'

function Menu() {
  return (
	<header className="header">

  <NavLink to="/" className="logo"><img src={logo} className="logoSize" /></NavLink>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">

    <li><NavLink to='gender/men'>HOMBRE</NavLink></li>

    <li><NavLink to='gender/women'>MUJER</NavLink></li>

    <li><NavLink to='gender/kids'>NIÑOS</NavLink></li>
  
    <li><NavLink to='cart'><Widget /></NavLink></li>
  </ul>

</header>
  )
}

export default Menu