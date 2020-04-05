const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    Author: { type: String, required: true },
    Description: { type: String, required: true },
    Image: { type: String, required: true },
    Link: { type: String, required: true },
    Title: { type: String, required: true },
  },
);

const Book = mongoose.model('book', bookSchema);

module.exports = Book;
