import { createReduxModule } from "hooks-for-redux";

const initialState = {
  orderId: [],
  error: "",
  loading: false,
  showHelpSection: false,
  loaded: false,
  orderNumberTarget: "",
};
export const [
  useWebOrderList,
  {
    updateWebOrderList,
    updateLoading,
    updateErrorMessage,
    updateShowHelpSection,
    updateOrderNumberValueStore,
    updateIndexTarget,
    unmountReducer,
  },
  webOrder,
] = createReduxModule("webOrder", initialState, {
  updateShowHelpSection: (state, show) => {
    return Object.assign({}, state, show);
  },
  updateErrorMessage: (state, error) => {
    return Object.assign({}, state, error);
  },
  updateLoading: (state, loading) => {
    return Object.assign({}, state, loading);
  },
  updateWebOrderList: (state, webOrders) => {
    console.log(state);
    const orderNumberValueStore = [];
    const obj = {};
    obj["orderId"] = webOrders;
    return Object.assign({}, state, obj);
  },
  updateOrderNumberValueStore: (state, orderNumber) => {
    return Object.assign({}, state, orderNumber);
  },
  updateIndexTarget: (state, indexTarget) => {
    return Object.assign({}, state, indexTarget);
  },
  updateButton: (state, status) => {
    return Object.assign({}, state, status);
  },
  unmountReducer: (state) => {
    return Object.assign({}, state, initialState);
  },
});
