import React from 'react';
import BookDetails from '../components/BookDetails';
import { useParams, useNavigate } from 'react-router-dom';

const ViewBook = ({ books }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((book) => book.id === parseInt(id));

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Book Details</h2>
      {book ? (
        <BookDetails book={book} onBack={handleBack} />
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default ViewBook;
