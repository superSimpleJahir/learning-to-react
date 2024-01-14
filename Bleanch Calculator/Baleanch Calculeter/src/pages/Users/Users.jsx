import { useLoaderData } from "react-router-dom";

import User from "./User";

const Users = () => {
  const users = useLoaderData();
  return <div className="mx-auto max-w-7xl grid grid-cols-4 gap-y-3">
    {
      users.map(user=>(
        <User key={user.id} user={user}/>
      ))
    }
  </div>;
};

export default Users;
