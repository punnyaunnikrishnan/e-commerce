

import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


// importing components
import CheckOut from "./CheckOut";
import LogIn from "./LogIn";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import Orders from "./Orders";


const promise = loadStripe("pk_test_51KaiMcSIwdzlr1J1NSBExLYGyCc0Z5UQ9ZT3Umf3w2EglPHQbHtwiHhgXvEI2nOl1KpzVXrSaNoexcs9E16hA53O00OM7gVKyO")

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    //run only once when the app component loads
    //to know whether theres a user
    //logged in or out
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //user logged in/was logged before
        dispatch({
          type: "SET_USER",
          user: authUser, //from firebase
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null, //from firebase
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route exact path="/checkout" element={!user ? <LogIn /> : <CheckOut />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} />
      </Routes>
    </div>
  );
}

export default App;
