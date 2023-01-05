const express = require("express")
const router = express.Router()
const ComentsControllers = require("../controllers/comentController")

//RUTA PARA BUSCAR COMENTARIOS DE UN POST
router.get("/:id", ComentsControllers.getComents)
//RUTA PARA AGREGAR UN COMENTARIO
router.post("/:id", ComentsControllers.addComent)

module.exports = router