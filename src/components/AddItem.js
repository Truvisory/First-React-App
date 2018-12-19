import React from 'react';

const AddItem = (props) => {
    return (
        <div className="container">
        <form id="form">
            <div >
            <div className="form-group">
                <label>Quantity</label>
                <input
                    type="number"
                    className="form-control"
                    id="formQuantity"
                    aria-describedby="emailHelp"
                    name="Quantity"
                    onChange={props.onChange}/>
            </div>
            <div className="form-group">
                <label>Products</label>
                <select
                    className="form-control"
                    id="formSelect"
                    name="products"
                    onChange={props.onSelect}>
                        <option
                            className="form-control"
                            id="disabledInput"
                            type="text"
                            placeholder="Select an option...">Select an option...
                        </option>
                        {props.products.map(prod => <option key={prod.id} id={prod.id} value={prod.id}>{prod.name}</option>)}
                </select>
            </div>
            <button 
                type="submit"
                className="btn btn-primary"
                onClick={props.addToCart}>Submit</button>
            </div>
        </form>
        </div>
  )
}

export default AddItem
