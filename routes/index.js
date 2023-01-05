const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const postsRouter = require("./posts");
const categoriesRouter = require("./categories");
const comentsRouter = require("./coments");

router.use("/users", usersRouter);
router.use("/posts", postsRouter);
router.use("/categories", categoriesRouter);
router.use("/coments", comentsRouter);

module.exports = router;