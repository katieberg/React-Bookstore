import React from "react";
import "../App.css";

class Cart extends React.Component {
  render() {
    const { cartBooks } = this.props;
    let total = 0;
    const cartItem = cartBooks.map(cartBook => {
      total += cartBook.price * cartBook.inCart;
      return (
        <div>
          <h3 className="cartItem">{cartBook.title}</h3>
          <p className="cartItem">{cartBook.author}</p>
          <p className="cartItem">${cartBook.price}</p>
          <p className="cartItem">Number in cart: {cartBook.inCart}</p>
        </div>
      );
    });
    return (
      <div className="cart">
        <div className="cartItemSpace">
          <h1>Shopping Cart</h1>
          <div>
            {total != 0 ? cartItem : "There are no items in your cart."}
          </div>

          <h2 className="cartItem">Total: ${total}</h2>
        </div>
      </div>
    );
  }
}

export default Cart;
