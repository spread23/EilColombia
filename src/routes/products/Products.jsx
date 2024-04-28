import React, { useState, useEffect } from 'react'

import './products.css'

export const Products = () => {

    const [listCards, setListCards] = useState([])

    useEffect(() => {
        callFetch()
    }, [])
    
    const callFetch = async () => {
        const response = await fetch('https://eil-api.onrender.com/api/card/cards')
        const data = await response.json()
        setListCards(data.cards)
    }

    
    return (
        <> 
            <div className='card-container'>
                {listCards.length <= 0 ? 
                <div className='card-section'>
                    <img className='image-card' src={`https://eil-api.onrender.com/api/card/getAvatar/image.png`} alt="image-card" />
                    <h4 className='title-card'>Titulo:</h4>
                    <p className='description'>Descripcion:</p>
                    <p className='type'>Tipo:</p>
                </div>
                : 
            listCards.map((card) => {
                return <div className='card-section'>
                    <img className='image-card' src={`https://eil-api.onrender.com/api/card/getAvatar/${card.image}`} alt="image-card" />
                    <h4 className='title-card'>Titulo {card.title}</h4>
                    <p className='description'>Descripcion {card.description}</p>
                    <p className='type'>Tipo {card.type}</p>
                 </div>
            })}
            </div>
        </>
    )
}