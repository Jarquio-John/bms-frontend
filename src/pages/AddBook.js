import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../AddBook.css';

const AddBook = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [published_year, setPublishedYear] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, author, published_year, genre, description });
    navigate('/');
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10} lg={10} xl={8}>
          <Card className="custom-card shadow-lg">
            <Card.Body>
              <h2 className="text-center mb-5 text-secondary">Add New Book</h2>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="title" className="mb-4">
                      <Form.Label className="form-label">Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="author" className="mb-4">
                      <Form.Label className="form-label">Author</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group controlId="published_year" className="mb-4">
                      <Form.Label className="form-label">Published Year</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Published year"
                        value={published_year}
                        onChange={(e) => setPublishedYear(e.target.value)}
                        required
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="genre" className="mb-4">
                      <Form.Label className="form-label">Genre</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Book genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="description" className="mb-4">
                  <Form.Label className="form-label">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Provide a short description of the book"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="custom-input"
                  />
                </Form.Group>

                <Button variant="secondary" type="submit" className="w-100 custom-button">
                  Add Book
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBook;
