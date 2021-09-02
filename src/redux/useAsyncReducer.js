import { useEffect, useState } from "react";
import { useStore, useSelector } from "react-redux";
import { combineReducers } from "redux";
import reducerRegistry from "./reducerRegistry";

export const useAsyncReducer = () => {
  const store = useStore();
  let reducer = {};

  useSelector((state) => {
    reducer = state;
  });
  console.log(reducer);
  const deregister = () => {
    delete reducer["webOrder"];
  };
  store.replaceReducer(reducer);
};
