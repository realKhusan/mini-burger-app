import axios from "axios";

const mainApi = axios.create({
  baseURL: "https://494e16c79f75151d.mokky.dev",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default mainApi;
