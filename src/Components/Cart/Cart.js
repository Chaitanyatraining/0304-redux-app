import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartData = useSelector((state) => state.cart)

  return (
    <div>
        <h2>Cart</h2>

    </div>
  )
}

export default Cart