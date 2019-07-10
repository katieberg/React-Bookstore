import React from "react";
import "../App.css";
import Book from "./bookitem";

class BookList extends React.Component {
  render() {
    const { books, addToCart } = this.props;
    return (
      <div className="bookContainer">
        {books.map(book => {
          return <Book book={book} addToCart={addToCart} />;
        })}
      </div>
    );
  }
}

export default BookList;
