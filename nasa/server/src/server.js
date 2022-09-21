const app = require("./app");

const PORT = process.env.PORT || 8000;

// App start
app.listen(PORT, function () {
  console.log(`App started at ${PORT}`);
});
