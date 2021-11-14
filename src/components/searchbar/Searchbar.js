import React from "react";
import { toast } from "react-toastify";

class Searchbar extends React.Component {
  state = {
    image: "",
  };

  handleChange = (e) => {
    this.setState({ image: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.image.trim() === "") {
      toast.error("Введите название");
      return;
    }
    this.props.onSubmit(this.state.image, 1);
    this.setState({ image: "" });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
          </button>
          <input
            className="searchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.image}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export { Searchbar };
