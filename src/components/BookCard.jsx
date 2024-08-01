import { Link } from 'react-router-dom';

const BookCard = ({ book }) => (
  <div className="book-card">
    <Link to={`/books/${book.id}`}>
      <img
        src={book.image}
        alt={book.title}
      />
      <h3>{book.title}</h3>
    </Link>
  </div>
);

export default BookCard;