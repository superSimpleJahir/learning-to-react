/* eslint-disable react/prop-types */
import { useState } from "react";

function FromData({books,setbooks}) {
  // input field states
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pubYear, setPubYear] = useState("");

  const inputTitleContol = (e) => {
    setTitle(e.target.value);
  };
  const inputAuthorContol = (e) => {
    setAuthor(e.target.value);
  };
  const inputIsbnContol = (e) => {
    setIsbn(e.target.value);
  };
  const inputPubYearContol = (e) => {
    setPubYear(e.target.value);
  };

  const clearInput = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
    setPubYear("");
  };

  // form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      title,
      author,
      isbn,
      pubYear,
    };
    setbooks([...books, book]);
    clearInput();
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        className="form-control"
        value={title}
        onChange={inputTitleContol}
        required
      ></input>

      <br></br>
      <label>Author</label>
      <input
        type="text"
        className="form-control"
        value={author}
        onChange={inputAuthorContol}
        required
      ></input>
      <br></br>
      <label>ISBN#</label>
      <input
        type="text"
        className="form-control"
        value={isbn}
        onChange={inputIsbnContol}
        required
      ></input>
      <br></br>
      <label>Published year</label>
      <input
        type="text"
        className="form-control"
        value={pubYear}
        onChange={inputPubYearContol}
        required
      ></input>
      <br></br>
      <button type="submit" className="btn btn-success btn-md">
        ADD
      </button>
    </form>
  );
}

export default FromData;
