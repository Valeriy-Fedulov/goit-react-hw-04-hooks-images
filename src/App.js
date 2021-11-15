import React from "react";
import "./App.css";

import { Searchbar } from "./components/searchbar";
import { ImageGallery } from "./components/imagegallery";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  state = {
    image: "",
    page: 1,
  };

  onSubmit = (image, page) => {
    this.setState({ image, page });
  };

  onClickLMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { image, page } = this.state;
    const { onSubmit, onClickLMore } = this;

    return (
      <div className="App">
        <Searchbar onSubmit={onSubmit} />
        <ImageGallery image={image} page={page} onClickLMore={onClickLMore} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
