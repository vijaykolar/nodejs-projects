const planets = require("../../models/planets.model");

function getAllPanets(req, res) {
  return res.status(200).json(planets);
}

module.exports = { getAllPanets };
