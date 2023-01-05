require("dotenv").config();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { verifyHash } = require("../middleware/hash");

class UserService {
  static async serviceGetAllUsers(req) {
    try {
      const allUsers = await User.find({ _id: { $ne: req.user.id } });
      return allUsers;
    } catch (err) {
      console.error(err);
    }
  }

  static async serviceResgisterUser(req) {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return `El mail ${user.email} ya tiene un usuario asociado`;
      } else {
        const newUser = await User.create(req.body);
        return newUser;
      }
    } catch (err) {
      console.error(err);
    }
  }

  static async serviceLogin(req) {
    const { email, password } = req.body;
    try {
      if (email && password) {
        let user = await User.findOne({ email });
        if (!user) return { msg: "No such user found", user };
        let verifyUser = await verifyHash(password, user.password, user.salt);
        if (!verifyUser) {
          return { msg: "Password is incorrect" };
        } else {
          const { id, email } = user;
          let payload = { id: user._id };
          let token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "365d",
          });
          return { msg: "ok", token: token, user: { id, email } };
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  //deprecated
  /* static async serviceGetMe(req) {
    try {
      const user = await User.findById(req.body.id);
      return user;
    } catch (err) {
      console.error(err);
    }
  } */

  static async serviceEditUser(req, next) {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });
      return user;
    } catch (err) {
      next(err);
    }
  }

  static async serviceGetOneUser(req, next) {
    try {
      const user = await User.findById(req.params.id);
      return user;
    } catch (err) {
      next(err);
    }
  }

  static async serviceDeleteUser(req, next) {
    try {
      const userDeleted = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      return userDeleted;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserService;
