import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import ViewBook from './pages/ViewBook';
import './App.css';  // Custom styling
import { fetchBooks, createBook, updateBook, deleteBook } from './services/api';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    setLoading(true);
    try {
      const data = await fetchBooks();
      setBooks(data);
      setError(null);
    } catch (error) {
      setError("Failed to load books.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddBook = async (newBook) => {
    try {
      const savedBook = await createBook(newBook);
      setBooks([...books, savedBook]);
    } catch (error) {
      alert("Failed to add the book.");
    }
  };

  const handleUpdateBook = async (updatedBook) => {
    try {
      const savedBook = await updateBook(updatedBook.id, updatedBook);
      setBooks(books.map((book) => (book.id === savedBook.id ? savedBook : book)));
    } catch (error) {
      alert("Failed to update the book.");
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      alert("Failed to delete the book.");
    }
  };

  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Book Library</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/add-book">Add Book</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home books={books} onDelete={handleDeleteBook} />} />
          <Route path="/add-book" element={<AddBook onSave={handleAddBook} />} />
          <Route path="/edit-book/:id" element={<EditBook books={books} onSave={handleUpdateBook} />} />
          <Route path="/book/:id" element={<ViewBook books={books} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
