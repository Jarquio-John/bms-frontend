import React from 'react';
import BookForm from '../components/BookForm';
import { useNavigate } from 'react-router-dom';

const AddBook = ({ onSave }) => {
  const navigate = useNavigate();

  const handleSave = (book) => {
    onSave(book);
    navigate('/');
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <BookForm onSave={handleSave} />
    </div>
  );
};

export default AddBook;
