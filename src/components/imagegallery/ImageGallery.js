import React, { useState, useEffect } from "react";
import imageAPI from "../../services/api/api";

import { ImageGalleryItem } from "../imagegalleryitem";
import { Button } from "../button";
import { Loading } from "../loader";
import { Modal } from "../modal";

function ImageGallery(props) {
  const { image, page, onClickLMore } = props;

  const [arcticles, setArcticles] = useState([]);
  const [largeImage, setLargeImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => fetchApi(), []);

  useEffect(() => fetchApi(image), [image, page]);

  function fetchApi(query = "") {
    setLoading(true);

    imageAPI
      .fetchImage(query, page)
      .then((response) => {
        if (page === 1) {
          setArcticles(response.data.hits);
          setLoading(false);
        } else {
          setArcticles((prevArcticles) =>
            prevArcticles.concat(response.data.hits)
          );
          setLoading(false);
          scrollDown();
        }
      })
      .catch((error) => console.log(error));
  }

  function toggleModal(e) {
    if (!showModal) setLargeImage(e.target.dataset.largeimage);
    setShowModal(!showModal);
  }

  function scrollDown() {
    window.scrollTo({
      top: window.innerHeight + window.scrollY,
      behavior: "smooth",
    });
  }

  return (
    <>
      {loading && <Loading />}
      {arcticles.length > 0 ? (
        <>
          <ul className="ImageGallery">
            <ImageGalleryItem arcticles={arcticles} toggleModal={toggleModal} />
          </ul>
          <Button onClickLMore={onClickLMore} scrollDown={scrollDown} />
        </>
      ) : (
        !loading && (
          <div className="NothingFound">
            <h2>Nothing found</h2>
          </div>
        )
      )}
      {showModal && <Modal onClose={toggleModal} largeImage={largeImage} />}
    </>
  );
}

export { ImageGallery };
