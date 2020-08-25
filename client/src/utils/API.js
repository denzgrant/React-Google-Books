import axios from "axios";
const ApiKey = process.env.REACT_APP_API_KEY;




export default {
  // API call to search for books
  searchGoogleBooks: function (searchTerms) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&key=${ApiKey}`);
  },
  // Gets all books
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get(`/api/books/${id}`);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete(`/api/books/${id}`);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
