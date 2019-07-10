import React from "react";
import "../App.css";
import SearchBar from "./searchbar";

const Header = ({ filterBooks }) => {
  return (
    <div className="navbar">
      <a className="headerTitle gridItem" href="/">
        Bookstore #928281
      </a>
      <SearchBar filterBooks={filterBooks} />
    </div>
  );
};

export default Header;
