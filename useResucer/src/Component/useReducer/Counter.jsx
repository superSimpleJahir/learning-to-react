import { useReducer } from "react";
import Reducer from "../function/Reducer";

const initialcount = 0;

const Counter = () => {
  const [state, dispatch] = useReducer(Reducer, initialcount);
  return <div>
    <h1>count: {state}</h1>
    <button onClick={()=>{dispatch({type: 'increment'})}}>+</button>
    <button onClick={()=>{dispatch({type: 'dicrement'})}}>-</button>
  </div>;
};

export default Counter;
