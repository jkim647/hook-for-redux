import react, { useEffect } from "react";
import firebase from "firebase/app";
import { Page1 } from "../src/component/page1";
import Auth from "../src/component/Auth/component/auth";
import { WebOrders } from "../src/component/WebOrder/component/webOrder";
import { firebaseConfig } from "./firebaseConfig";
import { instance } from "./firebaseConfig";
import "./App.css";
import { usePermission } from "../src/redux/permission";
import { getStore, createStore } from "hooks-for-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  useSelector((state) => {
    console.log(state);
  });
  const { user, error, loading } = usePermission();
  console.log(user);

  const setStore = () => {
    createStore({});
    console.log(getStore().getState());
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  return (
    <Router>
      <div className="App">
        <button>
          <Link to="/page1">About</Link>
        </button>
        <button>
          <Link to="/default">Default</Link>
        </button>
        <button onClick={setStore}>Initialize</button>
        {/* <Page1 />
      <Page2 />
      <Auth />
    
      {loading ? <p>Loading</p> : <p></p>}
      {error ? <p>{error}</p> : <p>{user}</p>} */}
      </div>
      <Switch>
        <Route path="/default">
          <Auth />
          <p>test</p>
          {user && <WebOrders />}
          {loading ? <p>Loading</p> : <p></p>}
          {error ? <p>{error}</p> : <p>{user}</p>}
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
