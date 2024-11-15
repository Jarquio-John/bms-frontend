import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const BookForm = ({ onSave, bookToEdit }) => {
  const [title, setTitle] = useState(bookToEdit?.title || '');
  const [author, setAuthor] = useState(bookToEdit?.author || '');
  const [published_year, setpublished_year] = useState(bookToEdit?.published_year || '');
  const [genre, setgenre] = useState(bookToEdit?.genre || '');
  const [description, setdescription] = useState(bookToEdit?.description || '');
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  const validate = () => {
    const errors = {};
    if (!title.trim()) errors.title = "Title is required.";
    if (!author.trim()) errors.author = "Author is required.";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await onSave({ title, author, id: bookToEdit?.id });
      setApiError(null);
    } catch (error) {
      setApiError("Failed to save the book. Please try again.");
    }
  };

  return (
    <div>
      <h3>{bookToEdit ? "Edit Book" : "Add Book"}</h3>
      {apiError && <Alert variant="danger">{apiError}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isInvalid={!!errors.title}
          />
          <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="author" className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            isInvalid={!!errors.author}
          />
          <Form.Control.Feedback type="invalid">{errors.author}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="published_year" className="mb-3">
          <Form.Label>Published Year</Form.Label>
          <Form.Control
            type="integer"
            value={published_year}
            onChange={(e) => setpublished_year(e.target.value)}
            isInvalid={!!errors.published_year}
          />
          <Form.Control.Feedback type="invalid">{errors.published_year}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="genre" className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            type="string"
            value={genre}
            onChange={(e) => setgenre(e.target.value)}
            isInvalid={!!errors.genre}
          />
          <Form.Control.Feedback type="invalid">{errors.genre}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="decription" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            isInvalid={!!errors.description}
          />
          <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          {bookToEdit ? "Update Book" : "Add Book"}
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
