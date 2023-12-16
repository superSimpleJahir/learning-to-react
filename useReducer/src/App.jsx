import { useReducer } from "react";

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "incriment":
        return {
          counter: state.counter + 1,
        };
      case "decrement":
        return {
          counter: state.counter - 1,
        };
      case "incriment10":
        return {
          counter2: state.counter2 + 10,
        };
      case "decrement10":
        return {
          counter2: state.counter2 - 10,
        };
    }
  };

  const initialState = {
    counter: 0,
    counter2: 10,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="">
        <h1 className="text-6xl ml-96 mb-5">{state.counter}</h1>

        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ml-96"
          onClick={() => {
            dispatch({ type: "incriment" });
          }}
        >
          Increment +1
        </button>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ml-10"
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          Decrimrnt -1
        </button>
      </div>

      <div className="mt-40">
        <h1 className="text-6xl ml-96 mb-5"> {state.counter2} </h1>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ml-96 "
          onClick={() => {
            dispatch({ type: "incriment10" });
          }}
        >
          Increment +10
        </button>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ml-10"
          onClick={() => {
            dispatch({ type: "decrement10" });
          }}
        >
          Decrimrnt -10
        </button>
      </div>
    </div>
  );
};

export default App;
