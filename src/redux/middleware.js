import firebase from "firebase";

export async function getPermisison(email, password) {
  const result = {
    user: null,
    error: null,
  };
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(async ({ user }) => {
      await firebase
        .database()
        .ref(`/users/${user.uid}`)
        .once("value")
        .then((snapshop) => {
          const userDetail = snapshop.val();
          console.log(userDetail);
          if (userDetail.roles === 0) {
            sessionStorage.setItem("role", "REACT_APP_ADMIN_ROLE");
            sessionStorage.setItem("outlet_id", userDetail.outlet_id);
            sessionStorage.setItem("uid", user.uid);
            sessionStorage.setItem("name", userDetail.name);
          }
          result.user = true;
        });
    })
    .catch((err) => (result.error = err.message));
  return result;
}
