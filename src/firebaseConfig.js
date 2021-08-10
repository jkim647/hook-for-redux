import axios from "axios";
import firebase from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyDAt7l27xk-GGz1I6OoUQGXV0FJEeVVTKc",
  authDomain: "shosha-careers.firebaseapp.com",
  databaseURL: "https://shosha-careers.firebaseio.com",
  projectId: "shosha-careers",
  storageBucket: "shosha-careers.appspot.com",
  messagingSenderId: "832598577592",
  appId: "1:832598577592:web:213b12c5100e6cb5de3f4d",
  measurementId: "G-6GM46LB5CV",
};

const instance = axios.create({
  baseURL: "https://api.crownvape.co.nz" || "https://api.batteryvape.com",
});

instance.interceptors.request.use(
  async (config) => {
    if (firebase.auth().currentUser != null) {
      console.log("get token");
      const idTokenfinal = await firebase.auth().currentUser.getIdToken();
      config.headers["id-token"] = idTokenfinal;
    }
    console.log(firebase.auth());
    return Promise.resolve(config);
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { instance };
