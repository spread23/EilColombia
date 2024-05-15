import React, { useState, useEffect } from 'react'
import { FaCameraRetro } from 'react-icons/fa'

import './login.css'

export const Login = () => {
    const [listCards, setListCards] = useState([])
    const [file, setFile] = useState(null)
    const [form, setForm] = useState({})
    const [formProduct, setFormProduct] = useState({})
    const [loged, setLoged] = useState('')
    let counter = 0

    useEffect(() => {
        getCards()
    }, [])

    const getCards = async () => {
        const response = await fetch('https://eil-api.onrender.com/api/card/cards')
        const data = await response.json()

        if (data.status == 'success') {
            setListCards(data.cards)
        }

    }

    const getFetch = async (url, body) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        if (data.status == 'success') {
            setLoged('loged')
            localStorage.setItem('jwt', data.token)
        }
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleOnChangeProduct = (e) => {
        const { name, value } = e.target
        setFormProduct({ ...formProduct, [name]: value })
    }

    const handleDelete = async (id) => {
        const result = confirm('Estas seguro de querer eliminar la imagen?')

        if (result) {
            const response = await fetch(`https://eil-api.onrender.com/api/card/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': localStorage.getItem('jwt')
                }
            })
            const data = await response.json()

            getCards()
        }
    }

    const handleCreateCard = async (e) => {
        e.preventDefault()

        const response = await fetch('https://eil-api.onrender.com/api/card/create', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': localStorage.getItem('jwt')
            },
            body: JSON.stringify(formProduct)
        })

        const data = await response.json()

        if (data.status == 'success') {
            console.log('Card creada')
            getCards()
        } else {
            console.log(data.message)
        }
    }

    const handleImage = async (e) => {
        const file = e.target.files[0]
        setFile(file)
    }

    const changeImage = async (e, id) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('file0', file)

        const response = await fetch(`https://eil-api.onrender.com/api/card/upload/${id}`, {
            method: 'POST',
            headers: {
                'authorization': localStorage.getItem('jwt')
            },
            body: formData
        })
        const data = await response.json()

        if (data.status == 'success') {
            console.log(data)
            getCards()
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //const formData = new FormData(form)
        getFetch('https://eil-api.onrender.com/api/user/login', form)
    }
    return (
        <>
            {loged !== 'loged' ?

                <div className='container-login'>
                    <form onSubmit={handleSubmit} className='form-login'>
                        <div className='form-group'>
                            <label htmlFor="email">Correo</label>
                            <input onChange={handleOnChange} type="email" name='email' placeholder='email...' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email">Contraseña</label>
                            <input onChange={handleOnChange} type="password" name='password' placeholder='contraseña...' />
                        </div>
                        <button className='submit-login' type='submit'>Enviar</button>
                    </form>
                </div>

                :

                <div className='container-user-loged'>
                    <div className='create-form'>
                        <form onSubmit={handleCreateCard} className='form-login'>
                            <div className='form-group'>
                                <label htmlFor="title-product">Titulo del producto</label>
                                <input onChange={handleOnChangeProduct} type="text" name="title" placeholder='titulo...' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="description-product">Descripcion del producto</label>
                                <textarea onChange={handleOnChangeProduct} type="text" name="description" placeholder='Descripcion...' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="type">Tipo de producto</label>
                                <input onChange={handleOnChangeProduct} type="text" name="type" placeholder='Tipo de producto...' />
                            </div>
                            <button type='submit' className='submit-login'>Crear producto</button>
                        </form>
                    </div>

                    <div className='cards-loged'>
                        {listCards && listCards.length >= 1 ?
                            listCards.map((card) => {
                                return <div key={card._id} className='card-section'>
                                    <img className='image-card' src={`https://eil-api.onrender.com/api/card/getAvatar/${card.image}`} alt="image-card" />
                                    <form onSubmit={(e) => { changeImage(e, card._id) }}>
                                        <input name='file0' onChange={handleImage} type="file" />
                                        <button><FaCameraRetro className='camera' /></button>
                                    </form>
                                    <h4 className='title-card'>Titulo {card.title}</h4>
                                    <p className='description'>Descripcion {card.description}</p>
                                    <p className='type'>Tipo {card.type}</p>
                                    <button onClick={() => { handleDelete(card._id) }} className='delete-card'>Eliminar producto</button>
                                </div>
                            }) :
                            <div className='card-section'>
                                <img className='image-card' src={`https://eil-api.onrender.com/api/card/getAvatar/image.png`} alt="image-card" />
                                <h4 className='title-card'>Titulo</h4>
                                <p className='description'>Descripcion</p>
                                <p className='type'>Tipo</p>
                            </div>}
                    </div>
                </div>}
        </>
    )
}