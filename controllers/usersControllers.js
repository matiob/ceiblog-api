const UsersService = require("../services/usersServices");

class UsersController {
  static async getAllUsers(req, res) {
    const users = await UsersService.serviceGetAllUsers(req);
    return users ? res.status(201).send(users) : res.sendStatus(401);
  }

  static async registerUsers(req, res) {
    const user = await UsersService.serviceResgisterUser(req);
    if (typeof user === "string") {
      return res.status(403).send(user);
    } else {
      return user ? res.sendStatus(201) : res.sendStatus(401);
    }
  }

  static async loginUsers(req, res) {
    const user = await UsersService.serviceLogin(req);
    return user ? res.status(200).send(user) : res.sendStatus(401);
  }

  static async logOutUsers(req, res) {
    // LOGICA DE LOGOUT
    return res.status(200).send({});
  }

  static async getMe(req, res) {
    const user = await UsersService.serviceGetMe(req);
    return user ? res.send(user) : res.status(401);
  }

  static async editUsers(req, res, next) {
    const updatedUser = await UsersService.serviceEditUser(req, next);
    return updatedUser ? res.status(200).send(updatedUser) : res.status(401);
  }

  static async getOneUsers(req, res, next) {
    const user = await UsersService.serviceGetOneUser(req, next);
    return user ? res.send(user) : res.status(401);
  }

}
module.exports = UsersController;