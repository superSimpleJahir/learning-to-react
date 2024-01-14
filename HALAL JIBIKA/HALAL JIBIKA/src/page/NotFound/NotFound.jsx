import { Link } from "react-router-dom";
import style from './notfound.module.css'
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "40px",
        height: "100vh",
      }}
      className="container"
    >
      <img
        style={{ width: "600px" }}
        src="./img/not_found_re_e9o6.svg"
        alt="not_found"
      />
      <button>
        <Link className={style.btn} to="/">Back to home</Link>
      </button>
    </div>
  );
};

export default NotFound;
