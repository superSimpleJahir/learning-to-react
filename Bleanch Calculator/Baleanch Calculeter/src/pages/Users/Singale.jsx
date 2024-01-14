import { useLoaderData } from "react-router-dom";

const Singale = () => {
  const singaleUser = useLoaderData()
  const {name, email,phone}=singaleUser
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
    </div>
  );
};

export default Singale;