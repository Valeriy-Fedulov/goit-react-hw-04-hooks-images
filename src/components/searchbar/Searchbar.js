import React from "react";
import axios from "axios";

class Searchbar extends React.Component {
  state = {
    options: {
      q: "cat",
      page: 1,
      key: "8645843-73f0b565a99dd2126325d1c4b",
      image_type: "photo",
      orientation: "horizontal",
      per_page: 12,
    },
    arcticles: [],
  };

  componentDidMount() {
    const { q, page, key, image_type, orientation, per_page } =
      this.state.options;
    axios
      .get(
        `https://pixabay.com/api/?q=${q}&page=${page}&key=${key}&image_type=${image_type}&orientation=${orientation}&per_page=${per_page}`
      )
      .then((response) => {
        this.setState({ arcticles: response.data.hits });
      });
  }

  render() {
    console.log(this.state.arcticles);
    return (
      <header className="searchbar">
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export { Searchbar };
