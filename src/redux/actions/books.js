import { SET_BOOKS } from "../actions/actionTypes";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const setBooks = books => {
  return {
    type: SET_BOOKS,
    payload: books
  };
};

export const fetchBooks = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/books/");
      const books = res.data;
      return setBooks(books);
    } catch (err) {
      console.log(err);
    }
  };
};
