import React from "react";
import "./App.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import BookList from "./Components/booklist";
import Cart from "./Components/cart";

class App extends React.Component {
  state = {
    books: [],
    searchTerm: ""
  };
  async componentDidMount() {
    const response = await fetch("http://localhost:8082/api/books");
    const json = await response.json();
    this.setState({
      books: json.map(book => {
        return { ...book, inCart: 0 };
      })
    });
  }

  filterBooks = string => {
    this.setState(prevState => {
      return { searchTerm: string };
    });
  };
  addToCart = id => {
    this.setState(prevState => {
      return {
        books: prevState.books.map(book => {
          return {
            ...book,
            inCart: book.id === id ? book.inCart + 1 : book.inCart
          };
        })
      };
    });
  };
  render() {
    let displayBooks = this.state.books.filter(book => {
      return (
        book.title
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );
    });
    let cartBooks = this.state.books.filter(book => {
      return book.inCart > 0;
    });
    return (
      <div className="App">
        <Header filterBooks={this.filterBooks} />
        <div className="content">
          <BookList books={displayBooks} addToCart={this.addToCart} />
          <Cart cartBooks={cartBooks} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
