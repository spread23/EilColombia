import React from 'react'

import './products.css'

//Wines import
import vinoUno from '../../assets/vinos/vino1.jpg'
import vinoDos from '../../assets/vinos/vino2.jpg'
import vinoTres from '../../assets/vinos/vino3.jpg'
import vinoCuatro from '../../assets/vinos/vino4.jpg'
import vinoCinco from '../../assets/vinos/vino5.jpg'

//Tequilas import
import tequilaUno from '../../assets/tequilas/tequila1.jpg'

//Vodkas import
import vodkaUno from '../../assets/vodkas/vodka1.jpg'

//whiskies import
import whiskeyUno from '../../assets/whiskies/whiskey1.jpg'
import whiskeyDos from '../../assets/whiskies/whiskey2.jpg'
import whiskeyTres from '../../assets/whiskies/whiskey3.jpg'

//Other import
import cachaza from '../../assets/vinos/vino6.jpg'
import ron from '../../assets/vinos/ron1.jpg'
import ginebra from '../../assets/vinos/ginebra1.jpg'

export const Products = () => {

    
    return (
        <div className='container-cards-section'> 
            <h1>Vinos</h1>
            <div className='card-container'>
                <div className='card-section'>
                    <img className='image-card' src={ vinoUno } alt="image-card" />
                    <h4 className='title-card'>Vino Blanco Verdejo 12.6% al.vol</h4>
                    <p className='description'>Marca: Martin Verdugo, Producto importado de España</p>
                    <p className='type'>Disponible en las ciudades: <br /> Bogota <br /> Cartagena *Proximo <br /> Neiva *Proximo</p>
                 </div>

                 <div className='card-section'>
                    <img className='image-card' src={ vinoDos } alt="image-card" />
                    <h4 className='title-card'>Vino Rosado 14.3% al.vol</h4>
                    <p className='description'>Marca: Martin Verdugo, Producto importado de España</p>
                    <p className='type'>Disponible en las ciudades: <br /> Bogota <br /> Cartagena *Proximo <br /> Neiva *Proximo</p>
                 </div>

                 <div className='card-section'>
                    <img className='image-card' src={ vinoTres } alt="image-card" />
                    <h4 className='title-card'>Vino tinto Barrica 14.3% al.vol</h4>
                    <p className='description'>Marca: Martin Verdugo, Producto importado de España</p>
                    <p className='type'>Disponible en las ciudades: <br /> Bogota <br /> Cartagena *Proximo <br /> Neiva *Proximo</p>
                 </div>

                 <div className='card-section'>
                    <img className='image-card' src={ vinoCuatro } alt="image-card" />
                    <h4 className='title-card'>Vino tinto crianza 14.82% al.vol</h4>
                    <p className='description'>Marca: Martin Verdugo, Producto importado de España</p>
                    <p className='type'>Disponible en las ciudades: Bogota <br /> Cartagena *Proximo <br /> Neiva *Proximo</p>
                 </div>

                 <div className='card-section'>
                    <img className='image-card' src={ vinoCinco } alt="image-card" />
                    <h4 className='title-card'>Vino tinto reserva 14.82% al.vol</h4>
                    <p className='description'>Marca: Martin Verdugo, Producto importado de España</p>
                    <p className='type'>Disponible en las ciudades: <br /> Bogota <br /> Cartagena *Proximo <br /> Neiva *Proximo</p>
                 </div>
            </div>

            <h1>Tequilas</h1>
            <div className='card-container'>
                <div className='card-section'>
                    <img className='image-card' src={ tequilaUno } alt="image-card" />
                    <h4 className='title-card'>Tequila Blanco /oro 35% al.vol</h4>
                    <p className='description'>Marca: Jalisciense, Producto importado de mexico</p>
                    <p className='type'>Disponible en las ciudades: <br /> Bogota <br /> Cartagena <br /> Neiva <br />Santa Marta</p>
                 </div>
            </div>

            <h1>Vodkas</h1>
            <div className='card-container'>
                <div className='card-section'>
                    <img className='image-card' src={ vodkaUno } alt="image-card" />
                    <h4 className='title-card'>Vodka 39% al.vol</h4>
                    <p className='description'>Producto importado de Brasil</p>
                    <p className='type'>Disponible en las ciudades: <br /> Bogota <br /> Cartagena <br /> Neiva</p>
                 </div>
            </div>

            <h1>Whiskies</h1>
            <div className='card-container'>
                <div className='card-section'>
                    <img className='image-card' src={ whiskeyUno } alt="image-card" />
                    <h4 className='title-card'>Whiskey Blenden 40% al.vol</h4>
                    <p className='description'>Marca GP, Producto importado de Brasil</p>
                    <p className='type'>Disponible en las ciudades: <br /> Bogota <br /> Cartagena <br /> Neiva</p>
                 </div>

                 <div className='card-section'>
                    <img className='image-card' src={ whiskeyDos } alt="image-card" />
                    <h4 className='title-card'>Whiskey Blenden 40% al.vol</h4>
                    <p className='description'>Marca Highbury, Producto importado de India</p>
                    <p className='type'>Disponible en las ciudades: <br /> Bogota <br /> Cartagena *proximo</p>
                 </div>

                 <div className='card-section'>
                    <img className='image-card' src={ whiskeyTres } alt="image-card" />
                    <h4 className='title-card'>Whiskey Blenden 40% al.vol</h4>
                    <p className='description'>Marca: Bellwether</p>
                    <p className='type'>Disponible en las ciudades: <br /> Bogota <br /> Cartagena *proximo</p>
                 </div>
            </div>

            <h1>Otros</h1>
            <div className='card-container'>
                <div className='card-section'>
                    <img className='image-card' src={ cachaza } alt="image-card" />
                    <h4 className='title-card'>Cachaza 38% al.vol</h4>
                    <p className='description'>Marca: Jamel, Producto importado de Brasil</p>
                    <p className='type'>Disponible en las ciudades: <br /> Bogota <br /> Cartagena <br /> Neiva</p>
                 </div>

                 <div className='card-section'>
                    <img className='image-card' src={ ron } alt="image-card" />
                    <h4 className='title-card'>Ron Blanco 39% al.vol</h4>
                    <p className='description'>Marca Pelican, Producto importado de India</p>
                    <p className='type'>Disponible en las ciudades: <br /> Bogota <br /> Cartagena *proximo</p>
                 </div>

                 <div className='card-section'>
                    <img className='image-card' src={ ginebra } alt="image-card" />
                    <h4 className='title-card'>Ginebra 40% al.vol</h4>
                    <p className='description'>Marca: Pink, Producto importado de India</p>
                    <p className='type'>Disponible en las ciudades: <br /> Bogota <br /> Cartagena *proximo</p>
                 </div>
            </div>
        </div>
    )
}