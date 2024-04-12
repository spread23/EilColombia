import React from 'react'

import './home.css'
import logoWhite from '../../assets/logo_white.png'
import wines from '../../assets/wines.jpg'
import bottles from '../../assets/botellas.png'

export const Home = () => {
    return (
        <>
            <div className='section-home'>
                <div className='logo-home'>
                    <img className='home-logo' src={ logoWhite } alt="logo" />
                </div>
            </div>
            <div className='wines-home'>
                <div className='image-wine'>
                    <img className='wine' src={ wines } alt="wines" />
                </div>
                <div className='description-wine'>
                    <h1 className='title-wine'>
                        Vinos de la Ribera del Duero 100% Ecológicos
                    </h1>
                    <p className='contain-wine'>
                        Para hacer vino excelente, el tiempo es oro. 
                        Aunque la historia de Martín Berdugo se remonta 
                        siglos atrás, el viñedo propio que hoy rodea nuestra 
                        bodega moderna fue plantado por su dueña, Josefina, 
                        en 1990 con la asistencia y el apoyo de su esposo 
                        Enrique, así como de sus tres hijos Antonio, Bruno y 
                        Pepa. El alma de nuestros vinos se encuentra dentro 
                        de nuestro viñedo arraigado en Ribera del Duero.
                    </p>
                </div>
            </div>
            <div className='title-products'>
                <h2 className='some-products'>Algunos de nuestros productos</h2>
                <img className='bottle-image' src={ bottles } alt="bottles" />
            </div>
        </>
    )
}