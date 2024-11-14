import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Alert } from 'react-bootstrap';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import ViewBook from './pages/ViewBook';
import { fetchBooks, createBook, updateBook, deleteBook } from './services/api';
import './App.css';

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

    } finally {
      setLoading(false);
    }
  };

  const handleAddBook = async (newBook) => {
    try {
      const savedBook = await createBook(newBook);
      setBooks([...books, savedBook]);
    } catch (error) {
      alert("Failed to update the book. Please try again.");
    }
  };

  const handleUpdateBook = async (updatedBook) => {
    try {
      const savedBook = await updateBook(updatedBook.id, updatedBook);
      setBooks(books.map((book) => (book.id === savedBook.id ? savedBook : book)));
    } catch (error) {
      
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
 
    }
  };

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
        <Container>
         <Navbar.Brand className="text-warning">Book Library</Navbar.Brand>
          <Nav className="me-auto justify-content-start">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/add-book" className="nav-link-custom">Add Book</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        {error && <Alert variant="danger">{error}</Alert>}
        {loading ? (
          <div className="loading-text">Loading...</div>
        ) : (
          <Routes>
            <Route path="/" element={<Home books={books} onDelete={handleDeleteBook} />} />
            <Route path="/add-book" element={<AddBook onSave={handleAddBook} />} />
            <Route path="/edit-book/:id" element={<EditBook books={books} onSave={handleUpdateBook} />} />
            <Route path="/book/:id" element={<ViewBook books={books} />} />
          </Routes>
        )}
      </Container>
    </Router>
  );
}

export default App;
