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
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
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
