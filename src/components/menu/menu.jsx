import React from 'react'

function Menu() {
  return (
	<header className="header">
  <a href="#" className="logo">Nav Carrito EA</a>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Nosotros</a></li>
    <li><a href="#">Productos</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</header>
  )
}

export default Menu