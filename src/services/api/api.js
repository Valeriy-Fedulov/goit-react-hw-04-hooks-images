import axios from "axios";

function fetchImage(query, page) {
  axios.defaults.baseURL = "https://pixabay.com/api";
  axios.defaults.params = {
    q: query,
    page: page,
    key: "8645843-73f0b565a99dd2126325d1c4b",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 12,
  };
  return axios.get();
}

const api = { fetchImage };

export default api;
