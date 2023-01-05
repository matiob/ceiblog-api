const PostService = require("../services/postService");

class PostController {
  //Controlador para traer todos los posts
  static async getAllPosts(req, res) {
    const posts = await PostService.serviceGetAllPosts(req);
    return posts ? res.status(201).send(posts) : res.sendStatus(401);
  }
  //Controlador para traer todos los post por categoria
  static async getByCategory(req, res, next) {
    const post = await PostService.servicePostByCategory(req, next);
    return post ? res.status(200).json(post) : res.sendStatus(404);
  }
  //Controlador para traer todos los post de un autor
  static async getAuthorPosts(req, res, next) {
    const posts = await PostService.serviceGetAuthorPost(req, next);
    return posts ? res.status(200).json(posts) : res.sendStatus(404);
  }
  //Controlador para agregar un nuevo post
  static async addPost(req, res) {
    const post = await PostService.serviceAddPost(req);
    return post ? res.sendStatus(201) : res.sendStatus(401);
  }
  //Controlador para editar un post en particular
  static async editPost(req, res, next) {
    const updatedPost = await PostService.serviceEditPost(req, next);
    return updatedPost ? res.status(200).send(updatedPost) : res.status(401);
  }
  //Controlador para traer un unico post
  static async getOnePost(req, res, next) {
    const post = await PostService.serviceGetOnePost(req, next);
    return post ? res.send(post) : res.status(401);
  }
  //Controlador para eliminar un post particular
  static async deletePost(req, res, next) {
    const deletePost = await PostService.serviceDeletePost(req, next);
    return deletePost ? res.status(200).send(deletePost) : res.status(401);
  }
}
module.exports = PostController;
