import React from 'react';

const CartFooter = (props) => {
    return (
      <nav className="navbar navbar-dark bg-dark fixed-bottom">
      <a className="navbar-brand" href="/#">&copy; { props.copyright }</a>
      </nav>
    )
  }


export default CartFooter