import { useStore, useSelector } from "react-redux";

export class ReducerRegistry {
  constructor() {
    this._emitChange = null;
    this._reducers = {};
  }

  deregister(name) {
    delete this._reducers[name];
    if (this._emitChange) {
      this._emitChange(this.getReducers());
    }
  }
  setChangeListener(listener) {
    this._emitChange = listener;
  }
}

const reducerRegistry = new ReducerRegistry();

export default reducerRegistry;
