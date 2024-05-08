import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../Redux/ProductSlice';

const Products = () => {
  // const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.data)
  console.log(products)
  
  useEffect(() => {
    // getProducts();
    dispatch(fetchProducts())
  }, [])

  // const getProducts = async () => {
  //   const response = await fetch('https://fakestoreapi.com/products')
  //   const data = await response.json()
  //   setProducts(data)
  // }

  return (
    <div>
      <h2>Products</h2>
      <div className='container'>
        <div className='row'>
          {
            products && products.length > 0 ? (
              products.map((item, index) => (
                <div className='col-md-3 mt-4'>
                  <div className='card p-2'>
                    <Link to={`/product/${item.id}`}>
                      <img src={item.image} alt={item.title}
                        style={{ height: "250px", width: '200px' }}
                      />
                      <h5>{item.title}</h5>
                      <h6>{item.price}</h6>
                    </Link>
                  </div>
                </div>
              ))
            ) : <p>Loading...</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Products