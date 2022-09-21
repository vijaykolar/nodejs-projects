const express = require("express");
const cors = require("cors");

const app = express();

// Routes
const planetsRouter = require("./routes/planets/planets.routes");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(planetsRouter);

module.exports = app;
