import React, { useState } from 'react';
import './App.css';
import Search from './Components/Search';
import Book from './Components/Book';

function App() {
  const [books, setBooks] = useState([]);

  function updateBooks(results){
    setBooks(results);
  }

  return (
    <div className="App">
      <h2>Google Books Search</h2>
      <Search updateBooks={updateBooks}></Search>
      {books.map((b) => {
        return (
          <Book title={b.title} author={b.author} url={b.link} image={b.image} description={b.description}></Book>
        )
      })}
    </div>
  );
}

export default App;
