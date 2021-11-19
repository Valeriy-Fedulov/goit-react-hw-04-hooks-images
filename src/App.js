import React, { useState } from "react";
import "./App.css";

import { Searchbar } from "./components/searchbar";
import { ImageGallery } from "./components/imagegallery";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [image, setImage] = useState("");
  const [page, setPage] = useState(1);

  function onSubmit(searchImage, defaultPage) {
    setImage(searchImage);
    setPage(1);
  }

  function onClickLMore() {
    setPage(page + 1);
  }

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery image={image} page={page} onClickLMore={onClickLMore} />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
