import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const signin = (e) => {
    e.preventDefault();
    //firebase
    auth
      .signInWithEmailAndPassword(email, password)

      .then((auth) => {
        console.log(auth.user.auth);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    //firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //creates a new user with email and password
        console.log(auth);
        if (auth) {
          navigate("/"); //once created ac moves to homepage
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png"
          alt="logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)} //r,ra,ran
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <button type="submit" onClick={signin} className="login_signin">
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree to Amazon-clone's conditions of Use & sale.
        </p>

        <button onClick={register} className="login_register">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default LogIn;