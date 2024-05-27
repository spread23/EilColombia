import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

import './navbar.css'
import logo from '../../assets/logo_finish.png'
import vinedo from '../../assets/viñedo.jpg'
import vinedoGrande from '../../assets/vinedo_grande.jpg'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <div className='logo'>
                       <Link to='/'><img className='logo-image' src={ logo } alt="logo" /></Link>
                    </div>
                    <div className={`toggle ${ isOpen && 'open' }`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span><span></span><span></span>
                    </div>
                    <div className='menu'>
                        <nav className='nav-menu'>
                            <ol className={`menu-items ${ isOpen && 'open' }`}>
                                <li>
                                    <NavLink onClick={() => setIsOpen(!isOpen)} className={({ isActive }) => isActive ? 'active' : ''} to='/home'>Inicio</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setIsOpen(!isOpen)} to='/about'>Quienes somos</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setIsOpen(!isOpen)} to='/products'>Productos</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setIsOpen(!isOpen)} to='/contact'>Contacto</NavLink>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <img className='header-image' src={ vinedoGrande } alt="vinedo" />
            </header>
            <div className='whats-container'>
                    <a href='https://wa.me/+573007730741' target='_blank'><FaWhatsapp className='whats' /></a>
            </div>
        </>
    )  
}