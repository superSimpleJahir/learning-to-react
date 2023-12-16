// /* eslint-disable no-unused-vars */
// import { useCallback, useState } from "react";

import { useEffect, useRef } from "react";

// const App = () => {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstubwxyz";

//     if (numberAllowed) str += "0123456789";
//     if (charAllowed) str += "~!@#$%^&*(){}[]+_-";

//     for (let i = 1; i < array.length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass = str.charAt(char);
//     }

//     setPassword(pass)

//   }, [length, numberAllowed, charAllowed, setPassword]);
//   return (
//     <div>
//       <h1 className="text-center">hello</h1>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const useInput = useRef(null);
  useEffect(()=>{
    console.log(useInput.current.focus());
  },[])
  return (
    <div>
      <p style={{margin:"100px"}}>
        <input ref={useInput} type="text" name="Name" id="Name" placeholder="Enter your name" />
      </p>
    </div>
  );
};

export default App;
