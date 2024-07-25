import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Book data:', data); // Log data to check
        setBook(data);
      })
      .catch(error => {
        console.error('Error fetching book details:', error);
        setError('Failed to load book details');
      });
  }, [id]);

  return (
    <div>
      {error && <p>{error}</p>}
      {book ? (
        <div>
          <h1>{book.title}</h1>
          <img src={book.cover} alt={book.title} />
          <p>{book.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetails;
