const API_BASE_URL = 'http://127.0.0.1:8000/api/books';

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorText = await response.text();
    const errorMessage = errorText || 'Unknown error occurred';
    throw new Error(errorMessage);
  }
  try {
    return await response.json();
  } catch (error) {
    return { message: 'Unexpected response format', error };
  }
};

export const fetchBooks = async () => {
  const response = await fetch(API_BASE_URL, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    }
  });
  return handleResponse(response);
};

export const fetchBookById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    }
  });
  return handleResponse(response);
};

export const createBook = async (bookData) => {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    },
    body: JSON.stringify(bookData),
  });
  return handleResponse(response);
};

// Update an existing book
export const updateBook = async (id, bookData) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    },
    body: JSON.stringify(bookData),
  });
  return handleResponse(response);
};

// Delete a book
export const deleteBook = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    }
  });
  return handleResponse(response);
};
