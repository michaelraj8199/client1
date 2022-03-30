import React from "react";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import "../component/Login.css"

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://www.freepnglogos.com/uploads/whatsapp-logo-light-green-png-0.png"
          alt="logo"
        ></img>
        <div className="login_text">
          <h1> Sign in to whatupapp</h1>
        </div>
        <Button onClick={signIn}>Sign in with google</Button>
      </div>
    </div>
  );
};

export default Login;
