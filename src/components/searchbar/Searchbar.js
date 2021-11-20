import React, { useState } from "react";
import { toast } from "react-toastify";

function Searchbar({ onSubmit }) {
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (image.trim() === "") {
      toast.error("Введите название");
      return;
    }
    onSubmit(image);
    setImage("");
  }

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={image}
          onChange={(e) => setImage(e.currentTarget.value)}
        />
      </form>
    </header>
  );
}

export { Searchbar };
