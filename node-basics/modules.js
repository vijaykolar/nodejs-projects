/**
 * Using modules i.e express
 * importing express modules and creating app using express()
 * using get method '/api/books' to get all books
 * setting status 200
 */

const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());

const books = [
  {
    id: 1,
    name: "Node.js Design Pattern Second Edition",
  },
  {
    id: 2,
    name: "Mastering Node.js",
  },
  {
    id: 3,
    name: "Getting Mean with Mongo Express Angular and Node",
  },
  {
    id: 4,
    name: "Pro MERN Stack",
  },
  {
    id: 5,
    name: "Building Face Detector Using Node.js and OpenCV",
  },
];

app.get("/api/books", function (req, res) {
  res.status(200).json({ books, message: "Success" });
});

app.get("/api/books/:id", function (req, res) {
  const bookId = req.params.id;
  const filteredBook = books.find((book) => book.id === +bookId);
  res.status(200).send(filteredBook);
});

app.patch("/api/books/:id", function (req, res) {
  const bookId = req.params.id;
  const filteredBook = books.find((book) => book.id === +bookId);
  const updatedBook = { ...filteredBook, name: req.body.name };
  res.status(201).send(updatedBook);
});

app.delete("/api/books/:id", function (req, res) {
  const bookId = req.params.id;
  const deletedBook = books.find((book) => book.id === +bookId);
  //   const deletedBook = { ...filteredBook, name: req.body.name };
  res.status(201).send(deletedBook);
});

app.listen(3000, () => {
  console.log("App is running at 3000");
});
