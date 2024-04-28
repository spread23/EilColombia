import React from 'react'

import './contact.css'

export const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
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
            </div>
        </>
    )
}