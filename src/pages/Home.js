import React from 'react';
import BookList from '../components/BookList';
import { useNavigate } from 'react-router-dom';

const Home = ({ books, onEdit, onDelete }) => {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div>
      <h2>Home</h2>
      <BookList books={books} onView={handleView} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default Home;
