const musuario = require("../models/evento");
const jwt = require("jsonwebtoken");

module.exports = {
  listado: (req, res) => {
    musuario.listado((err, results) => {
      if (err) {
        return;
      }
      return res.json({
        datos: results,
      });
    });
  },
};
