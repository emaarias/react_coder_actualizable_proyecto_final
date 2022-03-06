import React from 'react'

function Menu() {
  return (
	<header className="header">
  <a href="#" className="logo">INDUMENTARIA EA</a>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
    <li><a href="#">HOMBRE</a></li>
    <li><a href="#">MUJER</a></li>
    <li><a href="#">NIÑOS</a></li>
    <li><a href="#">SALE</a></li>
  </ul>
</header>
  )
}

export default Menu