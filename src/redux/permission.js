import { createReduxModule } from "hooks-for-redux";
import { authStore } from "../component/Auth/authReducer/authReducer";
import { getPermisison, signOut } from "../redux/middleware";
const initialState = {};

export const [usePermission, { setPermission }] = createReduxModule(
  "permission",
  initialState,
  {
    setPermission: (state, permission) => Object.assign({}, state, permission),
  }
);

authStore.subscribe(({ email, password, LoggedIn }) => {
  if (email && password) {
    setPermission({ loading: true });
    getPermisison(email, password).then((result) => {
      console.log(result);
      setPermission(result);
      setPermission({ loading: false });
    });
  }

  if (!LoggedIn && email === "" && password === "") {
    signOut();
    setPermission({ user: false });
  }
});
