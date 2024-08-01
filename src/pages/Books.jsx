import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Books.css';
import BookCard from '../components/BookCard';

const Books = () => {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      fetch('https://seussology.info/api/books')
        .then(response => response.json())
        .then(data => { setBooks(data); console.log(data); });

    // Check the structure of the data setBooks(data); }); }, []); 


    }, []);
  
    return (
      <div>
        <h1>Books</h1>
        <div>
          {books.map(book => (
            <BookCard key={book.id} book={book}/>
          ))}
        </div>
      </div>
    );
  };
  
  export default Books;