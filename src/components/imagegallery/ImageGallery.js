import React from "react";
import axios from "axios";

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
    if (
      prevProps.image !== this.props.image ||
      prevProps.page !== this.props.page
    ) {
      this.fetchApi(this.props.image);
    }
  }

  fetchApi(query = "") {
    this.setState({ loading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${this.props.page}&key=8645843-73f0b565a99dd2126325d1c4b&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) => {
        if (this.props.page === 1) {
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
    return (
      <>
        {this.state.loading && <Loading />}
        {this.state.arcticles.length > 0 ? (
          <>
            <ul className="ImageGallery">
              <ImageGalleryItem
                arcticles={this.state.arcticles}
                toggleModal={this.toggleModal}
              />
            </ul>
            <Button
              onClickLMore={this.props.onClickLMore}
              scrollDown={this.scrollDown}
            />
          </>
        ) : (
          !this.state.loading && (
            <div className="NothingFound">
              <h2>Nothing found</h2>
            </div>
          )
        )}
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImage={this.state.largeImage}
          />
        )}
      </>
    );
  }
}

export { ImageGallery };
