import { createReduxModule } from "hooks-for-redux";

const initialState = {
  loading: false,
  error: null,
};

export const [useLoading, { setTrue, setFalse }] = createReduxModule(
  "loadingStatus",
  initialState,
  {
    setTrue: (status, value) => {
      return {
        ...status,
        value,
      };
    },
    setFalse: (status, value) => {
      return {
        ...status,
        value,
      };
    },
  }
);
