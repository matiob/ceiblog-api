const express = require("express");
const router = express.Router();
const PostController = require("../controllers/postController");
const checkJWT = require("../middleware/jwt")

//RUTA PARA TRAER TODOS LOS POSTS
router.get("/", PostController.getAllPosts);
//RUTA PARA BUSCAR POSTS POR CATEGORIAS
router.get("/category/:name", PostController.getByCategory);
//RUTA PARA BUSCAR POSTS POR AUTOR
router.get("/author/:id", PostController.getAuthorPosts);
//RUTA PARA AGREGAR UN POST
router.post("/add", PostController.addPost);
//RUTA PARA EDITAR UN POST
router.put("/:id", PostController.editPost);
//RUTA PARA VER UN POST PARTICULAR
router.get("/:id", PostController.getOnePost);
//RUTA PARA ELIMINAR UN POST
router.delete("/:id", PostController.deletePost);

module.exports = router;