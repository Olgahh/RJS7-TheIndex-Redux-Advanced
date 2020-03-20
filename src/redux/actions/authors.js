import { SET_AUTHORS } from "../actions/actionTypes";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const setAuthors = authors => {
  return {
    type: SET_AUTHORS,
    payload: authors
  };
};

export const fetchAuthors = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/authors/");
      const authors = res.data;
      dispatch(setAuthors(authors));
    } catch (err) {
      console.log(err);
    }
  };
};
