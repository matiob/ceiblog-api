require("dotenv").config();
const Post = require("../models/Post");
const User = require("../models/User");

class PostService {
  //Service para traer todos los post
  static async serviceGetAllPosts(req) {
    try {
      const allPosts = await Post.find({})
        .populate("author")
        .populate("category");
      return allPosts;
    } catch (err) {
      console.error(err);
    }
  }
  //Service para traer post por categoria
  static async servicePostByCategory(req, next) { //REVISAR
    try {
      const posts = await Post.find({
        category: req.params.name,
      })
        .populate("author")
        .populate("category");
      return posts;
    } catch (err) {
      next(err);
    }
  }
  //Service para traer post por autor
  static async serviceGetAuthorPost(req, next) {
    try {
      const author = await User.findById(req.params.id);
      const posts = await Post.find({})
        .where("author")
        .equals(author)
        .populate("author")
        .populate("category");
      return posts;
    } catch (err) {
      next(err);
    }
  }
  //Service para insertar un post en la DB
  static async serviceAddPost(req) {
    const { title } = req.body;
    try {
      let post = await Post.findOne({ title });
      if (post) {
        return `Ya existe un post con el titulo: ${post.title}`;
      } else {
        const newPost = await Post.create(req.body);
        return newPost;
      }
    } catch (err) {
      console.error(err);
    }
  }
  //Service para editar un post existente
  static async serviceEditPost(req, next) {
    try {
      const { id } = req.params;
      const post = await Post.findByIdAndUpdate(id, req.body, { new: true });
      return post;
    } catch (err) {
      next(err);
    }
  }
  //Service para traer un post en particular
  static async serviceGetOnePost(req, next) {
    try {
      const post = await Post.findById(req.params.id)
        .populate("author")
        .populate("category");
      return post;
    } catch (err) {
      next(err);
    }
  }
  //Service para eliminar un post de la DB
  static async serviceDeletePost(req, next) {
    try {
      const { id } = req.params;
      const category = await Post.findByIdAndDelete(id);
      return category;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PostService;
