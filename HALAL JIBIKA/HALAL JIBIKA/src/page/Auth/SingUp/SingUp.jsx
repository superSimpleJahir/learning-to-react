/* eslint-disable react/no-unescaped-entities */
import { NavLink, useNavigate } from "react-router-dom";
import style from "../../../style/Login.module.css";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.config";
import Loading from "../../Loading/Loading";
import { toast } from "react-toastify";

const SingUp = () => {
  const [userData, setUserData] = useState({ name: "", email: "", password: "", cpassword: "" });
  const { name, email, password, cpassword } = userData;

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const naviget = useNavigate();

  const handelChang = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    toast.success("Login successfull");
    naviget("/");
  };
  if (loading) {
    return <Loading />;
  }
  console.log(user);
  console.log(error);
  return (
    <div>
      <div className={`${style.innerLogin} container`}>
        <div className={style.innerform}>
          <form onSubmit={handelSubmit}>
            <h1>SingUp</h1>
            <p>
              Already have an account? <NavLink to="/login">Login</NavLink>
            </p>
            <div className={`${style.name}`}>
              <input
                value={name}
                onChange={handelChang}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className={`${style.name}`}>
              <input
                value={email}
                onChange={handelChang}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
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
            <div className={`${style.password}`}>
              <input
                onChange={handelChang}
                value={cpassword}
                type="password"
                name="cpassword"
                id="cpassword"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className={`${style.btn}`}>
              <input type="submit" value="Log In" required />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
