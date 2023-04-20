import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "7bbe6c33f7200695a00eeed84fcb5fa9",
    language: "pt-BR",
    include_adult: false,
  },
});

export default api;
