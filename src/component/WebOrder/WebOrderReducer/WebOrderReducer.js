import { createReduxModule } from "hooks-for-redux";

const initialState = {
  orderId: [],
  error: "",
  loading: false,
  showHelpSection: false,
};
export const [
  useWebOrderList,
  {
    updateWebOrderList,
    updateLoading,
    updateErrorMessage,
    updateShowHelpSection,
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
    const obj = {};
    obj["orderId"] = webOrders;
    return Object.assign({}, state, obj);
  },
});
