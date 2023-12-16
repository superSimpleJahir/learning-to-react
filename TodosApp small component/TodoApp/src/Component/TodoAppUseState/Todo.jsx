/* eslint-disable react/prop-types */
const Todo = ({ signalTodo, deleteTodo }) => {
  const { title, dis, id } = signalTodo;
  return (
    <div>
      <h1>{title}</h1>
      <h4>{dis}</h4>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default Todo;
