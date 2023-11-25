import { useState } from "react";
import "./Tasbis.css";

export default function Tasbis() {
  let [todos, setTodos]=useState([]);
  let [input, setInput] = useState('');

  const handleInput =(e)=>{
    setInput(e.target.value)
  }

  const addTodo = ()=>{
    setTodos ([...todos, input]);
    setInput('');
  }

  
  return (
    <div>
      <div className="flex justify-center items-center bg-gray-300 min-h-screen">
        <div className="h-auto md:w-1/2 px-2 w-96 bg-white rounded-lg">
          <div className="input_text relative">
            <input
              className="text-sm h-12 w-full my-4 pr-20 md:pr-28 outline-none pl-8"
              type="text"
              value={input}
              onChange={handleInput}
              placeholder="Write a new task"
            />
            <button className="add_task text-sm transition-all hover:bg-blue-700 cursor-pointer text-white bg-blue-400 rounded-lg h-10 w-16 md:w-24 absolute right-1 top-[20px]" onClick={addTodo}>
              Add task
            </button>
            <i className="absolute top-[27px] text-gray-600 text-xl left-2 fa fa-pencil-square"></i>
          </div>
          <ul className="all_tasks">
            <li id="1">
              <hr className="mt-2" />
              <div className="my-4 flex justify-between px-1">
                <div className="flex items-center gap-2">
                  <span
                    onClick="tick(1)"
                    className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "
                  >
                    <i
                      id="checked1"
                      className="transition-all hover:text-lg text-blue-500 hover:text-blue-900 fa fa-check"
                    ></i>
                  </span>
                  <p className="md:max-w-[375px] truncate max-w-[280px] ">
                    <strike id="strike1" className="text-gray-600 text-sm no-underline ">
                      Task One
                    </strike>
                  </p>
                </div>
                <span
                  onClick="trash(1)"
                  className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "
                >
                  <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-edit"></i>
                </span>
                <span
                  onClick="trash(1)"
                  className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "
                >
                  <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-trash"></i>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
