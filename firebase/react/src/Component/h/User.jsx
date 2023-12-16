/* eslint-disable react/prop-types */


const User = ({userData}) => {
  console.log(userData.user);
  return (
    <div>
      <h1>{userData.user?.displayName}</h1>
      <h3>{userData.user?.email}</h3>
      <img src={userData.user?.photoURL} />
    </div>
  );
};

export default User;