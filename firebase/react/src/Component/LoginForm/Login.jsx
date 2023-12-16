/* eslint-disable no-unused-vars */
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
} from "firebase/auth";

import { useState } from "react";

import "./login.css";
import { firbase } from "../../config/firebase";

import User from "../h/User";

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();


const Login = () => {
  const [userData, setUserData] = useState({});
  const auth = getAuth(firbase);

  const handelGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUserData({ ...userData, user });
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  // gitHub login in firbase

  const handelgit = () => {
    const auth = getAuth();
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const loginMicrosoft = new OAuthProvider("microsoft.com")
  const handelmicroSoft = () => {
    signInWithPopup(auth, loginMicrosoft)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a onClick={handelgit}>
                <i className="fa-brands fa-github"></i>
              </a>
              <a onClick={handelGoogle}>
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a onClick={handelmicroSoft}>
                <i className="fa-brands fa-microsoft"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <User userData={userData} />
    </>
  );
};

export default Login;
