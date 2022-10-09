const mongoose = require("mongoose");
const Book = require("./models/Book");

async function run() {
  await mongoose.connect("mongodb://localhost/testdb", function () {
    console.log("Connected");
  });
  const book = new Book({
    name: "Node.js Design Pattern Second Edition",
    price: 99,
  });
  await book.save();

  console.log(book);
}

run();
