import React from "react";

const ImageGalleryItem = ({ arcticles, toggleModal }) => {
  return (
    <>
      {arcticles.map(({ id, webformatURL, largeImageURL }) => (
        <li key={id} className="imageGalleryItem">
          <img
            className="webformatURL"
            src={largeImageURL}
            alt=""
            data-largeimage={largeImageURL}
            onClick={toggleModal}
          />
        </li>
      ))}
    </>
  );
};

export { ImageGalleryItem };
