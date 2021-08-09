// store.js
import { setStore } from "hooks-for-redux";
import { useLoading } from "./redux/loadingReducer";
import { applyMiddleware } from "redux";
import { createStore } from "redux";

// example middle-ware
const logDispatch = (store) => (next) => (action) => {
  console.log(store);
  console.log("dispatching", action);
  return next(action);
};

export default setStore(createStore({}, applyMiddleware(logDispatch)));
