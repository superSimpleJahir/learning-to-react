import { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./newTodo";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const getNewTodo = (value) => {
    setTodos((prevTodo) => {
      return [...prevTodo, value];
    });
  };

  const deleteTodo = (id) => {
    const filterTodos = todos.filter((value) => value.id !== id);
    setTodos(filterTodos);
  };

  return (
    <section>
      <NewTodo getNewTodo={getNewTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </section>
  );
};

export default Home;
