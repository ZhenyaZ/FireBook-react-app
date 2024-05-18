import React from 'react'
import CartItems from './CartItems/CartItems'
import Header from '../Header/Header'

function Cart() {
  return (
    <>
    <div className="content-wrapper">
        <Header/>
        <div className="cart-content">
        <CartItems/>
        <p>sdf</p>
        </div>
    </div>
        
    </>
  )
}

export default Cart