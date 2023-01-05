const CategoryService = require("../services/categoryService");

class CategoryController {
  //Controlador para traer todas las categorias
  static async getAllCategories(req, res) {
    const categories = await CategoryService.serviceGetAllCategories(req);
    return categories ? res.status(201).send(categories) : res.sendStatus(401);
  }
  //Controlador para agregar una nueva categoria
  static async addCategory(req, res) {
    const category = await CategoryService.serviceAddCategory(req);
    return category ? res.sendStatus(201) : res.sendStatus(401);
  }
  //Controlador para eliminar una categoria de la DB
  static async deleteCategory(req, res, next) {
    const deletedCategory = await CategoryService.serviceDeleteCategory(
      req,
      next
    );
    return deletedCategory
      ? res.status(200).send(deletedCategory)
      : res.status(401);
  }
}
module.exports = CategoryController;
