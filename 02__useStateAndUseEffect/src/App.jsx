// import { useState } from "react";
// import  './App.css'
// export default function App() {
//   const [count, setCount] = useState({ a: 5, b: 6 });

//   const increment = () => {
//     setCount((prevState) => {
//       const newState = {
//         ...prevState,
//         a: prevState.a + 1,
//       };
//       return newState;
//     });
//   };
//   return (
//     <>
//       <div className="container">
//       <div className="d_flex">
//         <button onClick={increment}>Count is {count.a}</button>
//       </div>
//       </div>
//     </>
//   );
// }


import { useState } from "react"


export default function App() {
  const [count, setCount]=useState({a:0,b:1,c:2});

  const increment = ()=>{
    setCount((perData)=>{
      const setData = {
        ...perData,
        a:perData.a + 1
      }
      return setData
    })
    return count
  }
  return (
    <div>
      <div className="">
        <button onClick={increment}>Count is {count.a} </button>
      </div>
    </div>
  )
}
