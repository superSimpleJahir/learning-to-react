/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewTodo = ({ getNewTodo }) => {
  const [newTodo, setNewTodo] = useState({ title: "", dis: "" });
  const { title, dis } = newTodo;

  const handleInput = (event) => {
    const name = event.target.name;
    setNewTodo((oldTodo) => {
      return { ...oldTodo, id: uuidv4(), [name]: event.target.value };
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    getNewTodo(newTodo);
    setNewTodo({ title: "", dis: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <div className="">
        <label htmlFor="title">
          Todo:
          <input type="text" name="title" id="title" value={title} onChange={handleInput} />
        </label>
      </div>

      <div className="">
        <label htmlFor="dis">
          Discription:
          <textarea name="dis" id="dis" value={dis} onChange={handleInput}></textarea>
        </label>
      </div>

      <button type="submit">Add todo: </button>
    </form>
  );
};

export default NewTodo;
