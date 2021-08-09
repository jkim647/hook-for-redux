import { createReduxModule } from "hooks-for-redux";

const initialState = {};

//In(ReduxStorePropertyName, initialState, Reducer)
//Out(useMyStore,setMyStore -or-myDispatchers, virtualStore)
let authId = 0;
export const [useAuth, { updateAuth, toggleAuth, removeAuth }, authStore] =
  createReduxModule("todos", initialState, {
    updateAuth: (state, emailAndPass) => {
      return Object.assign({}, state, emailAndPass);
    },
    removeAuth: () => {
      return [];
    },
  });
