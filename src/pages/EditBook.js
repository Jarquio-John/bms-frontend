// pages/EditBook.js
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = ({ books, onSave }) => {
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === parseInt(id));
  const [title, setTitle] = useState(bookToEdit ? bookToEdit.title : '');
  const [author, setAuthor] = useState(bookToEdit ? bookToEdit.author : '');
  const [published_year, setpublished_year] = useState(bookToEdit ? bookToEdit.published_year : '');
  const [genre, setgenre] = useState(bookToEdit ? bookToEdit.genre : '');
  const [description, setdescription] = useState(bookToEdit ? bookToEdit.description : '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: parseInt(id), title, author });
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="author" className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="published_year" className="mb-3">
          <Form.Label>Published Year</Form.Label>
          <Form.Control type="integer" value={published_year} onChange={(e) => setpublished_year(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="genre" className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Control type="string" value={genre} onChange={(e) => setgenre(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="description" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={description} onChange={(e) => setdescription(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">Save Changes</Button>
      </Form>
    </div>
  );
};

export default EditBook;
