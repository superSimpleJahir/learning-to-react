import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Albums from "./../Albums/Albums";
import Comments from "./../Comments/Comments";
import Posts from "./../Posts/Posts";
import Todos from "./../Todos/Todos";
import Users from "./../Users/Users";
import UserDetails from "../Users/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/albums",
        element: <Albums />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/users/:id",
        element: <UserDetails />,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
    ],
  },
]);
export default router;
