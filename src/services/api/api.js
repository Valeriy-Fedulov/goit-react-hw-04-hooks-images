import axios from "axios";

function fetchImage(query, page) {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=8645843-73f0b565a99dd2126325d1c4b&image_type=photo&orientation=horizontal&per_page=12`
  );
}

const api = { fetchImage };

export default api;
