import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import NotFound from "../page/NotFound/NotFound";
import Home from "../page/Home/Home";
import About from './../page/About/About';
import Contact from "../page/Contact/Contact";
import Jobs from "../page/Jobs/Jobs";
import SingUp from "../page/Auth/SingUp/SingUp";
import Login from "../page/Auth/LogIn/Login";
import Favorite from "../page/Favorite/Favorite";
import JobDetails from "../component/JobDetails";

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
        path: "/favorite",
        element: <Favorite />,
        // loader: ({params})=>fetch( `http://localhost:9000/jobs${params.id}`)
      },
      {
        path: "/jobs",
        element: <Jobs />
      },
      {
        path: "/jobs",
        element: <Jobs />
      },
      {
        path: "/jobdetails/:id",
        element: <JobDetails/>,
        // loader: ()=>(fetch(`http://localhost:9000/jobs`)
        loader: ()=>(fetch(`./Jobs.json`)
        )
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
