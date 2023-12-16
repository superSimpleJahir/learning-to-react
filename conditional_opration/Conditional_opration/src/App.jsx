import { useState } from "react";
import "./App.css";
// import TodosApp from "./TodoApp/TodosApp";

function App() {
  const [user, setUser] = useState({ name: "", email: "", password: "", color: "" });
  const { name, email, password , color} = user;

  const inputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    setUser({ name: "", email: "", password: "", color: "" })
    console.log(user);
  };

  return (
    <>
      {/* <TodosApp /> */}

      <h1>Register Form </h1>
      <form action="" onSubmit={formSubmit}>
        <div className="ondiv">
          <label htmlFor="name">
            Name:
            <input type="text" name="name" id="name" value={name} onChange={inputChange} />
          </label>
        </div>

        <div className="ondiv">
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" value={email} onChange={inputChange} />
          </label>
        </div>

        <div className="ondiv">
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={inputChange}
            />
          </label>
        </div>

        <div className="ondiv">
          <select name="color" id="color" value={color} onChange={inputChange}>
            <option value="nocolor">choose color</option>
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
          </select>
        </div>

        <div className="ondiv">
          <input type="submit" value="Submit Form" />
        </div>
      </form>
    </>
  );
}

export default App;
