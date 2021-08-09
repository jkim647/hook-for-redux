import react, { useState } from "react";
import { SignIn } from "../../../redux/middleware";

import {
  updateAuth,
  useAuth,
  auth as Test,
} from "../../Auth/authReducer/authReducer";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitAuth = (event) => {
    event.preventDefault();
    const obj = {
      email: email,
      password: password,
    };
    updateAuth(obj);
  };

  return (
    <form onSubmit={SubmitAuth}>
      <div className="container">
        <label>
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>
          <b>Password</b>
        </label>
        <input
          type="text"
          placeholder="Enter password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <button>Register</button>
      </div>
    </form>
  );
};

export default Auth;
