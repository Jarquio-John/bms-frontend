import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) return <p>Book not found.</p>;

  return (
    <Card>
      <Card.Body>
        <Card.Title>Book Details</Card.Title>
        <Card.Text><strong>Title:</strong> {book.title}</Card.Text>
        <Card.Text><strong>Author:</strong> {book.author}</Card.Text>
        <Button as={Link} to="/" variant="primary">Back to List</Button>
      </Card.Body>
    </Card>
  );
};

export default BookDetails;
