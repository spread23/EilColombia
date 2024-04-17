import React from 'react'

import './about.css'
import makers from '../../assets/Makers.jpg'
import pairing from '../../assets/Pairing.jpg'

export const About = () => {
    return (
        <>
            <section className='container-about'>

                <article className='article-about'>
                    <div className='image-about'>
                        <img className='makers' src={ makers } alt="makers" />
                    </div>
                    <div className='description-about'>
                        <h1 className='title-about'>
                            Vinos desde 
                            el año 2000
                        </h1>
                        <p className='info-about'>
                        Antiguos documentos descubiertos en los 
                        archivos familiares muestran que nuestra 
                        finca de orientación sur, situada a orillas 
                        del río Duero, al este de la villa de Aranda,
                        se ha utilizado para estudios detallados sobre
                        el cultivo de la vid desde hace al menos 200 
                        años.

                        Las actuales plantaciones comenzaron a fines de la década de 1980. 
                        Para el año 1990 nuestras 87 hectáreas de viñedo propio de un solo 
                        pago habían tomado forma. Hoy en día, después de 30 años, ha llegado 
                        un momento en el que la edad del viñedo comienza a pagar dividendos 
                        de calidad, según coinciden todos los expertos.
                        </p>
                    </div>
                </article>
                <article className='article-about'>
                    <div className='image-about'>
                        <img className='makers' src={ pairing } alt="pairing" />
                    </div>
                    <div className='description-about'>
                        <h1 className='title-about'>
                            Quienes somos
                        </h1>
                        <p className='info-about'>
                        Somos una empresa dedica a la venta y
                        comercialización de licores importados,
                        innovando con nuevas marcas en el mercado;
                        nuestro plus es la diferenciación de productos
                        que tienen una rotación atractiva para el consumidor
                        por su alta calidad y precio, permitiendo disminuir
                        los costos de producción.<br /><br />

                        nuestro portafolio nos permite ofrecerles productos
                        de Brasil, España, Mexico e India.
                        Nuestra oficina principal está ubicada en zona franca Bogota
                        con sucursales en Cartagena, Santa Marta, Bogota, Neiva.
                        </p>
                    </div>
                </article>
            </section>
        </>
    )
}