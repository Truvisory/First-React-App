import React from 'react';

const Total = (props) => {
    return (
            <div className="container font-weight-bold">
                <p>Total Price: ${(props.orderList.map((total) => total.order.subTotal).reduce((acc,cur) => acc + cur, 0)/100).toFixed(2)}</p>
            </div>
    )
}

export default Total