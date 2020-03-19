import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

import { fetchAllAuthors } from "./actions";
import { fetchAllBooks } from "./actions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchAllAuthors());
store.dispatch(fetchAllBooks());
export default store;
