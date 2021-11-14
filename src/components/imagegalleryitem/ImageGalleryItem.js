import React from "react";

const ImageGalleryItem = ({ arcticles, toggleModal }) => {
  return (
    <>
      {arcticles.map(({ id, webformatURL, largeImageURL }) => (
        <li key={id} className="ImageGalleryItem">
          <img
            className="ImageGalleryItem-image"
            src={webformatURL}
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
