import React from "react";
import "./App.css";
import { Searchbar } from "./components/searchbar";
import { ImageGallery } from "./components/imagegallery";
import { ImageGalleryItem } from "./components/imagegalleryitem";
import { Button } from "./components/button/Button";
import { Loader } from "./components/loader";
import { Modal } from "./components/modal";

class App extends React.Component {
  state = {};

  onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <Loader />
          <ImageGalleryItem />
        </ImageGallery>
        <Button />
        <Modal />
      </>
    );
  }
}

export default App;
