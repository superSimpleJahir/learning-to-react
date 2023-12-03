import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav>
      <ul>
      <Link to="/">Home</Link>
      <Link to="/albums">Albums</Link>
      <Link to="/comments">Comments</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/users">Users</Link>
      </ul>
    </nav>
  );
};

export default Nav;