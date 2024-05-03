import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { add } from '../../Redux/CartSlice'
import axios from 'axios'
import { ArrowLeft } from 'react-feather'

const Product = () => {
    const [product, setProduct] = useState({})
    const [added, setAdded] = useState(false)
    const navigate = useNavigate()

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
        dispatch(add(product))
        setAdded(true)
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
            <ArrowLeft size={20} onClick={()=>{navigate(-1)}} />
            <h2>Product</h2>
            </div>
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
                                    >{added ? "Added" : "Add to Cart"}</button>
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