/* eslint-disable react/no-unescaped-entities */
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import style from "../../../style/Login.module.css";
import auth from "../../../firebase/firebase.config";
import { toast } from "react-toastify";

const Login = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  const navigate = useNavigate();

  const handelChang = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    if (user) {
      toast.success("singUp successfull");
      navigate("/");
    } else {
      toast.error("Don't have an account");
    }
  };

  // Google auth
  const handelLoginGoogle = async () => {
    await signInWithGoogle();
    toast.success("singUp successfull");
    navigate("/");
  };

  // Git auth
  const handelLoginGithub = async () => {
    await signInWithGithub();
    toast.success("singUp successfull");
    navigate("/");
  };

  return (
    <div className={`${style.innerLogin} container`}>
      <div className={style.innerform}>
        <form onSubmit={handelSubmit}>
          <h1>Log in</h1>
          <div className={`${style.name}`}>
            <input
              value={email}
              onChange={handelChang}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your enail"
            />
          </div>
          <div className={`${style.password}`}>
            <input
              onChange={handelChang}
              value={password}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className={`${style.btn}`}>
            <input type="submit" value="Log In" required />
          </div>
        </form>
        <p>
          Don't have an account?<NavLink to="/singup"> Create a free account</NavLink>{" "}
        </p>
        <hr />
        <div className={`${style.googleBtn}`}>
          <button onClick={handelLoginGoogle}>
            <FaGoogle /> Sign up with google
          </button>
        </div>
        <div className={`${style.gitBtn}`}>
          <button onClick={handelLoginGithub}>
            <FaGithub /> Sign up with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
