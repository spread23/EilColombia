import React from 'react'
import { Link } from 'react-router-dom'

import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

import './footer.css'
import logo from '../../assets/logo.png'
import logoWhite from '../../assets/ei_logo_white.png'

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
                                <a href='/'><FaFacebook className='items-footer' /></a>
                                <a href='/'><FaInstagram className='items-footer' /></a>
                                <a href='/'><FaYoutube className='items-footer' /></a>
                            </div>
                        </div>
                </div>
                <div className='footer-info'>
                    <div className='info-items-footer'>
                        <p>Inicio</p>
                        <p>Quienes somos</p>
                    </div>
                    <div className='info-items-footer'>
                        <p>Productos</p>
                        <p>Contacto</p>
                        <p>Blog</p>
                    </div>
                    <div className='info-items-footer'>
                        <p>&copy; Todos los derechos reservados 2024</p>
                    </div>
                </div>
            </footer>
        </>
    )
}