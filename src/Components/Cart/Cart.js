import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../Redux/CartSlice'

const Cart = () => {
  const cartData = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(remove(id))
  }

  return (
    <div>
        <h2>Cart</h2>
        {
          cartData && cartData.length > 0 ? (cartData.map((item) => (
            <div className='container mt-2'>
            <div className='row border'>
              <div className='col-md-4'>
                <img src={item.image} alt={item.title} className='img-fluid' />
              </div>
              <div className='col-md-4'>
                <h4>{item.title}</h4>
                <h4>{item.category}</h4>
                <p>{item.description}</p>
              </div>
              <div className='col-md-4'>
                <h5 className='mt-3'>Price: ${item.price}</h5>
                <button className='btn btn-danger'
                onClick={()=>{handleRemove(item.id)}}
                >Remove</button>
              </div>
            </div>
            </div>
          ))) : <p>No Data Found</p>
        }
    </div>
  )
}

export default Cart