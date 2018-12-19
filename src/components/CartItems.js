import React from 'react';
import CartItemsList from './CartItemsList.js';

const CartItems = (props) => {
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row font-weight-bold">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        <CartItemsList cartItemsList = {props.cartItemsList}/>
      </div>
    </div>
  )
}

export default CartItems