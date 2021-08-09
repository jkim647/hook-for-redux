import firebase from "firebase/app";
import { Page1 } from "../src/component/page1";
import { Page2 } from "../src/component/page2";
import Auth from "../src/component/Auth/component/auth";
import { firebaseConfig } from "./firebaseConfig";

import "./App.css";
import { usePermission } from "../src/redux/permission";

function App() {
  const { loading, user, error } = usePermission();

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  return (
    <div className="App">
      <Page1 />
      <Page2 />
      <Auth />
      {loading ? <p>Loading</p> : <p></p>}
      {error ? <p>{error}</p> : <p>{user}</p>}
    </div>
  );
}

export default App;
