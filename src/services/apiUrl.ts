import axios from "axios";

export const apiUrl = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
});
