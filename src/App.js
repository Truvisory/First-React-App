import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader.js'
import CartFooter from './components/CartFooter.js'
import CartItems from './components/CartItems.js'
import AddItem from './components/AddItem.js';
import Total from './components/Total.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      list: {
        product: {
          name: "",
          id: "",
          priceInCents: ""
        },
        quantity: 0,
        subTotal: 0
      }, 
      OrderList: []
    };
  }
  
  onChange = (e) => {
    console.log(e.target.value)
    const val = e.target.value;
    this.setState((state) => {
      state.list.quantity = val
      return state;
    })
  }

  onSelect = (e) => {
    e.preventDefault()
    let filteredProducts = this.state.products.filter((stuff) => stuff.id === e.target.value *1)
    this.setState({
      list: {
      product: {
        name: filteredProducts[0].name,
        id: e.target.value,
        priceInCents: filteredProducts[0].priceInCents
      },
      quantity: this.state.list.quantity,
      subTotal: filteredProducts[0].priceInCents * this.state.list.quantity
    }
    })
  }

  addToCart = (e) => {
    e.preventDefault()
    if(document.getElementById('formQuantity').value.length === 0) {
    }
    else {
      let order = {
        order: {...this.state.list},
        orderId: this.state.OrderList.length + 1
      }
      this.setState({
        OrderList: [...this.state.OrderList, order]
      })
      document.getElementById('form').reset()
    }
  }
  
  render() {
    console.log(this.state.OrderList)
    
    let cartItemsList = this.state.OrderList
    
    return (
      <div>
        <CartHeader />
        <CartItems
          cartItemsList = {cartItemsList} />
        <Total 
          orderList = {this.state.OrderList}/>
        <AddItem
          products = {this.state.products}
          onSelect = {this.onSelect}
          onChange = {this.onChange}
          addToCart = {this.addToCart} />
        <CartFooter
          copyright = {new Date().getFullYear()} />
      </div>
    );
  }
}

export default App;
