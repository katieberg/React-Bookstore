import React from "react";

class BookItem extends React.Component {
  render() {
    const { book, addToCart } = this.props;
    const clickHandler = () => {
      console.log(book);
      addToCart(book.id);
    };
    return (
      <div className="book" key={book.index}>
        <h2>{book.title}</h2>
        <div>{book.author}</div>
        <button onClick={clickHandler}>Add To Cart ${book.price}</button>
      </div>
    );
  }
}

export default BookItem;
