import React from 'react';
import { Card, Button, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = ({ books, onDelete }) => {
  return (
    <div>
      <h2 className="mb-4">All Books</h2>
      {books.length === 0 ? (
        <Alert variant="info">No books available. Start by adding a new book!</Alert>
      ) : (
        <Row xs={1} md={2} className="g-4">
          {books.map((book) => (
            <Col key={book.id}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">By {book.author}</Card.Subtitle>
                  <Link to={`/book/${book.id}`} className="btn btn-outline-primary me-2">
                    View
                  </Link>
                  <Link to={`/edit-book/${book.id}`} className="btn btn-outline-secondary me-2">
                    Edit
                  </Link>
                  <Button variant="danger" onClick={() => onDelete(book.id)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Home;
