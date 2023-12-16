/* eslint-disable react/prop-types */

import Todo from "./Todo";

const Todos = ({ todos, deleteTodo }) => {
  return (
    <div className="container">
      {todos.map((signalTodo) => (
        <Todo key={signalTodo.id} signalTodo={signalTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default Todos;
