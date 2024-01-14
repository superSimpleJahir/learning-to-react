import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./../pages/Home/Home";
import About from "./../pages/About/About";
import Contact from "./../pages/Contact/Contact";
import SingUp from "../pages/auth/SingUp/SingUp";
import Login from "../pages/auth/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import User from "../pages/Users/Users";
import Singale from "../pages/Users/Singale";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        element: <User />,
        loader: async () => await fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "users/:userId",
        element: <Singale />,
        loader: async ({ params }) =>
          await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
    ],
  },
  {
    path: "/singup",
    element: <SingUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
