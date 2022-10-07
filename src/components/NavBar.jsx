import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div>
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
		        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <img src={logo} alt="logo"></img>
                    </a>
                    <a className="navbar-brand px-3" href="/">Fiorentino Sounds Store</a>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink to="/" className="nav-link px-2 link-dark {(navData) => navData.isActive ? 'active' : '' }" >Home</NavLink></li>
                        <li><a href="/store" className="nav-link px-2 link-dark">Store</a></li>
                        <li><a href="/contacto" className="nav-link px-2 link-dark">Contacto</a></li>
                        <li><a href="/ayuda" className="nav-link px-2 link-dark">Ayuda</a></li>
                    </ul>     
                    <CartWidget />
		        </div>
            </div>
        </header>
    </div>
  )
}

export default NavBar