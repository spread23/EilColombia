import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Navbar } from './components/navbar/Navbar'
import { Home } from './routes/home/Home'
import { About } from './routes/about/About'
import { Products } from './routes/products/Products'
import { Contact } from './routes/contact/Contact'
import { Footer } from './components/footer/Footer'
import { Login } from './components/login/Login'

export const App = () => {
    return (
        <>
            <Navbar />
            <Routes>

                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/products' element={<Products />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/*' element={<Navigate to='/' />}></Route>
                <Route path='/login' element={<Login></Login>}></Route>

            </Routes>
            <Footer />
        </>
    )
}