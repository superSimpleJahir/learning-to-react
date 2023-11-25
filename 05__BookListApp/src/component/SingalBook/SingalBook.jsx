/* eslint-disable react/prop-types */

import { MdDelete } from "react-icons/md";

export default function SingalBook(book) {
  const {isbn, author, title, pubYear} = book.book;

  return (
    <tr>
      <td>{isbn}</td>
      <td>{author}</td>
      <td>{title}</td>
      <td>{pubYear}</td>
      <td className="delete-btn" onClick={()=>book.deleteBookItem(isbn)}>
      <MdDelete color="red" />
      </td>
    </tr>
  )
}
