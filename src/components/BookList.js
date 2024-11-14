import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ListGroup>
        {books.map((book) => (
          <ListGroup.Item key={book.id} className="d-flex justify-content-between align-items-center">
            <div>
              <h5>{book.title}</h5>
              <p>Author: {book.author}</p>
            </div>
            <div>
              <Button as={Link} to={`/book/${book.id}`} variant="primary" className="me-2">View</Button>
              <Button as={Link} to={`/edit-book/${book.id}`} variant="warning" onClick={() => onEdit(book.id)} className="me-2">Edit</Button>
              <Button variant="danger" onClick={() => onDelete(book.id)}>Delete</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default BookList;