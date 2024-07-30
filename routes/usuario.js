const express = require("express");
const router = express.Router();
const cusuario = require("../controlers/usuario");
const auth = require("../auth");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, `img${Date.now()}.${file.mimetype.split("/")[1]}`);
  },
});

const upload = multer({ storage });

//Rutas de usuario

router.get("/lista",  auth.verificatoken,cusuario.listado);

router.post("/insertar", upload.single("imagenperfil"), cusuario.insertar);

router.delete("/borrar", cusuario.borrar);

router.post("/actualizar", upload.single("imagenperfil"), cusuario.actualizar);

router.post("/actualizarpass", cusuario.actualizarpass);

router.post("/login", cusuario.verificar);

module.exports = router;
