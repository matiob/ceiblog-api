const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const postsRouter = require("./posts");
const categoriesRouter = require("./categories");

router.use("/users", usersRouter);
router.use("/posts", postsRouter);
router.use("/categories", categoriesRouter);

module.exports = router;