/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";

const reducer = (state, action) => {
  const { type, payload } = action;
  console.log(state);
  if (type === "ADD") {
    const allBooks = [...state.books, payload];
    return {
      ...state,
      books: allBooks,
      isModalOpen: true,
      modalText: "Book is add",
    };
  }
  if (type === "REMOVE") {
    const filterBook = [...state.books].filter(value=> value.id !== payload)
    return {
      ...state,
      books: filterBook,
      isModalOpen: true,
      modalText: "Book is remove",
    };
  }

  return state
};

const Books = () => {
  const [bookState, dispatch] = useReducer(reducer, {
    books: [],
    isModalOpen: false,
    modalText: "",
  });

  const [bookName, setBookName] = useState("");

  const handleForm = (event) => {
    event.preventDefault();

    const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({ type: "ADD", payload: newBook });
    console.log(bookState.isModalOpen);
    setBookName("");
  };

  const Modal = ({ modalText }) => {
    return <p>{modalText}</p>;
  };

  const handleRemove=(id)=>{
    dispatch({type:"REMOVE", payload: id})
  }

  return (
    <div>
      <h1>Books list</h1>
      <form onSubmit={handleForm}>
        <label htmlFor="bookName">
          <input
            type="text"
            name="bookName"
            id="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </label>
        <button>Add book</button>
      </form>

      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

      <ul>
        {bookState.books.map((sbook) => (
          <li key={sbook.id}>{sbook.name} <button onClick={()=> handleRemove(sbook.id)}>Remove</button></li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
