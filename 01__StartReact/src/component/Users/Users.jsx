// import { useEffect, useState } from "react";
import User from "./User/User";

export default function Users() {
  const Users = [
    {
      name: "Rizwan",
      age: 27,
      height: 7,
      imgURL: "https://picsum.photos/200",
    },
    {
      name: "Rakib",
      age: 25,
      height: 5,
      imgURL: "https://picsum.photos/200",
    },
    {
      name: "Rkzeebon",
      age: 28,
      height: 6,
      imgURL: "https://picsum.photos/200",
    },
    {
      name: "Hazzaz",
      age: 23,
      height: 4,
      imgURL: "https://picsum.photos/200",
    },
    {
      name: "Shihab Ali",
      age: 29,
      height: 8,
      imgURL: "https://picsum.photos/200",
    },
  ];



  return (
    <div>
      {Users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
