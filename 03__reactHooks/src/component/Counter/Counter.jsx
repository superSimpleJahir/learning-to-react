import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevalue) => {
      return prevalue + 1;
    });
  };

  const dcrement = () => {
    // setCount((prevalue) => prevalue > 0 ? prevalue - 1 : 0);
    count >0 && setCount((prevalue) => prevalue - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <div className="btn">
        <button onClick={increment}>Add</button>
        <button onClick={dcrement}>Remove</button>
      </div>
    </div>
  );
}
