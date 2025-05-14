// blog-backend/controllers/categoryController.js
import Category from '../models/Category.js';

export const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

export const addCategory = async (req, res) => {
  const { name } = req.body;
  const category = new Category({ name });
  await category.save();
  res.json(category);
};

export const deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
