require("dotenv").config();
const Category = require("../models/Category");

class CategoryService {
  //Servicio para traer todas las categorias
  static async serviceGetAllCategories(req) {
    try {
      const allCategories = await Category.find({});
      return allCategories;
    } catch (err) {
      console.error(err);
    }
  }
  //Servicio para agregar una nueva categoria a la DB
  static async serviceAddCategory(req) {
    const { name } = req.body;
    try {
      let category = await Category.findOne({ name });
      if (category) {
        return `La categoria ${category} ya está creada`;
      } else {
        const newCategory = await Category.create(req.body);
        return newCategory;
      }
    } catch (err) {
      console.error(err);
    }
  }
  //Servicio para eliminar una categoria de la DB
  static async serviceDeleteCategory(req, next) {
    try {
      const { id } = req.params;
      const category = await Category.findByIdAndDelete(id);
      return category;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CategoryService;
