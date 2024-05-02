import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Products/Products'
import Product from '../Products/Product'
import Cart from '../Cart/Cart'

const Routing = () => {
    return (
        <Routes>
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<Product />} /> 
        </Routes>
    )
}

export default Routing