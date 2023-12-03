/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div>
      <h2>{id}</h2>
      <h1>{name}</h1>
      <h3>{email}</h3>
      <h3>{phone}</h3>
      <Link to={`/users/${id}`}><button>Details</button> </Link>
    </div>
  );
};

export default User;
