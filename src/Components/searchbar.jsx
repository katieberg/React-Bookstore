import React from "react";

class SearchBar extends React.Component {
  state = {
    value: ""
  };
  filterBooks = this.props.filterBooks;
  changeHandler = e => {
    this.setState({
      value: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
    this.filterBooks(this.state.value);
  };
  render() {
    return (
      <form className="gridItem" onSubmit={this.submitHandler}>
        <input
          type="text"
          className="searchBox"
          onChange={this.changeHandler}
          placeHolder="Search..."
        />
        <input type="submit" style={{ display: "none" }} />
      </form>
    );
  }
}

export default SearchBar;
