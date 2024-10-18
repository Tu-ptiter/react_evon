import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
  // Khai báo state để lưu trữ danh sách sách
  const [books, setBooks] = useState([]);

  // Dùng useEffect để fetch dữ liệu khi component được render
  useEffect(() => {
    // Hàm fetch dữ liệu từ API backend
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/books'); // URL API backend Spring Boot của bạn
        setBooks(response.data); // Lưu trữ dữ liệu sách vào state
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks(); // Gọi hàm fetch dữ liệu
  }, []); // useEffect chỉ chạy 1 lần khi component được render

  return (
    <div>
      <h1>Book List</h1>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.name} ({book.id}) 
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available</p> // Nếu chưa có sách nào
      )}
    </div>
  );
};

export default BookList;
