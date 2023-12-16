import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>This is Home Page...</h1>

      <h1>Count: {count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Home;
