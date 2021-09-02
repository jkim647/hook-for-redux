import { SettingsInputAntennaTwoTone } from "@material-ui/icons";
import { createReduxModule, setStore } from "hooks-for-redux";

const initialState = { LoggedIn: false };

//In(ReduxStorePropertyName, initialState, Reducer)
//Out(useMyStore,setMyStore -or-myDispatchers, virtualStore)
let authId = 0;
export const [
  useAuth,
  { updateAuth, toggleAuth, removeAuth, LogIn, signOut },
  authStore,
] = createReduxModule("todos", initialState, {
  updateAuth: (state, emailAndPass) => {
    return Object.assign({}, state, emailAndPass);
  },
  signOut: (state) => {
    return Object.assign({}, state, {
      LoggedIn: false,
      email: "",
      password: "",
    });
  },
  LogIn: (state) => {
    console.log(state);
    return Object.assign({}, state, { LoggedIn: true });
  },
  removeAuth: () => {
    return [];
  },
});
