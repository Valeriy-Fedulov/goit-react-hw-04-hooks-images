import React from "react";
import imageAPI from "../../services/api/api";

import { ImageGalleryItem } from "../imagegalleryitem";
import { Button } from "../button";
import { Loading } from "../loader";
import { Modal } from "../modal";

class ImageGallery extends React.Component {
  state = {
    arcticles: [],
    largeImage: "",
    loading: false,
    error: null,
    showModal: false,
  };

  componentDidMount() {
    this.fetchApi();
  }

  componentDidUpdate(prevProps, prevState) {
    const { image, page } = this.props;

    if (prevProps.image !== image || prevProps.page !== page) {
      this.fetchApi(image);
    }
  }

  fetchApi(query = "") {
    const { page } = this.props;

    this.setState({ loading: true });

    imageAPI
      .fetchImage(query, page)
      .then((response) => {
        if (page === 1) {
          this.setState({
            arcticles: response.data.hits,
            loading: false,
          });
        } else {
          this.setState((prevState) => ({
            arcticles: prevState.arcticles.concat(response.data.hits),
            loading: false,
          }));
          this.scrollDown();
        }
      })
      .catch((error) => this.setState({ error }));
  }

  toggleModal = (e) => {
    if (!this.state.showModal)
      this.setState({ largeImage: e.target.dataset.largeimage });
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  scrollDown() {
    window.scrollTo({
      top: window.innerHeight + window.scrollY,
      behavior: "smooth",
    });
  }

  render() {
    const { loading, arcticles, showModal, largeImage } = this.state;
    const { toggleModal, scrollDown } = this;
    return (
      <>
        {loading && <Loading />}
        {arcticles.length > 0 ? (
          <>
            <ul className="ImageGallery">
              <ImageGalleryItem
                arcticles={arcticles}
                toggleModal={toggleModal}
              />
            </ul>
            <Button
              onClickLMore={this.props.onClickLMore}
              scrollDown={scrollDown}
            />
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
}

export { ImageGallery };
