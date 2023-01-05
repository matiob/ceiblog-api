const express = require("express");
const router = express.Router();
const CategoyController = require("../controllers/categoryController");

//RUTA PARA TRAER TODAS LAS CATEGORIAS
router.get("/", CategoyController.getAllCategories);
//RUTA PARA AGREGAR UNA CATEGORIA
router.post("/add", CategoyController.addCategory);
//RUTA PARA ELIMINAR UNA CATEGORIA
router.delete("/:id", CategoyController.deleteCategory);

module.exports = router;