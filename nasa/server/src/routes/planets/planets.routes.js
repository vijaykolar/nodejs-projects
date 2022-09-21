const express = require("express");

const { getAllPanets } = require("./planets.contoller");

const planetsRouter = express.Router();

planetsRouter.get("/api/planets", getAllPanets);

module.exports = planetsRouter;
