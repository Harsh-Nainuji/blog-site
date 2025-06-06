// blog-backend/routes/categoryRoutes.js
import express from 'express';
import { getCategories, addCategory, deleteCategory } from '../controllers/categoryController.js';

const router = express.Router();

router.get('/', getCategories);
router.post('/', addCategory);
router.delete('/:id', deleteCategory);

export default router;
