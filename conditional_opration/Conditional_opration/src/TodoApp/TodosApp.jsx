// import { useState } from "react";

// import { useState } from "react";

// const TodosApp = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [allTodos, setAllTodos] = useState([])

//   const todoSubmitHandler = (event) => {
//     event.preventDefault();

//   };

//   return (
//     <div>
//       <form onSubmit={todoSubmitHandler}>
//         <label htmlFor="todo">
//           <input type="text" name="todo" id="todo" />
//         </label>
//         <button>Add todo</button>
//       </form>
//       <ul>
//         <li>
//           <span>text</span> <span>Eidt</span> <span>Complited</span> <span>Delete</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default TodosApp;

// const TodosApp = () => {
//   const [input, setInput] = useState("");

//   const buttonHandler = () => {
//     console.log(input);
//     setInput("");
//   };

//   return (
//     <div>
//       <input type="text" name="" id="" onChange={(e) => setInput(e.target.value)} value={input} />

//       {input ? <button onClick={buttonHandler}>add</button> : <button disabled>add</button>}
//     </div>
//   );
// };

// export default TodosApp;

// import  { useReducer, useState } from 'react';

// // Reducer function
// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [...state, { id: Date.now(), text: action.text }];
//     case 'REMOVE_TODO':
//       return state.filter((todo) => todo.id !== action.id);
//     default:
//       return state;
//   }
// };

// const TodoApp = () => {
//   // Initial state
//   const initialState = [];

//   // useReducer returns [state, dispatch]
//   const [todos, dispatch] = useReducer(todoReducer, initialState);

//   // State for the input field
//   const [newTodo, setNewTodo] = useState('');

//   // Handle input change
//   const handleInputChange = (e) => {
//     setNewTodo(e.target.value);
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (newTodo.trim() === '') return;

//     // Dispatch action to add todo
//     dispatch({ type: 'ADD_TODO', text: newTodo });

//     // Clear the input field
//     setNewTodo('');
//   };

//   // Handle todo removal
//   const removeTodo = (id) => {
//     // Dispatch action to remove todo
//     dispatch({ type: 'REMOVE_TODO', id });
//   };

//   return (
//     <div>
//       <h2>Todo App using useReducer</h2>
//       <form onSubmit={handleFormSubmit}>
//         <label htmlFor="newTodo">Add Todo:</label>
//         <input
//           type="text"
//           id="newTodo"
//           value={newTodo}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Add</button>
//       </form>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text}
//             <button onClick={() => removeTodo(todo.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;

// import { useReducer, useState } from "react";

// // Reducer function
// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [...state, { id: Date.now(), text: action.text, completed: false }];
//     case "TOGGLE_TODO":
//       return state.map((todo) =>
//         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//       );
//     case "REMOVE_TODO":
//       return state.filter((todo) => todo.id !== action.id);
//     default:
//       return state;
//   }
// };

// const TodoApp = () => {
//   // Initial state
//   const initialState = [];

//   // useReducer returns [state, dispatch]
//   const [todos, dispatch] = useReducer(todoReducer, initialState);

//   // State for the input field
//   const [newTodo, setNewTodo] = useState("");

//   // Handle input change
//   const handleInputChange = (e) => {
//     setNewTodo(e.target.value);
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (newTodo.trim() === "") return;

//     // Dispatch action to add todo
//     dispatch({ type: "ADD_TODO", text: newTodo });

//     // Clear the input field
//     setNewTodo("");
//   };

//   // Handle todo removal
//   const removeTodo = (id) => {
//     // Dispatch action to remove todo
//     dispatch({ type: "REMOVE_TODO", id });
//   };

//   // Handle todo toggle
//   const toggleTodo = (id) => {
//     // Dispatch action to toggle todo completion status
//     dispatch({ type: "TOGGLE_TODO", id });
//   };

//   return (
//     <div>
//       <h2>Todo App using useReducer</h2>
//       <form onSubmit={handleFormSubmit}>
//         <label htmlFor="newTodo">Add Todo:</label>
//         <input type="text" id="newTodo" value={newTodo} onChange={handleInputChange} />
//         <button type="submit">Add</button>
//       </form>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id} className={todo.completed ? "completed" : ""}>
//             {todo.text}
//             <button onClick={() => removeTodo(todo.id)}>Remove</button>
//             <button onClick={() => toggleTodo(todo.id)}>
//               {todo.completed ? "Mark Incomplete" : "Mark Complete"}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;




import { useReducer, useState } from 'react';

// Reducer function
// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [...state, { id: Date.now(), text: action.text, completed: false, editing: false }];
//     case 'TOGGLE_TODO':
//       return state.map((todo) =>
//         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//       );
//     case 'REMOVE_TODO':
//       return state.filter((todo) => todo.id !== action.id);
//     case 'TOGGLE_EDIT_MODE':
//       return state.map((todo) =>
//         todo.id === action.id ? { ...todo, editing: !todo.editing } : todo
//       );
//     case 'UPDATE_TODO_TEXT':
//       return state.map((todo) =>
//         todo.id === action.id ? { ...todo, text: action.text, editing: false } : todo
//       );
//     default:
//       return state;
//   }
// };
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [{ id: Date.now(), text: action.text, completed: false, editing: false }, ...state];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'TOGGLE_EDIT_MODE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, editing: !todo.editing } : todo
      );
    case 'UPDATE_TODO_TEXT':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text, editing: false } : todo
      );
    default:
      return state;
  }
};


const TodoApp = () => {
  // Initial state
  const initialState = [];

  // useReducer returns [state, dispatch]
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  // State for the input field
  const [newTodo, setNewTodo] = useState('');

  // State for editing todo text
  const [editTodoText, setEditTodoText] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    // Dispatch action to add todo
    dispatch({ type: 'ADD_TODO', text: newTodo });

    // Clear the input field
    setNewTodo('');
  };

  // Handle todo removal
  const removeTodo = (id) => {
    // Dispatch action to remove todo
    dispatch({ type: 'REMOVE_TODO', id });
  };

  // Handle todo toggle
  const toggleTodo = (id) => {
    // Dispatch action to toggle todo completion status
    dispatch({ type: 'TOGGLE_TODO', id });
  };

  // Handle toggle edit mode
  const toggleEditMode = (id) => {
    // Dispatch action to toggle edit mode
    dispatch({ type: 'TOGGLE_EDIT_MODE', id });

    // Set edit todo text to current todo text
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditTodoText(todoToEdit.text);
  };

  // Handle update todo text
  const updateTodoText = (id) => {
    // Dispatch action to update todo text
    dispatch({ type: 'UPDATE_TODO_TEXT', id, text: editTodoText });
  };

  return (
    <div>
      <h2>Todo App using useReducer</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="newTodo">Add Todo:</label>
        <input
          type="text"
          id="newTodo"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.editing ? (
              <>
                <input
                  type="text"
                  value={editTodoText}
                  onChange={(e) => setEditTodoText(e.target.value)}
                />
                <button onClick={() => updateTodoText(todo.id)}>Save</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => removeTodo(todo.id)}>Remove</button>
                <button onClick={() => toggleTodo(todo.id)}>
                  {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button onClick={() => toggleEditMode(todo.id)}>
                  {todo.editing ? 'Cancel Edit' : 'Edit'}
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
