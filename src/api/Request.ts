import axios from "axios";

const mainApi = axios.create({
  baseURL: "https://d54757447b9c0307.mokky.dev",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default mainApi;
