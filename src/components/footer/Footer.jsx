import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

import './footer.css'
import logo from '../../assets/logo.png'
import logoWhite from '../../assets/logo_white_alta.png'

export const Footer = () => {
    return (
        <>
            <footer className='footer-all-container'>
                <div className='footer'>
                        <div className='footer-logo'>
                            <Link to='/'><img className='logo-image-footer' src={ logoWhite } alt="logo" /></Link>
                        </div>
                        <div className='container-footer'>
                            <h3 className='title-footer'>Síguenos</h3>
                            <div className='social-footer'>
                                <a href='https://www.facebook.com/martinberdugo/?locale=es_LA' target='_blank'><FaFacebook className='items-footer' /></a>
                                <a href='https://www.instagram.com/martin_berdugo_bodega/?hl=es' target='_blank'><FaInstagram className='items-footer' /></a>
                                <a href='https://www.youtube.com/@martinberdugo297' target='_blank'><FaYoutube className='items-footer' /></a>
                            </div>
                        </div>
                </div>
                <div className='footer-info'>
                    <div className='info-items-footer'>
                        <NavLink to='/home'><p>Inicio</p></NavLink>
                        <NavLink to='/about'><p>Quienes somos</p></NavLink>
                    </div>
                    <div className='info-items-footer'>
                    <NavLink to='/products'><p>Productos</p></NavLink>
                    <NavLink to='/contact'><p>Contacto</p></NavLink>
                    </div>
                    <div className='info-items-footer'>
                        <p>&copy; Todos los derechos reservados 2024</p>
                    </div>
                </div>
            </footer>
        </>
    )
}