import React from 'react'
import logo from '../logo.svg'
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
                    <a className="navbar-brand" href="#">Fiorentino Sounds Store</a>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Store</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Contacto</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Ayuda</a></li>
                    </ul>     
		        </div>
                <CartWidget />
            </div>
        </header>
    </div>
  )
}

export default NavBar