import React from 'react';

const AddItem = (props) => {
    return (
        <div className="container">
        <form id="form" className="form-group" onSubmit={props.addToCart}>
            <div >
            <div className="form-group has-danger">
                <label>Quantity</label>
                <input
                    type="number"
                    className={props.quantClass}
                    id="formQuantity"
                    aria-describedby="emailHelp"
                    name="Quantity"
                    placeholder={props.placeHolder}
                    />
            </div>
            <div className="form-group">
                <label>Products</label>
                <select
                    className="form-control"
                    id="formSelect"
                    name="products">
                        <option
                            className="form-control"
                            id="disabledInput"
                            type="text"
                            placeholder="Select an option..."
                            value="0">Select an option...
                        </option>
                        {props.products.map(prod => <option placeholder="Select an option..." key={prod.id} id={prod.id} value={prod.id}>{prod.name}</option>)}
                </select>
            </div>
            <button 
                type="submit"
                className="btn btn-primary"
                >Submit</button>
            </div>
        </form>
        </div>
  )
}

export default AddItem
