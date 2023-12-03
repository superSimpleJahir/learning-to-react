import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const { id, name, email, phone } = useLoaderData();
  return (
    <div>
      <h4>{id}</h4>
      <h4>{email}</h4>
      <h4>{name}</h4>
      <h4>{phone}</h4>
    </div>
  )
};

export default UserDetails;
