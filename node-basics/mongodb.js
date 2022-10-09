const { MongoClient } = require("mongodb");

// mongodb+srv://admin:admin@cluster1.qmqvf.mongodb.net/?retryWrites=true&w=majority
const URI =
  "mongodb+srv://admin:admin@cluster1.qmqvf.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(URI);

async function run() {
  try {
    const database = await client.db("books");
    const movies = await database.collection("movies");

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);
    console.log(movie);
    // console.log(movies);
  } finally {
    await client.close();
  }
}

run().catch((err) => console.log(err));
