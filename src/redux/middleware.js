import firebase from "firebase";
import { useLoading } from "./loadingReducer";

export async function getPermisison(email, password) {
  const result = {
    user: null,
    error: null,
  };
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => (result.user = user))
    .catch((err) => (result.error = err.message));
  return result;
}
