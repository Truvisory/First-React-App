import React from 'react';

const CartItemsList = (props) => {
  return (
        props.cartItemsList.map((product, idx) => 
            <div className="list-group-item collection-item" key={idx}>
                <div className="row">
                    <div className="col-md-8">{product.order.product.name}</div>
                    <div className="col-md-2">${(product.order.product.priceInCents/100).toFixed(2)}</div>
                    <div className="col-md-2">{product.order.quantity}</div>
                </div>
            </div>
        )
  )
}

export default CartItemsList