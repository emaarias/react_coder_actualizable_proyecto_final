import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import Widget from '../widget/widget'
import logo from './logo_clothes_white.png'

function Menu() {
  return (
	<header className="header">
  {/* <a href="#" className="logo"><img src={logo} className="logoSize" /></a> */}
  <NavLink to="/" className="logo"><img src={logo} className="logoSize" /></NavLink>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
    {/* <li><a href="#">HOMBRE</a></li> */}
    <li><NavLink to='/'>HOMBRE</NavLink></li>
    {/* <li><a href="#">MUJER</a></li> */}
    <li><NavLink to='/'>MUJER</NavLink></li>
    {/* <li><a href="#">NIÑOS</a></li> */}
    <li><NavLink to='/'>NIÑOS</NavLink></li>
    {/* <li><a href="#">SALE</a></li> */}
    {/* <li><a href="#"><Widget /></a></li> */}
    <li><NavLink to='cart'><Widget /></NavLink></li>
  </ul>

</header>
  )
}

export default Menu