import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const formHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>This is login page....</h1>

      <form onSubmit={formHandler}>
        <label htmlFor="userName">
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <br />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
        </label>
        <button>Login</button>
      </form>

      <h3>UserName: {userName}</h3>
      <h3>Password: {password}</h3>
    </div>
  );
};

export default Login;
