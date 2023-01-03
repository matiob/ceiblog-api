const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/usersControllers");

//RUTA PARA TRAER TODOS LOS USUARIOS
router.get("/", UsersController.getAllUsers);
//RUTA PARA REGISTRAR UN USUARIO
router.post("/register", UsersController.registerUsers);
//RUTA PARA LOGIN
router.post("/login", UsersController.loginUsers);
//RUTA PARA LOGOUT
router.post("/logout", UsersController.logOutUsers);
//RUTA PARA DEVOLVER USUARIO LOGUEADO
router.get("/me", UsersController.getMe);
//RUTA PARA EDITAR UN USUARIO
router.put("/:id", UsersController.editUsers);
//RUTA PARA VER UN USUARIO PARTICULAR
router.get("/:id", UsersController.getOneUsers);

module.exports = router;