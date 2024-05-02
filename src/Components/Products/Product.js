import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { add } from '../../Redux/CartSlice'
import axios from 'axios'

const Product = () => {
    const [product, setProduct] = useState({})

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const {data} = await axios(`https://fakestoreapi.com/products/${id}`)
        setProduct(data)
    }

    const handleAdd = (product) => {
        dispatch(add(product)
    )
    }

    return (
        <div>
            <h2>Product</h2>
            <div className='container'>
                <div>
                    {
                        product && Object.keys(product) ? (
                            <div className='row'>
                                <div className='col-md-6'>
                                    <img src={product.image} alt={product.title} 
                                     className='img-fluid'
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <h4>{product.title}</h4>
                                    <h5>{product.category}</h5>
                                    <span className='bg-primary text-white'> Price : ${product.price}</span>
                                    <p>{product.description}</p>
                                    <button className='btn btn-warning'
                                    onClick={() => {handleAdd(product)}}
                                    >Add to Cart</button>
                                </div>
                            </div>
                        ) : <p>Loading</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Product