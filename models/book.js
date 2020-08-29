const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: String,
  image: String,
  link: String,
  date: { type: Date, default: Date.now }
});

const Books = mongoose.model("books", bookSchema);

module.exports = Books;
