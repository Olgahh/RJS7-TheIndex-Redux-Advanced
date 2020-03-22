import { SET_BOOKS } from "../actions/actionTypes";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchBooks = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/books/");
      dispatch({
        type: SET_BOOKS,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};
