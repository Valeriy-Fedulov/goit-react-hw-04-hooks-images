import React from "react";

class Searchbar extends React.Component {
  state = {
    image: "",
  };

  handleChange = (e) => {
    this.setState({ image: e.currentTarget.value });
    console.log(this.state.image);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.image);
    this.setState({ image: "" });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
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
