import React from 'react'

import { FaWhatsapp } from 'react-icons/fa'

import './contact.css'

export const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

        alert('Has enviado el correo con exito')
    }
    return (
        <>
            <div className='contact-container'>
                <div className='form-contact'>
                    <form onSubmit={handleSubmit} className='form-for-contact'>
                        <div className='form-group-contact'>
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" name='name' placeholder='Tu nombre...' />
                        </div>

                        <div className='form-group-contact'>
                            <label htmlFor="email">Correo:</label>
                            <input type="email" name='email' placeholder='Tu correo...' />
                        </div>

                        <div className='form-group-contact'>
                            <label htmlFor="description">Motivo del contacto:</label>
                            <textarea type="text" name='description' placeholder='Motivo...' />
                        </div>
                        <button className='btn-contact'>Enviar</button>
                    </form>
                </div>
                <div className='wpp'>
                    <h4>Escríbenos</h4>
                    <a href='https://wa.me/+573007730741' target='_blank'><FaWhatsapp className='wpp-item' /></a> 
                </div>
            </div>
        </>
    )
}