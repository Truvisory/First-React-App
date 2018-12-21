import React, { Component } from 'react'
import './App.css'
import CartHeader from './components/CartHeader.js'
import CartFooter from './components/CartFooter.js'
import CartItems from './components/CartItems.js'
import AddItem from './components/AddItem.js'
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
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },],
      OrderList: [],
      quantClass: "form-control",
      placeHolder: ""
    }
  }

  addToCart = (e) => { e.preventDefault()
    let filteredProducts = this.state.products.filter((stuff) => stuff.id === e.target[1].value *1)
    let order = {
      order: {
        product: {
        name: filteredProducts[0].name,
        id: e.target[1].value,
        priceInCents: filteredProducts[0].priceInCents},
      quantity: e.target[0].value,
      subTotal: filteredProducts[0].priceInCents * e.target[0].value}}
    e.target[0].value < 1
      ? this.setState( {
          quantClass: "form-control alert-warning", 
          placeHolder: "Please Enter 1 or Greater"})
      : this.setState( {
          OrderList: [...this.state.OrderList, order],
          quantClass: "form-control", 
          placeHolder: ""})
    e.target.reset()}

  render() { 
    return (
      <div>
        <CartHeader />
        <CartItems
          cartItemsList = {this.state.OrderList} />
        <Total 
          orderList = {this.state.OrderList} />
        <AddItem
          products = {this.state.products}
          addToCart = {this.addToCart} 
          quantClass = {this.state.quantClass}
          placeHolder = {this.state.placeHolder}/>
        <CartFooter
          copyright = {new Date().getFullYear()} />
      </div>
    )
  }
}

export default App;