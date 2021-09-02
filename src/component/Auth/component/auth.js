import react, { useState } from "react";
import { SignIn } from "../../../redux/middleware";

import {
  updateAuth,
  LogIn,
  signOut,
  useAuth,
} from "../../Auth/authReducer/authReducer";

const Auth = () => {
  const { LoggedIn } = useAuth();
  const [email, setEmail] = useState("tony@highgroup.nz");
  const [password, setPassword] = useState("~^>&<Ce>X?8?w;td");
  console.log(LoggedIn);

  const SignIn = (event) => {
    event.preventDefault();
    const obj = {
      email: email,
      password: password,
    };
    updateAuth(obj);
    LogIn();
  };
  const SignOut = (event) => {
    event.preventDefault();
    signOut();
  };

  return (
    <form>
      <div className="container">
        <label>
          <b>Email</b>
        </label>
        <input
          value={email}
          type="text"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>
          <b>Password</b>
        </label>
        <input
          value={password}
          type="text"
          placeholder="Enter password"
          onChange={(event) => setPassword(event.target.value)}
        />
        {LoggedIn ? (
          <button onClick={SignOut}>Log out</button>
        ) : (
          <button onClick={SignIn}>Login</button>
        )}
      </div>
    </form>
  );
};

export default Auth;
