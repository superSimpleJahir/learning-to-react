/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SingalBook from "../component/SingalBook/SingalBook";
import { gatdataloalstorage } from "../component/SingalBook/localStorage";
import FromData from "../component/SingalBook/FromData";

export const App = () => {
  // main array of objects state || books state || books array of objects
  let [books, setbooks] = useState(gatdataloalstorage());



  // delete book from LS
  const deleteBook = (key) => {
    let newBook = books.filter((value) => value.isbn !== key);
    setbooks(newBook);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("Books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="wrapper">
      <h1>BookList App</h1>
      <p>Add and view your books using local storage</p>
      <div className="main">
        <div className="form-container">
          <FromData books={books} setbooks={setbooks}/>
        </div>

        <div className="view-container">
          <>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>ISBN#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Published</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book) => (
                    <SingalBook key={book.isbn} book={book} deleteBookItem={deleteBook} />
                  ))}
                </tbody>
              </table>
            </div>
            <button className="btn btn-danger btn-md">Remove All</button>
          </>
        </div>
      </div>
    </div>
  );
};
