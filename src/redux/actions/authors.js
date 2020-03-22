import { SET_AUTHORS } from "../actions/actionTypes";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAuthors = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/authors/");

      dispatch({ type: SET_AUTHORS, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
};
