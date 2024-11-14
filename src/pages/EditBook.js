import React from 'react';
import BookForm from '../components/BookForm';
import { useParams, useNavigate } from 'react-router-dom';

const EditBook = ({ books, onSave }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const bookToEdit = books.find((book) => book.id === parseInt(id));

  const handleSave = (book) => {
    onSave(book);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Book</h2>
      {bookToEdit ? (
        <BookForm onSave={handleSave} bookToEdit={bookToEdit} />
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default EditBook;
