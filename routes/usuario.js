const express = require("express");
const router = express.Router();
const cevento = require("../controlers/evento");
const auth = require("../auth");

router.get("/listado", cevento.listado);

module.exports = router;
