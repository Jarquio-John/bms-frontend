import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const ViewBook = ({ books }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">By {book.author}</Card.Subtitle>
        <Button as={Link} to="/" variant="primary">Back to Home</Button>
      </Card.Body>
    </Card>
  );
};

export default ViewBook;
