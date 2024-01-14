import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSignOut } from "react-firebase-hooks/auth";

import style from "../../style/Header.module.css";
import auth from "../../firebase/firebase.config";
import { toast } from "react-toastify";

const Header = () => {
  const [user] = useAuthState(auth);

  const [signOut, loading, error] = useSignOut(auth);

  const handleLogOut = () => {
    toast.success("Logout successfull");
    signOut();
  };
  console.log(user);

  return (
    <section className={`${style.innerNavSection}`}>
      <nav className={`flex container ${style.nav}`}>
        <div className={style.logo}>
          <NavLink to="/">HaLal~JiBiKa</NavLink>
        </div>

        <ul className={`${style.flex} flex`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/jobs">Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/favorite">Favorite</NavLink>
          </li>
          {!user && (
            <NavLink to="/singup">
              <li className={`${style.login} ${style.btn}`}>SingUp</li>
            </NavLink>
          )}

          {user ? (
            <button onClick={handleLogOut}>
              <li className={`${style.signup} ${style.btn}`}>LogOut</li>
            </button>
          ) : (
            <NavLink to="/login">
              <li className={`${style.login} ${style.btn}`}>Login</li>
            </NavLink>
          )}
        </ul>
      </nav>
    </section>
  );
};

export default Header;
