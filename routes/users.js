const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

//RUTA PARA TRAER TODOS LOS USUARIOS
router.get("/", UserController.getAllUsers);
//RUTA PARA REGISTRAR UN USUARIO
router.post("/register", UserController.registerUsers);
//RUTA PARA LOGIN
router.post("/login", UserController.loginUsers);
//RUTA PARA LOGOUT
router.post("/logout", UserController.logOutUsers);
//RUTA PARA DEVOLVER USUARIO LOGUEADO ---- dEPRECATED
//router.get("/me", UserController.getMe);
//RUTA PARA EDITAR UN USUARIO
router.put("/:id", UserController.editUsers);
//RUTA PARA VER UN USUARIO PARTICULAR
router.get("/:id", UserController.getOneUsers);
//RUTA PARA ELIMINAR UN USUARIO
router.delete("/:id", UserController.deleteUser);

module.exports = router;