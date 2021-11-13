import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

class ImageGalleryItem extends React.Component {
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
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const { q, page, key, image_type, orientation, per_page } =
      this.state.options;

    setTimeout(() => {
      axios
        .get(
          `https://pixabay.com/api/?q=${q}&page=${page}&key=${key}&image_type=${image_type}&orientation=${orientation}&per_page=${per_page}`
        )
        .then((response) => {
          this.setState({ arcticles: response.data.hits });
        })
        .finally(() => this.setState({ loading: false }));
    }, 1000);
  }
  render() {
    return (
      <>
        {this.state.loading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {this.state.arcticles.map(({ id, webformatURL, largeImageURL }) => (
          <li key={id} className="gallery-item">
            <img src={webformatURL} alt="" />
          </li>
        ))}
      </>
    );
  }
}

export { ImageGalleryItem };
